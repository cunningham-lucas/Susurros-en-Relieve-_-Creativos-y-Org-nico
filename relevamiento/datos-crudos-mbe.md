# Raw MBE (2026-10-28)
Shopify gttr0g-z0, Dawn 15.0.0 (custom "25 Oct 2026 - Taiwan zh auto-language", t/24). Sin GemPages: secciones Dawn + secciones "ss_" (Section Store: ss_featured_collection_18, ss_product_ingredients_5, ss_comparison_table_6).
Apps: Kaching Bundles, Cloudlift (cargado, pero personalizador PROPIO "mbe-cz" en JS ~26KB: canvas 2000x2000, fuente "MBE Bookman" + "MBE Cormorant" para iniciales; comentario: geometría copiada de Cloudlift), UpCart, Loox (dJV9p1G3cK), Klaviyo, ParcelPanel (/apps/parcelpanel), wetracked.io (server-side tracking), 506.io (?), Swiper, vanilla-lazyload, Shopify privacy banner (no se mostró), GA/Ads x3, Meta pixel.
Moneda: detectó AR y mostró UYU en home (selector "Argentina | UYU $U") -> rarezas de Markets; PDP/carrito en USD.
Productos por país (PH, NL, DE, JP, KR, PL, BG, IT, PT, FI, DK, TW, T2) con precios distintos ($36-$49 / compare 64.95) -> clones por mercado. Principal /products/custombookembosser $42.95/64.95 (1 variante; todo vía propiedades).
Otros: Extra Embosser Clip $24.95/39.95 (+ Spooky, Mythology), Extra Embosser Plate Nature $37.90, colecciones Spooky/Nature/Mythology $45.95, Stickers 100 pack $8.95/19.95 (2 colores: plata/oro), Magnetic Bookmarks $12, MyBookLight $28/39 (3 colores), Giftcard $40/50/80/100, $20 gift card (regalo en bundle), Lifetime Warranty $3.99.
Tokens Dawn: body+heading Assistant (400/700, heading weight 400, scale 1.0), Josefin Sans cargada (uso?); Inter en tabla comparativa (Section Store). buttons radius 10px (outset 11), inputs radius 10, variant pills 40, media 0, page-width 1200, spacing-sections 0.
Esquemas: base #FFF/#121212; #FCFCFC; #F3F3F3; #121212; #334FB4; ciruela #7C5272 (fondo bandas, botón); lila #E0BEFF / botón #9D4BE9; #594 2C6 (texto violeta 89,66,198); #BFB7C1 gris malva. Announcement bg #8B4A7B. Badge Kaching "Save" bg #875A7C. Progreso UpCart #88679B. Kaching no seleccionada bg #EFEAEE sombra 1px rgba(124,82,114,.3); seleccionada inset 2px #7C5272 bg #FFF r11.
HOME 1440 (H~9640):
 0 announcement 40 bg #8B4A7B "SALE: 30% OFF + FREE SHIPPING" Assistant 700 15 ls1 #FFF
 1 header 92 bg #FCFCFC logo 120x36 izq, menú inline (Shop▾: Embossers, Clips, MyBookLight, Giftcard; Track your order; About us; Contact us; Become an Ambassador) Assistant 14 ls.6; búsqueda + carrito der.
 2 image banner 1425x560 (foto mano usando embosador) con caja blanca centrada: "A customized book embosser — made just for you" Assistant 700 24 centrado; bajada 16/28.8; CTA "BUY CUSTOMIZED BOOK STAMP" 282x47 bg #121212 c#F3F3F3 Assistant 15 ls1 r11.
 3 ss_featured_collection "Products" 700 22: primera tarjeta video vertical 323x437 (UGC IG, "@mybookembosser", "25,000+ happy book lovers", "Get your personalized book stamp today!") + 3 tarjetas 235x235 img (badge circular ciruela); título 20, subt 14, precio tachado #AFAFAF + precio, botón "Buy Now" 700 14.
 4 image-with-text 548x550: "Create memories that last" 700 24 + texto + BUY NOW.
 5 multicolumn bg #7C5272 4 col íconos 180x180: customized for you / no ink required / gentle on pages / long lasting embossing (700 18 + 16 blanco centrado).
 6 ss_product_ingredients "How does it work?" 700 44 centrado; 4 tarjetas imagen 435x435 con Step 1 Choose a design / Step 2 Choose a quote (4 options) / Step 3 Choose a name (up to 21 chars) / Step 4 Order (slider).
 7 image-with-text "The perfect gift" + Buy now.
 8 ss_comparison_table "Why choose us?" Inter 52; texto 18; botón Buy now; columnas Us (logo 100x100) vs Others: Gentle on pages / No ink required / Designs created by book designers / Easy to use / 30-day money-back guarantee.
 9 FAQ (Dawn collapsible) "Frequently Asked Questions" 700 24 centrado.
10 Loox app block (iframe, alto 3709)
11 multicolumn #7C5272 íconos 89: FREE SHIPPING / SECURE PAYMENT (Klarna) / 30-DAY RETURN POLICY / 24/7 SUPPORT.
12 footer blanco: Customer Service (Contact Us, email), Information (About, Track, Return, Shipping, Ambassador), newsletter?, pagos: Amex, Bancontact, BLIK, GPay, Klarna, Maestro, MC, MB WAY, MobilePay, PayPal, Satispay, Shop Pay, Visa. Sin redes.
Pop-up Klaviyo: no apareció en 11 s en home desktop [No verificado si existe].
PDP 1440 /products/custombookembosser (H 6306):
 Galería izq 605x605 (x163) + miniaturas 119x119 fila; primera slide = preview en vivo (canvas) reemplazando foto (3 sellos ejemplo + embosador).
 Der x818 ancho 445: H1 "My Book Embosser - Custom Book Embosser" Assistant 400 40/52; estrellas + (1,484); 5 bullets check 16/24 (coleccionar, regalo para lectores, elegante sin tinta, libros prestados vuelven, 100% acero).
 "Choose Design" (i: "Click on a design to preview") 18 #555; 30 swatches 50x50 r6 borde 1px #D1D5DB, seleccionado borde #374151 + ring; 7 por fila (paso 60). Diseños: Sword of Legends ... + "Initials" (dos inputs de 1 carácter).
 "Choose Quote" select 445x38 r6 borde #D1D5DB: FROM THE LIBRARY OF / EX LIBRIS / [No quote] (+ "[Write your own quote]" en código, input YOUR QUOTE max 40).
 "Enter name" input 445x43 r6 placeholder YOUR NAME, maxlength 40 (copy dice 21), fuerza MAYÚSCULAS. Preview: texto curvo arriba (quote) + abajo (nombre) en Bookman.
 Kaching BUNDLE & SAVE 17 bold: bar1 "Custom Book Embosser" $42.95/$64.95 "Save $22.00" (badge #875A7C blanco 12); bar2 "Ultimate Gift Bundle" badge "95% Of Customers Upgraded", $51.90/$104.90 "Save $53.00": embosser $42.95 + Sticker Seals 100 $8.95 + FREE $20 Gift Card $0.
 ATC 440x47 bg #7C5272 Assistant 700 18 r11. Sin Shop Pay/express en PDP.
 Trust: Free shipping / Over 65,000 sold / Free 90 day returns (15).
 "Booklovers love our embossers!" 18 + carrusel 9 videos UGC verticales 134x223.
 Video 693x519 + "A personal story in every book" 700 30 + párrafo (paráfrasis casi literal del de TWP) + acordeones Shipping Policy (3–5 días hábiles producción + 5–8 entrega, tracking por email) y 90-Day Satisfaction Guarantee.
 Banda #7C5272: custom for you / no ink needed / gentle on pages / pro craftsmanship (idéntico a TWP).
 FAQ: video 623x623 izq + acordeón 18: cómo crear / materiales (papel de libro + nuestros stickers, acuarela ok, no cartón) / plazos 3–5 + 5–8 / "¿no puedo escribir mi nombre?" (tinta se borra) / ¿daña el libro? / ¿baja el valor? (honesto: puede afectar reventa) / contacto 24h 7 días.
 Loox iframe 1080x1776; banda trust (FREE SHIPPING / SECURE PAYMENT PayPal / 30-DAY RETURN / 24/7 SUPPORT).
 Inconsistencias: 90 vs 30 días; "free shipping on all orders" vs carrito "free shipping over $45"; 65k vs 25k vendidos.
CARRITO UpCart: drawer 440x900 derecho, sin radio, header "Cart • 1" 18; rewards "You've unlocked free shipping!" barra #88679B sobre #E2E2E2 r16; línea: thumb 88 (preview), título 15, propiedades Design/Quote/Name (14, label bold), stepper 105x30, $64.95 tachado + $42.95; "The perfect combination:" upsell Stickers 100 Pack $19.95->$8.95 con estrellas (119 reviews), select variante + botón ciruela 120x36 r10; footer #FAFAFA: Savings -$22.00 #169B45 700 18, Subtotal 20, Checkout 394x55 #7C5272 r10 700 18, imagen de pagos 384x35. Vacío: "Get free shipping on orders over $45!".
Propiedad _preview: PNG del canvas subido a Shopify uploads (para producción).
