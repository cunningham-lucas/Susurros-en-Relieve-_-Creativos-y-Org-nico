# Raw TWP (2026-10-27)
## Plataforma
Shopify, tienda f2d95c-8a.myshopify.com, tema Dawn 13.0.1 (custom "the-whispering-pages/main", id 177076863258, t/20). Moneda USD. Locale en.
Apps: GemPages (page builder, home y probable PDP), Kaching Bundles, Kaching Subscriptions, Cloudlift Options (app-options -> opciones/personalizador?), Loox (reseñas, widget iR2U-hq0RC), Klaviyo (popup + forms), UpCart (cart drawer), Essential Announcement bar, Countdown Timer (essential? "countdown-timer-30-10"), Shoplift (A/B tests), OneText (SMS), MS Clarity, GA4/GTM, Google Ads, Meta Pixel, AppLovin pixel, c.albss.com (?), Shop Pay / accelerated checkout, Shop follow button.
Sin banner de cookies visible desde AR (consent-tracking-api cargada).

## Tokens Dawn (settings)
font-body Poppins 400/700 (Shopify fonts), font-heading Assistant 700, heading scale 1.3, body scale 1.0
page-width 120rem (1200px), spacing-sections 0, grid spacing desk 8/8 mob 4/4
buttons radius 0, border 1px; inputs radius 0, border 1px opacity .55; variant pills radius 40px; badge radius 4rem; media radius 0; popup radius 0
Esquemas: 1 #FFFFFF/#121212; 2 #F3F3F3/#121212; 3 #242833/#FFF; 4 #366251/#FFF (btn blanco texto #121212); 5 #366251 btn texto #334FB4; custom 772db952 bg #F7F2EC fg #2D2D2D btn #366251 txt #FFF link #366251; custom cf405319 bg #16423C fg #FFF btn #FFF txt #16423C
Durations: .1 .2 .3 .5 .6 3s; ease cubic-bezier(0,0,.3,1)

## GemPages globals (.gps)
font heading/body Assistant (Google). H1 46/400/130% (mob 41), H2 41 (mob 36), H3 52 (mob 46), P1 16/180% (mob 14), P2 14 (mob 12), SH1 25, SH2 18, SH3 32. Spacing xxs2 xs4 s8 m12 l16 xl24 2xl32 3xl48 4xl80 5xl112. Container 1200 pad 16. Radius s3 m6 l16.
Colores Gem: brand #121212, text-1 #4D4D4D, line-1 #ECECEC, error #EA3335, success #428445, warning #F2A73B; my-colors #376251 etc. Gradientes: 130deg #143F2E->#227252; 130deg #D19C00->#FFCF42 (dorado); 90deg #16423C,#347169,#16423C.
Fuentes custom subidas a GemPages: GeneralSans (Fontshare, OTF 200-700), FilsonProBold/Regular (Mostardesign, de pago).
Google fonts importadas (Klaviyo?): Alike, Passion One, Assistant, Inter, Khand, Lato, Montserrat, Poppins, Tenor Sans, etc.

## Popup Klaviyo (home, a los pocos s)
Overlay rgba(20,20,20,.6). Form 800x476 bg #18413D radius 6px, 2 columnas: imagen 400x476 + contenido. Logo 100x50. "50% OFF" Alike 70px/700 color #34F55B, ls .78px. Bajada Alike 24px #FEFDF7. Input 348x53 radio 4 borde .8px #54462F, Poppins 18. CTA "CLAIM OFFER" bg #34F55B texto #000 Alike 20 ls 3px radio 6 h55. "No Thanks" link 14px blanco.

## HOME desktop 1440 (GemPages, alto main ~11185px)
Header y46 h155 (sticky), logo img 200x100. Announcement y0 h46.
1. Hero y201 h681: fondo imagen (Untitled_design_41.png); izq: eyebrow estrellas + "Over 300,000 Embossers Sold" GeneralSans 700 16/24 ls.32 #2D2D2D; H2 "A Personal Book Embosser Made Just for You" Alike 700 63/69.3 #151515; bajada GeneralSans 500 20/30 ls.6 #2D2D2D; separador svg 450x18; CTA "Shop Custom Embosser" 400x62 bg #00BF64 txt #FFF Alike 38 (span) r6 pad 12/24; bullets check "Free Gold Stickers", "Money Back Guarantee" GeneralSans 500 20. Der: imagen 585x585 (1:1) "COLORS ARE HERE" (promo nuevos colores).
2. Reviews carrusel y882 h722 bg #16423C: 3 tarjetas imagen 360x360 + estrellas img 100x19 + cita GeneralSans 400 16/28.8 #575757 + "Nombre - Verified Customer" 13px. (tarjetas blancas?)
3. Productos y1605 h932 bg #FEFDF8: 2 tarjetas grandes 530x530 img (1:1); H2 "Custom Book Embosser" GeneralSans 700 28/42 #242424; estrellas; subt "Includes an Embosser + Custom Design Clip" 16/28.8; precio $44.95 GeneralSans 700 16 #242424; tachado $71.99 Assistant 700 18 #4D4D4D; CTA "Learn More" 530x62 bg #16423C txt #FFF Passion One 30/57 ls.75 r6. 2da: "Embosser Clip" $22.99.
4. Beneficios y2537 h304 bg #FFF: 4 columnas íconos? títulos GeneralSans 700 25/32.5 #242424 center; texto 16/28.8 #575757 center: 90-Days Guarantee, Free Shipping, Worldwide Shipping, Multiple Surfaces.
5. Divisor imagen 1425x47 (borde ondulado/rasgado) y2840
6. Feature y2919 h693 bg #16423C: izq imagen 585x500 (lazy svg placeholder => probable GIF/imagen); der H2 "CUSTOM BOOK EMBOSSER" Passion One 400 56/72.8 #FFF uppercase; sub GeneralSans 400 20/43.2 capitalize; 4 bullets "titulo - texto" 16/20.8 #FFF (Custom for you / No ink needed / Gentle on pages / Pro craftsmanship); CTA "Shop Now" 400x62 bg #FFF txt #16423C Passion One 30; microcopy "Free Shipping | 90-Days Money Back Guarantee" 13/22.
7. Divisor 1425x47
8. Editorial y3660 h505 bg #FEFDF8: imagen 585x379 + párrafo GeneralSans 18/30 #575757 (el embosador como pieza atemporal/legado).
9. Testimonios UGC y4164 h1336 bg #FEFDF9 + bg-image: "50.000+" GeneralSans 700 55/52 center; grilla 4 fotos 380x380 + estrellas + cita 16/28.8 #575757 + firma #4F4F4F; CTA Shop Now #16423C.
10. Cómo funciona y5501 h885 bg #FEFDF9: imagen 530x530 + 4 pasos 16/20.8 #575757 (elegir diseño+texto / superficie plana / alinear y presionar / revisar); CTA Shop Now + microcopy.
11. Divisor
12. Regalo y6465 h475 bg #16423C: "Make Gifting Extra Special" Passion One 69/72 #FFF; texto GeneralSans 20/30 #FFF; imagen 585x379.
13. Divisor
14. Us vs Others y7019 h750 bg #FEFDF9: título Passion One 40/52 #242424; imagen 550x493 tabla comparativa + ícono 110x110; filas: Gentle on Pages, No Ink Needed, Fully Customizable Designs, Easy to Use, 90-Day Money Back Guarantee.
15. CTA Shop Now + microcopy y7769
16. FAQs y7862 h807 bg #FEFDF9 + bg-image: H2 "FAQS" Passion One 100/130 #151515 center; acordeón: preguntas GeneralSans 16/20.8 ls.6 #242424; respuestas 16 #575757. (cómo enviar diseño, materiales, plazos 3 días producción, cuidado)
17. Loox reviews iframe 1425x2637 (widget iR2U-hq0RC) y8670
18. custom_liquid y11387 h92; footer y11479 h404: "Subscribe to our emails" Assistant 700 23.4/28.8; selector país "Argentina | USD $" 180x42 Poppins 13.

## Header/Announcement
Announcement: Essential Announcement Bar, bg #366251, h46, padding 10, texto "SALE: 30% OFF + FREE GOLD STICKERS 🎁" Assistant 700 22/26.4 #FFF centrado (popup dice 50% OFF welcome bundle -> inconsistencia/A-B).
Header wrapper bg #FEFDF8, h155, page-width 1200, pad 20/50; logo img 200x100 izq; menú inline centro-izq Poppins 400 14/18.2 ls.6 color #121212 75% alpha, pad 12 (summary con chevron pad-right 27); íconos 44x44 cuenta + carrito, stroke 1px (Dawn). Búsqueda: icono existe pero oculto (w0) en desktop? [verificar]. Sticky.
Submenú dropdown items Poppins 14 ls.4 pad 8/20, ancho 198.
Menú: Shop > Book Embossers (/pages/all-embosser-collections), Embosser Clips (/collections/clips), Custom Logo Embosser, Initials Embosser (/products/personalized-embosser), Focus Ring (/products/reading-focus-ring), Deep Read Supplement (/products/deep-read), Gift Card. About Us. Customer Support > Contact, Shipping Policy, Return Policy, Subscription Policy. Track Order (/apps/parcelpanel => ParcelPanel).
Footer: newsletter "Subscribe to our emails" (Dawn), selector país/moneda (Shopify Markets, AR muestra USD), íconos de pago: Amex, Apple Pay, Bancontact, Bizum, Diners, Discover, Google Pay, iDEAL, Mastercard, PayPal, Shop Pay, Visa. Links políticas. Sin redes sociales en footer.

## COLECCIÓN /pages/all-embosser-collections (GemPages) desktop, alto 5633
1. Hero y202 h270 bg #15423C: H2 "choose from over 200 designs" Bayon 700 80/80 ls.78 #FFF (Bayon Google, todo mayúsculas por la fuente); estrellas + "300,000+ Happy Customers" Assistant 16; línea; 3 checks Poppins 16 #FFF (#1 Selling Embosser On Earth / 90-Day Returns / Fast Worldwide Shipping). En captura se ve gris verdoso claro (posible animación/overlay) [color percibido no coincide con computado].
2. Divisor imagen 1425x47 y472
3. Grilla bg #DDDDDD h1716: 4 columnas, tarjeta 326 ancho, gap horizontal 40, fila cada 533px; tarjeta: imagen 326x326 (1:1), H2 nombre Poppins 700 24/31.2 ls.78 #121212, estrellas + "(14,259)" (mismo número en todas -> conteo global), precio $44.95 Poppins 700 18 #376251, tachado $71.99 Poppins 400 18 #4D4D4D. Sin botón, sin badge. 11 colecciones: Original, Initials, Mythology, Zodiac, Faith, Cat, Dog, Spooky, Fall, Valentine, Wedding. Sin filtros ni orden.
4. Loox iframe reviews y~2190 h2638.
Header aquí bg blanco, ícono búsqueda visible (en home oculto?).

## PDP /products/custom-book-embosser (GemPages template + Cloudlift Product Options + Kaching Bundles) desktop
Producto: 2 opciones nativas Shopify: Seal Design (32 valores, badge de imagen dice "29 unique") x Color (7: Onyx, Rose, Rose Gold, Lavender, Gold, Forrest Green, Deep Ocean) = 224 variantes, todas $44.95 compare $71.99. Tags OFFER 1005, OG. Vendor "My Store". 51 imágenes 1:1.
Layout 2 col: galería izq x112 ancho 584 (584x584 1:1, flechas, miniaturas 100x100 gap 3 en fila horizontal debajo y828); derecha x728 ancho 584. Gap entre col 32. Contenedor 1200 aprox (112..1312).
Galería = Cloudlift (splide fade) con slide de preview (canvas fabric.js 584x584). Badge circular amarillo sobre imagen ("CHOOSE FROM 29 UNIQUE SEAL DESIGNS") es parte de la imagen.
Columna derecha en orden:
 a. Título "Custom Book Embosser" Poppins 700 24/31.2 ls.78 #121212 (STRONG) y233
 b. Estrellas (amarillas) + "(14,259)" 16px
 c. 4 bullets con check negro circular, Poppins 400 16/28.8 (add a personal touch / works on books, envelopes and stickers / no ink needed, easy to use / 100% steel, lasts for life)
 d. separador línea gris gruesa (~3px) [medida No verificada]
 e. "Seal Design: <nombre>" legend Poppins 400 18/32.4 #4D4D4D; grilla 8 col swatches imagen 64x70 (img 61x67), paso 74px horizontal, 82px vertical, 4 filas; seleccionado con borde oscuro [color exacto no verificado]
 f. "Color: Onyx" legend 18 #4D4D4D; swatches circulares 30x31 paso 35px (7)
 g. Label "Custom Bottom Text (20 character limit)" -apple-system 16 #555555; input 584x50 borde 0.8px #000 radio 0 pad 10/15, placeholder "example: your name", maxlength 20, name properties[name] (Cloudlift)
 h. Kaching "BUNDLE & SAVE" (título 18 bold con líneas a los lados), 2 deal bars radio 8 gap; seleccionada: fondo #FFF + inset shadow 2px #366251; no seleccionada fondo rgba(0,0,0,.07). Fuente heredada (ui-sans-serif = sistema).
    - Bar 1 "Book Embosser" 20 bold, label "SAVE $27.04" (bg rgba(42,205,126,.56) texto #224C1D 12px), precio $44.95 20 bold #000, tachado $71.99 14 #555; selects Seal Design / Color (168x34, 116x34 radio 4) para variante. quantity-break qty 1 discountValue 8.99 default.
    - Bar 2 "Ultimate Gift Bundle", subt "Make it the perfect gift! 🎁" 14, badge negro "95% Of Customers Upgraded" 12px blanco (esquina sup der), SAVE $40.14, $61.83 vs $101.97; lista productos con thumb 48 radio 6: Custom Book Embosser $44.95 (71.99), Premium Embosser Packaging $8.89 (14.99), Golden Seal Sticker Packs $7.99 (14.99). Pre-seleccionada: bar 1.
 i. ATC "Add to cart" 584x56 bg #366251 txt #FFF Poppins 700 18 radio 0 pad 12/32 transition color .2s (clase tcustomizer-submit-button)
 j. 3 trust íconos en fila: fast shipping / over 250,000 sold / free 90 day returns (Poppins 16) [tercer número distinto: 250k vs 300k en home]
 k. Caja "Included FREE with every embosser:" Poppins 700 18; 50 golden seal stickers; personal travel case with matching design (íconos) 
 l. Acordeón FAQ (Poppins 16/20.8) primera: cómo crear el diseño...
Preview en vivo: al tipear aparece slide de preview: sello circular con texto curvo arriba "FROM THE LIBRARY OF" + ilustración del diseño + texto curvo abajo con lo tipeado. Fuente preview: BookmanStd-Light (Adobe/ITC Bookman, comercial) cargada desde Cloudlift; texto negro sobre fondo blanco/crema. Existe .cl-po--preview-sticky (preview fija, probablemente móvil). Script custom superpone imagen según color (#color-variant-overlay).
Kaching: block "Book Embosser Bundle", productos seleccionados 26, otherProductHandles premium-embosser-packaging, golden-seal-sticker-packs. Timer/sticky ATC/low stock desactivados en Kaching.
PDP debajo (ancho completo):
 m. Bloque descripción y2190: izq titular Poppins 700 24/43.2 ("transformá cada libro en recuerdo personalizado") + párrafo 16/28.8 tono nostálgico/vintage ("cada página susurra tu nombre"); acordeones "Worldwide Shipping Policy" (3 días producción + 3-7 hábiles envío, tracking al iniciar producción) y "90-Day Guarantee - 100% Money Back" (devolución 90 días, estado original, vía formulario contacto). Imagen der? [no verificado]
 n. Banda beneficios y2675 bg #366251 h354: título "Mystical Qualities" Poppins 700 35/63 #FFF centrado; 4 col (ancho 225, paso 325): custom for you / no ink needed / gentle on pages / pro craftsmanship (Poppins 700 18 + 400 16/24, íconos arriba [no verificado]).
 o. FAQ y3081 caja bg #C6BEB0 1200x504: imagen 474x474 izq + "Frequent Questions" Poppins 700 24 + 5 acordeones (cómo enviar diseño; materiales: papel de libro, stickers, sobres, papeles gruesos ok, no cartón; plazos 3 días + 3-7; cuidado: fuerza moderada, lugar seco, paño seco, probar en papel borrador al principio; problemas al llegar: contactar con fotos, reemplazo o reembolso "60-day" (contradice 90)).
 p. Loox reviews iframe 1410x2637 (productId).
Specs físicas (diámetro del sello, peso, medidas) NO figuran en texto de la PDP -> No verificado (puede estar en imágenes de galería).
POPUP 2 (Klaviyo, a ~1 min en PDP, temporada fiestas): overlay; caja 900x567 2 col (contenido 430 + imagen 450x567 sobre verde con sobre y sello dorado "Open me"); "A HOLIDAY GIFT, SEALED FOR YOU" / "50% OFF" / bajada (regalo con su nombre adentro, dejá el email para abrirlo); CTA "BREAK THE SEAL" bg #F4C805 Alike 18; rechazo "No Thanks, I'll pay the full price" 12px (confirmshaming). Logo 150x60.
Hover Dawn: menú item hover subrayado offset .3rem; link hover color fg; botones Dawn hover borde 1.3px. Kaching bar hover inset 2px rgba(0,0,0,.3); seleccionada inset 2px #366251 + radio relleno. Variant select inválido -> sombra roja 2px.

## ATC -> toast GemPages "Product added to cart" (arriba, gris) + abre UpCart drawer (shadow DOM #upCart)
Bajo ATC hay botón púrpura "Buy with Shop" (Shop Pay express) [verificar dims].
UpCart drawer: tarjeta flotante 365x887, top 10, radio 15, bg #FFF. 
 - Header h54 bg #325B4B, "Your Cart" Poppins 600 22 #FFF centrado, X.
 - Barra de recompensas (free-shipping-bar) bg #ECFDF5 r8 pad 10/10/5: "🎉 You've unlocked 30% OFF + Gift 🎁" Poppins 13 #111827 (bold en la oferta); progress 345x10 bg #D1FAE5 fill #10B981 r999; hitos "30% OFF" y "FREE GIFT" 10px 600 uppercase #10B981.
 - Línea regalo automático: "FREE GIFT: 50 Golden Seal Stickers" $4.99 tachado -> $0.00 (prop __upcartFreeGift).
 - Línea producto: thumb (preview personalizado?), título Poppins 600 16 #000, variante 14 "Seal Design: X, Color: Y" + punto color, "name : Biblioteca de Ana", $71.99 tachado + $44.95 Poppins 500 15; stepper qty 99x28 borde .8 #CCC r4; ícono papelera.
 - "You'll love these" Poppins 600 24 centrado; carrusel tarjetas 317 bg #F6F6F7 r8 pad 16/8: Golden Seal Sticker Packs $14.99->$9.99 con select (cantidad stickers "100") 135x34 bg #F9F9F9; botón "Add" 225x36 bg #366251 Arial 600 15 #FFF r0; Premium Embosser Packaging $14.99->$10.99 (en bundle PDP figuraba $8.89).
 - Footer sticky bg #F6F6F7 pad 23: add-on toggle (switch 44x24 r24 bg #E3E3E3) "❤️ Lifetime Warranty For $4.99" (borde 0.8 #000, precio #008A00); "Savings -$32.03" Poppins 700 15 #16A34A; "Subtotal $44.95" #111827; botón "Checkout" 319x51 bg #366251 Poppins 600 24 #FFF r0; "Express Shipping + 90 Day Returns" 14; íconos de pago (Apple Pay, GPay, PayPal, Amex, Visa, Mastercard, Shop Pay).
cart.js: 2 items, total 44.95, discount 0 -> el "30% OFF" no se refleja en carrito (probable descuento automático en checkout) [No verificado]. Props: _cl_options (Cloudlift), __kaching_bundles, name.

## Catálogo complementario (products.js)
- Golden Seal Sticker Packs: opción Quantity 100/200/500 -> $9.99/14.99, $13.99/23.99, $29.99/59.99. 1 imagen. (regalo de 50 incluido en cada embosador)
- Premium Embosser Packaging: $10.99/14.99 (en bundle PDP $8.89). 4 imágenes.
- Embosser Clips (colección /collections/clips): Embosser Clip, Mythology, Spooky, Fall, Romance, Mystical Forrest, Zodiac, Mystery Design, Matching Name Clip: todos $22.99/32.99 (clip = placa/"design clip" intercambiable para el embosador). Custom Book Embosser aparece aquí con compare $74.99 (en PDP 71.99) -> compare-at inconsistentes.
- Custom Logo Embosser: Choose Bundle 1/2/4 -> $99.95, $149.95, $199.95 (compare 129.99 fijo).
- Personalized (Initials) Embosser: Crest 4 x Color 7, $44.95/71.99.
- Zodiac Embosser: 36 diseños, $44.95/74.99, 77 imágenes.
- Focus Spinner Ring: 8 diseños $31.99/60.
- Deep Read (suplemento cognitivo, cápsulas): 30/90 días $34.99/59.99, con selling plan (Kaching Subscriptions) -> fuera de rubro.
- Gift Card: 1/2/3 embosadores = $45/$90/$135 (gift card nominada en "embosadores", buen recurso de regalo).
Descripciones nativas vacías: todo el contenido vive en GemPages.

## COLECCIÓN CLIPS /collections/clips (GemPages, H 4954) desktop
1. Hero (caja centrada 1200, fondo verde oscuro/imagen [color no verificado]): izq eyebrow estrellas "200,000+ Happy Customers" Assistant 16 #FFF (tercera cifra distinta); H "One Embosser. Endless Designs." Bayon 700 51/59.8 #FFF; párrafo Poppins 16/28.8 #FFF; CTA "Build My Collection" Bayon 900 34 #FFF (botón). Der imagen 536x536.
2. Divisor 1425x47
3. Grilla 4 col tarjeta 294 (paso 302, gap 8) imagen 294x294; título Poppins 400 18/23.4 #151515; precio Assistant 700 18 #366251 + tachado #4D4D4D; botón "View Designs" Bayon 700 22 #FFF (fondo verde) bajo precio.
4. Loox iframe.
Nota técnica: GemPages pinta tarde (~2-3 s); antes las imágenes salen a tamaño nativo.

## Páginas institucionales (Dawn, page-width--narrow 726px)
H1 Dawn: Assistant 700 67.6/83.2 ls.78 #121212 (52px x heading scale 1.3), centrado/izq en contenedor 726.
- /pages/about-us: H1 + 4 párrafos (rte): manifiesto emocional: reconectar lector con su biblioteca frente a distracciones digitales; artesanía "old-world"; comunidad de bibliófilos; biblioteca como legado. Sin imágenes.
- /pages/contact: H1 + form Dawn (Name, Email, Phone number, Comment).
- /pages/shipping-policy: 1 párrafo (3 días producción, 3-7 hábiles envío, mundial, tracking al empezar producción).
- /pages/return-policy: 1 párrafo (90 días, reembolso o cambio, original, vía formulario).
- /pages/reviews: existe pero vacía (solo H1 "Reviews"), no enlazada.
- FAQ: no hay página (/pages/faq 404); FAQ vive en home y PDP.
- /apps/parcelpanel: Track Order (ParcelPanel, render JS).
- /pages/subscription-information (GemPages) para Deep Read.
- Búsqueda: /search?q=embosser -> 45 resultados (Dawn predictive search).

## Loox (iframe loox.io/widget/iR2U-hq0RC)
Header: "14,259 Reviews" Poppins 16 #282828 + estrellas; botón "Write a review" 138x40 borde .8 #E8E8E8 r2 Poppins 16. Orden: Highest/Lowest Ratings. Grilla masonry 6 col (tarjeta 226, gap ~14), tarjeta bg #FFF r2 sombra 0 0 3px rgba(0,0,0,.2); foto arriba ancho completo (alto variable, retratos/fotos reales del cliente), nombre Poppins 700 16, estrellas #EBBF20 (svg 24px en resumen), texto 14/19 #000, bloque producto con thumb + nombre 12px con borde superior .8 #E2E2E2. "Show more reviews". Muchas reseñas con ángulo regalo (hermana, esposa, hija, novio, sobrina, cumpleaños). Fuente: Poppins (config).

## Track Order (ParcelPanel): H1 "Track Your Order" Assistant 700 52; 2 métodos: Order Number + Email/Phone -> botón "Track" 122x47 bg #121212 Poppins 15 #FFF r0; "Or" Tracking Number -> Track. Inputs 264x45 r0.
## Búsqueda (Dawn predictive): modal ancho completo 1440x157 bg #FFF baja sobre header; input 740x45 sin borde visible (Dawn field con borde pseudo), 16px. Resultados en columnas: SUGGESTIONS (heading Poppins 10 uppercase), sugerencias Assistant 700 16.9 (embosser, embosser stickers, embosser welcome bundle...), PRODUCTS con thumb 50x50, PAGES; botón "Search for ...".

## MÓVIL 390 — HOME (H 15198)
Popup Klaviyo móvil: hoja casi pantalla completa bg #18413D (verde), imagen arriba (mockup "welcome bundle": libreta personalizada, embosador, travel case, señalador grabado, 200 stickers, caja-libro; sticker amarillo $240 tachado -> $120), "50% OFF" Alike verde #34F55B ~50px, bajada Alike blanca, input borde verde, CTA "Continue" (formulario de 2 pasos) bg #34F55B Alike, "No thanks" blanco. Al cerrar queda teaser fijo abajo "Sign up" (barra verde oscura ancho completo, texto verde).
Announcement: Assistant 700 17/20.4 centrado (2 líneas posibles).
Header móvil h110 bg #FEFDF8: hamburguesa izq, logo centrado 150x75, carrito der.
Menú lateral (Dawn menu-drawer): items Poppins 400 18/23.4, submenús deslizan (Shop -> lista), "Log in" Poppins 700 14 con ícono, selector país abajo.
1. Imagen "COLORS ARE HERE" 390x390 arriba (en móvil va ANTES del texto hero).
2. Hero texto centrado: eyebrow GeneralSans 700 14 con estrellas; H Alike 700 35/42 centrado (358 ancho, gutter 16); bajada GeneralSans 500 16/19.2; separador 358x14; CTA "Shop Custom Embosser" 358x67 bg #00BF64 Alike 700 20; checks en fila GeneralSans 500 13.
3. Reviews: carrusel horizontal 1 tarjeta (imagen 325x325, texto 14/25.2).
4. Productos: carrusel horizontal tarjetas 272 (img 272x272), título GeneralSans 700 22/33, precio GeneralSans 700 22, tachado Assistant 700 18, botón "Learn More" 272x65 bg #16423C Passion One 30.
5. Beneficios apilados 1 col: título GeneralSans 700 24/36, texto 18/32.4 centrado (ancho 312).
6. Feature verde: imagen 360x413, sub 20, bullets 15/19.5 (con íconos ~40 a la izq, texto en x70), "Shop Now" blanco 360x55.
7. Editorial: título "Heirlooms That Last Generations" Passion One 52/52 centrado; texto 18; imagen 350x227.
8. UGC: "Loved by Bookworms" GeneralSans 700 50/65 + "50.000+" 55; carrusel 1 tarjeta 360x360; CTA Shop Now 360x65 #16423C.
9. "How to Use?" Passion One 700 50/65; imagen 360x360; 4 pasos en zigzag 2 col (154 ancho) GeneralSans 14/18.2; CTA 302x65.
10. Regalo: "Make Gifting Extra Special" Passion One 69/65 centrado; img 360x233; texto 18/23.4; CTA blanco.
11. "Why Us?" Passion One 700 70/65 + tabla Us vs Others (filas 16/20.8, íconos 80x80).
12. FAQS acordeón; 13. Loox 390x4538.
Divisores ondulados 390x13.

## MÓVIL PDP (H 14872)
Galería 360x360 (gutter 15) + miniaturas 66x66 en fila; título Poppins 700 20/26; bullets 14/25.2; Seal Design: swatches 64x66 en UNA fila con scroll horizontal (flex nowrap, 32 ítems) + barra de progreso de scroll verde #366251 54x7 debajo; Color: círculos ~30 (seleccionado con anillo negro), colores de los círculos aprox de captura (Onyx negro, Rose coral, Rose Gold rosa pálido, Lavender lila, Gold amarillo, Forrest Green verde salvia, Deep Ocean azul marino) [HEX no verificables: son imágenes/DIV #333]; input 360x50 (focus: sombra 1px #374151); Kaching igual que desktop a 360; ATC 360x67 #366251 Poppins 700 24; botón "Buy with Shop" púrpura (#5A31F4 aprox de captura) misma anchura; trust 3 col íconos línea; caja "Included FREE" con imagen 165x165 + texto 12/21.6 (borde gris); acordeón FAQ.
PREVIEW STICKY MÓVIL: al editar opciones/texto aparece barra fija superior blanca 390x211 (.cl-po--preview-sticky mobile overlay) con la vista previa del sello centrada -> el usuario ve el sello mientras escribe. Clave para replicar.
Teaser Klaviyo "Sign up" fijo abajo 390x50 (verde oscuro, texto verde) tras cerrar popup.
No hay sticky ATC (Kaching stickyAtc desactivado).
## MÓVIL carrito vacío (UpCart): tarjeta 365x823 flotante (left 20, top 10), header verde "Your Cart", texto centrado "Your cart is empty" (Poppins ~18) sin CTA ni recomendaciones. (Carrito se vació al cambiar UA/sesión.)
## MÓVIL menú: drawer Dawn ancho completo 390, debajo del header (top ~150), bg #FFF, items 45 alto pad 11/52/11/30 Poppins 18 #121212, chevrons a submenú.
## MÓVIL colección embosadores: hero #15423C con "Choose from over 200 designs" Bayon 700 45/58.5 centrado (2 líneas), estrellas + 300,000+ Happy Customers, línea, 3 íconos línea blancos en fila (#1 Selling Embosser On Earth / Fast Worldwide Shipping / FREE 90-Day Returns); divisor rasgado blanco (papel roto); grilla 2 col tarjetas (~170) imagen = ilustración del sello sobre fondo crema (mockup de la impresión, no foto del aparato), nombre Poppins 700, estrellas + (14,259).
