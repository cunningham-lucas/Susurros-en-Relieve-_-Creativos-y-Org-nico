\# The Whispering Pages — Manual de marca web (ingeniería inversa)

&#x20;

\*\*Sitio:\*\* thewhisperingpages.com · \*\*Relevado:\*\* 27/10/2026 · \*\*Anchos:\*\* 1440 px (escritorio) y 390 px (móvil)

\*\*Método:\*\* variables CSS del tema, `@font-face`, estilos computados de los elementos y JSON de productos (`/products/<handle>.js`). Las capturas son solo de referencia interna.

\*\*Convención:\*\* todo valor que no salió del código está marcado \*\*\[No verificado]\*\*. Los textos del sitio están parafraseados; las citas son fragmentos de menos de 15 palabras.

\*\*Archivos que acompañan:\*\* `whispering-pages-tokens.css` (variables listas para usar) y `whispering-pages-guia-visual.html` (componentes recreados).

&#x20;

\---

&#x20;

\## 1. Resumen

&#x20;

\*\*Posicionamiento y tono\*\*

1\. Venden un objeto funcional (sello seco para libros) como \*\*pieza emocional y heredable\*\*: "tu biblioteca, con tu nombre".

2\. El tono es romántico, de "magia" y nostalgia vintage ("mágico", "susurra", "legado", "artesanos").

3\. La prueba social es masiva y repetida: cifras de vendidos, miles de reseñas, fotos de clientes.

4\. La oferta es permanente: precio tachado, "SALE 30% OFF", stickers dorados de regalo y garantía de 90 días.

5\. La estética combina verde bosque con crema y titulares tipográficos muy pesados. Se percibe más "marca DTC agresiva" que "boutique literaria".

\*\*A quién le habla\*\*

\- \*\*Lector/a para sí:\*\* coleccionar, marcar la biblioteca, que los libros prestados vuelvan.

\- \*\*Comprador/a de regalo:\*\* es el segundo público y probablemente el más grande. Lo trabajan en:

&#x20; - un bloque propio en la home ("hacé el regalo especial");

&#x20; - el bundle principal de la página de producto ("Ultimate Gift Bundle", con subtítulo "ideal para regalar 🎁");

&#x20; - packaging premium como upsell;

&#x20; - una gift card \*\*nominada en embosadores\*\* (1, 2 o 3) en lugar de montos;

&#x20; - pop-ups de temporada (regalo navideño "sellado");

&#x20; - las reseñas de Loox: casi todas cuentan que fue un regalo (a hermana, esposa, hija, sobrina, novio).

\*\*Plataforma y apps detectadas\*\*

&#x20;

| Función | Herramienta | Evidencia |

|---|---|---|

| Plataforma | \*\*Shopify\*\* (tienda `f2d95c-8a.myshopify.com`) | `window.Shopify` |

| Tema | \*\*Dawn 13.0.1\*\* personalizado ("the-whispering-pages/main") | `Shopify.theme.schema\_name` |

| Constructor de páginas | \*\*GemPages\*\* (home, colecciones, página de producto) | clases `.gps`, scripts `assets.gemcommerce.com` |

| Personalizador de producto | \*\*Cloudlift Product Options\*\* (vista previa en canvas con fabric.js) | `assets.cloudlift.app`, clases `cl-po--\*` |

| Bundles y descuentos por cantidad | \*\*Kaching Bundles\*\* (+ Kaching Subscriptions para el suplemento) | extensión `kaching-bundles`, config JSON |

| Carrito lateral, regalo automático y upsells | \*\*UpCart\*\* | `#upCart` (shadow DOM) |

| Reseñas | \*\*Loox — confirmado\*\* (widget `iR2U-hq0RC`, 14.259 reseñas) | iframe `loox.io/widget/...` |

| Pop-ups y teaser de email | \*\*Klaviyo\*\* (formularios de 1 y 2 pasos) | `static.klaviyo.com`, clases `kl-\*` |

| SMS | \*\*OneText\*\* | `onetext.com/sdk` |

| Barra de anuncios | \*\*Essential Announcement Bar\*\* | extensión `essential-announcement` |

| Contador de urgencia | \*\*Countdown Timer\*\* (app instalada; no lo vi activo) | extensión `countdown-timer` |

| Tests A/B | \*\*Shoplift\*\* (sin test activo para mi visita) | `shoplift-tests.js` |

| Seguimiento de envíos | \*\*ParcelPanel\*\* (`/apps/parcelpanel`) | menú "Track Order" |

| Búsqueda | Búsqueda predictiva nativa de Dawn | `predictive-search.js` |

| Pagos express | Shop Pay ("Buy with Shop"), Apple Pay, Google Pay, PayPal | botón en la página de producto, íconos |

| Analítica | GA4/GTM, Google Ads, Meta Pixel, Microsoft Clarity, AppLovin | scripts |

| Chat | \*\*No detectado\*\* | — |

| Banner de cookies | No apareció desde Argentina (sí se carga la API de consentimiento) | — |

&#x20;

\---

&#x20;

\## 2. Tokens de diseño

&#x20;

\### 2.1 Color

&#x20;

Valores sacados de variables CSS (esquemas de color de Dawn, globales de GemPages, configuración de Kaching) y de estilos computados.

&#x20;

| Rol | HEX | Dónde se usa |

|---|---|---|

| Fondo principal | `#FFFFFF` | Esquema 1 de Dawn, cuerpo de páginas, PDP |

| Fondo alternativo (crema) | `#FEFDF8` / `#FEFDF9` | Header, bloques editoriales de la home |

| Crema del tema | `#F7F2EC` | Esquema personalizado del tema |

| Superficie oscura | `#16423C` | Bandas verdes de la home, reseñas, botón "Learn More" |

| Superficie oscura (pop-up) | `#18413D` | Formularios Klaviyo |

| Superficie oscura (colección) | `#15423C` | Hero de la colección de embosadores |

| Superficie suave | `#F6F6F7` | Tarjetas upsell y pie del carrito |

| Caja arena | `#C6BEB0` | Bloque FAQ de la página de producto |

| Fondo de grilla | `#DDDDDD` | Grilla de colección de embosadores |

| Texto principal | `#242424` | Titulares de secciones GemPages |

| Texto titular hero | `#151515` | H1 del hero, "FAQS" |

| Texto tema | `#121212` (menú al 75 %) | Dawn: menú, título de producto, cuerpo |

| Texto secundario | `#575757` | Cuerpo de secciones GemPages |

| Texto terciario | `#4D4D4D` / `#555555` | Precio tachado, labels del personalizador |

| Texto sobre oscuro | `#FFFFFF` | Bandas verdes |

| Bordes | `#000000` (0,8 px) en input; `#CCCCCC` en stepper; `#E2E2E2` en reseñas | — |

| Botón principal (compra) | `#366251` + texto `#FFFFFF` | Agregar al carrito, Checkout, "Add" de upsells, barra de anuncios |

| Botón hero | `#00BF64` + texto `#FFFFFF` | CTA "Shop Custom Embosser" |

| Botón secundario | `#16423C` sobre crema / `#FFFFFF` con texto `#16423C` sobre verde | "Learn More", "Shop Now" |

| Hover | Dawn no cambia el color de botones: hover = borde de 1,3 px; links pasan a color de primer plano; menú subraya con offset 0,3rem. Hover de los botones GemPages \*\*\[No verificado]\*\* | — |

| Precio de oferta | `#376251` (tarjetas) / `#242424` (home) | Precio actual |

| Oferta y descuento | Fondo `#2ACD7E` al 56 % + texto `#224C1D` ("SAVE $27,04"); "Savings" `#16A34A` | Kaching, carrito |

| Urgencia / prueba social | Fondo `#000000` + texto `#FFFFFF` ("95 % eligió esto") | Badge del bundle |

| Recompensa en carrito | Panel `#ECFDF5`, barra `#D1FAE5` → relleno `#10B981` | UpCart |

| Pop-up | Verde neón `#34F55B` ("50% OFF" y CTA); CTA navideño `#F4C805` | Klaviyo |

| Estrellas | `#EBBF20` | Loox |

| Error | `#EA3335` (global GemPages; no se vio un mensaje de error en pantalla) \*\*\[No verificado en UI]\*\*; selector de variante inválido en Kaching: sombra roja de 2 px | — |

| Overlay | `rgba(20,20,20,.6)` | Fondo de pop-ups |

&#x20;

Sobre los colores del embosador (Onyx, Rose, Rose Gold, Lavender, Gold, Forrest Green, Deep Ocean): los swatches son imágenes, así que \*\*no hay HEX en el código \[No verificado]\*\*. Aproximaciones por captura: negro, coral, rosa pálido, lila, amarillo, verde salvia y azul marino.

&#x20;

\### 2.2 Tipografía

&#x20;

\*\*Familias, origen y licencia\*\*

&#x20;

| Familia | Uso | Origen | Licencia web |

|---|---|---|---|

| \*\*Alike\*\* (serif) | H1 del hero de la home, pop-ups, CTA del hero | Google Fonts | OFL, libre |

| \*\*Passion One\*\* | Titulares de sección de la home y botones GemPages | Google Fonts | OFL, libre |

| \*\*Bayon\*\* | Hero de colecciones, botones de la colección de clips | Google Fonts | OFL, libre |

| \*\*General Sans\*\* | Cuerpo y subtítulos de secciones GemPages | Fontshare (Indian Type Foundry), subida como OTF a GemPages | ITF Free Font License: gratis para uso comercial; conviene releer los términos |

| \*\*Poppins\*\* | Fuente del tema: menú, PDP, carrito, Loox | Shopify Fonts / Google Fonts | OFL, libre |

| \*\*Assistant\*\* | Titulares del tema (H1 de páginas Dawn), barra de anuncios, búsqueda | Shopify Fonts / Google Fonts | OFL, libre |

| \*\*ITC Bookman Std Light\*\* | Texto de la vista previa del sello | Servida por Cloudlift | \*\*Comercial\*\* (Monotype/Adobe). Alternativa libre: TeX Gyre Bonum |

| Filson Pro | Subida a GemPages, no la vi en uso | Mostardesign | \*\*Comercial\*\* |

| GT Standard | La carga la interfaz de Shoplift, no es de la marca | — | No usar |

&#x20;

Ojo: el sitio mezcla \*\*seis familias\*\* visibles. Para el MVP alcanza con tres (display, serif del sello y sans de texto).

&#x20;

\*\*Escala tipográfica\*\* (computada; tamaño/interlineado en px; ls = espaciado entre letras)

&#x20;

| Estilo | Familia y peso | Escritorio | Móvil | Interlineado | ls | Mayúsculas |

|---|---|---|---|---|---|---|

| H1 hero home | Alike 700 | 63 | 35 | 69,3 / 42 | normal | No |

| H1 hero colección | Bayon 700 | 80 | 45 | 80 / 58,5 | 0,78 | La fuente es toda en caja alta |

| H1 páginas Dawn | Assistant 700 | 67,6 | \[No verificado] | 83,2 | 0,78 | No |

| H2 sección (home) | Passion One 400 | 56 (rango 40–80) | 50–70 | 1,3 | normal | "CUSTOM BOOK EMBOSSER" en mayúsculas; el resto en tipo título |

| H2 "FAQS" | Passion One 400 | 100 | \[No verificado] | 130 | normal | Sí (escrito así) |

| H3 / título de tarjeta | General Sans 700 | 28 | 22 | 42 / 33 | normal | No |

| Título de beneficio | General Sans 700 | 25 | 24 | 32,5 / 36 | normal | No |

| Título de producto (PDP) | Poppins 700 | 24 | 20 | 31,2 / 26 | 0,78 | No |

| Cuerpo | General Sans 400 | 16 | 14 | 28,8 / 25,2 | 0,6 | No |

| Cuerpo destacado (bajada hero) | General Sans 500 | 20 | 16 | 30 / 19,2 | 0,6 | No |

| Cuerpo (PDP, Dawn) | Poppins 400 | 16 | 14 | 28,8 / 25,2 | 0,6 | No |

| Cuerpo chico (firma, microcopy) | General Sans 400 | 13 | 13 | 22 / 18,2 | normal | No |

| Botón GemPages | Passion One 400 | 30 (contenedor 38) | 30 | 57 | 0,75 | No |

| Botón hero | Alike 400/700 | 38 | 20 | 21 (móvil) | normal | No |

| Botón agregar al carrito | Poppins 700 | 18 | 24 | 32,4 / 43,2 | normal | No |

| Navegación | Poppins 400 | 14 | 18 (menú lateral) | 18,2 / 23,4 | 0,6 | No |

| Barra de anuncios | Assistant 700 | 22 | 17 | 26,4 / 20,4 | normal | Sí (escrito así) |

| Precio | Poppins 700 (colección) / General Sans 700 (home) | 18 / 16 | 22 (home) | 32,4 / 24 | 0,6 | No |

| Precio tachado | Poppins 400 / Assistant 700 | 18 | 18 | — | 0,6 | No |

| Etiquetas (badges) | Fuente del sistema 400–700 | 12 | 12 | 16,8 | normal | "SAVE" en mayúsculas |

| Legend del personalizador | Poppins 400, `#4D4D4D` | 18 | 18 | 32,4 | 0,6 | No |

| Vista previa del sello | ITC Bookman Light, negro | Texto curvo; tamaño relativo al sello \*\*\[No verificado]\*\* | igual | — | Espaciado amplio \*\*\[No verificado]\*\* | Texto fijo superior en mayúsculas; el texto del cliente respeta lo que se escribe |

&#x20;

Variables globales de GemPages, por si se replica con ese constructor:

\- H1 46/400/130 %, H2 41, H3 52.

\- Cuerpo P1 16/180 %, P2 14, P3 10.

\- Subtítulos SH1 25, SH2 18, SH3 32.

\- En móvil (≤ 767 px): H1 41, H2 36, P1 14.

\### 2.3 Espaciado

&#x20;

\- \*\*Escala de GemPages:\*\* 2 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 80 · 112 px.

\- \*\*Entre secciones:\*\* Dawn tiene `--spacing-sections` en 0. Cada sección GemPages trae su propio relleno.

&#x20; - Altura de las bandas: entre 300 y 1300 px.

&#x20; - Relleno vertical interno de 60 a 100 px \*\*\[No verificado: deducido de alturas]\*\*.

\- \*\*Entre bloques dentro de una sección:\*\*

&#x20; - 24–32 px en la columna de compra de la PDP: 37 px entre bullets y 30–40 px entre opciones.

&#x20; - 40 px de gap horizontal en la grilla de colección.

\- \*\*Contenedores:\*\* 16 px de relleno en GemPages. En el header, 20 px arriba y abajo y 50 px a los costados.

\- \*\*Móvil:\*\* gutter de 15–16 px; el contenido mide 358–360 px en un viewport de 390.

\### 2.4 Layout

&#x20;

\- \*\*Ancho máximo:\*\* 1200 px (`--page-width: 120rem`, `--g-ct-w: 1200px`). Las bandas de color van a ancho completo.

\- \*\*Grillas:\*\*

&#x20; - Colección: 4 columnas en escritorio (tarjeta de 326 px en embosadores y 294 px en clips) y 2 en móvil.

&#x20; - Home: 2 columnas en productos (530 px) y 4 en beneficios.

&#x20; - Loox: masonry de 6 columnas.

\- \*\*Gutters:\*\* Dawn usa 8 px en escritorio y 4 px en móvil; GemPages, 32–40 px entre columnas.

\- \*\*Página de producto:\*\* dos columnas iguales de 584 px con gap de 32 (galería a la izquierda, compra a la derecha).

\- \*\*Breakpoints:\*\*

&#x20; - Dawn: 750 px y 990 px. Por debajo de 990 el header pasa a hamburguesa.

&#x20; - GemPages: 767 px (móvil) y 1024 px (tablet).

\### 2.5 Bordes, radios, sombras, íconos y animaciones

&#x20;

\*\*Radios\*\*

\- 0: botón de compra, inputs, imágenes y Checkout.

\- 6 px: botones GemPages y pop-ups.

\- 8 px: tarjetas Kaching y upsells.

\- 15 px: tarjeta flotante del carrito.

\- 40 px: pills de variante de Dawn (no se usan en la PDP).

\- 999 px: barra de progreso.

\*\*Bordes\*\*

\- Input del personalizador: 0,8 px negro.

\- Tarjetas Dawn: sin borde.

\- Bloque producto de Loox: 0,8 px `#E2E2E2`.

\*\*Sombras\*\*

\- Casi no hay.

\- Bundle activo: sombra interna de 2 px `#366251`.

\- Tarjeta de reseña Loox: `0 0 3px rgba(0,0,0,.2)`.

\- Foco del input: 1 px `#374151`.

\*\*Íconos\*\*

\- Header: estilo de línea de Dawn, trazo de 1 px, área de 44 × 44.

\- Bullets de la PDP: check circular negro relleno.

\- Beneficios y "trust": íconos ilustrados de línea \*\*\[No verificado: son imágenes]\*\*.

\*\*Divisores\*\*

\- Imágenes de borde rasgado / papel roto de 1425 × 47 px (13 px en móvil) entre bandas.

\- Separador caligráfico de 450 × 18 bajo el hero.

\*\*Animaciones\*\*

\- Dawn: duraciones de 0,1 / 0,2 / 0,3 / 0,5 / 0,6 s con curva `cubic-bezier(0,0,.3,1)`; botones con transición de color de 0,2 s.

\- GemPages: animaciones de entrada al hacer scroll (por eso las capturas salen en blanco hasta que se dispara cada bloque).

\- Galería del personalizador: fundido (Splide).

\- El carrito entra deslizando desde la derecha \*\*\[duración No verificada]\*\*.

\---

&#x20;

\## 3. Componentes

&#x20;

\### Barra de anuncios

\- \*\*Anatomía:\*\* texto centrado + emoji de regalo, sin link ni cierre.

\- \*\*Medidas:\*\* alto de 46 px, fondo `#366251`, Assistant 700 22 px blanco, relleno de 10 px. En móvil baja a 17 px.

\- \*\*Mensaje visto:\*\* descuento del 30 % + stickers dorados gratis. Es fijo; no rota.

\- \*\*Estados:\*\* no tiene hover.

\### Header y navegación

\- \*\*Escritorio:\*\*

&#x20; - Fondo `#FEFDF8`, alto de 155 px, sticky (se oculta al bajar y reaparece al subir, como en Dawn).

&#x20; - Logo ilustrado de 200 × 100 a la izquierda; menú en línea junto al logo; cuenta y carrito a la derecha (íconos de 44 px).

&#x20; - Ítems del menú: Poppins 14, color `#121212` al 75 %, relleno de 12 px. Los desplegables llevan chevron y 27 px de relleno a la derecha.

&#x20; - Hover del menú: subrayado con offset de 0,3rem y color pleno.

&#x20; - Desplegable: panel Dawn sin sombra, ítems Poppins 14, relleno de 8 × 20, ancho de 198 px.

\- \*\*Estructura del menú:\*\*

&#x20; - Shop ▸ Embosadores, Clips, Embosador con logo, Iniciales, Anillo antiestrés, Suplemento, Gift Card.

&#x20; - Sobre nosotros.

&#x20; - Atención al cliente ▸ Contacto, Envíos, Devoluciones, Suscripciones.

&#x20; - Seguimiento de pedido.

\- \*\*Ícono de búsqueda:\*\* en la home no se ve en escritorio; en el resto de las páginas sí \*\*\[No verificado el motivo]\*\*.

\- \*\*Móvil:\*\*

&#x20; - Alto de 110 px: hamburguesa a la izquierda, logo centrado de 150 × 75, carrito a la derecha.

&#x20; - El menú lateral de Dawn ocupa el ancho completo bajo el header, con fondo blanco. Ítems de 45 px de alto, Poppins 18, relleno de 11 / 52 / 11 / 30.

&#x20; - Los submenús entran deslizando; al pie aparecen "Iniciar sesión" (Poppins 700 14) y el selector de país.

\### Buscador

\- \*\*Escritorio:\*\* modal de búsqueda de Dawn a ancho completo (1440 × 157) que baja sobre el header. Input de 740 × 45 en 16 px.

\- \*\*Resultados predictivos:\*\*

&#x20; - Columnas "SUGERENCIAS" (encabezado Poppins 10 en mayúsculas) con términos en Assistant 700 16,9.

&#x20; - Productos con miniatura de 50 × 50.

&#x20; - Páginas.

&#x20; - Botón final "Buscar …".

\- \*\*Estados:\*\* foco con el borde de Dawn; botón para borrar el término.

\### Footer

\- Bloque newsletter de Dawn: "Suscribite a nuestros emails" en Assistant 700 23,4, con input y flecha.

\- Selector de país y moneda (Shopify Markets; desde Argentina muestra USD): botón de 180 × 42 en Poppins 13.

\- Íconos de pago: Amex, Apple Pay, Bancontact, Bizum, Diners, Discover, Google Pay, iDEAL, Mastercard, PayPal, Shop Pay y Visa.

\- Links de políticas (privacidad, términos, reembolsos). \*\*No hay redes sociales.\*\*

\### Botones

\- \*\*Principal de compra:\*\*

&#x20; - Bloque de 584 × 56 (360 × 67 en móvil), fondo `#366251`, Poppins 700 18 (24 en móvil), radio 0, relleno de 12 × 32.

&#x20; - Transición de color de 0,2 s; hover \*\*\[No verificado]\*\*.

&#x20; - Deshabilitado: no se observó; el botón está siempre activo.

\- \*\*Hero:\*\* 400 × 62, `#00BF64`, Alike 38, radio 6, relleno de 12 × 24. En móvil pasa a ancho completo, 358 × 67, Alike 700 20.

\- \*\*Secundario (GemPages):\*\* 400–530 × 62, `#16423C` con texto blanco en Passion One 30, radio 6. Sobre fondo verde se invierte: blanco con texto `#16423C`. Debajo lleva microcopy de 13 px con las garantías (envío gratis + 90 días).

\- \*\*Texto:\*\* "No gracias" en los pop-ups, 12–14 px blanco, sin fondo.

\- \*\*Utilitario Dawn:\*\* "Track" de 122 × 47, `#121212`, Poppins 15, radio 0.

\### Links

\- Por defecto en `#121212`.

\- Hover: subrayado de 0,2 rem.

\- En el texto rico de Dawn toman el color `--color-link`.

\### Tarjeta de producto

\- \*\*Colección:\*\*

&#x20; - Imagen 1:1 (326 px), sin borde ni radio.

&#x20; - Nombre en Poppins 700 24 con ls 0,78.

&#x20; - Estrellas + "(14.259)": es el conteo global de la tienda, repetido en todas las tarjetas.

&#x20; - Precio en Poppins 700 18 `#376251` + tachado en Poppins 400 18 `#4D4D4D`.

&#x20; - Sin botón, sin badge y sin hover visible \*\*\[No verificado]\*\*.

\- \*\*Home:\*\*

&#x20; - Imagen 1:1 (530 px).

&#x20; - Título en General Sans 700 28 y subtítulo con lo que incluye.

&#x20; - Precio + tachado y botón "Ver más" a ancho completo.

\- \*\*Clips:\*\* imagen de 294 px, título en Poppins 400 18, precio en Assistant 700 18 verde y botón "Ver diseños" en Bayon 22.

\- \*\*Móvil:\*\* 2 columnas en colección; en la home, carrusel horizontal con tarjetas de 272 px.

\### Badges

\- \*\*Descuento:\*\* pill "SAVE $X" (Kaching), fondo verde al 56 % con texto `#224C1D`, 12 px.

\- \*\*Más vendido / prueba social:\*\* pastilla negra "95 % eligió esto", 12 px bold blanco, montada en la esquina superior derecha de la tarjeta del bundle.

\- \*\*Nuevo / colores:\*\* el "COLORS ARE HERE" va \*\*dentro de la imagen\*\* del hero.

\- \*\*Galería:\*\* sticker circular amarillo dibujado en la foto ("29 diseños").

\- \*\*Badge nativo de Dawn\*\* (radio 4rem): no se usa.

\### Precio y precio tachado

\- Siempre en pareja: precio actual en bold oscuro o verde y tachado en gris del mismo tamaño o uno menor. No hay porcentaje junto al precio.

\- El ahorro aparece en el badge del bundle y en "Savings" del carrito.

\- \*\*Valores vistos:\*\*

&#x20; - Embosador: US$44,95 tachado US$71,99 (en la colección de clips el tachado es US$74,99).

&#x20; - Clips: US$22,99 / 32,99.

\### Personalizador de producto (Cloudlift)

&#x20;

\*\*Orden en la columna de compra:\*\*

1\. Selector de diseño

2\. Selector de color

3\. Campo de texto

4\. Bundles

\*\*Selector de diseño\*\*

\- Legend "Seal Design: \*nombre elegido\*" en Poppins 400 18 `#4D4D4D`.

\- Grilla de 8 columnas con miniaturas de imagen de 64 × 70 (paso de 74 px horizontal y 82 vertical), 32 diseños en 4 filas.

\- El elegido se marca con borde oscuro \*\*\[grosor y color No verificados: el borde lo pinta la imagen o un pseudo-elemento]\*\*.

\- Móvil: una sola fila con scroll horizontal y una barra de progreso verde de 54 × 7 px debajo.

\*\*Selector de color\*\*

\- Legend "Color: \*nombre\*" + 7 círculos de unos 30 px (paso de 35); el elegido lleva anillo negro.

\- Al cambiar el color, un script propio superpone la foto del embosador en ese color sobre la galería.

\*\*Campo de texto\*\*

\- Label "Texto inferior (límite de 20 caracteres)" en 16 px `#555555`.

\- Input de 584 × 50, borde de 0,8 px negro, radio 0, relleno de 10 × 15. Placeholder del estilo "ej.: tu nombre".

\- `maxlength=20`: corta al llegar a 20, sin contador visible ni mensaje.

\- Foco: anillo de 1 px gris oscuro.

\*\*Selector de tipografía:\*\* no existe; la fuente es fija (Bookman).

&#x20;

\*\*Vista previa en vivo\*\*

\- Al escribir o cambiar opciones, la galería salta a un slide de vista previa de 584 × 584 (canvas).

\- Se ve un sello circular con el texto fijo superior curvado, la ilustración del diseño al centro y el texto del cliente curvado abajo, en negro sobre blanco o crema.

\- \*\*Móvil:\*\* aparece una franja fija arriba (390 × 211) con la vista previa mientras se edita. Es el detalle de UX más valioso para replicar.

\*\*Validaciones y errores\*\*

\- El único límite es el de caracteres.

\- No se observó qué pasa si el campo queda vacío \*\*\[No verificado: no probé agregar sin texto]\*\*.

\- Si el selector de variante de Kaching queda inválido, se marca con un borde rojo de 2 px.

\*\*Datos que viajan al carrito\*\*

\- Propiedad `name` (el texto) + `\_cl\_options` (ID de configuración de Cloudlift) + variante "Diseño / Color".

\- En el carrito la miniatura es la del producto \*\*\[No verificado si es la vista previa renderizada]\*\*.

\### Selector de variante

\- Diseño × Color son variantes nativas de Shopify: 224 combinaciones al mismo precio.

\- No hay variante de tamaño ni de modelo (de mano o de escritorio): \*\*hay un único modelo, de mano\*\*.

\- La gift card usa la variante "1 / 2 / 3 embosadores".

\### Selector de cantidad y descuentos por cantidad

\- En la PDP no hay selector de cantidad: el bloque Kaching reemplaza esa lógica con tarjetas de oferta (tarjeta 1 = unidad; tarjeta 2 = bundle).

\- El stepper de cantidad aparece recién en el carrito: 99 × 28, borde de 0,8 px `#CCC`, radio 4.

\### Bundles y upsells en la página de producto (Kaching)

\- \*\*Encabezado:\*\* "BUNDLE \& SAVE" en 18 bold con filetes a los costados.

\- \*\*Tarjetas:\*\* radio 8.

&#x20; - Inactiva: fondo `rgba(0,0,0,.07)`.

&#x20; - Activa: fondo blanco + sombra interna de 2 px `#366251` + radio relleno.

&#x20; - Hover: sombra interna de 2 px gris.

\- \*\*Tarjeta 1 "Book Embosser"\*\* (preseleccionada): precio de 20 bold + tachado de 14 + "SAVE $27,04". Trae dos desplegables (Diseño, Color) de 168 × 34 y 116 × 34, radio 4.

\- \*\*Tarjeta 2 "Ultimate Gift Bundle":\*\*

&#x20; - Subtítulo de regalo con emoji y badge negro de prueba social.

&#x20; - US$61,83, tachado US$101,97.

&#x20; - Lista interna con miniaturas de 48 px (radio 6) unidas por un "+": embosador US$44,95 + packaging premium US$8,89 + stickers dorados US$7,99.

\- \*\*Funciones de Kaching desactivadas:\*\* temporizador, sticky ATC, aviso de stock bajo y "rasca y gana".

\### Botón de agregar al carrito

\- Descripto arriba.

\- Debajo va "Buy with Shop" (Shop Pay) en violeta y al mismo ancho.

\- \*\*No hay versión fija (sticky)\*\* ni en escritorio ni en móvil.

\- Al agregar: toast gris de GemPages arriba ("Producto agregado") + apertura del carrito lateral.

\### Sellos de confianza y medios de pago

\- \*\*Bajo el botón:\*\* 3 columnas con íconos de línea: envío rápido / más de 250.000 vendidos / devolución gratis en 90 días (Poppins 16; 14 en móvil).

\- \*\*Caja "Incluido GRATIS con cada embosador":\*\* imagen de 165 px + lista con check: 50 stickers dorados y estuche de viaje con el mismo diseño. Tiene borde gris.

\- \*\*Íconos de pago:\*\* en el carrito y en el footer.

\### Contadores o mensajes de urgencia

\- No hay contador activo, aunque la app está instalada.

\- La urgencia viene por otro lado:

&#x20; - "SALE" permanente en la barra;

&#x20; - el badge de "95 % eligió esto";

&#x20; - la barra de recompensas del carrito ("desbloqueaste 30 % OFF + regalo");

&#x20; - los pop-ups de 50 % OFF.

\### Acordeones

\- \*\*PDP:\*\*

&#x20; - Ítems con "+" a la izquierda, pregunta en Poppins 16/20,8 y respuesta en 16/28,8.

&#x20; - Dentro de una caja arena (`#C6BEB0`) o de la caja de envío y garantía.

\- \*\*Home:\*\* pregunta en General Sans 16 con ls 0,6 `#242424`, respuesta en `#575757`.

\- \*\*Estados:\*\* abierto / cerrado, sin animación notoria \*\*\[No verificado]\*\*.

\### Reseñas

\- \*\*Resumen:\*\* estrellas amarillas + "(14.259)" junto al título del producto y en cada tarjeta.

\- \*\*Widget Loox (iframe):\*\*

&#x20; - Encabezado "14.259 reseñas" (Poppins 16 `#282828`) + estrellas `#EBBF20` de 24 px.

&#x20; - Botón "Escribir una reseña" de 138 × 40, borde de 0,8 px `#E8E8E8`, radio 2.

&#x20; - Orden: mejores / peores.

\- \*\*Galería:\*\* masonry de 6 columnas en escritorio (tarjetas de 226 px).

\- \*\*Tarjeta de reseña:\*\*

&#x20; - Fondo blanco, radio 2, sombra de 3 px.

&#x20; - Foto o video del cliente arriba a ancho completo (alto variable, la mayoría en vertical).

&#x20; - Nombre en Poppins 700 16, estrellas y texto en 14/19.

&#x20; - Pie con miniatura + nombre del producto en 12 px, separado por un filete.

\- Cierra con "Ver más reseñas".

\- \*\*Home:\*\* además hay dos carruseles propios de GemPages con fotos 1:1 + estrellas + cita + "Nombre – Cliente verificado".

\### Bloque "Cómo funciona"

\- Home: imagen 1:1 (530 px) + 4 pasos en tarjetas claras con número o ícono y filete vertical: elegir diseño y texto / apoyar en superficie plana / alinear y presionar / revisar.

\- Cierra con CTA y microcopy de garantías.

\- Móvil: título "¿Cómo se usa?" en Passion One 50 y los pasos en zigzag de 2 columnas.

\### Formulario de newsletter

\- En el footer (Dawn): input + botón flecha.

\- La captura fuerte la hacen los pop-ups de Klaviyo.

\### Pop-ups (Klaviyo)

\- \*\*Bienvenida (home):\*\*

&#x20; - Overlay al 60 %; caja de 800 × 476, radio 6, fondo `#18413D`, dos columnas (imagen de 400 × 476 + contenido).

&#x20; - Logo, "50% OFF" en Alike 70 verde neón y bajada en Alike 24 crema (pide el email a cambio de un pack de bienvenida exclusivo).

&#x20; - Input de 348 × 53 con radio 4; CTA de 352 × 55 verde neón, Alike 20, ls 3 px; "No gracias" en blanco.

&#x20; - Móvil: hoja casi a pantalla completa; la imagen va arriba y muestra el pack (libreta, embosador, estuche, señalador grabado, 200 stickers y caja con forma de libro, con sticker "$240 → $120"). CTA "Continuar" (dos pasos).

\- \*\*Navideño (PDP, a \~1 minuto):\*\* caja de 900 × 567 con un sobre verde lacrado con sello dorado. Titular "un regalo sellado para vos", "50% OFF", CTA amarillo "ROMPÉ EL SELLO". El rechazo dice "No gracias, prefiero pagar precio completo" (\*confirmshaming\*).

\- \*\*Teaser:\*\* después de cerrar queda una barra fija abajo de 50 px, verde oscuro, con "Suscribite" en verde.

\### Filtros de colección

\- \*\*No hay\*\* filtros ni orden.

\- Las colecciones son landings de GemPages con grilla fija: 11 colecciones temáticas (original, iniciales, mitología, zodíaco, fe, gatos, perros, terror, otoño, San Valentín, bodas).

\### Carrito lateral (UpCart)

\- \*\*Contenedor:\*\* tarjeta flotante de 365 × 887 (top 10 px, radio 15), fondo blanco. En móvil ocupa casi toda la pantalla.

\- \*\*Header:\*\* 54 px `#325B4B`, "Tu carrito" en Poppins 600 22 blanco y cruz.

\- \*\*Barra de recompensas:\*\*

&#x20; - Panel `#ECFDF5` (radio 8): "🎉 Desbloqueaste \*\*30 % OFF + Regalo\*\* 🎁" en 13 px.

&#x20; - Barra de 10 px con radio completo y relleno `#10B981`.

&#x20; - Hitos en 10 px mayúsculas verdes.

\- \*\*Regalo automático:\*\* "REGALO: 50 stickers dorados" US$4,99 tachado → US$0,00.

\- \*\*Línea de producto:\*\* miniatura, título en Poppins 600 16, variante (14 px), texto personalizado ("name: …"), tachado + precio en Poppins 500 15, stepper y papelera.

\- \*\*Upsells:\*\* "Te van a encantar" (Poppins 600 24, centrado), carrusel de tarjetas de 317 px en `#F6F6F7` con radio 8:

&#x20; - stickers con selector de pack (100 / 200 / 500), US$14,99 → US$9,99;

&#x20; - packaging premium, US$14,99 → US$10,99.

&#x20; - Botón "Agregar" de 225 × 36 en `#366251`, radio 0.

\- \*\*Pie fijo (`#F6F6F7`):\*\*

&#x20; - Toggle "❤️ Garantía de por vida por US$4,99" (switch de 44 × 24).

&#x20; - "Ahorro −US$32,03" en verde `#16A34A` 700 15.

&#x20; - "Subtotal".

&#x20; - Botón "Checkout" de 319 × 51 en `#366251`, Poppins 600 24, radio 0.

&#x20; - Microcopy "Envío express + devolución en 90 días" e íconos de pago.

\- \*\*Vacío:\*\* solo el header y "Tu carrito está vacío", sin CTA ni recomendaciones.

\- \*\*Barra de envío gratis:\*\* no aparece como tal, porque el envío ya es gratis; la barra se usa para el descuento.

\- \*\*Ojo:\*\* el subtotal mostrado no aplica el 30 %. El descuento se aplicaría en el checkout \*\*\[No verificado: no pasé del carrito]\*\*.

\### Breadcrumbs

\- \*\*No hay\*\* en ninguna página.

\---

&#x20;

\## 4. Plantillas de página

&#x20;

\### 4.1 Home (escritorio; alto total ≈ 11.900 px)

&#x20;

| # | Bloque | Contenido | Imagen / proporción | Alineación | Qué cambia en móvil |

|---|---|---|---|---|---|

| 0 | Anuncio | Oferta 30 % + stickers | — | Centro | Texto de 17 px |

| 1 | Header | Logo, menú, cuenta, carrito | Logo de 2:1 | — | Hamburguesa, logo centrado |

| 2 | Hero (fondo con textura clara) | Prueba social con estrellas ("más de 300.000 vendidos"), H1 serif, bajada, separador caligráfico, CTA verde, 2 checks (stickers gratis, garantía) | Imagen 1:1 de 585 px a la derecha (promo de nuevos colores con 3 íconos) | Texto a la izquierda | \*\*La imagen pasa arriba del texto\*\*; texto centrado y CTA a ancho completo |

| 3 | Reseñas destacadas (fondo `#16423C`) | 3 tarjetas: foto 1:1 + estrellas + cita + "Cliente verificado" | 1:1 | Izquierda | Carrusel de 1 tarjeta |

| 4 | Productos (crema) | 2 tarjetas grandes: embosador (con lo que incluye) y clip; precio + tachado + "Ver más" | 1:1 de 530 px | Izquierda | Carrusel horizontal de 272 px |

| 5 | Beneficios (blanco) | 4 columnas: garantía 90 días / envío gratis / envío mundial / varias superficies | Íconos | Centro | Apilado en 1 columna |

| 6 | Divisor rasgado | — | 1425 × 47 | — | 390 × 13 |

| 7 | Producto destacado (verde) | H2 en mayúsculas, subtítulo, 4 beneficios con formato "título – texto", CTA blanco + microcopy de garantías | Imagen o GIF a la izquierda de unos 585 × 500 \*\*\[No verificado: carga diferida]\*\* | Izquierda | Imagen arriba; bullets con ícono |

| 8 | Divisor | — | — | — | — |

| 9 | Editorial "herencia" (crema) | Titular en Passion One sobre objetos que duran generaciones + párrafo | Imagen ≈ 3:2 (585 × 379) | Texto izquierda / imagen derecha | Centrado, imagen debajo |

| 10 | UGC (crema + textura) | "Lo aman los lectores" + cifra grande (50.000+), grilla de 4 fotos de clientes 1:1 con cita, CTA | 1:1 de 380 px | Centro | Carrusel de 1 |

| 11 | Cómo funciona | Imagen + 4 pasos + CTA | 1:1 de 530 px | Imagen izquierda | Pasos en zigzag |

| 12 | Divisor | — | — | — | — |

| 13 | Regalo (verde) | "Hacé que el regalo sea especial" (Passion One 69–80) + párrafo | ≈ 3:2 | Texto a la izquierda | Centrado |

| 14 | Divisor | — | — | — | — |

| 15 | Nosotros vs. otros | Título + tabla comparativa en imagen (5 filas: cuida las páginas / sin tinta / diseños personalizables / fácil de usar / garantía 90 días) | ≈ 1,1:1 | Izquierda | Igual, apilado |

| 16 | CTA suelto | "Comprar" + microcopy | — | Centro | — |

| 17 | FAQ (crema + textura) | "FAQS" en 100 px + 5 acordeones | — | Centro | — |

| 18 | Loox | Muro de reseñas completo | Masonry | — | 1 columna |

| 19 | Footer | Newsletter, país/moneda, pagos, políticas | — | — | Apilado |

&#x20;

\*\*Patrón:\*\* hay un CTA de compra cada 1 o 2 bloques (7 CTAs en total), siempre con el microcopy de garantías debajo.

&#x20;

\### 4.2 Colección de embosadores (`/pages/all-embosser-collections`, GemPages)

1\. \*\*Hero verde\*\* (`#15423C`, 270 px de alto): titular en Bayon 80 ("elegí entre más de 200 diseños"), estrellas + "más de 300.000 clientes felices", filete, 3 checks (el más vendido / devolución 90 días / envío mundial rápido). Móvil: titular de 45 px en 2 líneas y 3 íconos de línea en fila.

2\. \*\*Divisor\*\* rasgado blanco.

3\. \*\*Grilla\*\* de 4 columnas (2 en móvil) sobre fondo `#DDDDDD`. Cada tarjeta muestra el \*\*dibujo del sello sobre fondo crema\*\* (no la foto del aparato), el nombre de la colección, las estrellas con el conteo global y precio + tachado.

4\. \*\*Loox.\*\*

\*\*Colección de clips\*\* (`/collections/clips`):

\- Hero en caja centrada con eyebrow de estrellas, titular en Bayon 51 ("un embosador, diseños infinitos"), párrafo, CTA en Bayon e imagen 1:1 de 536 px a la derecha.

\- Divisor, grilla de 4 con botón "Ver diseños" y Loox.

\### 4.3 Página de producto (`/products/custom-book-embosser`) — orden exacto

&#x20;

\*\*Escritorio, dos columnas:\*\*

\- \*\*Galería (izquierda, 584 px):\*\*

&#x20; - Imagen 1:1 con flechas y fundido.

&#x20; - 51 imágenes en total y miniaturas de 100 × 100 en una fila debajo.

&#x20; - Badge amarillo dibujado en la primera foto.

&#x20; - Se convierte en vista previa cuando el cliente personaliza.

\- \*\*Compra (derecha, 584 px):\*\*

&#x20; 1. Título del producto.

&#x20; 2. Estrellas + cantidad de reseñas.

&#x20; 3. 4 bullets con check: toque personal / sirve en libros, sobres y stickers / sin tinta y fácil / acero, de por vida.

&#x20; 4. Filete gris.

&#x20; 5. Selector de diseño (32).

&#x20; 6. Selector de color (7).

&#x20; 7. Campo de texto (20 caracteres).

&#x20; 8. Bundles (Kaching): unidad / bundle de regalo.

&#x20; 9. Agregar al carrito.

&#x20; 10. Shop Pay.

&#x20; 11. 3 sellos de confianza.

&#x20; 12. Caja "Incluido gratis" (stickers + estuche).

&#x20; 13. Acordeón FAQ (1.ª pregunta: cómo se crea el diseño).

\*\*Debajo, a ancho completo:\*\*

14\. \*\*Argumento emocional:\*\* titular "cada libro, un recuerdo personalizado" + párrafo nostálgico. A la derecha, acordeones de política de envíos y de garantía de 90 días.

15\. \*\*Banda verde "Cualidades mágicas":\*\* 4 columnas (hecho para vos / sin tinta / cuida las páginas / artesanía profesional).

16\. \*\*Caja FAQ arena:\*\* imagen 1:1 de 474 + "Preguntas frecuentes" + 5 acordeones (cómo se pide; materiales; plazos; uso y cuidado; qué hacer si llega con un problema).

17\. \*\*Muro de reseñas Loox\*\* filtrado por el producto.

&#x20;

\*\*Lectura del orden:\*\* personalización → oferta → compra → confianza → emoción → objeciones → prueba social. La prueba social fuerte (Loox) queda al final; arriba solo están las estrellas.

&#x20;

\*\*Móvil:\*\*

\- Galería de 360 px + miniaturas de 66 px.

\- El orden se mantiene en una columna: título de 20 px, bullets de 14, diseños en fila con scroll, colores, input de 360, Kaching a 360, botón de 360 × 67, Shop Pay, confianza en 3 columnas, caja "Incluido" e información.

\- Al editar aparece la \*\*vista previa fija arriba\*\*. No hay botón de compra fijo.

\### 4.4 Productos complementarios

\*\*Todos usan la misma plantilla GemPages de producto; las descripciones nativas están vacías.\*\*

&#x20;

| Producto | Precio (tachado) | Opciones | Rol en la venta |

|---|---|---|---|

| Golden Seal Sticker Packs | US$9,99 (14,99) / 13,99 (23,99) / 29,99 (59,99) | 100 / 200 / 500 | Regalo de 50 con cada embosador; upsell en bundle y carrito |

| Premium Embosser Packaging | US$10,99 (14,99); US$8,89 dentro del bundle | — | Upsell de regalo |

| Embosser Clips (9 temas) | US$22,99 (32,99) | — | Recompra: placa con otro diseño para el mismo embosador |

| Initials (Personalized) Embosser | US$44,95 (71,99) | 4 escudos × 7 colores | Variante con iniciales |

| Zodiac Embosser | US$44,95 (74,99) | 36 diseños | Colección temática |

| Custom Logo Embosser | US$99,95 / 149,95 / 199,95 | 1 / 2 / 4 unidades | Segmento negocios |

| Gift Card | US$45 / 90 / 135 | "1 / 2 / 3 embosadores" | Regalo sin elegir diseño |

| Lifetime Warranty | US$4,99 | Toggle en el carrito | Margen extra |

| Focus Spinner Ring / Deep Read (suplemento con suscripción) | US$31,99 / 34,99 | — | Fuera del rubro; no replicar |

&#x20;

\### 4.5 Reseñas (`/pages/reviews`)

Existe, pero solo tiene el título: no está enlazada y no muestra el widget. Las reseñas viven en el widget de Loox en home, colección y producto.

&#x20;

\### 4.6 Sobre nosotros (`/pages/about-us`)

\- Página simple de Dawn con contenedor angosto de 726 px, H1 en Assistant 67,6 y 4 párrafos, sin imágenes.

\- Estructura del texto:

&#x20; 1. reconectar al lector con su biblioteca frente a las distracciones digitales;

&#x20; 2. el embosador como artesanía "de otro tiempo";

&#x20; 3. comunidad de lectores;

&#x20; 4. la biblioteca como legado.

\### 4.7 FAQ y guía de uso

\- \*\*No hay página propia\*\* (`/pages/faq` da 404).

\- Las FAQ están en la home (5) y en la página de producto (5 + 1).

\- La guía de uso son los 4 pasos de la home y la respuesta sobre cuidado: usar papel adecuado, no forzar, guardar en lugar seco, limpiar con paño seco y probar primero en papel borrador.

\### 4.8 Envíos, devoluciones y seguimiento

\- \*\*Envíos\*\* (`/pages/shipping-policy`): un párrafo. Producción en 3 días + envío en 3 a 7 días hábiles, a todo el mundo; el número de seguimiento llega cuando arranca la producción.

\- \*\*Devoluciones\*\* (`/pages/return-policy`): 90 días, reembolso o cambio, en estado original, iniciando por el formulario de contacto.

\- \*\*Seguimiento\*\* (`/apps/parcelpanel`): H1 + dos formas de buscar (número de pedido + email o teléfono, \*\*o\*\* número de seguimiento) con botones negros "Track".

\- \*\*Contacto:\*\* formulario de Dawn (nombre, email, teléfono, comentario).

\### 4.9 Carrito

Carrito lateral (UpCart), descripto en el punto 3. No hay página de carrito propia en el recorrido.

&#x20;

\---

&#x20;

\## 5. Patrones de contenido

&#x20;

\### Titulares y bajadas

\- \*\*Hero:\*\* "Un \[producto] personal hecho para vos" + bajada que nombra el beneficio sensorial ("un toque mágico y duradero").

\- \*\*Secciones:\*\* una palabra o frase corta en Passion One, gigante (¿Cómo se usa? / ¿Por qué nosotros? / FAQS / Herencias que duran generaciones). Sin bajada o con una sola oración.

\- \*\*Mayúsculas:\*\* se usan con moderación (nombre del producto en el bloque destacado, "FAQS"). El resto va en tipo título, en inglés.

\### Descripción de producto (orden real)

1\. \*\*Beneficio corto en bullets\*\* (arriba): emoción (toque personal) → versatilidad (libros, sobres, stickers) → facilidad (sin tinta) → calidad (acero, de por vida).

2\. \*\*Regalo:\*\* en el bundle y en la caja "Incluido gratis".

3\. \*\*Emoción larga\*\* (debajo): libro como recuerdo; prosa nostálgica y vintage.

4\. \*\*Calidad y oficio:\*\* "artesanos internacionales" en la banda de cualidades.

5\. \*\*Materiales compatibles:\*\* papel de libro, stickers y sobres; papeles más gruesos sirven; no cartón.

6\. \*\*Instrucciones:\*\* 4 pasos + cuidado.

\*\*Specs que faltan:\*\*

\- No aparecen en texto el diámetro del sello, el peso, las medidas del aparato ni el margen desde el borde de la hoja \*\*\[No verificado: pueden estar dentro de las 51 fotos]\*\*.

\- Es un hueco real en la información: conviene cubrirlo en el MVP.

\### Prueba social, descuentos y urgencia (dónde y cómo)

\- \*\*Cifras de volumen:\*\* en el hero, la colección, los sellos de confianza y la sección UGC.

&#x20; - Son contradictorias entre sí: 300.000 / 250.000 / 200.000 / 50.000+.

&#x20; - No conviene copiar la inconsistencia.

\- \*\*Estrellas + número de reseñas:\*\* junto a cada título y tarjeta, siempre el mismo conteo global.

\- \*\*Citas de clientes:\*\* cortas, entusiastas, con "Nombre + inicial – Cliente verificado".

\- \*\*Descuento:\*\* "SALE" permanente en la barra; precio tachado en todos lados; "SAVE $X" en los bundles; "Ahorro" en el carrito; 50 % en los pop-ups a cambio del email.

\- \*\*Urgencia blanda:\*\* no usan cuenta regresiva ni stock bajo. Usan:

&#x20; - presión social ("95 % eligió esto");

&#x20; - recompensas desbloqueadas en el carrito;

&#x20; - estacionalidad (pop-up navideño, colecciones de Halloween, otoño y San Valentín).

\### Microcopy

\- \*\*Personalización:\*\*

&#x20; - label con el límite explícito ("límite de 20 caracteres");

&#x20; - placeholder de ejemplo ("ej.: tu nombre");

&#x20; - legend que repite la opción elegida ("Seal Design: \*nombre\*").

\- \*\*Plazos:\*\* "3 días para fabricarlo + 3 a 7 días hábiles de envío"; seguimiento desde que empieza la producción.

\- \*\*Devolución de personalizados:\*\* ofrecen 90 días con reembolso total, aun siendo un producto personalizado. Hay contradicción con una FAQ que dice 60 días.

\- \*\*Stock:\*\* no se muestra.

\- \*\*Carrito vacío:\*\* solo "Tu carrito está vacío"; no hay CTA.

\- \*\*Errores:\*\* no se vieron mensajes; el input corta en silencio al llegar a 20.

\- \*\*Botones:\*\*

&#x20; - Compra: "Comprar embosador personalizado", "Ver más", "Comprar", "Agregar al carrito", "Checkout".

&#x20; - Pop-ups: "Reclamar oferta", "Continuar", "Rompé el sello".

\- \*\*Bajo cada CTA:\*\* "Envío gratis | Garantía de 90 días".

\---

&#x20;

\## 6. Imágenes y video

&#x20;

| Espacio | Proporción | Contenido típico |

|---|---|---|

| Hero home | 1:1 (585 px), a la derecha | Gráfico promocional (no foto ambiental): fila de embosadores de colores + íconos |

| Tarjeta de producto (home) | 1:1 (530 px) | Foto de producto en estudio, fondo neutro |

| Tarjeta de colección | 1:1 (326 px) | \*\*Dibujo del sello\*\* sobre crema (la marca impresa, no el aparato) |

| Galería de producto | 1:1 (584 px), 51 imágenes | Embosador en estudio con badge; detalles; marca embosada; infografías ("cómo personalizar", "qué incluye"); miniaturas de diseños |

| Bloques editoriales | ≈ 3:2 (585 × 379) | Ambiente: biblioteca o regalo |

| Bloque destacado | ≈ 7:6 (585 × 500) | Imagen o GIF del producto en uso \*\*\[No verificado: carga diferida]\*\* |

| Reseñas (GemPages) | 1:1 (360–380 px) | Fotos de clientes |

| Reseñas (Loox) | Variable, mayormente vertical | Fotos y videos de clientes |

| Pop-up | 400 × 476 (≈ 5:6) / 450 × 567 | Mockup del pack de bienvenida; sobre lacrado |

&#x20;

\- \*\*Estilo fotográfico:\*\* estudio limpio para el producto; ambientes cálidos (madera, papel antiguo, luz de vela) para regalo y pop-ups; mucho UGC de celular. \*\*\[No verificado en detalle: las animaciones de entrada impidieron capturar varias secciones.]\*\*

\- \*\*Proporción aproximada en la galería:\*\*

&#x20; - 40 % producto;

&#x20; - 30 % marca embosada o diseños;

&#x20; - 30 % infografía o ambiente;

&#x20; - \*\*\[No verificado: conteo visual parcial]\*\*.

\- \*\*Video o GIF del gesto de embosar:\*\* no lo pude confirmar en la página de producto; en la home hay una imagen con carga diferida en el bloque destacado que podría ser un GIF \*\*\[No verificado]\*\*.

\- \*\*Texto sobre imagen:\*\* solo dentro de imágenes "quemadas" (badge de la galería, hero de colores, pop-ups). Los titulares HTML nunca van sobre foto: van sobre color plano.

\---

&#x20;

\## 7. Notas para replicar

&#x20;

\### 7.1 Lo que se puede replicar directo

\- \*\*Tokens:\*\* paleta verde + crema, escala tipográfica, radios (0 en compra, 6 en botones, 8 en tarjetas de oferta) y movimiento de Dawn (ver `whispering-pages-tokens.css`).

\- \*\*Estructura de páginas:\*\*

&#x20; - el orden de bloques de la home (hero → reseñas → productos → beneficios → destacado → herencia → UGC → cómo funciona → regalo → comparativa → FAQ → reseñas);

&#x20; - la página de producto en dos columnas.

\- \*\*Mecánica del personalizador:\*\* diseño (grilla de miniaturas) → color → texto con límite → vista previa en canvas (texto curvo superior fijo + ilustración + texto curvo inferior) → vista previa fija en móvil → propiedades del pedido (diseño, color, texto).

\- \*\*Mecánica de oferta:\*\*

&#x20; - 2 tarjetas de oferta (unidad / bundle de regalo con 3 ítems);

&#x20; - regalo automático en el carrito;

&#x20; - 2 upsells en el carrito;

&#x20; - extra opcional (garantía);

&#x20; - microcopy de garantías bajo cada CTA.

\- \*\*Componentes:\*\* acordeones, bandas de 4 beneficios, tabla "nosotros vs. otros", caja "incluido gratis", sellos de confianza en 3 columnas.

\### 7.2 Lo que necesita versión propia (tiene derechos)

&#x20;

| Elemento | Cómo producir el equivalente |

|---|---|

| Logo y nombre | Naming propio en castellano y logotipo de línea (sello circular o libro abierto). Que funcione chico (favicon) y en una sola tinta, porque también puede ir en el sello. |

| \*\*Diseños e ilustraciones de los sellos\*\* (32 + colecciones) | Encargar a una ilustradora un set inicial de 12–16 diseños vectoriales de una línea pensados para relieve (trazos ≥ 0,3 mm, sin degradados, sin detalles chicos que se empasten). Temas locales además de los clásicos (mate, Buenos Aires, fauna argentina). Preparar el archivo de producción y la miniatura de la grilla desde el mismo vector. |

| Fotos de producto y ambiente | Sesión propia con el embosador real: fondo neutro 1:1 para la galería, macro de la marca embosada con luz rasante, 3–4 ambientes (biblioteca, regalo envuelto, mesa de lectura). |

| Videos y GIFs | Clip vertical de 5–8 s del gesto de embosar y el relieve (celular + luz lateral), en loop para la galería y las redes. |

| Reseñas y UGC | Juntar las propias: muestras a lectoras o lectores e influencers de libros (\*bookstagram\*/\*booktok\*), y pedir reseña con foto después de la entrega. No copiar las de ellos. |

| Textos literales | Redactar en castellano rioplatense con la misma estructura (beneficio corto → regalo → emoción → objeciones), sin traducir sus frases. |

| Infografías de galería | Rehacer con tu identidad: "cómo personalizar en 3 pasos", "qué incluye", "medidas reales". |

| Pop-ups | Diseño propio; la oferta, adaptada al margen real. |

| Fuente de la vista previa | Usar una serif libre (TeX Gyre Bonum, Cormorant o EB Garamond) en lugar de ITC Bookman, que es paga. |

&#x20;

\### 7.3 Qué haría falta para construirlo

&#x20;

\*\*En Shopify (réplica fiel)\*\*

\- \*\*Tema:\*\* Dawn (gratis). GemPages es opcional: las mismas secciones se arman con bloques nativos de Dawn, que pesan menos.

\- \*\*Personalizador:\*\* Cloudlift Product Options o una alternativa con vista previa en canvas y texto curvo. Un desarrollo propio también sirve: un canvas de 2000 × 2000 con texto en arco, como hizo My Book Embosser.

\- \*\*Bundles:\*\* Kaching Bundles o similar.

\- \*\*Carrito con regalo y upsells:\*\* UpCart o similar.

\- \*\*Reseñas con foto:\*\* Loox o Judge.me.

\- \*\*Email y pop-ups:\*\* Klaviyo u Omnisend.

\- \*\*Seguimiento:\*\* ParcelPanel o similar.

\- \*\*Plan y costos:\*\* Shopify cobra en USD \[No verificado: confirmar plan y costo vigente].

\*\*En Argentina\*\*

\- \*\*Pagos y cuotas:\*\* Mercado Pago (cuotas con y sin interés, débito, dinero en cuenta) como mínimo; transferencia con descuento como segunda opción.

&#x20; - En Shopify, Mercado Pago entra como pasarela externa.

&#x20; - En Tiendanube, Mercado Pago y Pago Nube están integrados de forma nativa \[No verificado: confirmar condiciones vigentes].

\- \*\*Envíos:\*\* Correo Argentino, Andreani, OCA o integradores (Envío Nube en Tiendanube; Envia o Enviopack) para cotizar por código postal.

&#x20; - Conviene ofrecer retiro o moto en La Plata/AMBA.

&#x20; - Plazos realistas: producción + 3 a 7 días hábiles.

\- \*\*Facturación:\*\* factura electrónica en ARCA (ex AFIP) como monotributista, integrada a la plataforma vía app (por ejemplo, Facturante o Contabilium) \[No verificado: confirmar compatibilidad por plataforma].

\- \*\*Precios:\*\* en pesos, mostrando el precio en cuotas junto al precio; tener en cuenta la Ley de Defensa del Consumidor (precio final con impuestos visible y botón de arrepentimiento obligatorio).

&#x20; - Ojo: el derecho de arrepentimiento puede \*\*no\*\* aplicar a productos personalizados; conviene confirmarlo con un profesional \[No verificado].

\*\*Plataforma\*\*

\- \*\*Tiendanube:\*\* suele ser la opción más simple para el mercado local.

\- \*\*El problema con Tiendanube:\*\* el personalizador con vista previa en vivo probablemente necesite desarrollo propio (un script en el tema o una app a medida) \[No verificado: no relevé su tienda de apps].

\- \*\*Shopify:\*\* replica el sitio casi pieza por pieza, pero los pagos y la facturación locales quedan como integraciones de terceros.

\- No soy asesor legal ni contable: los puntos de facturación y consumo conviene validarlos con un contador.

&#x20;

