#!/usr/bin/env python3
"""analizar-resultados.py — Reporte semanal de creativos a partir de la exportación CSV de Meta Ads Manager.

Usa la convención de nombres del manual (10.7):  C07 | EST | REGALO | H02 | V1 | ...
y aplica las reglas de decisión del manual (8.3) como PUNTO DE PARTIDA.

Uso:
  python3 analizar-resultados.py export.csv --cpa-objetivo 30000 > reporte.md

Columnas: se detectan por nombre en castellano o inglés (Ads Manager cambia según el idioma).
Si alguna no aparece, se informa y esa métrica queda vacía. Solo usa la biblioteca estándar.
"""
import argparse
import csv
import re
import sys
from collections import defaultdict

COLUMNAS = {
    "nombre": ["Nombre del anuncio", "Ad name"],
    "gasto": ["Importe gastado (ARS)", "Importe gastado", "Amount spent (ARS)", "Amount spent"],
    "impresiones": ["Impresiones", "Impressions"],
    "rep3s": ["Reproducciones de video de 3 segundos", "Reproducciones de 3 segundos", "3-second video plays"],
    "thruplays": ["ThruPlays", "Reproducciones completas (ThruPlay)"],
    "clics": ["Clics en el enlace", "Link clicks"],
    "carrito": ["Artículos agregados al carrito", "Agregados al carrito", "Adds to cart"],
    "compras": ["Compras", "Purchases"],
    "valor": ["Valor de conversión de compras", "Purchases conversion value"],
}


def numero(v):
    if v is None:
        return 0.0
    v = str(v).strip().replace("$", "").replace(" ", "")
    if not v or v == "-":
        return 0.0
    # formato 1.234,56 o 1,234.56
    if "," in v and "." in v:
        v = v.replace(".", "").replace(",", ".") if v.rfind(",") > v.rfind(".") else v.replace(",", "")
    elif re.fullmatch(r"-?\d{1,3}(\.\d{3})+", v):   # 95.000 -> miles con punto
        v = v.replace(".", "")
    elif re.fullmatch(r"-?\d{1,3}(,\d{3})+", v):    # 95,000 -> miles con coma
        v = v.replace(",", "")
    elif "," in v:
        v = v.replace(",", ".")
    try:
        return float(v)
    except ValueError:
        return 0.0


def m(x):
    """Miles con punto: 1234567 -> 1.234.567"""
    return f"{x:,.0f}".replace(",", ".")


def pct(x, dec=0):
    """Porcentaje con coma decimal: 0.0123 -> 1,23 %"""
    return f"{x * 100:.{dec}f}".replace(".", ",") + " %"


def mapear(encabezados):
    mapa, faltan = {}, []
    for clave, candidatos in COLUMNAS.items():
        col = next((c for c in candidatos if c in encabezados), None)
        if col is None:
            # coincidencia parcial (Ads Manager agrega sufijos como "(ARS)")
            col = next((h for h in encabezados for c in candidatos if h.lower().startswith(c.lower())), None)
        if col:
            mapa[clave] = col
        else:
            faltan.append(clave)
    return mapa, faltan


def partes(nombre):
    p = [x.strip() for x in nombre.split("|")]
    return {
        "concepto": p[0] if len(p) > 0 else "?",
        "formato": p[1] if len(p) > 1 else "?",
        "angulo": p[2] if len(p) > 2 else "?",
        "gancho": p[3] if len(p) > 3 else "?",
    }


def decidir(d, cpa_obj):
    gasto, compras = d["gasto"], d["compras"]
    hook = d["rep3s"] / d["impr_video"] if d["impr_video"] else None
    cpa = gasto / compras if compras else None
    if compras >= 3 and cpa is not None and cpa <= cpa_obj:
        return "ESCALAR", "CPA ≤ objetivo con ≥ 3 compras"
    if compras == 0 and gasto >= 2 * cpa_obj:
        if d["carrito"] >= 3:
            return "REVISAR TIENDA", "gastó ≥ 2× CPA sin compras pero con carritos: revisar ficha, precio o plazos"
        return "APAGAR", "gastó ≥ 2× CPA sin compras"
    if cpa is not None and gasto >= 3 * cpa_obj and cpa > 1.5 * cpa_obj:
        return "APAGAR", "CPA > 50 % sobre el objetivo tras gastar 3× CPA"
    if compras == 0 and gasto >= cpa_obj and hook is not None and hook < 0.20:
        return "APAGAR", "gastó 1× CPA, hook rate < 20 % y 0 compras"
    if hook is not None and hook >= 0.30 and (cpa is None or cpa > cpa_obj):
        return "ITERAR", "buen gancho; probar otro cuerpo, oferta o landing"
    return "ESPERAR", "datos insuficientes"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("csv")
    ap.add_argument("--cpa-objetivo", type=float, required=True)
    a = ap.parse_args()

    with open(a.csv, encoding="utf-8-sig", newline="") as f:
        lector = csv.DictReader(f)
        mapa, faltan = mapear(lector.fieldnames or [])
        if "nombre" not in mapa:
            sys.exit("No encuentro la columna 'Nombre del anuncio' / 'Ad name'.")
        anuncios = defaultdict(lambda: defaultdict(float))
        for fila in lector:
            nombre = fila[mapa["nombre"]].strip()
            if not nombre:
                continue
            for clave, col in mapa.items():
                if clave != "nombre":
                    anuncios[nombre][clave] += numero(fila.get(col))
            if "rep3s" in mapa and numero(fila.get(mapa["rep3s"])) > 0:
                anuncios[nombre]["impr_video"] += numero(fila.get(mapa["impresiones"])) if "impresiones" in mapa else 0

    print("# Reporte de creativos\n")
    print(f"CPA objetivo: ${m(a.cpa_objetivo)}")
    if faltan:
        print(f"\n> Columnas no encontradas en la exportación: {', '.join(faltan)}. Agregalas en Ads Manager (Columnas → Personalizar).")
    print("\n## Por anuncio\n")
    print("| Anuncio | Gasto | Impr. | Hook rate | CTR | Carrito | Compras | CPA | ROAS | Decisión | Motivo |")
    print("|---|---|---|---|---|---|---|---|---|---|---|")
    por_dim = {k: defaultdict(lambda: defaultdict(float)) for k in ("concepto", "formato", "angulo", "gancho")}
    for nombre, d in sorted(anuncios.items(), key=lambda x: -x[1]["gasto"]):
        hook = pct(d["rep3s"] / d["impr_video"]) if d["impr_video"] else "—"
        ctr = pct(d["clics"] / d["impresiones"], 2) if d["impresiones"] else "—"
        cpa = "$" + m(d["gasto"] / d["compras"]) if d["compras"] else "—"
        roas = f"{d['valor'] / d['gasto']:.2f}".replace(".", ",") if d["gasto"] and d["valor"] else "—"
        dec, mot = decidir(d, a.cpa_objetivo)
        print(f"| {nombre.replace('|', chr(92) + '|')} | ${m(d['gasto'])} | {m(d['impresiones'])} | {hook} | {ctr} | {d['carrito']:.0f} | {d['compras']:.0f} | {cpa} | {roas} | **{dec}** | {mot} |")
        for dim, valor in partes(nombre).items():
            for k in ("gasto", "impresiones", "impr_video", "clics", "compras", "valor", "rep3s"):
                por_dim[dim][valor][k] += d[k]

    for dim, grupos in por_dim.items():
        print(f"\n## Por {dim}\n")
        print("| Valor | Gasto | Hook rate | CTR | Compras | CPA |")
        print("|---|---|---|---|---|---|")
        for valor, d in sorted(grupos.items(), key=lambda x: -x[1]["gasto"]):
            hook = pct(d["rep3s"] / d["impr_video"]) if d["impr_video"] else "—"
            ctr = pct(d["clics"] / d["impresiones"], 2) if d["impresiones"] else "—"
            cpa = "$" + m(d["gasto"] / d["compras"]) if d["compras"] else "—"
            print(f"| {valor} | ${m(d['gasto'])} | {hook} | {ctr} | {d['compras']:.0f} | {cpa} |")
    print("\n> Las decisiones son una propuesta según el manual (8.3). La decisión final es humana.")


if __name__ == "__main__":
    main()
