# 03 · Dropshipping · Landing Page — Índice del relevamiento

**Objetivo:** preparar el MVP de un e-commerce de embosadores de libros personalizados (sellos secos ex libris) en Argentina, replicando **The Whispering Pages** (thewhisperingpages.com) como referente principal. **My Book Embosser** (mybookembosser.com) solo cubre lo que TWP no tiene.

**Relevamiento:** 27/10/2026 (TWP) y 28/10/2026 (MBE), a 1440 px y 390 px.

## Documentos

| Archivo | Qué tiene | Cuándo usarlo |
|---|---|---|
| `propuesta-de-valor-replica-tiendanube.md` | **Vigente.** Propuesta de valor replicada de TWP, adicionales con proporciones de precio, mecánicas y cómo se arman en Tiendanube, adaptaciones legales, pendientes | Para definir la oferta y armar la tienda |
| `plan-y-campos-tiendanube.md` | **Vigente.** Plan de Tiendanube elegido, comparativa de métodos para los campos del pedido (variantes, apps, script propio), costo mensual y preguntas para soporte | Para contratar el plan y armar el personalizador |
| `relevamiento/propuesta-de-valor.md` | Relevamiento original de promesas, productos y ofertas de TWP y MBE | Consulta; donde contradiga al vigente, manda el vigente |
| `relevamiento/whispering-pages-manual-web.md` | Manual de marca web de TWP: plataforma y apps, tokens, componentes, plantillas de página, patrones de contenido, imágenes y notas para replicar | Para diseñar y construir el sitio |
| `relevamiento/whispering-pages-tokens.css` | Tokens de diseño como variables CSS | Para el CSS del tema |
| `relevamiento/whispering-pages-guia-visual.html` | Colores, escala tipográfica y componentes recreados | Referencia visual |
| `relevamiento/my-book-embosser-benchmark.md` | Benchmark de MBE contra TWP | Solo para lo que TWP no tiene |
| `relevamiento/notas-relevamiento.md` | URLs, fechas y todo lo [No verificado] | Para saber qué falta confirmar |
| `relevamiento/datos-crudos-twp.md` y `relevamiento/datos-crudos-mbe.md` | Notas en bruto (medidas, estilos, apps) | Para un valor puntual |

**Diseño de la landing v1:** lienzo "Landing ex libris" en claude.ai (home, página de producto con personalizador y carrito funcionando, pop-up de email).

## Decisiones tomadas (28/10/2026)
- **Referente:** TWP en todo (estructura, oferta, personalizador, estética y tono). Lo que no hacen, no se hace. Reemplaza las decisiones anteriores de usar el personalizador y la estética de MBE.
- **Plataforma:** Tiendanube.
- **Plan:** Impulso ($79.999/mes, o $59.999/mes pagando anual). Es el más barato con acceso al código del tema, necesario para el personalizador (28/10/2026).
- **Campos del pedido:** variantes nativas Diseño × Color × Opción (unidad / pack regalo) + script propio en el tema: texto (20 caracteres, mayúsculas) como propiedad de la línea, vista previa en canvas con texto curvo, y URL del PNG en una propiedad oculta (plan B: regenerar el PNG en producción). Sin apps pagas. Detalle en `plan-y-campos-tiendanube.md`.
- **Alternativa sin código:** Esencial + Campo Personalizado Nivel 3 ($74.389/mes), solo si soporte confirma texto curvo y la réplica no necesita más código.
- **Adaptaciones obligatorias en Argentina:** cifras y precios tachados solo con datos reales; botón de arrepentimiento; precios en pesos.
- **No se copian** textos, fotos, diseños de sello, nombre ni logo de TWP o MBE.
- **Fuera de rubro** (suplemento, anillo): no.

## Réplica en Tiendanube: estado al 29/10/2026
Tienda **[MARCA]** (auxiliar3.mitiendanube.com). Plan Inicial, diseño Ipanema, tienda en construcción (no la ve el público).

### Hecho
- **Datos del negocio:** nombre de la tienda "[MARCA]".
- **Categorías** (conector): Embosadores, Placas de diseño, Embosador con logo, Embosador de iniciales, Gift card.
- **Productos** (conector). Todos ocultos, sin precio (se ven como "Consultar") y con stock infinito:
  | Producto | Variantes | Categoría |
  |---|---|---|
  | Embosador personalizado | Diseño [DISEÑO 1/2] × Color [COLOR 1/2] × Opción (Embosador / Pack regalo) | Embosadores |
  | Placa de diseño extra | Diseño [DISEÑO 1/2] | Placas de diseño |
  | Stickers dorados | Cantidad 100 / 200 / 500 | — |
  | Caja regalo premium | — | — |
  | Garantía de por vida | — (sin envío) | — |
  | Gift Card | 1 / 2 / 3 embosadores (sin envío) | Gift card |
  | Embosador con logo | 1 / 2 / 4 unidades | Embosador con logo |
  | Embosador de iniciales | Diseño [ESCUDO 1/2] × Color [COLOR 1/2] | Embosador de iniciales |
  | 50 stickers dorados (regalo) | — | — (producto para la promo de regalo) |
  - El método de campos se mantiene: Diseño, Color y Opción son variantes; el texto va por script. El tope es 999 combinaciones por producto, así que el catálogo real (32 × 7 × 2 = 448) entra.
- **Páginas publicadas:**
  - Nosotros, Envíos y Cambios y devoluciones, con los textos del lienzo y [N] / [Historia de [MARCA]] como placeholders.
  - Términos y condiciones y Política de privacidad, con el placeholder [TEXTO LEGAL] (el texto lo redacta Lucas con un abogado).
  - No hay página de Preguntas frecuentes (TWP no la tiene).
- **Menús:**
  - Principal: Tienda (muestra las categorías sola), Nosotros, Ayuda (Contacto, Envíos, Cambios y devoluciones) y Seguí tu pedido ([LINK DE SEGUIMIENTO]).
  - Pie: "Pie · Tienda", "Pie · Ayuda" (esta suma Seguí tu pedido) y "Pie · Legales" (Términos y condiciones, Política de privacidad).
- **Diseño Ipanema:**
  - Colores: fondo #FFFFFF, texto #242424, acento #366251.
  - Tipografía: Poppins.
  - Botones: principal #366251 con radio 0; secundario #16423C con texto blanco y radio 6.
  - CSS personalizado (29/10/2026):
    - Alike en el hero; botón #00A356 de 400 × 62 con radio 6 (ancho completo en móvil); checks con círculo verde; H1 de 35 px en móvil.
    - Passion One en los títulos de sección. La banda dice "EMBOSADOR PERSONALIZADO" en 56 px.
    - Tarjetas de reseñas blancas con placeholder de foto 1:1, en este orden: foto, estrellas, reseña, nombre.
    - Grilla de reseñas en 4 columnas (2 en móvil), con "[N]+" a 55 px.
    - Microcopy de 13 px debajo de los botones.
    - Divisores de 47 px de alto (13 px en móvil).
    - Barra de anuncios en dos líneas en móvil.
  - Barra de anuncios #366251 con ícono de regalo: "STICKERS DORADOS DE REGALO EN CADA PEDIDO · [PROMO VIGENTE]".
  - Encabezado #FEFDF8, logo a la izquierda, menú al lado, siempre visible.
  - Pie: fondo blanco, textos #4D4D4D, descripción, menús Tienda / Ayuda / Legales, medios de pago y envío, sin redes. El newsletter "Suscribite a nuestros emails" va como sección aparte debajo del pie.
  - Carrito lateral: se abre al agregar un producto.
- **Home** (13 secciones nativas, en el orden del lienzo, imágenes vacías como placeholder):
  1. Hero (Editorial de imagen y texto) sobre #F3F0E8: estrellas y "Más de [N]" arriba del H1, bajada, botón, checks debajo.
  2. Reseñas en carrusel sobre #16423C: 3 visibles en escritorio y 1 en móvil, título centrado.
  3. 2 productos destacados.
  4. 4 beneficios.
  5. Divisor.
  6. Banda verde de producto (título "EMBOSADOR PERSONALIZADO", bajada "Tu biblioteca, con tu firma").
  7. Divisor.
  8. Legado, con la imagen a la izquierda.
  9. Grilla de 4 reseñas: "Lo aman los lectores" y debajo "[N]+".
  10. Cómo se usa.
  11. Divisor, regalo, divisor.
  12. Comparativa ("[Imagen: tabla [MARCA] vs. Otros]").
  13. Preguntas en acordeón.
  - En las reseñas solo hay placeholders: [Reseña real], [Nombre], [Foto del cliente]. Las estrellas son las del placeholder. La sección de testimonios acepta foto.
  - Microcopy "Envío gratis | Garantía de 90 días" debajo de cada botón "Comprar" (bloque de texto aparte).
  - Espaciado reducido arriba de "¿Cómo se usa?" y entre las preguntas y el pie.
- **Pop-up de email:** guardado y **apagado**, con "[X] % OFF", "en tu primer pedido. Dejanos tu email y te lo mandamos." y "QUIERO MI DESCUENTO".
- **Botón de arrepentimiento:** viene nativo en el pie y está verificado (va a /contacto/?order_cancellation_without_id=true).
- **Apps:**
  - Reviews Rakun instalada y activada en Tiendanube, plan gratis. Falta que Lucas cree la cuenta en Rakun.
  - Bundle Flow no se instala (el pack es una variante).
  - Apps de campos personalizados no se instalan (se resuelve con script).

### Pendiente por código (requiere Impulso)
1. **Personalizador:** vista previa en canvas con texto curvo, fija arriba en móvil. Campos en la orden: `properties[Texto]` (20 caracteres, mayúsculas) y `properties[_vista_previa]`.
2. **Selector del pack** (Embosador / Pack regalo) en tarjetas, estilo Kaching, en la ficha.
3. **Carrito:** upsells "Te van a encantar" (stickers 100/200/500, caja regalo) e interruptor de garantía de por vida.
4. **Newsletter adentro del pie**, como 4.ª columna. Hoy es una sección aparte debajo.
5. **Home, lo que no salió con el editor ni con CSS:**
   - 2 tarjetas grandes con subtítulo ("Incluye el embosador + la placa…") y precio tachado. Lo nativo tiene mínimo 3 columnas y no lleva subtítulo.
   - Widget de reseñas al final de la home, según lo que traiga Rakun.
6. **Ficha de producto:** acordeones (cómo armo mi diseño, materiales, plazos, cuidado, problemas), caja "Incluido GRATIS", 3 sellos de confianza, banda verde de beneficios y caja de preguntas con foto.
7. **Seguimiento sin cuenta:** página por número de orden + email (o app que lo haga). Reemplaza [LINK DE SEGUIMIENTO].
8. **Botón de arrepentimiento:** si se edita el tema por FTP o *fork*, hay que volver a ponerlo a mano en el pie (Res. 424/2020).

### Pendiente (no es código)
1. **Subir a Impulso antes de lanzar.** Hoy la orden no recibe el texto del sello. Solución temporal: Campo Personalizado Nivel 1 (ARS 10.991,92/mes, sin vista previa).
2. **Marketing Nube:** consultar a soporte en qué plan están las automatizaciones "Suscripción al newsletter con cupón de descuento" (para el pop-up) y "Compra de Gift Card".
   - El plan free incluye 500 contactos y 2.000 envíos por mes (ayuda, 01/09/2026).
   - El pop-up se prende cuando estén la cifra del descuento y el cupón.
3. **Gift card:** activar la automatización de Marketing Nube (el título del producto tiene que contener "Gift Card"). Alternativa: Gifty (paga, 14 días gratis).
4. **Promo de regalo en el carrito (50 stickers):**
   - Crearla en Descuentos cuando esté el precio del embosador, con el mínimo igual a ese precio.
   - Confirmar que acepte el producto oculto "50 stickers dorados (regalo)"; si no, publicarlo sin categoría.
   - El conector no permite elegir el producto de regalo ni el mínimo, así que se hace en el panel.
5. **Rakun:** crear la cuenta y revisar si el plan gratis trae reseñas con foto y el email automático de pedido de reseña. Si no, anotar el precio del plan que los trae.
6. **Contenido real:** precios, diseños y colores reales (reemplazan [DISEÑO n], [COLOR n] y [ESCUDO n]), fotos y video. Después, publicar los productos.
7. **Imágenes de la home** (hoy vacías) y divisores de 1425 × 47 (el CSS ya les da la altura).
8. **Textos legales:** reemplazar [TEXTO LEGAL] en Términos y condiciones y en Política de privacidad (con abogado).

## Próximos pasos
1. Contactar fabricantes con la landing: costo puesto, material, diámetro, placas intercambiables, colores, estuche y plazos.
2. Pasar a Impulso (hoy la tienda está en Inicial) y probarlo en los 7 días gratis: que `properties[...]` llegue al pedido y a la exportación, y que el regalo en el carrito funcione con el tema modificado (preguntas en `plan-y-campos-tiendanube.md`, sección 7). Sigue pendiente: upsells en el carrito.
3. Nombre de marca.
4. Set inicial de 12–16 diseños de sello y sesión de fotos y video.
5. Después: contenido orgánico y perfil del cliente.
