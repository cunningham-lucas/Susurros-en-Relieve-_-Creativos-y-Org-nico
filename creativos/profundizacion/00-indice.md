# Profundización de la investigación de creativos — índice

**03/11/2026.** Complementa `../manual-creativos.md` y `../matriz-herramientas.csv` **sin modificarlos**. Donde esta investigación corrige algo del manual, lo dice explícitamente (ver "Correcciones").

## Lo más importante (5 minutos)
1. **Los compradores del referente regalan.** En las reseñas analizadas de TWP, ≈ 58 % dice que fue un regalo, sobre todo para hijas, parejas, sobrinas, nietas y docentes. El momento que más se recuerda es **la reacción de quien lo recibe**. Hacen falta anuncios **para quien regala**, no solo para el lector. → `01`
2. **Las objeciones a desactivar son tres:** plazos de envío, desconfianza ("¿es estafa?, lo vi en Facebook") y armado o uso. Cada una tiene su creativo de respuesta. → `01`
3. **Dos reglas legales nuevas, verificadas en el texto oficial:**
   - **Anuncio con precio** = "PRECIO SIN IMPUESTOS NACIONALES" en letra más chica (Res. SIC 4/2025, "anuncios publicitarios emitidos por cualquier medio"). Cuotas solo con el CFTEA.
   - **Prohibido presentar el producto como "réplica" o imitación** de una marca (art. 15 inc. f del DNU 274/2019), y prohibidos los sorteos condicionados a una compra (art. 14). → `02`
4. **Zonas seguras oficiales de Meta en Reels:** 14 % arriba, **35 % abajo** y 6 % a los costados. El manual decía 25 % abajo. → `02`
5. **El problema del sello tiene una herramienta propia y probada:** `herramientas/generar-sellos.mjs` genera en lote la vista previa con texto curvo, el PNG transparente y un **relieve simulado**, sin IA. → `04`
6. **Diversidad de conceptos > cantidad de variantes:** una matriz de motivación × nivel de conciencia, 6 conceptos iniciales y una biblioteca de 30. → `03`
7. **Cuánto cuesta un test:** una tabla de CPA según el CPM, el CTR y la conversión muestra que **la tienda pesa tanto como el creativo**. Presupuesto mínimo de test ≈ 2–3 × CPA por concepto. → `06`
8. **Creadoras UGC en Argentina:** de ≈ $25.000 a 80.000 por video, +30–50 % por derechos para anuncios. Contrato mínimo, brief y autorizaciones oficiales (código de colaboración en Meta y Spark Ads en TikTok). → `05`
9. **Agentes listos para instalar:** skill de marca + 8 subagentes + un analizador de resultados probado + una plantilla de afirmaciones activas. → `07`

## Documentos
| # | Archivo | Qué resuelve |
|---|---|---|
| 01 | `01-voz-del-cliente-y-competencia.md` | Motivaciones, destinatarios, objeciones y lenguaje real; banco de 15 ganchos propios; cómo investigar anuncios con los límites de acceso; mercado local |
| 02 | `02-legal-y-politicas-verificado.md` | Textos de la Res. 4/2025 y del DNU 274/2019 (arts. 11, 14 y 15); etiqueta de IA en TikTok (orgánico vs. anuncios); Runway, Flow, Nano Banana; autorizaciones de creadores; correcciones al manual |
| 03 | `03-estrategia-creativa.md` | Diversidad (Entity ID); matriz de conceptos; guías oficiales de Meta y TikTok; estrategia de Navidad con fecha de corte; 30 conceptos |
| 04 | `04-produccion-sello-y-relieve.md` | Árbol de decisión del sello; cómo fotografiar el relieve; herramienta propia; composición a mano; referencias por modelo de IA |
| 05 | `05-ugc-creadores-y-organico.md` | Tarifas, perfiles, contrato y brief de creadoras; Trial Reels; señales de Instagram; pilares y ritmo orgánico |
| 06 | `06-medicion-y-presupuesto.md` | Píxel + API de conversiones en Tiendanube; UTMs dinámicos; cálculo de CPA y presupuesto de test; tablero |
| 07 | `07-agentes-implementacion.md` | Instalación de agentes, flujo semanal y prioridades |
| — | `herramientas/` | `generar-sellos.mjs`, `analizar-resultados.py`, ejemplos y README |
| — | `borradores-agentes/` | Skill `marca-susurros` y 8 subagentes |
| — | `../afirmaciones-activas.md` | Qué se puede afirmar hoy (todo en "NO" hasta confirmar) |

## Correcciones al manual v1
Detalle en `02-legal-y-politicas-verificado.md`, sección 4:
- **Zona segura de abajo en 9:16:** 35 % (no 25 %), más 6 % a cada costado.
- **Precio en anuncios:** sumar la leyenda "Precio sin impuestos nacionales", y no poner cuotas sin el CFTEA.
- **Comparativa:** nunca "réplica", "como…" ni "versión de…" (art. 15 inc. f).
- **TikTok y voz TTS:** exenta de etiqueta en orgánico, **pero en anuncios hay que etiquetarla**.
- **Runway Standard:** el uso comercial está confirmado.
- **Flow:** Veo 3.1 Fast cuesta 20 créditos por generación, y hay 50 créditos gratis por día.
- **MCP de Figma:** verificado (servidor remoto oficial).

## Sigue sin verificar
- Fechas de corte de Navidad 2026 de los correos, y los plazos reales del proveedor.
- El umbral de "similitud" de Meta y si existe una métrica visible en Ads Manager.
- Las macros de URL vigentes de TikTok, y en qué plan de Tiendanube está la API de conversiones.
- Si hay competidores locales (revisión manual en Mercado Libre e Instagram).
- El CPM real de la cuenta, y los impuestos sobre la pauta (consultar al contador).
- Las regulaciones de precio tachado (plazo del precio anterior) y la leyenda de impuestos según la condición fiscal (consultar al abogado o al contador).

## Fuentes principales de esta profundización (consultadas el 03/11/2026)
- Res. SIC 4/2025, ficha oficial: https://www.argentina.gob.ar/sites/default/files/exhibicion_de_precios_resolucion_4_2025.pdf
- DNU 274/2019 (copia del texto): https://www.consejosalta.org.ar/wp-content/uploads/DECRETO-274.pdf
- Meta Ads Guide, Reels: https://www.facebook.com/business/ads-guide/update/image/instagram-reels
- Meta Ad Library API: https://www.facebook.com/ads/library/api
- TikTok, Creative best practices: https://ads.tiktok.com/resources/help/article/creative-best-practices
- TikTok, Community Guidelines (IA): https://www.tiktok.com/community-guidelines/en-GB/integrity-authenticity?cgversion=2025H2update
- TikTok, Spark Ads: https://ads.tiktok.com/help/article/spark-ads-creation-guide
- Instagram, anuncios de colaboración: https://help.instagram.com/1168446653551639
- Google Flow, créditos: https://support.google.com/flow/answer/16526234
- Gemini API, generación de imágenes: https://ai.google.dev/gemini-api/docs/image-generation
- Runway, uso comercial: https://help.runwayml.com/hc/en-us/articles/21668707517587-Can-I-use-the-content-I-made-in-Runway-for-commercial-purposes
- Figma, MCP para Claude Code: https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server
- Tiendanube, API de conversiones: https://ayuda.tiendanube.com/pixel-de-facebook/como-activar-la-api-de-conversiones-de-facebook
- Tiendanube, tiempos de Envío Nube: https://ayuda.tiendanube.com/envio-nube/cuales-son-los-tiempos-de-envio-de-envio-nube
- Reseñas de TWP (Loox): https://loox.io/s/iR2U-hq0RC · Trustpilot: https://fi.trustpilot.com/review/thewhisperingpages.com

El resto de las fuentes (secundarias) está enlazado en cada documento, al lado del dato que sostiene.
