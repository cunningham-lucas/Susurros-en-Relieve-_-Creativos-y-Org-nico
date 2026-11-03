# Manual de creativos — Susurros en Relieve

**Versión 1 · investigación del 03/11/2026.** Para producir anuncios estáticos, carruseles y videos para Meta (Instagram y Facebook) y TikTok, con IA, siendo una sola persona y con presupuesto chico.

**Cómo leerlo:** si tenés 10 minutos, leé el **resumen ejecutivo (1)** y el **plan de acción (9)**. Cuando te sentés a producir, seguí el **proceso A (3)** o **B (4)** paso a paso y usá las **plantillas (10)**. Antes de publicar, pasá siempre el **checklist de calidad (10.6)**.

**Fuentes y marcas:** cada dato lleva su fuente; la lista completa con links está en la **sección 11**. Lo que no pude confirmar en una fuente primaria está marcado **[No verificado]**. Muchas páginas de precios oficiales no se pudieron leer (cargan con JavaScript o bloquean lectores automáticos). En esos casos usé comparadores de precios de 2026 y lo marqué como "según agregadores": **confirmá el precio en la pantalla de pago antes de suscribirte.**

**Alineación con la marca:** se basa en `relevamiento/` (propuesta de valor, manual de TWP y tokens): verde `#16423C` / `#366251`, crema `#FEFDF8`, acento de botón `#00A356`. Tipografías: Alike (titulares emotivos), Passion One (titulares de impacto) y Poppins (cuerpo y textos en pantalla). Tono emotivo y nostálgico (biblioteca, legado, regalo), en castellano rioplatense. Lo que dice `relevamiento/LEEME_2.md` sigue vigente: **no se copian textos, fotos, diseños de sello, nombre ni logo de TWP o MBE.**

---

## Índice

1. [Resumen ejecutivo](#1-resumen-ejecutivo)
2. [Restricciones legales y de políticas](#2-restricciones-legales-y-de-políticas)
3. [Proceso A — Estáticos y carrusel](#3-proceso-a--estáticos-y-carrusel)
4. [Proceso B — Video y miniclips](#4-proceso-b--video-y-miniclips)
5. [Cómo resolver el texto del sello y el relieve con IA](#5-cómo-resolver-el-texto-del-sello-y-el-relieve-con-ia)
6. [Stacks recomendados y costos](#6-stacks-recomendados-y-costos)
7. [Arquitectura de agentes y automatizaciones](#7-arquitectura-de-agentes-y-automatizaciones)
8. [Testeo, métricas y ritmo de producción](#8-testeo-métricas-y-ritmo-de-producción)
9. [Plan de acción](#9-plan-de-acción)
10. [Anexos: plantillas y prompts base](#10-anexos-plantillas-y-prompts-base)
11. [Fuentes y lista de lo no verificado](#11-fuentes-y-lista-de-lo-no-verificado)

---

## 1. Resumen ejecutivo

### La idea en 5 líneas
1. **La IA hace la escena; el producto y el sello son siempre reales.** Ninguna IA dibuja el texto del sello: se compone encima la foto real del relieve o la vista previa SVG de la web (sección 5). Así se evita el texto deformado y el anuncio no promete algo que el producto no hace.
2. **Los competidores son referencia, no materia prima.** De sus anuncios se toman el gancho, la estructura, el ritmo y el ángulo. No se usan sus videos, fotos, textos ni diseños (sección 2.1).
3. **El volumen gana, pero con conceptos distintos.** Una marca chica debería subir 2–4 conceptos nuevos por semana y sumar iteraciones de los que ganen. Meta reparte mejor el presupuesto cuando los anuncios son realmente distintos entre sí (sección 8).
4. **Un proceso, dos carriles.** Estáticos y carruseles (proceso A) salen en 30–60 minutos cada uno. Los videos (proceso B) salen en 1–3 horas cada uno, armados sobre clips reales del proveedor y tomas propias con celular.
5. **Los agentes preparan y la persona decide.** Claude hace la investigación, los ángulos, el copy, los guiones, los prompts, las vistas previas del sello en lote, el control de calidad y el reporte semanal. Vos grabás, elegís, aprobás y publicás.

### Stack recomendado para arrancar esta semana (≈ US$74/mes ≈ $140.000/mes)
| Para qué | Herramienta | Costo aprox. |
|---|---|---|
| Investigación, ángulos, copy, guiones, prompts, agentes | **Claude Pro** (incluye Claude Code) | US$20 |
| Escenas de imagen + B-roll de video con referencia del producto | **Google AI Pro**: Nano Banana Pro en Gemini y Veo 3.1 en Flow, con 1.000 créditos | US$19,99 |
| Composición, plantillas, tamaños, carga por lote, conector MCP | **Canva Pro** | ≈ US$15 [No verificado en AR; Canva cobra en pesos] |
| Quitar fondo, sombras, retoque y lotes de fotos de producto | **Photoroom Pro** | ≈ US$12,99 (según agregadores) |
| Voz en off (opcional; mejor tu voz real) | **ElevenLabs Starter** | US$6 |
| Edición de video y subtítulos | **CapCut** gratis (solo con recursos marcados para uso comercial) | US$0 |
| Música | **Meta Sound Collection** (Meta) y **Commercial Music Library** (TikTok) | US$0 |
| Investigación de competencia | **Meta Ad Library** y **TikTok Creative Center** | US$0 |
| Generación dentro de las plataformas | **Advantage+ creative** (Meta) y **Symphony** (TikTok) | US$0 |

Conversión: dólar oficial BNA a $1.565 (02/11/2026) + IVA 21 % sobre servicios digitales ≈ **$1.894 por dólar**, redondeado a $1.900. Sumá la percepción de IIBB de tu provincia si corresponde. Sobre la percepción del 30 % las fuentes se contradicen (ver 6.4).

### Primer entregable
**10 estáticos + 5 videos para el primer test de Navidad.** Arranca cuando la tienda esté publicada con precio y píxel. Mientras tanto, la semana 1 se usa para dejar listo el kit de assets, los permisos y las plantillas (sección 9).

> **Ojo con el estado del proyecto:** según `relevamiento/LEEME_2.md` (29/10/2026), la tienda está en construcción. Los productos están ocultos y sin precio, y todavía no hay proveedor elegido ni nombre final de diseños. Sin precio y sin producto real no se puede pautar con honestidad. Por eso el plan arranca produciendo assets y orgánico, y el primer test pago se hace cuando la tienda esté publicada.

---

## 2. Restricciones legales y de políticas

> No soy abogado. Lo marcado con ⚖️ conviene validarlo con un abogado antes de lanzar.

### 2.1 Anuncios y clips de competidores (TWP, MBE y otros)

**Regla por defecto: se analizan, no se usan.**

- **Meta** prohíbe anuncios con contenido que infrinja la propiedad intelectual de terceros (derecho de autor, marca u otros). Puede rechazarlos por denuncia del titular o porque detecta señales de infracción. Los titulares pueden denunciar desde el Centro de Ayuda de PI o con Brand Rights Protection ([Meta, Copyrights and Trademarks](https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/copyright-and-trademarks)). Las infracciones repetidas pueden terminar en restricciones de la cuenta publicitaria. Si una cuenta nueva acumula rechazos, es un riesgo real para un negocio que depende de Meta.
- **TikTok** tampoco permite usar el material de otra persona sin permiso, y menos la imagen de una figura pública como falso respaldo ([TikTok Ads, Misleading and false content](https://ads.tiktok.com/help/article/tiktok-ads-policy-misleading-and-false-content), actualizado en abril de 2026).
- ⚖️ **En Argentina:** las fotos, los videos y los textos están protegidos por la Ley 11.723 de propiedad intelectual, y el nombre y el logo, por la Ley 22.362 de marcas. Que un anuncio sea público en la Ad Library no lo vuelve libre.

**Qué SÍ se puede tomar de un anuncio ajeno (son ideas, no expresión protegida):**
- El tipo de **gancho** (por ejemplo, "POV: le regalás esto a tu amiga lectora").
- La **estructura** (gancho → demo → prueba → oferta → CTA) y la **duración**.
- El **ritmo** de los cortes, el **ángulo** (regalo, legado, sin tinta) y el **formato** (UGC, carrusel, nosotros vs. otros).
- El **tipo de oferta** (stickers de regalo, pack regalo), siempre con tus condiciones reales.

**Qué NO se usa nunca:** sus videos o fotos (ni recortados, espejados, acelerados o "transformados" con IA). Tampoco sus textos literales, sus diseños de sello, su nombre ni su logo, ni capturas de sus reseñas.

**Comparativas "nosotros vs. otros":** compará contra **métodos** (sello de tinta, etiqueta adhesiva, escribir el nombre con birome), no contra una marca con nombre propio. ⚖️ El DNU 274/2019 regula la publicidad comparativa; confirmá con un abogado si en algún momento querés nombrar a un competidor.

**Vías legítimas para usar material de terceros, con sus condiciones:**
| Vía | Condición | Riesgo |
|---|---|---|
| **Licencia o permiso escrito del titular** | Un email o contrato que diga qué material, en qué canales (incluidos anuncios pagos), por cuánto tiempo y en qué territorio | Bajo si está por escrito. En la práctica, un competidor directo no lo va a dar |
| **Contenido de un proveedor mayorista compartido con revendedores** | Que el proveedor **sea el dueño** del material y lo autorice por escrito, incluidos anuncios pagos (ver 2.2) | Medio. Otros revendedores van a usar el mismo video: hay saturación, comparación de precios y anuncios que "parecen de otro". Si el video muestra el logo o un diseño de sello de otra marca, no sirve |
| **UGC de creadores con licencia** | Contrato con el creador: uso en anuncios, plazo, canales y, si corresponde, autorización para pautar desde su cuenta (Spark Ads en TikTok, contenido de marca en Meta) | Bajo con contrato |
| **Fotos y videos de clientes reales** | Consentimiento escrito para usarlos en anuncios. ⚖️ Derecho a la imagen, art. 53 del Código Civil y Comercial | Bajo con consentimiento |

### 2.2 Videos y fotos de proveedores

**El que fabrica el producto no siempre es el dueño de las fotos**, y aunque las sea, no siempre te autoriza a usarlas en anuncios pagos. Una guía sobre material de proveedores de Alibaba recomienda no asumir el permiso: pedirlo por escrito, cumplir sus condiciones y guardar los chats y emails como prueba ([Haverford DS-CRIM, Using Alibaba Supplier Images](https://ds-crim.haverford.edu/blog/using-alibaba-supplier-images-a)).

**Cómo confirmarlo, en 4 pasos:**
1. Pedí el material **en archivo original** (no capturas de una publicación): videos sin marca de agua y en la mejor resolución disponible.
2. Pedí la autorización por escrito con el **texto modelo del anexo 10.8**.
3. Revisá que el material **no muestre marcas ajenas**: logos, diseños de sello de otra tienda o el packaging de otra marca. Si aparecen, se descarta o se recorta hasta que no se vean.
4. Guardá la autorización en `creativos/permisos/AAAA-MM-DD_proveedor.pdf` y anotá en la planilla de assets qué archivos cubre.

**Qué tiene que decir la autorización:**
- Que el proveedor es el titular de los derechos o está autorizado a cederlos.
- Que te autoriza a **editar** el material (cortar, subtitular, agregar voz y música, combinarlo con otras tomas).
- Que te autoriza a usarlo en **tienda online, redes y anuncios pagos** en Meta, TikTok y Google, sin límite de tiempo, o con el plazo que acuerden.
- Que no hay personas identificables sin consentimiento. Si aparecen manos o caras, que el proveedor tenga ese consentimiento.
- Que el uso no es exclusivo, y si otros revendedores también lo tienen.

**Mejor todavía:** grabá tus propias tomas clave con el producto real, sobre todo el gesto de embosar y el relieve en macro con luz rasante. Ese es el "momento de verdad" de cada anuncio, y si es tuyo no depende de nadie.

### 2.3 Contenido hecho o editado con IA

**Meta**
- Las imágenes de anuncios **creadas o editadas de forma significativa** con la IA de Meta (generación de fondo, generación de imagen) **o con herramientas de terceros** llevan la etiqueta **"Información de IA" (AI info)**. Aparece en "Acerca de este anuncio" y a veces junto a "Publicidad". Los cambios menores, como redimensionar o corregir color, no la llevan. El despliegue es gradual ([Meta, cómo se identifican y etiquetan las imágenes con IA en anuncios](https://www.meta.com/help/artificial-intelligence/355108217670024/); [Meta Newsroom, feb. 2025](https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/)).
- La obligación explícita de **declarar** el uso de IA es para anuncios de temas sociales, electorales o políticos (misma página de Meta). Varios blogs de 2026 dicen que Meta detecta metadatos C2PA de herramientas de terceros y etiqueta solo. Se contradicen entre sí sobre si ahora la declaración es obligatoria para todos los anuncios [No verificado en fuente oficial] ([Commonthread](https://commonthreadco.com/blogs/coachs-corner/meta-ai-ad-labels-mandatory-disclosure-ecommerce-2026), [Cinerads](https://www.cinerads.com/blog/ai-ugc-facebook-ad-policy)).
- **Criterio práctico:** no intentes esconder la IA (no borres metadatos). Si la etiqueta aparece sola, está bien. Lo que importa es que el anuncio no engañe.

**TikTok** (política de anuncios actualizada en abril de 2026)
- El contenido generado o modificado **significativamente** con IA está permitido **si se etiqueta**: con la etiqueta AIGC o con un aviso propio claro (texto, marca de agua o sticker). "Significativo" incluye imágenes, video o **audio completamente generados por IA**. Ajustar luz o color, o quitar el fondo, no cuenta. Sin la etiqueta, el anuncio se rechaza o se restringe ([TikTok Ads, Misleading and false content](https://ads.tiktok.com/help/article/tiktok-ads-policy-misleading-and-false-content)).
- En Ads Manager hay un interruptor: **"This ad contains AI-generated content"**. Una vez enviado no se cambia salvo que cambies el material, y al duplicar la campaña se resetea. Los **Spark Ads** siguen las reglas de etiquetado orgánico de las Normas de la Comunidad ([TikTok, About ad disclaimers](https://ads.tiktok.com/help/article/about-ad-disclaimers-in-tiktok-ads-manager)).
- Un blog dice que la voz sintética no hace falta etiquetarla si no es la clonación de una persona real ([Cinerads](https://www.cinerads.com/blog/tiktok-ai-content-policy)). La política oficial habla de "audio completamente generado". **Usá el criterio conservador:** voz de ElevenLabs = interruptor de IA activado.
- TikTok también prohíbe los **antes/después** que den una impresión falsa o exagerada, y pide evidencia para las afirmaciones comparativas (misma página).

**Avatares, voces sintéticas y testimonios: qué sí y qué no**
| Uso | ¿Se puede? | Condición |
|---|---|---|
| Escena o B-roll generado con IA (biblioteca, mesa de lectura, papel de regalo) | Sí | Etiquetar en TikTok; aceptar la etiqueta de Meta |
| Voz en off sintética que **presenta** el producto ("Tu biblioteca, con tu nombre...") | Sí | Etiquetar. No hacerla pasar por una clienta |
| Avatar de IA que **presenta** como "vocero de la marca" | Con cuidado | Etiquetar. Que no diga "lo compré", "a mi mamá le encantó" ni nada que implique una experiencia real |
| Avatar o voz de IA que dice ser **clienta** ("lo compré y me cambió la biblioteca") | **No** | Es un testimonio falso, aunque lleve la etiqueta de IA. En EE. UU. la FTC prohíbe testimonios generados por IA que inventen la identidad o la experiencia del reseñante (regla vigente desde el 21/10/2024) ([Coblentz Law](https://www.coblentzlaw.com/news/ai-influencers-and-liability-what-marketing-agencies-need-to-know-before-deploying-ai-tools-2/); [Makeinfluence](https://www.makeinfluence.com/en/academy/ai-generated-synthetic-ugc-ads-when-a-brand-uses-an-ai-actor-instead-of-a-real-creator)). ⚖️ En Argentina, el art. 11 del DNU 274/2019 prohíbe la publicidad que induzca a error |
| Reseña real de una clienta leída por una voz de IA o mostrada en pantalla | Sí | Con su permiso escrito, texto literal, sin inventar ni "mejorar", y con la etiqueta de IA si hay voz sintética |
| Cara o voz de una persona famosa | **No** | TikTok y Meta lo prohíben sin permiso ([TikTok Ads](https://ads.tiktok.com/help/article/tiktok-ads-policy-misleading-and-false-content)) |

### 2.4 Ley argentina (cifras, reseñas, % OFF, precios tachados)

- ⚖️ **Ley 24.240 de Defensa del Consumidor:** lo que se publicita obliga al oferente, y la información tiene que ser cierta y clara (arts. 4, 7 y 8).
- ⚖️ **DNU 274/2019 de Lealtad Comercial:** el art. 11 define como engañosa toda publicidad que, por inexactitudes u ocultamientos, pueda inducir a error sobre el precio o las cualidades del producto ([Defensa del Consumidor CABA](https://www.buenosaires.gob.ar/defensaconsumidor/lealtad-comercial-0)). Lo reglamenta la Resolución SCI 241/2020 ([Marval O'Farrell Mairal](https://www.marval.com/publicacion/nueva-reglamentacion-del-regimen-sobre-lealtad-comercial-13776)).

**Reglas operativas (ya decididas en `propuesta-de-valor-replica-tiendanube.md`, sección 7):**
| Elemento del anuncio | Regla |
|---|---|
| "Más de [N] vendidos", "[N] reseñas", "4,9 ★" | Solo con el dato real y comprobable del día. Si todavía no hay ventas, **no se usa** |
| Reseñas y testimonios | Solo de clientas reales, con permiso escrito, textuales (se puede recortar sin cambiar el sentido) |
| "% OFF" y precio tachado | Solo si hubo un **precio anterior real** cobrado. ⚖️ No encontré una norma con plazo mínimo para el precio anterior, ni el formato exacto en que tiene que mostrarse: consultalo con un abogado |
| "Envío gratis", "Garantía de 90 días", "Stickers de regalo" | Solo si están activos en la tienda con esas condiciones. Si hay condiciones (monto mínimo, zonas), tienen que figurar en el anuncio o en la landing |
| Precio en el anuncio | En pesos, final, igual al de la tienda el día que corre el anuncio |
| Imagen del producto | Tiene que representar lo que llega. Si la escena es ilustrativa (generada con IA o compuesta), el sello y el aparato tienen que ser fieles al real (sección 5). ⚖️ Si un render se aleja del producto real, conviene agregar "Imagen ilustrativa" |
| Urgencia ("últimas unidades", "termina hoy") | Solo si es cierta |

---

## 3. Proceso A — Estáticos y carrusel

### 3.1 Formatos que funcionan hoy, adaptados al embosador

Las fuentes de 2026 no se ponen de acuerdo sobre si rinde más el estático o el video. Hay datos de proveedores que van de "los estáticos son menos del 15 % de los mejores" a "los estáticos generan el 60–70 % de las conversiones". La conclusión común es usar las dos cosas: estáticos para respuesta directa y retargeting, y video para alcance. La proporción la decide tu propia cuenta ([Segwise, ratio estático/video sobre 67.000 anuncios](https://segwise.ai/blog/static-video-ratio-meta-ads); [Admetrics, 5 formatos estáticos que superan al video](https://www.admetrics.io/post/five-static-ad-formats-outperforming-video-in-2026); [Trendtrack](https://www.trendtrack.io/blog-post/static-ads-examples)). Del carrusel, varias guías coinciden en que funciona cuando cada tarjeta tiene un motivo para estar y el orden de las tarjetas cuenta algo ([Segwise, estrategia creativa e-commerce 2026](https://segwise.ai/blog/meta-creative-strategy-ecommerce-2026)).

| Formato | Para qué etapa | Cómo se ve con nuestro producto | Ojo |
|---|---|---|---|
| **Imagen de producto hero** | Frío / retargeting | Embosador sobre madera clara + libro abierto con el relieve real en macro + "Tu biblioteca, con tu nombre. Para siempre." | El relieve tiene que verse: luz rasante |
| **Regalo por fecha** | Frío, fechas clave | Pack regalo envuelto + tarjeta "Para Lu, que vive entre libros" + "El regalo para quien lee" | Fechas reales de entrega |
| **Beneficios / infografía** | Frío | 4 íconos: sin tinta · cuida las hojas · dura toda la vida · tu diseño | Solo atributos confirmados por el proveedor ([Material real]) |
| **Nosotros vs. otros métodos** | Tibio | Tabla: embosador vs. sello de tinta vs. etiqueta adhesiva (mancha / se despega / dura) | Comparar métodos, no marcas |
| **Antes/después** | Tibio | Página en blanco → página con "DE LA BIBLIOTECA DE ANA" en relieve | Tiene que ser una foto real. TikTok prohíbe los antes/después engañosos |
| **Testimonio en imagen** | Tibio / retargeting | Foto real de la clienta + cita textual + estrellas reales | Solo con reseñas reales y permiso |
| **UGC estático** | Frío | Foto de celular "sin producir": mano embosando en la cama, con mate | Real o claramente ilustrativa; nunca simular una clienta |
| **"Notas" o capturas** | Frío | Captura tipo app de notas: "Regalos para mi hermana lectora: ✅ embosador con su nombre" | No simular chats ni reseñas de personas reales |
| **Oferta / pack** | Retargeting | Pack regalo con los ítems que incluye y el precio final en pesos | Precio real; tachado solo con precio anterior real |
| **Carrusel "cómo se usa" (4 tarjetas)** | Tibio | 1. Elegís diseño y nombre → 2. Apoyás → 3. Presionás → 4. Relieve para siempre | La tarjeta 4 es foto real |
| **Carrusel de diseños** | Tibio | Una tarjeta por diseño de sello (los 12–16 propios) con el mismo nombre de ejemplo | Vistas previas reales de la web |
| **Carrusel "personalizado para…"** | Frío | Tarjeta por perfil: "para la abuela que presta libros", "para el que subraya", "para la seño" | Gran ángulo para fin de año escolar |

**TikTok:** el formato carrusel de imágenes existe como anuncio en Ads Manager, y Smart+ Catalog lo arma solo ([TikTok, About Carousel Ads](https://ads.tiktok.com/help/article/carousel-ads)). Las cifras de "el carrusel rinde X % más que el video" vienen de proveedores y son de contenido orgánico, no de anuncios ([Segwise, tipos de creativo en TikTok 2026](https://segwise.ai/blog/latest-tiktok-ad-creative-types-2026.md)). Probalo en orgánico primero.

### 3.2 Paso a paso

> Tiempos estimados para una persona sin experiencia que ya tiene las plantillas armadas. La primera vez, duplicalos.

**A1. Investigación de competencia**
- **Objetivo:** juntar entre 15 y 20 anuncios activos del rubro (embosadores, ex libris, regalos para lectores) y entender qué ganchos y ofertas se repiten.
- **Entrada:** Meta Ad Library (buscar "embosser", "book embosser", "ex libris", "sello seco", "embosador"; país: Todos y Argentina), TikTok Creative Center (Top Ads: categoría regalos y hogar) y la lista de competidores.
- **Salida:** `creativos/competencia/AAAA-MM-DD_fichas.md`, con una ficha por anuncio (plantilla 10.2) y un resumen de patrones.
- **Herramientas:** principal **Meta Ad Library** (gratis). Alternativas: **TikTok Creative Center** (gratis); **Foreplay** para guardar referencias (US$59/mes según agregadores); **Atria** (US$159/mes según agregadores).
- **Agente/IA:** el agente `investigador-competencia` (Claude) completa las fichas a partir de capturas, links y transcripciones que le pases. **La persona** elige qué anuncios vale la pena analizar.
- **Tiempo:** 60–90 min la primera vez; 30 min por semana después.
- **Errores comunes:** analizar anuncios que llevan 2 días activos (todavía no prueban nada: priorizá los que llevan semanas y tienen varias versiones); copiar la ejecución en vez del principio; no mirar la landing a la que llevan.
- **Tip:** en la Ad Library un anuncio activo hace semanas, y con varias variantes del mismo concepto, es la mejor señal pública de que funciona. La biblioteca no muestra gasto ni archivo histórico de anuncios comerciales fuera de la UE: solo lo que está activo ([Coinis, glosario Meta Ad Library](https://coinis.com/glossary/meta-ad-library); [Ryze](https://get-ryze.ai/blog/meta-ads-library)).

**A2. Ángulos y mensajes**
- **Objetivo:** definir 4–6 ángulos para testear y bajar cada uno a una promesa concreta.
- **Entrada:** las fichas de A1 y `relevamiento/propuesta-de-valor-replica-tiendanube.md` (promesas: personalización, sin tinta, cuida las hojas, dura toda la vida, legado, regalo, compra sin riesgo).
- **Salida:** matriz de ángulo × público × prueba × formato. Arrancá con estos 6:
  1. **Regalo para quien lee** ("Ya no sabés qué regalarle a tu amiga lectora").
  2. **Legado** ("Tus libros van a decir de quién fueron. Dentro de 50 años también").
  3. **Mi biblioteca, mi nombre** (identidad, orgullo lector, booktok).
  4. **Sin tinta / cuida las hojas** (lo racional; contra el sello de tinta).
  5. **Prestar libros** ("Para que tus libros vuelvan").
  6. **Fin de año para la seño o el profe** (fechas: diciembre y el 11/09).
- **Herramientas:** **Claude** (principal); ChatGPT o Gemini como alternativa.
- **Agente/IA:** `estratega-angulos`. **La persona** elige los 3–4 de la primera tanda.
- **Tiempo:** 30 min.
- **Errores comunes:** ángulos que son lo mismo con otras palabras (para Meta cuentan como el mismo concepto); prometer atributos sin confirmar con el proveedor ("acero", "de por vida").

**A3. Copy**
- **Objetivo:** escribir el texto **en la imagen** (5–8 palabras), el **texto principal** (primary text, de 1 a 3 líneas) y el **título** (headline) para cada ángulo, en 3 variantes.
- **Entrada:** la matriz de A2 y la lista de afirmaciones permitidas (ver 2.4).
- **Salida:** una tabla de copies por ángulo con su código (H01, H02…).
- **Herramientas:** **Claude** con la skill de marca (sección 7) y el prompt 10.5.1.
- **Agente/IA:** `redactor-copy`. **La persona** revisa el tono rioplatense y tacha lo que suene a traducción.
- **Tiempo:** 20–30 min.
- **Errores comunes:** demasiado texto en la imagen; usar "% OFF" o "[N] vendidos" sin datos reales; mezclar el voseo con el "tú".

**A4. Brief visual**
- **Objetivo:** definir qué va en cada pieza antes de generar nada.
- **Entrada:** el copy de A3 y los formatos de 3.1.
- **Salida:** un brief por pieza (plantilla 10.1): formato, tamaño, escena, producto (qué foto real va), dónde va el sello, texto en pantalla, paleta y CTA.
- **Herramientas:** Claude, que llena la plantilla.
- **Agente/IA:** `director-arte-prompts`, que además devuelve los prompts de A6. **La persona** aprueba.
- **Tiempo:** 10 min por pieza.
- **Errores comunes:** no reservar un espacio limpio para el sello en la escena (después no hay dónde ponerlo); escenas tan recargadas que el producto no se lee en el celular.

**A5. Kit de assets reales (se hace una vez y se mantiene)**
- **Objetivo:** tener los "ingredientes de verdad" que la IA nunca inventa.
- **Salida:** carpeta `creativos/assets/` con:
  - `producto/`: el embosador de cada color recortado en PNG transparente (3 ángulos), el estuche, los stickers y el pack regalo.
  - `relieve/`: macros reales del relieve con luz rasante, en papel blanco y crema, con 3–4 nombres de ejemplo.
  - `sellos-svg/`: la vista previa de cada diseño exportada en SVG o PNG de 2000 px, con "DE LA BIBLIOTECA DE" y un nombre de ejemplo.
  - `marca/`: logos (`logo_04`, `logo_07` y `logo_08` del repo principal), paleta y tipografías.
- **Herramientas:** **Photoroom** (quitar fondo, sombras, retoque y lotes); alternativas: **Canva Pro** (quitar fondo) o **Claid** (créditos). Para el SVG, el script del personalizador de la web.
- **Agente/IA:** `generador-previews` genera las vistas previas en lote (sección 5.3). **La persona** hace las fotos con el producto real.
- **Tiempo:** 3–4 h la primera vez.
- **Errores comunes:** macros con luz frontal (el relieve desaparece); fondos recortados con bordes sucios; usar el diseño de sello de otra marca como ejemplo.

**A6. Generación o edición de escenas con IA**
- **Objetivo:** crear el ambiente (biblioteca, mesa de lectura, regalo, manos) con el producto real como referencia y un **hueco limpio** donde va el sello.
- **Entrada:** el brief y el prompt de A4, más la foto recortada del producto como imagen de referencia.
- **Salida:** 3–4 escenas por brief, de las que elegís 1–2.
- **Herramientas:**
  - **Principal: Nano Banana Pro** (modelo Gemini 3 Pro Image, lanzado el 20/11/2025) en la app de Gemini con Google AI Pro. Es fuerte en texto corto, control de cámara y luz, y resolución de hasta 4K ([apiframe](https://apiframe.ai/guides/nano-banana-pro-guide), [evolink](https://evolink.ai/blog/nano-banana-pro-api-review-pricing-features-integration)). En el plan gratis de Gemini está **Nano Banana 2**, con límites variables [No verificado: Google ya no publica una cifra fija por día] ([Krater](https://krater.ai/blog/is-nano-banana-free)).
  - **Alternativas:** **GPT Image 2** en ChatGPT ([dev.to](https://dev.to/tokenmixai/gpt-image-2-api-developer-guide-pricing-thinking-mode-and-production-integration-2026-28p5)); **Midjourney** para escenas muy estéticas sin producto (desde US$10/mes, sin plan gratis; licencia comercial para empresas que facturan menos de US$1 M/año) ([eesel](https://eesel.ai/blog/midjourney-pricing)); **Adobe Firefly** si querés un modelo entrenado con contenido licenciado ([costbench](https://www.costbench.com/software/ai-image-generators/adobe-firefly/)); **FLUX Kontext** por API para editar con imagen + texto (la versión dev no es comercial) ([invideo](https://invideo.io/blog/flux-ai-image-generator/)); **Photoroom AI Backgrounds** o **Claid AI Photoshoot**, que generan un fondo nuevo sin tocar el producto. Esa es la vía más segura para la foto de catálogo ([Claid](https://claid.ai/blog/article/claid-vs-photoroom)).
  - **Dentro de Meta:** **Advantage+ creative** genera variantes de fondo, expande la imagen a otros formatos y anima imágenes ([Search Engine Land](https://searchengineland.com/meta-generative-ai-tools-automated-video-branding-creative-ads-457221); [Flighted](https://www.flighted.co/blog/metas-advantage-plus-ai-creative-enhancements-each-one-explained)). Revisá cada variante: puede deformar el sello.
- **Agente/IA:** `director-arte-prompts` escribe los prompts; la generación la hacés vos en la app (o un agente por API, sección 7). **La persona** elige.
- **Tiempo:** 15–25 min por brief.
- **Errores comunes:** pedirle a la IA que escriba el nombre en el sello (sección 5); escenas con libros cuyos lomos tienen texto ilegible o títulos reales; manos con 6 dedos; colores del aparato que no existen en el catálogo.

**A7. Composición con el producto real**
- **Objetivo:** poner encima de la escena el **producto real** y el **sello real** (o su vista previa con relieve simulado fiel), y después el texto y la marca.
- **Entrada:** la escena de A6 y el kit de A5.
- **Salida:** la pieza maestra en 4:5.
- **Herramientas:** **Canva Pro** para la composición, el texto y las plantillas de marca. Para el relieve simulado con perspectiva: **Photopea** (gratis en el navegador, con estilos de capa "Bisel y relieve" y transformación con perspectiva) [No verificado precio/estado 2026] o **Figma** (sombras internas y externas). Flujo detallado en la sección 5.
- **Agente/IA:** por ahora lo hace la persona. Con plantillas fijas, `armador-variantes` llena los textos y las imágenes por lote (Canva MCP o Placid).
- **Tiempo:** 15–20 min por pieza; 5 min con plantilla.
- **Errores comunes:** sombras que no coinciden con la luz de la escena; sello más grande que el real (tiene que respetar el diámetro del producto, [Material real]); tipografías fuera de la marca.

**A8. Tamaños y zonas seguras**
- **Objetivo:** sacar las versiones 1:1, 4:5 y 9:16 sin que la interfaz tape el texto ni el sello.
- **Medidas:**
  - **Feed:** 4:5 (1080 × 1350 o 1440 × 1800) y 1:1 (1080 × 1080).
  - **Stories y Reels:** 9:16 (1080 × 1920 o 1440 × 2560).
- **Zonas seguras 9:16:** varias guías de 2026 dicen que Meta unificó las de Stories y Reels en marzo de 2026, con un 14 % libre arriba. Para abajo hay cifras entre 14 % y 23 % según la fuente [contradicción entre fuentes] ([Billo](https://billo.app/blog/meta-ads-safe-zones), [AdNabu](https://blog.adnabu.com/meta-ads/meta-safe-zones/), [Knowlify](https://knowlify.com/articles/meta-video-ad-specs)). **Regla práctica:** dejá libre el **15 % de arriba**, el **25 % de abajo** y unos 60 px a los costados. Texto y sello van en el centro.
- **Herramientas:** **Canva Pro** (redimensionar con "Magic Resize", que en el MCP requiere Pro ([Canva MCP](https://www.canva.dev/docs/apps/mcp/))); **Advantage+** (expansión con IA del formato); Photoroom (AI Expand).
- **Agente/IA:** `revisor-qa` compara contra una máscara de zonas seguras (10.6).
- **Tiempo:** 5–10 min por pieza.
- **Errores comunes:** dejar que Meta recorte solo el 4:5 a 9:16 y que el sello quede abajo, tapado por el botón.

**A9. Variantes para test**
- **Objetivo:** que cada concepto tenga 2–3 variantes **distintas de verdad**: otro gancho, otra imagen principal u otro formato (no otro color de fondo).
- **Salida:** las piezas nombradas según la convención 10.7.
- **Herramientas:** **Canva Bulk Create** o **Placid / Bannerbear / Creatomate** por API ([Bannerbear vs Creatomate](https://www.bannerbear.com/blog/bannerbear-vs-creatomate/), [Orshot](https://orshot.com/blog/template-based-image-generation-tools)).
- **Agente/IA:** `armador-variantes`. **La persona** elige qué entra al test.
- **Tiempo:** 15 min por concepto.
- **Errores comunes:** 10 variantes que solo cambian el color del botón. Meta tiende a tratarlas como el mismo anuncio (sección 8).

**A10. Control de calidad** → checklist 10.6, sin excepciones. Lo corre `revisor-qa` y firma la persona. Tiempo: 5 min por pieza.

**A11. Publicación**
- **Objetivo:** subir las piezas con la estructura de test (sección 8.1), los nombres de 10.7 y la etiqueta de IA donde corresponda.
- **Herramientas:** **Meta Ads Manager** (función Creative Testing, si la tenés disponible: ver 8.1); **TikTok Ads Manager** (activá el interruptor de IA si aplica).
- **Agente/IA:** la persona publica. Un agente puede preparar la planilla de carga, pero no publica.
- **Tiempo:** 20–30 min por tanda.
- **Errores comunes:** editar el anuncio después de publicarlo (reinicia el aprendizaje: [Meta, Last Significant Edit](https://www.facebook.com/business/help/942374239243867)); mezclar conceptos de test y de escala en el mismo conjunto de anuncios.

**A12. Lectura de resultados**
- **Objetivo:** decidir a los 3–7 días qué se apaga, qué se itera y qué se escala (umbrales en 8.3).
- **Entrada:** la exportación CSV de Ads Manager con la columna de nombre de anuncio.
- **Salida:** `creativos/resultados/AAAA-SS_reporte.md`.
- **Agente/IA:** `analista-resultados` lee el CSV, separa por concepto, formato y gancho usando el nombre, y propone decisiones. **La persona** decide.
- **Tiempo:** 30 min por semana.

**A13. Iteración**
- **Objetivo:** del ganador, sacar 3–5 variantes: otro gancho con la misma imagen, la misma idea en carrusel o en video, otra escena con el mismo copy. Del perdedor, anotar la hipótesis que se descartó.
- **Agente/IA:** `estratega-angulos` propone las iteraciones a partir del reporte.
- **Tiempo:** 30 min.

---

## 4. Proceso B — Video y miniclips

### 4.1 Formatos que funcionan, adaptados

La estructura que coincide en todas las guías es **gancho (0–3 s) → producto o problema → demo o prueba → CTA**. Un ejemplo de 25 s: 0–3 s gancho, 3–7 s aparece el producto, 7–14 s demo o prueba, 14–20 s respuesta a una objeción y 20–25 s CTA ([AdMapix, plantilla de guion UGC](https://www.admapix.com/blog/best-practices/ugc-video-ad-script-template); [Captions, guía UGC](https://captions.ai/help/guides/marketing/ugc-ad)). Para menos de 15 s se simplifica: gancho → problema → solución → CTA. No encontré datos de 2026 que comparen el rendimiento de unboxing, ASMR o "POV regalo" [No verificado]. Son formatos lógicos para este producto, pero se validan con test.

| Formato | Duración | Cómo se ve | Material base |
|---|---|---|---|
| **ASMR del gesto** | 6–12 s | Primer plano: hoja, clic del embosador, se levanta y aparece el relieve con luz rasante. Sin voz; el sonido real del clic | **Toma propia o del proveedor (real)** |
| **"Mirá cómo queda"** | 8–15 s | Gancho "Pusimos tu nombre en tus libros" → 3 cortes de relieves con distintos nombres → CTA | Real + vistas previas |
| **POV regalo** | 10–20 s | "POV: le regalás esto a tu amiga que tiene 400 libros" → caja → apertura → embosa su primer libro | Real; la escena del regalo puede ser B-roll de IA |
| **Unboxing** | 15–30 s | Caja, estuche, embosador, 50 stickers dorados, primer uso | Real (proveedor o propio) |
| **Gancho + demo + oferta** | 15–25 s | Gancho de problema ("Prestaste un libro y nunca volvió") → demo → "50 stickers de regalo" → CTA | Real + texto en pantalla |
| **Tutorial "cómo se usa"** | 20–30 s | 4 pasos de la home (elegís, apoyás, presionás, revisás) | Real |
| **Comparativa** | 10–20 s | Pantalla dividida: sello de tinta que mancha vs. relieve limpio | Real (o una toma clara de cada método) |
| **Legado (emotivo)** | 15–30 s | Voz en off sobre B-roll de IA (biblioteca antigua, manos de abuela) + toma real del relieve al final | IA para el ambiente, real para el producto |
| **Video carrusel (Meta) / slideshow (TikTok)** | 3–5 tarjetas | Cada tarjeta, un clip corto o una imagen con movimiento | Mezcla |
| **"Personalizado para…" (lista)** | 10–15 s | Texto rápido: "para la que subraya / para el que presta / para la seño" + relieve con cada nombre | Vistas previas en lote + tomas reales |

### 4.2 Paso a paso

**B1. Referencias**
- **Objetivo:** 10 videos de referencia del rubro y de regalos personalizados, desarmados con la ficha 10.2.
- **Herramientas:** **TikTok Creative Center** (Top Ads: filtrá región e industria; no pude confirmar si Argentina está en el selector de países [No verificado]) ([Creatify, guía del Creative Center](https://creatify.ai/blog/tiktok-creative-center)); **Meta Ad Library**; **Foreplay** si pagás, para guardarlos con transcripción.
- **Agente/IA:** `investigador-competencia` transcribe y separa en gancho, cuerpo, prueba y CTA con tiempos. **La persona** elige las referencias.
- **Tiempo:** 45 min.
- **Errores comunes:** guardar el video y no anotar *por qué* funciona.

**B2. Estructura del guion**
- **Objetivo:** elegir la plantilla según el formato (4.1) y la duración.
- **Salida:** el esqueleto del guion (plantilla 10.3) con los tiempos.
- **Agente/IA:** `guionista-video`.
- **Tiempo:** 10 min.

**B3. Guion y variantes de gancho**
- **Objetivo:** 1 cuerpo con **5 ganchos distintos**: problema, curiosidad, POV, beneficio directo y prueba social (esta última solo si hay datos reales). Las guías de 2026 coinciden en testear una variable por vez y empezar por el gancho ([AdMapix](https://www.admapix.com/blog/best-practices/ugc-video-ad-script-template)).
- **Salida:** el guion con su lista de tomas y los textos en pantalla.
- **Herramientas:** Claude (prompt 10.5.2).
- **Agente/IA:** `guionista-video`. **La persona** lee el guion en voz alta y corta lo que no suene natural.
- **Tiempo:** 20 min.
- **Errores comunes:** ganchos que tardan más de 2 s en decir algo; guiones que solo funcionan con voz (la mayoría ve sin sonido: los textos en pantalla tienen que contar la historia solos).

**B4. Lista de tomas y grabación propia**
- **Objetivo:** grabar lo que hace falta y no tenés del proveedor.
- **Tomas base (con celular):** el gesto de embosar en macro (luz lateral de ventana o una lámpara a 45°); la mano que pasa el dedo por el relieve; la apertura del pack; el embosador en distintos libros; el sonido del clic (grabalo con el micrófono del celular cerca).
- **Configuración:** vertical 9:16, 4K o 1080p a 30 o 60 fps, exposición bloqueada, sin zoom digital.
- **Agente/IA:** el agente arma la lista de tomas. **La grabación es de la persona.**
- **Tiempo:** 1 h de sesión por cada 15–20 tomas.
- **Errores comunes:** luz frontal (el relieve no se ve); fondos con cosas de otras marcas; libros con tapas de editoriales muy reconocibles en primer plano (preferí lomos neutros o forrados).

**B5. Selección y corte de clips de proveedores**
- **Objetivo:** quedarte solo con los clips que tienen permiso (2.2), no muestran marcas ajenas y se ven bien en el celular.
- **Salida:** `creativos/assets/clips/` con los clips cortados en tramos de 1–3 s y nombrados (`prov_gesto_01.mp4`).
- **Herramientas:** **CapCut** (corte; tiene funciones de corte automático) o el editor del celular.
- **Agente/IA:** con las transcripciones o descripciones de cada clip, el agente propone qué tramo va en cada guion. **La persona** elige.
- **Tiempo:** 30–45 min por tanda.
- **Errores comunes:** usar el mismo clip del proveedor que usan otras 20 tiendas como apertura del video.

**B6. B-roll con IA (solo si suma)**
- **Objetivo:** generar los ambientes que no podés grabar: una biblioteca antigua, una abuela leyendo, una mesa de Navidad con un regalo. **El sello en relieve nunca sale de la IA** (sección 5).
- **Herramientas:**
  - **Principal: Veo 3.1 en Google Flow** (incluido en Google AI Pro con 1.000 créditos por mes). La función **Ingredients to Video** acepta hasta 3 imágenes de referencia; Google recomienda referencias sobre fondo liso ([aitoolsatlas](https://aitoolsatlas.ai/tools/google-flow/pricing); [YourStory](https://yourstory.com/ai-story/google-veo-31-flow-ai-editing-tool)). Según fuentes secundarias, cada clip de 8 s cuesta unos 10 créditos en Lite, 20 en Fast y 100 en Quality [No verificado en Google]: arrancá con Fast.
  - **Alternativa: Kling** (plan gratis con créditos diarios; Standard desde ~US$9–10/mes, según agregadores) para imagen a video desde una foto tuya ([eesel](https://www.eesel.ai/en/blog/kling-ai-pricing)). Otras: **Runway** (Standard US$15/mes; las fuentes se contradicen sobre si Standard permite uso comercial: usá Pro si lo elegís) ([Creatify sobre Runway](https://creatify.ai/blog/runway-pricing-(2026)-plans-credits-and-what-you-ll-actually-pay)); **Hailuo / MiniMax** (pago por segundo; el plan gratis lleva marca de agua y el uso comercial requiere plan pago) ([Magic Hour](https://magichour.ai/blog/hailuo-23-pricing)); **Higgsfield** (planes desde US$9–15 con pocos videos) ([costbench](https://costbench.com/software/ai-video-generators/higgsfield/)).
  - **Dentro de las plataformas:** **Advantage+** de Meta convierte imágenes en video ([Search Engine Land](https://searchengineland.com/meta-generative-ai-video-advertising-tools-447367)), y **TikTok Symphony Creative Studio** está disponible gratis para cuentas de TikTok for Business ([TikTok, Symphony](https://ads.tiktok.com/business/en-US/blog/tiktok-symphony-ai-creative-suite)).
  - **No usar Sora:** OpenAI discontinuó la app y la web el 26/04/2026 y la API el 24/09/2026 ([OpenAI Help](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)).
- **Agente/IA:** `director-arte-prompts` escribe los prompts (10.5.4). **La persona** elige y descarta.
- **Tiempo:** 20–40 min por cada 3–4 clips útiles.
- **Errores comunes:** usar B-roll de IA como plano principal (se nota y le resta confianza); clips de más de 4 s donde los objetos "se derriten"; olvidar la etiqueta de IA en TikTok.

**B7. Voz en off**
- **Objetivo:** la voz que acompaña los formatos emotivos o de tutorial.
- **Opción 1 (recomendada):** tu voz, grabada con el celular en un placard con ropa (absorbe el eco). Es real, rioplatense y no necesita etiqueta.
- **Opción 2:** **ElevenLabs**. El plan gratis **no** permite uso comercial; **Starter (US$6/mes)** sí, y suma la clonación instantánea de voz. Las voces de la Voice Library pueden tener condiciones del creador de la voz ([dupple](https://dupple.com/pricing/elevenlabs); [Bigvu](https://bigvu.tv/blog/elevenlabs-pricing-2026-plans-credits-commercial-rights-api-costs/)). No encontré una voz "argentina" específica confirmada [No verificado]: probá voces de la biblioteca con acento rioplatense o **clonate a vos misma** (con tu consentimiento, es tu voz).
- **Agente/IA:** el agente adapta el guion a una lectura natural (pausas, frases cortas).
- **Tiempo:** 10–15 min.
- **Errores comunes:** voz neutra "de doblaje" que no suena local; voz sintética que habla como clienta (2.3).

**B8. Edición**
- **Objetivo:** montar gancho, cuerpo, prueba y CTA con cortes cada 1–2 s en los primeros segundos.
- **Herramientas:**
  - **Principal: CapCut.** **Cuidado con la licencia:** según resúmenes del CapCut Materials License Agreement, solo las plantillas y los materiales marcados **"Commercial use"** se pueden usar con fines comerciales, y la música de la biblioteca de CapCut no está habilitada para anuncios ([CapCut, Materials License Agreement](https://www.capcut.com/material-license-agreement); [Autoae](https://autoae.online/blog/is-capcut-free-for-commercial-use)). CapCut Pro cuesta alrededor de US$19,99/mes y Standard US$9,99 ([eesel](https://eesel.ai/blog/capcut-pricing)).
  - **Alternativas:** Canva Pro (video simple con plantillas de marca); el editor de Instagram o TikTok.
- **Agente/IA:** el agente arma la "hoja de edición" (qué clip, de qué segundo a qué segundo, qué texto). **La persona** edita.
- **Tiempo:** 30–60 min por video maestro.
- **Errores comunes:** plantillas virales de CapCut no marcadas para uso comercial; transiciones que tapan el relieve; logo grande al principio (parece publicidad y la gente pasa de largo).

**B9. Subtítulos**
- **Objetivo:** subtítulos grandes, en Poppins, en la zona segura, revisados palabra por palabra.
- **Herramientas:** **CapCut** (subtítulos automáticos); **Submagic** si necesitás estilos animados por lote (Starter US$19/mes; según una reseña, la precisión en español ronda el 88–93 %) ([fluxnote](https://fluxnote.io/guides/submagic-pricing-2026)).
- **Agente/IA:** `revisor-qa` compara los subtítulos con el guion aprobado.
- **Tiempo:** 10 min.
- **Errores comunes:** "embosador" mal transcripto ("en bosador"); subtítulos tapados por la interfaz.

**B10. Música con licencia**
| Fuente | Dónde vale | Costo | Notas |
|---|---|---|---|
| **Meta Sound Collection** | Solo Facebook e Instagram, también en anuncios | Gratis | Meta puede silenciar un tema si cambian los derechos ([Instagram Help](https://help.instagram.com/ipad-app/402084904469945); [Music Business Worldwide](https://musicbusinessworldwide.com/meta-offers-royalty-free-music-library-to-instagram-reels-advertisers)) |
| **TikTok Commercial Music Library** | TikTok, cuentas Business | Gratis | Más de 1 M de temas autorizados de antemano ([Soundstripe](https://www.soundstripe.com/blogs/tiktok-music-library-explained)) |
| **Epidemic Sound (plan Commercial)** | Multiplataforma | ≈ US$23/mes, según agregadores | El plan Personal no cubre anuncios pagos ([BityClips](https://bityclips.com/tool/epidemic-sound/pricing); [Artyfile](https://www.artyfile.com/blog/artlist-vs-epidemic-sound-vs-artyfile-comparison-2026)) |
| **Artlist (Commercial)** | Multiplataforma | ≈ US$299/año | Solo anual para comercial |
| **Música "trending" de Instagram o TikTok** | **No para anuncios** | — | La biblioteca general es de uso personal |

**Regla:** el mismo video maestro lleva una música para Meta (Sound Collection) y otra para TikTok (CML). Exportá dos versiones.

**B11. Versiones por placement**
- **Reels, Stories y TikTok:** 9:16, 15–30 s, texto en la zona segura.
- **Feed:** 4:5, 10–20 s.
- **Video carrusel:** de 3 a 5 tarjetas de 3–5 s.
- **Herramientas:** CapCut (cambiar la relación de aspecto) y Canva.
- **Tiempo:** 15 min por video.

**B12. Control de calidad** → checklist 10.6.

**B13. Test y publicación** → sección 8. En TikTok, si hay B-roll o voz de IA, **activá el interruptor de contenido de IA**.

**B14. Iteración**
- Del video ganador: cambiá **solo el gancho** (5 nuevos), después la música y después el CTA.
- Del gancho ganador: hacé un estático con esa frase.
- Un agente arma la tabla de "qué cambiar ahora" a partir del reporte.

---

## 5. Cómo resolver el texto del sello y el relieve con IA

### 5.1 El problema
El producto **es** un texto chico, curvo y en relieve: "DE LA BIBLIOTECA DE" arriba y hasta 20 caracteres abajo. Los generadores de imagen y video siguen equivocando letras. Hay guías especializadas que recomiendan **planificar la corrección del texto como parte del flujo**, porque ningún generador lo saca bien siempre en el primer intento ([Rewarx, distorsión de texto](https://www.rewarx.com/blogs/fix-distorted-text-on-ai-product-image-how-to-correct-typography-errors)). En video, el consejo es **regenerar** si cambia la forma del producto y **componer encima el logo o el texto real** si tiene que coincidir con el arte aprobado en cada cuadro ([LaoZhang, logo en video IA](https://blog.laozhang.ai/en/posts/fix-logo-distortion-ai-product-video.md)). Además, en Argentina el anuncio no puede mostrar un resultado distinto al real (2.4).

### 5.2 La regla
> **La IA nunca escribe el sello.** El sello sale de una de tres fuentes, en este orden de preferencia:
> 1. **Foto o video real** del relieve (macro con luz rasante).
> 2. **Vista previa SVG o PNG** del personalizador de la web, compuesta encima con relieve simulado y fiel.
> 3. **Render con IA** solo para planos lejanos donde el texto no se lee (por ejemplo, un libro abierto a 2 m). Y aun así, sin letras inventadas: con la zona lisa o desenfocada.

### 5.3 Flujo concreto para estáticos (30–40 min la primera vez; 10 min con plantilla)

**Paso 1 — Generar la vista previa del nombre (agente)**
- El personalizador de la web ya dibuja el sello en canvas, con texto curvo. El agente `generador-previews` reutiliza esa misma función en un script (Node + canvas o SVG) y exporta un **PNG transparente de 2000 × 2000 px** y un **SVG** por cada nombre y diseño:
  `creativos/assets/sellos-svg/{diseño}_{NOMBRE}.png` (por ejemplo `diseno03_LUCIA-PEREZ.png`).
- Entrada: una lista de nombres de ejemplo en mayúsculas y de hasta 20 caracteres (por ejemplo LUCÍA, SOFÍA, MARTÍN, FAMILIA GÓMEZ). El texto de arriba, "DE LA BIBLIOTECA DE", es fijo y ya lo pone el script.
- Para una pieza con el nombre de una clienta real, solo con su permiso.

**Paso 2 — Generar la escena con hueco (IA)**
- En Nano Banana Pro (o GPT Image 2) pedí la escena **con la página en blanco** y sin texto (prompt 10.5.3, "zona limpia"):
  - "…a blank cream book page, no text, no stamp, no letters on the page…"
- Si el aparato tiene que aparecer, subí la foto real recortada como **referencia** y pedí que se mantengan la forma y el color. Revisá que no le haya inventado letras ni logos.
- Alternativa más fiel: no generes el aparato. Generá solo el ambiente y pegá encima el PNG real del embosador (Photoroom le agrega la sombra).

**Paso 3 — Componer el sello sobre la página (persona, con plantilla)**
En **Photopea** (gratis) o Photoshop:
1. Pegá el PNG del sello sobre la página.
2. **Transformar → Distorsionar o Perspectiva** para que siga el ángulo de la hoja.
3. **Color del sello = el color del papel**. El sello seco no tiene tinta: el relieve se ve por luces y sombras.
4. Estilo de capa **"Bisel y relieve"**: estilo "Relieve almohadillado" o "Relieve", profundidad 50–120 %, tamaño de 2–4 px, con la dirección de la luz igual a la de la escena. Luces: blanco al 60–80 %; sombras: marrón oscuro al 25–40 %.
5. Bajá la opacidad del relleno al 0–10 % para que solo se vean las luces y las sombras.
6. Un desenfoque de 0,3–0,6 px para igualar la nitidez de la escena.
7. **Comparalo con la foto macro real.** Si no se parece, es engañoso: volvé a la opción 1 (foto real).

En **Figma** se logra algo parecido con dos sombras (Inner shadow clara arriba a la izquierda y oscura abajo a la derecha), aunque sin perspectiva nativa [No verificado: depende de plugins].

**Paso 4 — Texto de marca y CTA (Canva)**
- Plantilla con los tokens: titular en Alike o Passion One, cuerpo en Poppins, verde `#16423C`, crema `#FEFDF8`.
- Sello, nombre y producto en el centro (zona segura).

**Paso 5 — Control**
- Letra por letra: ¿dice exactamente el texto del PNG? ¿Respeta el máximo de 20 caracteres y las mayúsculas? ¿El diseño es uno de los propios?
- ¿El tamaño del sello en relación con la hoja coincide con el diámetro real ([Material real])?

### 5.4 Flujo concreto para video
1. **El plano del relieve es siempre real** (tu toma o la del proveedor). Es el "momento de verdad" del anuncio.
2. **B-roll de IA** solo para el ambiente, sin el sello en cuadro o con la hoja fuera de foco.
3. **Si querés un plano "imposible"** (por ejemplo, la cámara que entra a la biblioteca y termina en el libro con el sello):
   - Generá el clip con **imagen a video** usando como **primer cuadro** tu foto compuesta del paso 5.3 (Kling o Veo 3.1 en Flow, "Frames to video" o "Ingredients"). Con cámara fija o un movimiento mínimo, y de 3–5 s.
   - Si en el clip el texto se deforma, **tapalo con el PNG real**: en CapCut, superponé el PNG del sello, ajustá la opacidad y el modo de mezcla y usá keyframes (o la función de seguimiento de movimiento, si tu versión la tiene [No verificado]). Con la cámara quieta alcanza con un overlay fijo, incluso con ffmpeg ([LaoZhang](https://blog.laozhang.ai/en/posts/fix-logo-distortion-ai-product-video.md)).
   - Si la forma del aparato o del libro cambia en el clip, **regeneralo**: no lo arregles.
4. **Cortá antes de que el texto se pueda leer**, o pasá al plano real, que es lo más rápido y seguro.

### 5.5 Herramientas que "preservan el producto"
- **Photoroom (AI Backgrounds)** y **Claid (AI Photoshoot)** cambian el entorno sin redibujar el producto, que es la vía más segura para fotos de catálogo. Claid afirma que preserva etiquetas y texturas; es una afirmación del vendedor y hay que probarla con nuestra foto ([LetsEnhance/Claid](https://letsenhance.io/blog/all/scene-creation/)). La garantía de fidelidad de Photoroom es solo para clientes Enterprise de comida y moda ([Photoroom, precios](https://www.photoroom.com/pricing)).
- **Pomelli Photoshoot** (Google Labs, febrero de 2026) genera fotos de estudio desde una foto de producto, gratis en beta. Solo estaba en EE. UU., Canadá, Australia y Nueva Zelanda; en Argentina, [No verificado] ([PetaPixel](https://petapixel.com/2026/02/20/googles-pomelli-photoshoot-feature-is-here-to-hammer-nails-into-the-coffin-of-photography)).
- **Mejoradores de resolución:** para productos con texto, las reseñas prefieren **Topaz** (no inventa detalles). **Magnific** en modo Creative puede deformar letras; usá su modo Precision ([dev.to, Magnific vs Topaz vs Krea](https://dev.to/raxxostudios/magnific-vs-topaz-vs-krea-which-ai-upscaler-actually-works-3j87); [toolradar](https://toolradar-site.pages.dev/best-ai-image-upscaling-tools-2026)). **Nunca pases por un mejorador el PNG del sello**: si hace falta más resolución, exportalo de nuevo desde el SVG.

---

## 6. Stacks recomendados y costos

Conversión usada: **US$1 ≈ $1.900** (dólar oficial BNA $1.565 del 02/11/2026 + IVA 21 % sobre servicios digitales del exterior, que la tarjeta cobra como percepción según la RG 4240) ([El Cronista](https://cronista.com/finanzas-mercados/el-dolar-oficial-toco-su-maximo-del-ano-y-la-brecha-con-el-blue-cayo-a-minimos-de-cuatro-meses); [Kintsugi, IVA Argentina](https://trykintsugi.com/sales-tax-guides/latam/argentina)). Los precios son en USD por mes, según agregadores salvo que se indique otra cosa. **Para pasar a pesos cualquier precio de `matriz-herramientas.csv`, multiplicalo por 1.900** (o por ≈ 2.370 si en tu resumen aparece la percepción del 30 %).

### 6.1 Stack mínimo (gratis) — para la semana 1 o si no hay presupuesto
| Paso | Herramienta | Por qué |
|---|---|---|
| Investigación | Meta Ad Library + TikTok Creative Center | Fuentes oficiales y gratuitas |
| Texto y guiones | Claude o ChatGPT (gratis) | Suficiente para copies y guiones |
| Escenas | Gemini (gratis, Nano Banana 2) | Calidad buena y límites variables |
| Composición | Canva gratis + Photopea | Canva para la marca, Photopea para el relieve con perspectiva |
| Video | CapCut gratis (solo materiales "Commercial use") | Edición y subtítulos |
| B-roll | Kling (créditos diarios gratis) o Flow (créditos gratis [No verificado]) | Para probar |
| Música | Meta Sound Collection + TikTok CML | Gratis y con licencia para anuncios |
| Dentro de las plataformas | Advantage+ creative y Symphony | Gratis |
| **Total** | **US$0** | Límite: cuotas bajas, menos control y marcas de agua en algunos planes gratis |

### 6.2 Stack recomendado — arrancar ya (≈ US$74/mes ≈ $140.600)
| Herramienta | US$/mes | Por qué combina |
|---|---|---|
| Claude Pro (incluye Claude Code) | 20 | Investigación, copy, guiones, prompts, **agentes y MCP** (Canva, Tiendanube) ([Noqta](https://www.noqta.tn/blog/claude-code-pricing-2026)) |
| Google AI Pro | 19,99 | **Un solo pago** para imagen (Nano Banana Pro) y video (Veo 3.1 en Flow, con 1.000 créditos) ([geotoolbox](https://geotoolbox.ai/es/blog/precio-gemini)) |
| Canva Pro | ≈ 15 [No verificado en ARS] | Plantillas de marca, Magic Resize, Bulk Create y **MCP oficial** con Claude ([Canva MCP](https://www.canva.dev/docs/apps/mcp/)) |
| Photoroom Pro | ≈ 12,99 | Fondos limpios y sombras del producto real. Incluye créditos de API y MCP ([Photoroom](https://www.photoroom.com/pricing)) |
| ElevenLabs Starter | 6 | Voz en off con licencia comercial |
| CapCut, Sound Collection, CML, Ad Library, Creative Center | 0 | — |
| **Total** | **≈ 74** | **≈ $140.600/mes** |

**Por qué este stack:** Claude piensa y escribe; Google genera; Photoroom cuida el producto real; Canva arma y multiplica; CapCut edita. Las piezas reales (sello, aparato) pasan intactas de Photoroom a Canva, y la IA solo toca el fondo. Hay dos conectores que permiten automatizar: el MCP de Canva y la API y MCP de Photoroom.

### 6.3 Stack pro — cuando haya un ganador y facturación (≈ US$327/mes ≈ $621.000)
El recomendado (74) más:
| Herramienta | US$/mes | Para qué |
|---|---|---|
| Midjourney Standard | 30 | Escenas editoriales de alta estética (sin producto) |
| Kling Pro | ≈ 32–37 | Más imagen a video y control de cámara |
| Foreplay Basic | 59 (49 anual) | Guardar referencias, transcribir y armar briefs ([Toolradar](https://toolradar.com/tools/foreplay)) |
| Epidemic Sound Commercial | ≈ 23 | Música única y multiplataforma |
| Creatomate | ≈ 41 | Variantes de video y estáticos por API desde una planilla ([Creatomate](https://creatomate.com/blog/the-best-video-generation-apis)) |
| n8n Cloud Starter | ≈ 24 (20 anual) | Automatizaciones (reporte semanal, lotes) ([n8n pricing, Sliplane](https://sliplane.io/blog/n8n-pricing)) |
| Submagic Starter | 19 | Subtítulos animados por lote |
| CapCut Pro | ≈ 20 | Exportación sin límites y más materiales comerciales |
| **Total** | **≈ 327** | **≈ $621.000/mes** |

**Qué no recomiendo todavía:**
- **Arcads** (US$110/mes por ~10 videos, sin prueba gratis) ([eesel](https://eesel.ai/blog/arcads-ai-pricing)), **Creatify** (US$39/mes) ([Shelby AI](https://www.shelby-ai.com/pricing/creatify/)) y **HeyGen** (US$29/mes) ([Creatify sobre HeyGen](https://creatify.ai/blog/heygen-pricing-(2026)-plans-and-what-you-ll-actually-pay)). Su fuerte es el "UGC con actor de IA", que en este rubro empuja a testimonios falsos (2.3). Solo valen para un vocero de marca etiquetado, y después de probar el UGC real.
- **MagicBrief:** una reseña dice que cierra el 31/07/2026 tras su compra por Canva [No verificado] ([xpr.media](https://xpr.media/?p=825921)).
- **Sora:** discontinuado.

### 6.4 Pagar desde Argentina
- Casi todas estas herramientas cobran en USD con tarjeta internacional [No verificado una por una: probá con tu tarjeta antes de planificar]. Canva y algunas apps cobran en pesos en Argentina. ChatGPT Go aparece a US$6 en una nota y a US$8 en otra ([MDZ](https://www.mdzol.com/tecnologia/llego-chatgpt-go-la-argentina-el-plan-barato-ia-cuesta-6-dolares-n1407017)).
- **Impuestos:**
  - IVA 21 % sobre servicios digitales del exterior, que cobra el emisor de la tarjeta (RG 4240).
  - IIBB según la provincia [No verificado].
  - **Percepción del 30 % (Ganancias y Bienes Personales):** varias notas dicen que se eliminó desde el 02/01/2026 en consumos con tarjeta en dólares, salvo turismo pagado en pesos ([Comercio y Justicia](https://comercioyjusticia.info/economia/el-recargo-del-30-seguira-vigente-para-servicios-turisticos-abonados-en-pesos/); [InfoViajera](https://www.infoviajera.com/2025/12/desde-enero-ya-no-regira-el-recargo-del-30-por-compras-con-tarjeta-en-dolares/)). iProfesional (08/01/2026) la sigue describiendo como vigente para servicios digitales ([iProfesional](https://www.iprofesional.com/impuestos/445594-dolar-tarjeta-paso-a-paso-para-no-pagar-la-percepcion-del-30-por-ciento-de-arca-ex-afip)). **Fuentes contradictorias:** mirá el resumen de tu tarjeta. Si aparece el 30 %, el costo sube a ≈ $2.370 por dólar.
- Si pagás el resumen con dólares propios, evitás el tipo de cambio de la tarjeta [No verificado para cada banco].
- Con monotributo o responsable inscripto, estos gastos se pueden facturar a la empresa [validar con tu contador].

---

## 7. Arquitectura de agentes y automatizaciones

### 7.1 Quién hace qué
| Paso | Lo hace un agente | Lo hace la persona | IA que conviene |
|---|---|---|---|
| Investigación de competencia | Fichas, transcripciones y patrones | Elegir qué mirar; criterio | LLM (Claude) |
| Ángulos | Proponer, ordenar y descartar duplicados | Elegir | LLM |
| Copy y guiones | Borradores, variantes de gancho y adaptación a voz | Tono final; leer en voz alta | LLM |
| Prompts de imagen y video | Escribir y adaptar a cada modelo | — | LLM |
| Escenas | Generar por API (más adelante) | Elegir y descartar | Modelo de imagen (Nano Banana Pro) |
| Vistas previas del sello | **Todo, en lote** (script) | Revisar 1 de cada lote | Código (no IA generativa) |
| Fotos y video del producto | — | **Grabar** | — |
| Composición | Llenar plantillas (Canva MCP, Placid) | Ajustar el relieve; la primera de cada plantilla | Diseño por API |
| B-roll | Prompts y, más adelante, generación por API | Elegir | Modelo de video (Veo 3.1 / Kling) |
| Voz | Adaptar el guion; generar con API | Aprobar o grabar | Modelo de voz (ElevenLabs) |
| Edición | Hoja de edición | **Editar** | — |
| Control de calidad | Checklist automático (texto, medidas, nombre, afirmaciones) | **Aprobación final** | LLM + scripts |
| Publicación | Planilla de carga | **Publicar** | — |
| Resultados | Leer el CSV y proponer decisiones | **Decidir** presupuesto | LLM + script |

### 7.2 Agentes propuestos (subagentes de Claude Code en `.claude/agents/`)
| Agente | Entrada | Salida | Herramientas | Revisa |
|---|---|---|---|---|
| `investigador-competencia` | Links de la Ad Library o el Creative Center, capturas, transcripciones | `competencia/AAAA-MM-DD_fichas.md` (plantilla 10.2) + patrones | WebFetch, Read, Write | Persona |
| `estratega-angulos` | Fichas, propuesta de valor, último reporte | Matriz de ángulos, hipótesis e iteraciones | Read, Write | Persona |
| `redactor-copy` | Matriz de ángulos, skill de marca | Copies H01…Hn en tabla + alertas legales | Read, Write | Persona |
| `guionista-video` | Ángulo, formato, duración, clips disponibles | Guion 10.3 + 5 ganchos + lista de tomas + hoja de edición | Read, Write | Persona |
| `director-arte-prompts` | Brief y kit de assets | Prompts por modelo (10.5) + layout | Read, Write | Persona |
| `generador-previews` | Lista de nombres × diseños | PNG y SVG en `assets/sellos-svg/` | Bash (Node + el código del personalizador) | Persona (muestreo) |
| `armador-variantes` | Plantilla + planilla de textos e imágenes | Piezas en 1:1, 4:5 y 9:16 | **Canva MCP** (generar, exportar; redimensionar y autocompletar requieren Pro) o la API de Placid, Bannerbear o Creatomate | `revisor-qa` + persona |
| `revisor-qa` | Pieza + brief + checklist | Informe de aprobado o rechazado con los motivos | Read (imágenes), scripts de medidas | Persona firma |
| `analista-resultados` | CSV exportado de Ads Manager | `resultados/AAAA-SS_reporte.md` con matar, iterar o escalar | Read, Bash (pandas) | Persona decide |

**Skill de marca** (`.claude/skills/marca-susurros/SKILL.md`): tokens, tono rioplatense, promesas permitidas, lista de prohibidos (cifras sin datos, "% OFF" sin precio anterior, testimonios inventados, nombres o diseños de TWP y MBE), medidas y zonas seguras, y convención de nombres. Todos los agentes la cargan.

**MCPs útiles:**
- **Canva** (oficial, `https://mcp.canva.com/mcp`, anunciado en febrero de 2026 para Claude) ([Engadget](https://engadget.com/ai/claude-ai-now-integrates-with-canva-201808571.html); [Canva Dev](https://www.canva.dev/docs/apps/mcp/)).
- **Photoroom** (su página de precios menciona créditos de API y MCP en los planes pagos).
- **Figma** (tiene servidor MCP oficial [No verificado en esta consulta]).
- **Tiendanube** (está disponible en esta sesión de Claude: sirve para leer los precios y productos reales y llenar los anuncios de oferta sin tipearlos).

### 7.3 Flujos con n8n, Make o Zapier
1. **Reporte semanal (automatizar primero):** cada lunes, n8n trae los resultados de la Meta Marketing API (o vos subís el CSV a Drive) → los guarda en Google Sheets → Claude por API los resume con las reglas de 8.3 → te llega un email. Costo: n8n Starter ≈ US$20–24/mes ([Toolradar](https://toolradar.com/blog/n8n-pricing-2026)) o Make desde US$9 ([Zapier sobre Make](https://zapier.com/blog/make-com-pricing/)). La conexión con la Meta API exige crear una app de desarrollador [No verificado el detalle actual].
2. **Lote de vistas previas → plantillas:** una planilla con nombres y diseños → script → PNG en Drive → Placid o Creatomate llenan la plantilla → carpeta "para revisar".
3. **Brief → escenas:** una fila nueva en la planilla de briefs → Gemini API (Nano Banana) genera 4 escenas → carpeta → aviso para que elijas. La API se cobra por imagen (≈ US$0,13 por imagen de 1K–2K en Nano Banana Pro, según agregadores) ([evolink](https://evolink.ai/blog/nano-banana-pro-api-review-pricing-features-integration)).

### 7.4 Orden de automatización
1. Semana 1: la skill de marca + `redactor-copy` + `guionista-video` (sin integraciones; ahorro inmediato).
2. Semana 2: `generador-previews` (el script del sello; quita la parte más delicada).
3. Semanas 3–4: `revisor-qa` + `analista-resultados` (cuando haya datos).
4. Mes 2: `armador-variantes` con Canva MCP o Placid, y el reporte en n8n.
5. Después: generación por API (solo si el volumen lo justifica).

---

## 8. Testeo, métricas y ritmo de producción

### 8.1 Estructura de test con presupuesto chico (Meta)
- **Por qué consolidar:** con el sistema de entrega de Meta llamado "Andromeda", los practicantes recomiendan pocos conjuntos de anuncios, con públicos amplios y muchos creativos **distintos entre sí**. Las cifras que circulan van de 6–8 a 10–20 anuncios por conjunto y **no son oficiales de Meta** ([Segwise](https://segwise.ai/blog/meta-andromeda-update-creative-strategy-2026); [Atria](https://www.tryatria.com/blog/meta-andromeda-update); [TheOptimizer](https://theoptimizer.io/blog/how-to-test-ad-creatives-on-meta-after-the-andromeda-update-2026-playbook)).
- **Aprendizaje:** un conjunto queda en "Aprendizaje limitado" cuando es poco probable que junte unos **50 eventos de optimización en la semana** posterior a la última edición significativa ([Meta, Learning limited](https://en-gb.facebook.com/business/help/269269737396981)). Con poco presupuesto no vas a llegar a 50 compras por semana. Por eso:
  - Al principio optimizá por **compra** si podés, o por **agregar al carrito o iniciar compra** mientras no haya volumen [criterio práctico, no regla oficial].
  - **No edites** los anuncios en vuelo: crear uno nuevo es mejor que editar ([Meta, Last Significant Edit](https://www.facebook.com/business/help/942374239243867)).
- **Herramienta de Meta:** **Creative Testing** dentro de Ads Manager (desde octubre de 2025, con despliegue gradual). Compara hasta 5 anuncios (algunas cuentas ven 10) con una porción del presupuesto; se recomienda que sea ≤ 20 %. Según una guía, requiere la estrategia "mayor volumen" ([Jon Loomer](https://www.jonloomer.com/meta-creative-testing/)).

**Estructura propuesta:**
| Campaña | Conjunto | Anuncios | Presupuesto |
|---|---|---|---|
| **TEST** (Ventas) | 1 conjunto, público amplio Argentina 25–65 + Advantage+ audiencia | 3–5 conceptos nuevos por semana (o con Creative Testing) | ≈ 30–40 % del total |
| **ESCALA** (Ventas, Advantage+) | 1 conjunto amplio | Solo ganadores (copiados con el **ID de la publicación** para conservar los comentarios) | ≈ 60–70 % |

- **Cuánto por creativo:** las guías de presupuesto chico piden que cada variante gaste al menos **2–3 veces el CPA objetivo** antes de decidir. Probar 10 variantes con US$5 por día cada una da ruido ([Chatterbuzz](https://chatterbuzzmedia.com/blog/ad-creative-testing/); [Alex Neiman](https://alexneiman.com/ai-creative-testing-low-budget-meta-ads/)). Conclusión: **menos variantes, mejor financiadas.**
- **Cuánto tiempo:** un mínimo de 3–7 días, sin cambios. Una tabla de un tercero atribuye a Meta la recomendación de 7 días como mínimo [No verificado en Meta] ([AdManage](https://admanage.ai/blog/creative-testing-budget-guide)).
- **CPA objetivo:** calculalo antes de pautar con la plantilla 10.9 (precio − costo − envío − comisión de Pago Nube o Mercado Pago − margen deseado).

**TikTok:** al principio priorizá el **orgánico** (es gratis y te dice qué ganchos retienen). Pasá a Spark Ads los videos orgánicos que funcionen. Con TikTok como canal secundario, el primer mes no hace falta pautar.

### 8.2 Métricas por formato
| Métrica | Fórmula (Meta) | Para qué formato | Referencia (no oficial) |
|---|---|---|---|
| **Hook rate** (tasa de gancho) | Reproducciones de 3 s ÷ impresiones | Video | ≥ 25–30 % es bueno; Stories y Reels suelen dar menos ([Superscale](https://superscale.ai/learn/creative-testing-benchmarks/); [Chatterbuzz](https://chatterbuzzmedia.com/blog/ad-creative-testing/)) |
| **Hold rate** (retención) | ThruPlays (15 s o completo) ÷ reproducciones de 3 s | Video | 15–25 % (misma fuente, con variación) |
| **CTR (enlace)** | Clics en el enlace ÷ impresiones | Todos | Comparalo dentro de tu cuenta |
| **CPC (enlace)** | Gasto ÷ clics en el enlace | Todos | Diagnóstico, no decisión |
| **CPM** | Gasto ÷ impresiones × 1.000 | Todos | Para saber si el problema es caro o poco atractivo |
| **Tasa de conversión de la landing** | Compras ÷ clics | Todos | Si el CTR es bueno y no hay ventas, el problema está en la tienda |
| **CPA** | Gasto ÷ compras | Todos | **La que decide** |
| **ROAS** | Ingresos ÷ gasto | Todos | Contra el ROAS de equilibrio |
| **Deslizamientos / clics por tarjeta** | Interacciones por tarjeta | Carrusel | Qué tarjeta engancha |

Hay practicantes que advierten que no se debe apagar un anuncio por CTR o CPC: se escala solo por CPA y ROAS ([Taylor Sicard](https://taylorsicard.com/blog/meta-ads-creative-benchmarks-2026)). El hook rate sirve como **señal temprana** (24–48 h), no como sentencia.

### 8.3 Cuándo matar, iterar o escalar (punto de partida para ajustar con tus datos)
| Situación | Decisión |
|---|---|
| Gastó 1× el CPA objetivo, tiene un hook rate < 20 % (video) o un CTR muy por debajo del resto, y 0 compras | **Apagar** |
| Gastó 2–3× el CPA objetivo y tiene 0 compras | **Apagar** |
| CPA > 50 % por encima del objetivo después de gastar 3× el CPA | **Apagar**; anotar la hipótesis que se descartó |
| Buen hook o CTR pero no convierte | **Iterar** el cuerpo, la oferta o la landing. Mantener el gancho |
| CPA ≤ objetivo con ≥ 3 compras | **Escalar:** pasarlo a ESCALA con el ID de la publicación y subir el presupuesto un 20–30 % cada 2–3 días |
| Ganador que cae (el CPA sube durante 3–5 días seguidos) | Nuevas variantes de gancho o de imagen del mismo concepto |

Reglas tomadas y combinadas de [Chatterbuzz](https://chatterbuzzmedia.com/blog/ad-creative-testing/), [Alex Neiman](https://alexneiman.com/ai-creative-testing-low-budget-meta-ads/) y [Entreresource](https://entreresource.com/meta-ads-creative-testing-system-ecommerce/). Los umbrales varían entre fuentes, así que ajustalos con tu historial.

### 8.4 Volumen y ritmo
- **Cuántos:** para una marca chica, **2–4 conceptos realmente distintos por semana** ([MagicMango](https://www.magicmango.ai/en/blog/creative-velocity-the-ad-metric-that-predicts-your-cac-befor-en)). Otras fuentes dicen 3–8 según la inversión ([Billo](https://billo.app/blog/how-many-ad-creatives-do-you-need/)). Admetrics propone un creativo nuevo por cada US$10.000 de inversión semanal ([MagicMango, citando a Admetrics](https://www.magicmango.ai/en/blog/creative-velocity-the-metric-that-predicts-whether-your-ad-s-en)). Con una inversión chica, el piso lo pone el aprendizaje, no la fatiga.
- **Ritmo sostenible para una persona:**
  - **Por semana:** 3 conceptos nuevos (2 estáticos o carruseles y 1 video), con 2 variantes cada uno, más 2–3 iteraciones de ganadores. Son entre 9 y 12 piezas.
  - **Orgánico:** 3–4 Reels o TikToks reciclando el mismo material (un video de anuncio = un Reel orgánico con otro gancho).
- **Reciclar ganadores:**
  1. Mismo concepto con 5 ganchos nuevos.
  2. De video a estático (el cuadro del relieve + el gancho como titular).
  3. De estático a carrusel (la misma promesa, desarmada en 4 tarjetas).
  4. Misma pieza con otra fecha ("para Reyes", "para el Día de la Madre").
  5. Mismo guion con otra persona o en otro lugar.

### 8.5 Calendario argentino (con ángulo para cada fecha)
**Los plazos de producción y envío ([N] días según el proveedor) definen hasta cuándo se puede pautar cada fecha.** Para un producto personalizado, cortá la pauta de "llega para…" con margen.

| Fecha | Cuándo | Ángulo | Empezar a pautar |
|---|---|---|---|
| **CyberMonday** | 2–4/11/2026 (en curso hoy; la tienda no está publicada) ([Canal 26](https://www.canal26.com/economia/2026/10/29/llega-el-cybermonday-2026-cuando-empieza-que-ofertas-habra-y-como-encontrar-los-mejores-descuentos/)). Próximo: noviembre de 2027 [fecha a confirmar por CACE] | Oferta real; requiere ser socio de CACE para el sitio oficial | — |
| **Fin de año escolar** | Diciembre | "Para la seño o el profe que nos hizo leer" | Mediados de noviembre |
| **Navidad** | 25/12 | Regalo para quien lee; pack regalo | Lo antes posible; cortar "llega para Navidad" según los plazos |
| **Reyes** | 06/01 | "Para los Reyes de la casa lectora", infancias | Después del corte de Navidad |
| **San Valentín** | 14/02 | Pareja lectora; "nuestra biblioteca" (el nombre de los dos) | 1–2 semanas antes |
| **Vuelta a clases** | Fines de febrero o marzo (según la provincia) [No verificado por jurisdicción] | Útiles, carpetas, libros de la escuela con nombre | Mediados de febrero |
| **Día Internacional del Libro** | 23/04 | Orgullo lector, booktok | 2 semanas antes |
| **Feria del Libro de Buenos Aires** | Abril–mayo [fechas 2027 No verificado] | Lectores, contenido orgánico | — |
| **Hot Sale** | Mediados de mayo (2026: 11–13/05; 2027 a confirmar) ([Mercado](https://mercado.com.ar/agenda/cace-abrio-las-contrataciones-para-hot-sale-2026-previsto-del-11-al-13-de-mayo)) | Oferta real | 1 semana antes (anticipación) |
| **Día Nacional del Libro (Argentina)** | 15/06 | Ojo: en Argentina el Día del Libro nacional es el 15 de junio; el 23/04 es el internacional | 2 semanas antes |
| **Día del Padre** | Tercer domingo de junio → 20/06/2027 | "Para el que lee en el sillón de siempre" | 2–3 semanas antes |
| **Día del Amigo** | 20/07 | "Para tu amiga que te presta libros" | 2 semanas antes |
| **Día del Maestro** | 11/09 | Regalo para docentes | 2 semanas antes |
| **Día del Bibliotecario** | 13/09 | Nicho, contenido orgánico | — |
| **Día de la Madre** | Tercer domingo de octubre → 17/10/2027 (2026 fue el 18/10) | Legado, "su biblioteca de siempre" | 3–4 semanas antes (es la fecha fuerte de regalos) |
| **CyberMonday 2027** | Noviembre (a confirmar por CACE) | Oferta real | — |

---

## 9. Plan de acción

### Semana 1 (3 al 9 de noviembre de 2026) — base y permisos
| Tarea | Responsable | Entregable |
|---|---|---|
| Pedir a los proveedores candidatos videos y fotos originales **y la autorización escrita** (texto 10.8) | Persona | Mails enviados; `permisos/` |
| Suscribir el stack recomendado (o el mínimo) y probar la tarjeta | Persona | Cuentas activas; costo real en pesos anotado |
| Crear la skill de marca y los agentes `redactor-copy` y `guionista-video` | Agente (Claude Code) + Persona revisa | `.claude/skills/marca-susurros/`, `.claude/agents/` |
| Analizar 15–20 anuncios del rubro | `investigador-competencia` + Persona | `competencia/2026-11-0X_fichas.md` |
| Definir los 6 ángulos y el copy H01–H18 | `estratega-angulos`, `redactor-copy` + Persona | Matriz de ángulos y tabla de copies |
| 3 plantillas de Canva (hero 4:5, carrusel de 4 tarjetas, 9:16) con los tokens de marca | Persona | Plantillas en Canva |
| Primeros guiones: 5 videos × 5 ganchos | `guionista-video` + Persona | `guiones/` |
| Orgánico: 2 Reels/TikToks de prueba de gancho con material permitido | Persona | Publicaciones y aprendizaje de ganchos |

### Semanas 2 a 4 (10 de noviembre al 1 de diciembre) — primer test de Navidad
**Condición:** tienda publicada con precio, píxel de Meta y la API de conversiones conectados, y stock real. Si no está, el test se corre en la semana en que esté, y estas semanas se usan para producir y para orgánico.

| Tarea | Responsable | Entregable |
|---|---|---|
| Sesión de fotos y video con el producto real (macro del relieve, gesto, pack) | Persona | `assets/relieve/`, `assets/clips/` |
| Script de vistas previas en lote (12–16 diseños × 10 nombres) | `generador-previews` + Persona revisa 1 de cada 10 | `assets/sellos-svg/` |
| Producción de **10 estáticos** (3 regalo, 2 legado, 2 sin tinta / vs. métodos, 2 carruseles "cómo se usa" y "para…", 1 seño) | Persona + agentes | 10 piezas × 3 tamaños |
| Producción de **5 videos** (ASMR del gesto, POV regalo, unboxing, gancho + demo + oferta, "personalizado para…") | Persona + agentes | 5 maestros × 2 versiones de música |
| Control de calidad de las 15 piezas | `revisor-qa` + Persona firma | Checklist aprobado |
| Lanzar TEST: 5–6 conceptos al principio, el resto en la semana siguiente | Persona | Campaña TEST activa |
| Reporte al día 3 y al día 7 | `analista-resultados` + Persona | `resultados/2026-W4X_reporte.md` |
| Iterar los 1–2 ganadores (5 ganchos nuevos o versión estática) | Agentes + Persona | 5–8 piezas nuevas |

### Mes 2 (diciembre de 2026 a principios de enero de 2027) — escalar y sistematizar
| Tarea | Responsable | Entregable |
|---|---|---|
| Pasar los ganadores a ESCALA; cortar "llega para Navidad" según los plazos | Persona | Campaña ESCALA |
| Pivotar a Reyes (06/01) y a regalos atrasados ("gift card al instante", si está activa) | Agentes + Persona | 6 piezas Reyes |
| Pedir reseñas y fotos con permiso a los primeros clientes (Rakun + mensaje) | Persona | Primeros testimonios reales |
| Primeros testimonios en estático y video (solo reales) | Persona + agentes | 3 piezas de prueba social |
| `armador-variantes` con Canva MCP o Placid; reporte semanal con n8n | Agente + Persona | Lotes automáticos; email semanal |
| Revisar el stack: ¿pasar a "pro"? Solo si el CPA da y hay volumen | Persona | Decisión documentada |
| Planificar el calendario de febrero a mayo (San Valentín, vuelta a clases, 23/04, Hot Sale) | `estratega-angulos` + Persona | Calendario con briefs |

---

## 10. Anexos: plantillas y prompts base

### 10.1 Brief de creativo
```markdown
# Brief — [CÓDIGO: C07_EST_REGALO]
- Fecha: AAAA-MM-DD · Responsable: [persona] · Estado: borrador / aprobado
- Objetivo: [frío / tibio / retargeting] · Canal: [Meta feed / Reels / TikTok]
- Ángulo: [regalo para quien lee] · Hipótesis: "[si mostramos X, la persona Y siente Z]"
- Público: [quién, qué le pasa, qué objeción tiene]
- Formato: [hero / carrusel 4 / antes-después / UGC / notas] · Tamaños: 4:5 (maestro), 1:1, 9:16
- Gancho (texto en imagen, ≤ 8 palabras): "…"
- Texto principal (1–3 líneas): "…"
- Título: "…" · CTA: [Comprar ahora / Ver diseños]
- Escena (IA o real): [descripción] · Hueco limpio para el sello: [dónde]
- Producto real: [archivo de assets/producto/…] · Sello: [assets/sellos-svg/diseño_NOMBRE.png]
- Prueba: [macro real / reseña real con permiso / tabla de métodos]
- Afirmaciones usadas (tienen que ser reales): [envío gratis / 90 días / 50 stickers]
- Paleta y tipos: #16423C · #FEFDF8 · Alike / Passion One / Poppins
- Etiqueta de IA: [sí/no] · Música: [Sound Collection: tema / CML: tema]
- Referencia (solo inspiración): [link de la ficha de competencia]
```

### 10.2 Ficha de análisis de anuncio de competencia
```markdown
# Ficha — [Marca] · [link de la Ad Library / Creative Center] · visto el AAAA-MM-DD
- Activo desde: [fecha] · Variantes del mismo concepto: [N] · Plataformas: [FB/IG/TT]
- Formato: [UGC / estático / carrusel / video producto] · Duración: [s] · Relación de aspecto: [9:16]
- Gancho (0–3 s): texto en pantalla "…" · imagen "…" · audio "…"
- Tipo de gancho: [problema / curiosidad / POV / beneficio / prueba social / patrón roto]
- Ángulo: [regalo / legado / identidad / sin tinta / precio]
- Estructura con tiempos: 0–3 s … / 3–7 s … / 7–14 s … / 14–20 s … / CTA …
- Prueba usada: [demo / reseñas / cifra / comparación]
- Oferta: [descuento / regalo / pack / envío] · CTA: "…"
- Landing: [a dónde lleva, qué ve primero]
- Qué funciona y por qué (1–2 líneas):
- Cómo lo haríamos NOSOTROS (sin copiar ejecución, texto ni material):
- Riesgos (afirmaciones que no podemos hacer, cosas que no tenemos):
```

### 10.3 Plantilla de guion de video
```markdown
# Guion — [CÓDIGO: C03_VID_POVREGALO] · Duración objetivo: 18 s · 9:16
| Tiempo | Visual (toma) | Origen (real/prov/IA) | Texto en pantalla | Voz / sonido |
|---|---|---|---|---|
| 0–2 s | Caja envuelta en manos | Real | "POV: le regalás esto a tu amiga que tiene 400 libros" | Papel de regalo (ASMR) |
| 2–5 s | Abre el estuche | Real | — | Clic |
| 5–10 s | Emboza la primera página, macro | **Real (obligatorio)** | "Con su nombre. Para siempre." | Clic del sello |
| 10–14 s | Pasa el dedo por el relieve | Real | "Sin tinta. Cuida las hojas." | — |
| 14–18 s | Pack + stickers | Real | "50 stickers dorados de regalo · [condición real]" | — |
| CTA | Logo chico + botón | — | "Elegí tu diseño" | — |

Ganchos alternativos (los mismos 2 s, otro texto o imagen):
H1 (problema): "Prestaste un libro y nunca volvió."
H2 (curiosidad): "Esto es lo que hace que tus libros sean tuyos."
H3 (POV): "POV: tu biblioteca por fin tiene firma."
H4 (beneficio): "Tu nombre en relieve, sin una gota de tinta."
H5 (prueba social, SOLO con datos reales): "[N] lectores ya lo tienen."
Etiqueta de IA: no (todo real) · Música Meta: [tema] · Música TikTok: [tema CML]
```

### 10.4 Banco inicial de ganchos (rioplatense)
1. "Prestaste un libro y nunca volvió. Esto lo arregla."
2. "Tu biblioteca, con tu nombre. Para siempre."
3. "El regalo para la que ya tiene todos los libros."
4. "POV: le regalás esto a tu amiga lectora."
5. "Así se ve tu nombre en relieve." (+ macro real)
6. "Ni tinta, ni etiquetas que se despegan."
7. "Dentro de 50 años, tus libros van a decir de quién fueron."
8. "Para la seño que nos hizo leer."
9. "Cosas que solo entiende alguien con 300 libros."
10. "El clic más lindo del mundo." (ASMR)
11. "Elegí el diseño, escribí el nombre, listo."
12. "Lo que le faltaba a tu biblioteca."
13. "De la biblioteca de… ¿quién?" (se completa con el nombre)
14. "Regalo personalizado que no termina en un cajón."
15. "Si sos de las que huelen los libros nuevos, esto es para vos."

### 10.5 Prompts base

**10.5.1 Copy (Claude, con la skill de marca)**
```
Sos redactor/a publicitario/a de Susurros en Relieve (embosador de libros personalizado, Argentina).
Tono: emotivo, nostálgico, cálido; castellano rioplatense con voseo; frases cortas.
Ángulo: {ángulo}. Público: {público}. Formato: {formato}.
Escribí 3 variantes de: (a) texto en imagen ≤ 8 palabras, (b) texto principal de 1–3 líneas, (c) título ≤ 40 caracteres.
Solo podés afirmar: {lista de afirmaciones reales activas}. Prohibido: cifras de ventas/reseñas, "% OFF",
precios tachados, testimonios, "acero/de por vida" salvo que estén en la lista. No menciones otras marcas.
Devolvé una tabla con código H01…, y marcá cualquier frase que suene a traducción.
```

**10.5.2 Guion y ganchos (Claude)**
```
Escribí un guion de {duración} s, 9:16, formato {formato}, para Susurros en Relieve.
Estructura: gancho 0–2/3 s → producto → demo (la toma del relieve es SIEMPRE real) → prueba → CTA.
Usá solo estos clips disponibles: {lista de clips con descripción}. Marcá el origen de cada toma (real/proveedor/IA).
Los textos en pantalla tienen que contar la historia sin sonido. Dame 5 ganchos alternativos de distinto tipo
(problema, curiosidad, POV, beneficio, prueba social solo si hay datos: {datos}).
Agregá: lista de tomas a grabar, hoja de edición (clip, in/out, texto) y si requiere etiqueta de IA.
```

**10.5.3 Escena estática con hueco limpio (Nano Banana Pro / GPT Image 2)**
```
Photorealistic lifestyle product photo, vertical 4:5. A warm reading nook in a Buenos Aires apartment:
light oak table, an open hardcover book with a BLANK cream page facing the camera, a cup of mate,
soft window light coming from the left at a low angle (raking light), shallow depth of field.
Leave the lower-right area of the open page completely clean and empty: no text, no stamp,
no letters, no logos anywhere on the page. Book spines in the background must be plain, without readable titles.
Color palette: deep green (#16423C), cream (#FEFDF8), natural wood. Editorial, cozy, nostalgic.
[Si se usa referencia:] Use the attached image as the exact embosser product: keep its shape, proportions
and color identical; do not add any text or logo to it.
```
Variantes de escena: biblioteca antigua con escalera; regalo envuelto en papel kraft con moño verde; manos de una abuela con un libro; mesa navideña; escritorio de una docente con dibujos de chicos.

**10.5.4 B-roll de video (Veo 3.1 en Flow — Ingredients / Kling imagen a video)**
```
8-second vertical (9:16) shot, locked-off camera with a very slow push-in.
Late afternoon golden light through a window falls across an old home library with wooden shelves.
Dust particles float. No people. No readable text anywhere; book spines plain.
Mood: nostalgic, warm, quiet. Realistic, cinematic, 35mm.
[Ingredients: up to 3 reference images on plain background — e.g., the wrapped gift box, the embosser]
Keep the referenced objects identical in shape and color. Do not render any letters on them.
```
Para Kling (imagen a video desde tu foto compuesta): "Subtle camera push-in, the page stays still, warm light flickers slightly. Keep every detail of the stamp exactly as in the source image. 4 seconds." Si el sello se deforma, aplicá 5.4.

**10.5.5 Voz (ElevenLabs)**
- Texto: el guion con pausas marcadas con "…" y frases de 6–10 palabras.
- Estabilidad media-alta y estilo bajo (para que no "actúe" de más) [ajustar probando].
- Pedile al agente que reescriba para el oído: "tus libros" en vez de "sus volúmenes", etc.

**10.5.6 Midjourney (solo ambiente, sin producto)**
```
cozy home library at dusk, warm lamp light, old wooden shelves, an empty reading armchair,
deep green and cream palette, nostalgic editorial photography, no text --ar 4:5 --style raw
```

### 10.6 Checklist de calidad (antes de publicar)
**Producto y sello**
- [ ] El sello es real o es la vista previa SVG de la web; la IA no escribió ninguna letra.
- [ ] El texto del sello está bien letra por letra; tiene ≤ 20 caracteres; está en mayúsculas; arriba dice "DE LA BIBLIOTECA DE".
- [ ] El diseño del sello es propio (no es de TWP, MBE ni de otra marca).
- [ ] El color del aparato existe en el catálogo.
- [ ] El tamaño del sello en la hoja es proporcional al real.
- [ ] No hay manos raras, objetos derretidos ni lomos con títulos reales legibles.

**Legal y políticas**
- [ ] Cada cifra, reseña, "% OFF", precio tachado, envío o garantía es real y está activo hoy.
- [ ] El precio está en pesos, es final y es igual al de la tienda.
- [ ] No hay testimonios inventados ni voz o avatar de IA como "clienta".
- [ ] El material de terceros tiene autorización escrita (`permisos/`); no hay logos ajenos.
- [ ] La música es de Sound Collection (Meta), de la CML (TikTok) o tiene licencia comercial.
- [ ] Los materiales de CapCut están marcados "Commercial use".
- [ ] TikTok: interruptor de IA activado si hay imagen, video o voz de IA.

**Formato**
- [ ] Están los tamaños 4:5, 1:1 y 9:16; el texto y el sello están dentro de la zona segura (15 % arriba, 25 % abajo, 60 px a los costados).
- [ ] Los subtítulos están revisados palabra por palabra ("embosador").
- [ ] Se lee en un celular a un brazo de distancia (probalo en tu teléfono).
- [ ] Tipografías y colores de marca.

**Organización**
- [ ] El archivo y el anuncio están nombrados según 10.7.
- [ ] El link lleva a la página correcta, con parámetros UTM.

### 10.7 Nomenclatura de archivos y anuncios
**Archivos:** `AAAAMMDD_C{nn}_{FORMATO}_{ANGULO}_H{nn}_V{n}_{RATIO}.{ext}`
- Ejemplo: `20261115_C07_EST_REGALO_H02_V1_4x5.png`
- Formatos: `EST` (estático), `CAR` (carrusel), `VID`, `UGC`, `ASMR`, `TUT`, `CMP` (comparativa), `TES` (testimonio).
- Ángulos: `REGALO`, `LEGADO`, `IDENT`, `SINTINTA`, `PRESTAR`, `SENO`, `OFERTA`, `FECHA-NAV`, `FECHA-REY`, etc.

**Anuncios (en Ads Manager):** `C07 | EST | REGALO | H02 | V1 | Escena:mate | Sello:real | 2026-11-15`
- El separador `|` permite separar las columnas en una planilla (lo usa `analista-resultados`).
- **Campañas:** `TEST | Ventas | AR | 2026-11` y `ESCALA | Ventas | AR`.
- **Conjuntos:** `Amplio 25-65 | Adv+ | Compra`.

**Carpetas:**
```
creativos/
  assets/{producto,relieve,sellos-svg,clips,marca}/
  competencia/   guiones/   briefs/   permisos/   resultados/
  exportados/AAAA-MM/
```

### 10.8 Texto modelo para pedir autorización al proveedor
**Castellano:**
> Hola [nombre]. Para vender sus embosadores en Argentina necesito usar las fotos y videos que nos enviaron. ¿Nos pueden confirmar por escrito que: (1) ustedes son los titulares de los derechos de ese material o están autorizados a cederlo; (2) nos autorizan a editarlo (cortar, subtitular, agregar voz y música, combinarlo con otras imágenes); (3) nos autorizan a usarlo en nuestra tienda online, redes sociales y **anuncios pagos** en Meta (Facebook e Instagram), TikTok y Google, sin límite de tiempo; (4) las personas que aparecen dieron su consentimiento; (5) si el material lo comparten con otros revendedores. Por favor, envíen los archivos originales sin marca de agua. ¡Gracias!

**English (proveedores del exterior):**
> Hi [name]. To sell your embossers in Argentina we need to use the photos and videos you sent. Could you confirm in writing that: (1) you own the rights to this material or are authorized to license it; (2) we may edit it (cut, add captions, voice-over and music, combine with other footage); (3) we may use it on our online store, social media and **paid ads** on Meta (Facebook/Instagram), TikTok and Google, with no time limit; (4) any people shown have given consent; (5) whether this material is also shared with other resellers. Please send the original files without watermarks. Thank you!

### 10.9 Calculadora de CPA objetivo (completar con datos reales)
```
Precio de venta final (con IVA)            P = $[ ]
− IVA incluido (si sos RI)                  = $[ ]
− Costo del producto puesto                 = $[ ]
− Envío a cargo nuestro (si "envío gratis") = $[ ]
− Comisión de pago (Pago Nube / MP)         = $[ ]
− Stickers + estuche + packaging            = $[ ]
= Margen de contribución                   M = $[ ]
CPA de equilibrio = M      ·  CPA objetivo = M × 0,6 (deja 40 % del margen)
ROAS de equilibrio = P ÷ M
```

---

## 11. Fuentes y lista de lo no verificado

**Todas consultadas el 03/11/2026.** Entre paréntesis, la fecha de la fuente cuando se conoce.

### 11.1 Fuentes primarias (oficiales)
- Meta — Copyrights and Trademarks (ads): https://transparency.meta.com/policies/ad-standards/intellectual-property-infringement/copyright-and-trademarks
- Meta — How AI-generated images in ads are identified and labeled: https://www.meta.com/help/artificial-intelligence/355108217670024/
- Meta Newsroom — Expanding GenAI Transparency for Meta's Ads Products (feb. 2025): https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/
- Meta — About learning limited: https://en-gb.facebook.com/business/help/269269737396981
- Meta — Last Significant Edit: https://www.facebook.com/business/help/942374239243867
- Meta — About the Learning Phase: https://www.facebook.com/business/help/112167992830700/
- Instagram Help — Sound Collection: https://help.instagram.com/ipad-app/402084904469945
- TikTok Ads — Misleading and false content (abr. 2026): https://ads.tiktok.com/help/article/tiktok-ads-policy-misleading-and-false-content
- TikTok Ads — About ad disclaimers in TikTok Ads Manager: https://ads.tiktok.com/help/article/about-ad-disclaimers-in-tiktok-ads-manager
- TikTok Ads — About Carousel Ads: https://ads.tiktok.com/help/article/carousel-ads
- TikTok — Symphony AI creative suite: https://ads.tiktok.com/business/en-US/blog/tiktok-symphony-ai-creative-suite
- OpenAI Help — What to know about the Sora discontinuation (2026): https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- Canva — MCP docs: https://www.canva.dev/docs/apps/mcp/
- CapCut — Materials License Agreement: https://www.capcut.com/material-license-agreement
- Photoroom — Pricing (planes y créditos; sin precios visibles): https://www.photoroom.com/pricing
- GCBA Defensa del Consumidor — Lealtad Comercial (DNU 274/2019, art. 11): https://www.buenosaires.gob.ar/defensaconsumidor/lealtad-comercial-0

### 11.2 Fuentes secundarias (prensa, agencias, comparadores)
**Políticas e IA**
- Commonthread (2026): https://commonthreadco.com/blogs/coachs-corner/meta-ai-ad-labels-mandatory-disclosure-ecommerce-2026
- Cinerads (2026): https://www.cinerads.com/blog/ai-ugc-facebook-ad-policy · https://www.cinerads.com/blog/tiktok-ai-content-policy
- Coblentz Law (AI influencers): https://www.coblentzlaw.com/news/ai-influencers-and-liability-what-marketing-agencies-need-to-know-before-deploying-ai-tools-2/
- Makeinfluence (AI UGC): https://www.makeinfluence.com/en/academy/ai-generated-synthetic-ugc-ads-when-a-brand-uses-an-ai-actor-instead-of-a-real-creator
- Haverford DS-CRIM (material de proveedores): https://ds-crim.haverford.edu/blog/using-alibaba-supplier-images-a
- Coinis (copiar anuncios legalmente): https://coinis.com/how-to/best-way-to-copy-competitor-facebook-ad-legally

**Ley argentina**
- Marval O'Farrell Mairal (Res. 241/2020): https://www.marval.com/publicacion/nueva-reglamentacion-del-regimen-sobre-lealtad-comercial-13776

**Impuestos y dólar**
- Comercio y Justicia (fin de la percepción del 30 %, ene. 2026): https://comercioyjusticia.info/economia/el-recargo-del-30-seguira-vigente-para-servicios-turisticos-abonados-en-pesos/
- InfoViajera (dic. 2025): https://www.infoviajera.com/2025/12/desde-enero-ya-no-regira-el-recargo-del-30-por-compras-con-tarjeta-en-dolares/
- iProfesional (08/01/2026): https://www.iprofesional.com/impuestos/445594-dolar-tarjeta-paso-a-paso-para-no-pagar-la-percepcion-del-30-por-ciento-de-arca-ex-afip
- Kintsugi (IVA Argentina 2026): https://trykintsugi.com/sales-tax-guides/latam/argentina
- El Cronista (dólar oficial, nov. 2026): https://cronista.com/finanzas-mercados/el-dolar-oficial-toco-su-maximo-del-ano-y-la-brecha-con-el-blue-cayo-a-minimos-de-cuatro-meses
- Dolarhoy (02/11/2026): https://dolarhoy.com/cotizacionbanconacion

**Testeo, volumen y Andromeda**
- Jon Loomer (Creative Testing): https://www.jonloomer.com/meta-creative-testing/
- Segwise (Andromeda 2026): https://segwise.ai/blog/meta-andromeda-update-creative-strategy-2026
- Segwise (estático vs. video): https://segwise.ai/blog/static-video-ratio-meta-ads
- Segwise (estrategia creativa e-commerce 2026): https://segwise.ai/blog/meta-creative-strategy-ecommerce-2026
- Segwise (tipos de creativo en TikTok 2026): https://segwise.ai/blog/latest-tiktok-ad-creative-types-2026.md
- Atria (Andromeda): https://www.tryatria.com/blog/meta-andromeda-update
- TheOptimizer (2026): https://theoptimizer.io/blog/how-to-test-ad-creatives-on-meta-after-the-andromeda-update-2026-playbook
- Chatterbuzz (testing): https://chatterbuzzmedia.com/blog/ad-creative-testing/
- Alex Neiman (presupuesto chico): https://alexneiman.com/ai-creative-testing-low-budget-meta-ads/
- Entreresource: https://entreresource.com/meta-ads-creative-testing-system-ecommerce/
- AdManage: https://admanage.ai/blog/creative-testing-budget-guide
- Superscale (benchmarks, 23/07/2026): https://superscale.ai/learn/creative-testing-benchmarks/
- Taylor Sicard: https://taylorsicard.com/blog/meta-ads-creative-benchmarks-2026
- MagicMango (velocidad creativa): https://www.magicmango.ai/en/blog/creative-velocity-the-ad-metric-that-predicts-your-cac-befor-en · https://www.magicmango.ai/en/blog/creative-velocity-the-metric-that-predicts-whether-your-ad-s-en
- Billo (cuántos creativos): https://billo.app/blog/how-many-ad-creatives-do-you-need/
- Billo (zonas seguras): https://billo.app/blog/meta-ads-safe-zones
- AdNabu (zonas seguras): https://blog.adnabu.com/meta-ads/meta-safe-zones/
- Knowlify (especificaciones de video): https://knowlify.com/articles/meta-video-ad-specs

**Formatos**
- Admetrics (estáticos 2026): https://www.admetrics.io/post/five-static-ad-formats-outperforming-video-in-2026
- Trendtrack (ejemplos de estáticos): https://www.trendtrack.io/blog-post/static-ads-examples
- AdMapix (guion UGC): https://www.admapix.com/blog/best-practices/ugc-video-ad-script-template
- Captions (guía UGC): https://captions.ai/help/guides/marketing/ugc-ad

**Herramientas — imagen**
- eesel (Midjourney): https://eesel.ai/blog/midjourney-pricing
- eesel (Ideogram): https://eesel.ai/blog/ideogram-pricing
- apiframe (Nano Banana Pro): https://apiframe.ai/guides/nano-banana-pro-guide
- evolink (Nano Banana Pro API): https://evolink.ai/blog/nano-banana-pro-api-review-pricing-features-integration
- Krater (Nano Banana gratis): https://krater.ai/blog/is-nano-banana-free
- dev.to (GPT Image 2): https://dev.to/tokenmixai/gpt-image-2-api-developer-guide-pricing-thinking-mode-and-production-integration-2026-28p5
- invideo (FLUX, ago. 2026): https://invideo.io/blog/flux-ai-image-generator/
- costbench (Adobe Firefly): https://www.costbench.com/software/ai-image-generators/adobe-firefly/
- Recurdash (Photoroom, 31/07/2026): https://recurdash.com/subscription-pricing/photoroom
- costbench (Photoroom): https://costbench.com/software/ai-design-tools/photoroom
- Kive (Claid, 19/10/2026): https://kive.ai/learn/kive-vs-claid-ai
- Claid vs. Photoroom: https://claid.ai/blog/article/claid-vs-photoroom
- LetsEnhance (scene creation): https://letsenhance.io/blog/all/scene-creation/
- PetaPixel (Pomelli, 20/02/2026): https://petapixel.com/2026/02/20/googles-pomelli-photoshoot-feature-is-here-to-hammer-nails-into-the-coffin-of-photography
- dev.to (Magnific vs Topaz vs Krea): https://dev.to/raxxostudios/magnific-vs-topaz-vs-krea-which-ai-upscaler-actually-works-3j87
- toolradar (upscalers 2026): https://toolradar-site.pages.dev/best-ai-image-upscaling-tools-2026
- Rewarx (texto distorsionado): https://www.rewarx.com/blogs/fix-distorted-text-on-ai-product-image-how-to-correct-typography-errors
- LaoZhang (logo en video de IA): https://blog.laozhang.ai/en/posts/fix-logo-distortion-ai-product-video.md
- Search Engine Land (IA generativa de Meta): https://searchengineland.com/meta-generative-ai-tools-automated-video-branding-creative-ads-457221 · https://searchengineland.com/meta-generative-ai-video-advertising-tools-447367
- Flighted (mejoras de Advantage+): https://www.flighted.co/blog/metas-advantage-plus-ai-creative-enhancements-each-one-explained

**Herramientas — diseño y automatización**
- Engadget (Claude y Canva): https://engadget.com/ai/claude-ai-now-integrates-with-canva-201808571.html
- Bannerbear vs. Creatomate (2026): https://www.bannerbear.com/blog/bannerbear-vs-creatomate/
- Orshot (generación por plantillas): https://orshot.com/blog/template-based-image-generation-tools
- Creatomate (APIs de video): https://creatomate.com/blog/the-best-video-generation-apis
- Sliplane (n8n): https://sliplane.io/blog/n8n-pricing
- Toolradar (n8n 2026): https://toolradar.com/blog/n8n-pricing-2026
- Zapier (precios de Make): https://zapier.com/blog/make-com-pricing/

**Herramientas — LLM y suscripciones de Google**
- Noqta (Claude Pro y Claude Code): https://www.noqta.tn/blog/claude-code-pricing-2026
- geotoolbox (Gemini en AR, ago. 2026): https://geotoolbox.ai/es/blog/precio-gemini
- MDZ (ChatGPT Go en AR): https://www.mdzol.com/tecnologia/llego-chatgpt-go-la-argentina-el-plan-barato-ia-cuesta-6-dolares-n1407017

**Herramientas — video**
- eesel (Kling): https://www.eesel.ai/en/blog/kling-ai-pricing
- aitoolsatlas (Flow): https://aitoolsatlas.ai/tools/google-flow/pricing
- YourStory (Veo 3.1 y Flow): https://yourstory.com/ai-story/google-veo-31-flow-ai-editing-tool
- Creatify sobre Runway: https://creatify.ai/blog/runway-pricing-(2026)-plans-credits-and-what-you-ll-actually-pay
- Magic Hour (Hailuo): https://magichour.ai/blog/hailuo-23-pricing
- costbench (Higgsfield): https://costbench.com/software/ai-video-generators/higgsfield/
- Creatify sobre HeyGen (oct. 2026): https://creatify.ai/blog/heygen-pricing-(2026)-plans-and-what-you-ll-actually-pay
- eesel (Arcads): https://eesel.ai/blog/arcads-ai-pricing
- Shelby AI (Creatify): https://www.shelby-ai.com/pricing/creatify/
- eesel (CapCut): https://eesel.ai/blog/capcut-pricing
- Autoae (CapCut, uso comercial): https://autoae.online/blog/is-capcut-free-for-commercial-use
- fluxnote (Submagic): https://fluxnote.io/guides/submagic-pricing-2026

**Herramientas — voz y música**
- dupple (ElevenLabs, oct. 2026): https://dupple.com/pricing/elevenlabs
- Bigvu (ElevenLabs): https://bigvu.tv/blog/elevenlabs-pricing-2026-plans-credits-commercial-rights-api-costs/
- Music Business Worldwide (Sound Collection): https://musicbusinessworldwide.com/meta-offers-royalty-free-music-library-to-instagram-reels-advertisers
- Soundstripe (biblioteca de TikTok): https://www.soundstripe.com/blogs/tiktok-music-library-explained
- BityClips (Epidemic Sound): https://bityclips.com/tool/epidemic-sound/pricing
- Artyfile (Artlist vs. Epidemic 2026): https://www.artyfile.com/blog/artlist-vs-epidemic-sound-vs-artyfile-comparison-2026

**Investigación de competencia**
- Toolradar (Foreplay, 18/08/2026): https://toolradar.com/tools/foreplay
- ToolChase (Atria, may. 2026): https://toolchase.com/blog/atria-review-2026/
- xpr.media (MagicBrief): https://xpr.media/?p=825921
- Creatify (TikTok Creative Center): https://creatify.ai/blog/tiktok-creative-center
- Coinis (Meta Ad Library): https://coinis.com/glossary/meta-ad-library
- Ryze (Meta Ad Library): https://get-ryze.ai/blog/meta-ads-library

**Calendario**
- Canal 26 (CyberMonday 2026): https://www.canal26.com/economia/2026/10/29/llega-el-cybermonday-2026-cuando-empieza-que-ofertas-habra-y-como-encontrar-los-mejores-descuentos/
- Mercado (Hot Sale 2026): https://mercado.com.ar/agenda/cace-abrio-las-contrataciones-para-hot-sale-2026-previsto-del-11-al-13-de-mayo

### 11.3 Lista de lo que quedó [No verificado] o con fuentes contradictorias
1. **Precios oficiales:** las páginas de Midjourney, Canva, Ideogram y otras no se pudieron leer. Los precios salen de comparadores de 2026. **Canva Pro en pesos** no se pudo ver.
2. **Percepción del 30 % en tarjeta:** las fuentes se contradicen (eliminada desde el 02/01/2026 vs. vigente para servicios digitales). Tampoco verifiqué el IIBB por provincia ni si cada herramienta acepta tarjetas argentinas.
3. **Meta:** si la declaración de IA es ahora obligatoria para todos los anuncios (los blogs dicen que sí; la ayuda oficial solo lo exige para temas políticos y sociales). Las zonas seguras exactas de 9:16 (14 % arriba, de 14 % a 23 % abajo según la fuente). La recomendación de 7 días de test atribuida a Meta. El tope de anuncios de Creative Testing (5 o 10).
4. **TikTok:** si la voz sintética no clonada requiere etiqueta (la política oficial sugiere que sí; un blog dice que no). Si Argentina aparece en el filtro de Top Ads del Creative Center. Si Seedance 2.0 está gratis en Symphony (según un blog de julio de 2026).
5. **Google:** el costo en créditos de Flow por clip (Lite, Fast, Quality), los créditos gratis de Flow y el límite diario de Nano Banana en el plan gratis.
6. **Runway:** si el plan Standard incluye uso comercial (las fuentes se contradicen).
7. **Kling, Photoroom, Arcads y Creatify:** los precios exactos varían según la fuente (precios de lanzamiento vs. de renovación, páginas que esconden los precios).
8. **MagicBrief:** el cierre el 31/07/2026 tras la compra de Canva.
9. **Pomelli Photoshoot** en Argentina.
10. **Photopea** (gratis) y el **MCP de Figma**: no se verificaron en esta consulta.
11. **CapCut:** la fecha de vigencia del acuerdo de licencia de materiales (22/01/2026 según secundarios), el seguimiento de movimiento en tu versión y los precios por país.
12. **Rendimiento comparado** de los formatos ASMR, unboxing y POV regalo: no hay datos de 2026. Se validan con test.
13. **Fechas:** Hot Sale y CyberMonday 2027, la Feria del Libro 2027 y el inicio de clases por provincia.
14. **Ley:** ⚖️ precio tachado (plazo y forma del precio anterior), publicidad comparativa (DNU 274/2019), derecho a la imagen (art. 53 del CCyC) y alcance de las Leyes 11.723 y 22.362. Todo para validar con un abogado.
15. **Datos del producto** que condicionan los anuncios: material, diámetro del sello, plazos de producción y envío, colores y precios. Están pendientes en `relevamiento/` y dependen del proveedor.
