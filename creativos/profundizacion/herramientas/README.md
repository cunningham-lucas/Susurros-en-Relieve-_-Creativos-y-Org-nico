# generar-sellos.mjs — vistas previas del sello sin IA

Genera en lote la vista previa del sello ("DE LA BIBLIOTECA DE" arriba + el nombre abajo, en texto curvo) para usar en anuncios. Resuelve la regla central del manual: **la IA nunca escribe el sello** (`../../manual-creativos.md`, sección 5).

| Salida | Para qué |
|---|---|
| `{id}_{NOMBRE}.svg` | Vector editable con la fuente embebida. Se puede abrir en el navegador, Figma o Photopea |
| `{id}_{NOMBRE}.png` (`--png`) | PNG transparente de 2000 × 2000 px para componer encima de escenas (Canva, Photopea) |
| `{id}_{NOMBRE}_relieve.png` (`--relieve`) | Simulación de sello seco sobre papel crema, con luz arriba a la izquierda. **Comparala con una foto macro real antes de usarla** |

Ejemplos generados con la fuente Alike (OFL) y el marcador del libro abierto: `ejemplos/`.

## Instalación (una vez)
```bash
npm i playwright
```
```bash
npx playwright install chromium
```
Descargá una fuente libre, por ejemplo **Alike** (la del hero de la marca, licencia OFL), desde Google Fonts: <https://fonts.google.com/specimen/Alike>.

## Uso
```bash
node generar-sellos.mjs --archivo nombres-ejemplo.txt --fuente Alike-Regular.ttf --id diseno03 --diseno placa-diseno03.svg --salida ./sellos --png --relieve
```

| Opción | Qué hace | Por defecto |
|---|---|---|
| `--nombres "A,B"` / `--archivo f.txt` | Nombres (se pasan a mayúsculas; los de más de 20 caracteres se omiten, igual que en la web) | — |
| `--fuente f.ttf` | Fuente embebida (que tenga licencia libre) | serif del sistema |
| `--diseno f.svg/png` | Dibujo central (la placa del diseño elegido) | libro abierto de ejemplo |
| `--id` | Prefijo del archivo (el código del diseño) | `diseno00` |
| `--color` | Color de la vista previa | `#1A1A1A` |
| `--papel` | Color del papel en `--relieve` | `#F4EEE2` |
| `--luz` | Dirección de la luz en grados (igualala a la de la escena) | `225` (arriba a la izquierda) |
| `--intensidad` | Fuerza del relieve, de 0,4 a 1 | `0.7` |
| `--superior` | Texto de arriba | `DE LA BIBLIOTECA DE` |

## Notas
- **La geometría es una aproximación** del sello de la web: anillo de 470/330 sobre un lienzo de 1000 y textos de 58/64 px que se achican solos con los nombres largos. Cuando el personalizador del tema esté programado, conviene que este script use **la misma función de dibujo** que la web, para que el anuncio y la vista previa de la tienda coincidan al 100 %.
- El relieve se simula con un filtro SVG de iluminación (`feDiffuseLighting`) sobre la silueta. Sirve para escenas y carruseles. Para el "momento de verdad" (el plano cercano del relieve), usá siempre una foto real.
- Un agente de Claude Code puede correrlo (Bash) a partir de una planilla de nombres × diseños. Ver `../07-agentes-implementacion.md`.
