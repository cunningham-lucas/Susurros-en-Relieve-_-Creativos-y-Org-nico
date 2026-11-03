# 07 · Agentes: de la propuesta a archivos que funcionan

Investigación del 03/11/2026. El manual (sección 7) propuso una arquitectura. Este documento la baja a **archivos concretos y probados**:

| Archivo | Qué es | Estado |
|---|---|---|
| `borradores-agentes/skills/marca-susurros/SKILL.md` | Skill de marca: tono, colores, afirmaciones, límites legales, formatos y nombres | Borrador listo para instalar |
| `borradores-agentes/agents/*.md` | 8 subagentes de Claude Code | Borradores listos para instalar |
| `../afirmaciones-activas.md` | Fuente de verdad de lo que se puede afirmar | Plantilla: todo en "NO" hasta confirmar |
| `herramientas/generar-sellos.mjs` | Vistas previas del sello en lote (SVG, PNG y relieve) | **Probado** (ejemplos en `herramientas/ejemplos/`) |
| `herramientas/analizar-resultados.py` | Reporte semanal desde el CSV de Ads Manager, con propuesta de decisión | **Probado** con una exportación de ejemplo |

---

## 1. Instalación (cuando quieras activarlos)
Los subagentes y las skills de Claude Code se leen desde `.claude/agents/` y `.claude/skills/` del repositorio. Están en `borradores-agentes/` para que **no se activen sin tu revisión**. Para activarlos, desde la raíz del repo:
```bash
mkdir -p .claude/agents .claude/skills && cp creativos/profundizacion/borradores-agentes/agents/*.md .claude/agents/ && cp -r creativos/profundizacion/borradores-agentes/skills/marca-susurros .claude/skills/
```
Después, en Claude Code: "usá el agente redactor-copy para el concepto C03", o `/agents` para verlos.

## 2. Flujo semanal con agentes (lunes a viernes)
| Día | Agente | Entrada | Salida | Persona |
|---|---|---|---|---|
| Lunes | `analista-resultados` | CSV de Ads Manager | `resultados/AAAA-SS_reporte.md` | Decide: apagar, iterar o escalar |
| Lunes | `estratega-angulos` | Reporte + `conceptos.csv` | Plan de la semana: 2–4 conceptos y variantes | Aprueba el plan |
| Martes | `redactor-copy`, `guionista-video` | Plan aprobado | Copies H01…, guiones, lista de tomas | Lee en voz alta y corrige |
| Martes | `generador-previews` | `assets/previews.csv` | PNG y SVG del sello | Revisa 1 de cada lote |
| Miércoles | (persona) | Lista de tomas | Grabación y fotos | **Graba** |
| Miércoles–jueves | (persona + Canva/Photopea) | Copies, PNG y escenas | Piezas | **Compone y edita** |
| Jueves | `revisor-qa` | Piezas + briefs | Aprobado o rechazado con motivos | **Firma** |
| Viernes | (persona) | Piezas aprobadas | Anuncios publicados con UTM | **Publica** |
| Mensual | `investigador-voz-cliente`, `investigador-competencia` | Reseñas y capturas | Fichas, ganchos y objeciones | Revisa |

## 3. Por qué este diseño
- **Una sola fuente de verdad** (`afirmaciones-activas.md` + la skill): evita el error más caro, que es una afirmación falsa en un anuncio (art. 11 del DNU 274/2019).
- **Los agentes no publican ni tocan presupuestos.** Meta y TikTok exigen aprobación humana de facto (la etiqueta de IA, las cuentas y los pagos son responsabilidad del anunciante), y la decisión de presupuesto necesita criterio.
- **Código determinista donde la IA falla:** el sello (texto curvo) y las métricas (cuentas) se resuelven con scripts, no con modelos generativos.
- **MCPs de diseño (siguiente paso):** Canva (`https://mcp.canva.com/mcp`) o Figma (`https://mcp.figma.com/mcp`, oficial; escribir en el lienzo requiere un asiento Full) ([Figma Help](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server)) le permitirían a `armador-variantes` llenar plantillas. Conviene sumarlo cuando haya 3 plantillas estables.

## 4. Próximas automatizaciones, por retorno
1. **Ya:** instalar la skill + `redactor-copy` + `guionista-video` (sin dependencias).
2. **Cuando haya diseños reales:** `generador-previews`, reemplazando la geometría por la función del personalizador de la web.
3. **Cuando haya pauta:** `analista-resultados` (exportación manual del CSV), y después el reporte automático los lunes con n8n o Make (manual, 7.3).
4. **Con volumen:** `armador-variantes` por MCP de Canva o Figma, o por la API de Placid o Creatomate.
