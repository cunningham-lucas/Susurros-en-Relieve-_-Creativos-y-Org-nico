# Propuesta de valor — réplica de The Whispering Pages en Argentina (v1)

28/10/2026. Reemplaza las decisiones de `propuesta-de-valor.md` donde se contradigan.

**Regla del proyecto:** se replica TWP (estructura, oferta, mecánicas, tono). MBE solo entra donde TWP no tiene algo. Lo que no hacen, no se hace.
**Plataforma:** Tiendanube.
**Landing v1:** lienzo "Landing ex libris" (home, página de producto con personalizador y carrito, pop-up).

## 1. Promesa central
"Un embosador para tus libros, hecho solo para vos" + el regalo perfecto para un lector.

| Promesa | Cómo la muestra TWP | En la landing |
|---|---|---|
| Personalización real | Diseño + color + texto, vista previa en vivo | Personalizador con vista previa, fija arriba en móvil |
| Sin tinta | Bullet y banda de beneficios | Bullet, banda verde, comparativa |
| Cuida las hojas | Beneficios + comparativa | Igual |
| Dura toda la vida | "100 % acero" | "[Material real]": se completa con el dato del proveedor |
| Versátil | Libros, sobres, stickers | Beneficio "Muchas superficies" |
| Legado | Bloque editorial | "Un recuerdo que pasa de generación en generación" |
| Regalo | Bloque regalo, pack regalo, reseñas de regalo | Igual |
| Compra sin riesgo | 90 días, envío gratis | Igual (ver sección 6) |

## 2. Producto principal
- Embosador + placa con el diseño elegido.
- Opciones: diseño, color del aparato, texto inferior de hasta 20 caracteres. Texto superior fijo: "DE LA BIBLIOTECA DE".
- **Incluido gratis**, en caja visible debajo del botón: 50 stickers dorados + estuche de viaje con el mismo diseño.
- Pack en la ficha: "Embosador" (preseleccionado) / "Pack regalo" = embosador + caja premium + stickers.

**Proporciones de precio de TWP** (para fijar los pesos cuando esté el costo):
- Precio tachado = precio × 1,60
- Pack regalo = precio × 1,38

## 3. Adicionales (orden de prioridad)
Proporción = precio de TWP sobre el embosador (US$44,95).

| Adicional | Dónde se ofrece | Proporción TWP |
|---|---|---|
| Stickers dorados 100 / 200 / 500 | Carrito (con selector de cantidad) | 22 % / 31 % / 67 % |
| Placa de diseño extra | Home (2.ª tarjeta) y colección | 51 % |
| Caja regalo premium | Pack de la ficha y carrito | 24 % suelta, 20 % dentro del pack |
| Garantía de por vida | Interruptor en el pie del carrito | 11 % |
| Gift card "para 1 / 2 / 3 embosadores" | Menú Tienda | 1×, 2×, 3× el precio |
| Embosador con logo 1 / 2 / 4 unidades | Menú Tienda | 222 % / 334 % / 445 % |
| Embosador de iniciales | Menú Tienda | 100 % |
| Colecciones temáticas | Grilla de colecciones | 100 % |

Colecciones de TWP: zodíaco, iniciales, mitología, gatos, perros, Halloween, otoño, San Valentín, bodas.
Fuera de rubro (anillo, suplemento): no se replica; el suplemento además requiere ANMAT.

## 4. Mecánicas de venta y cómo se arman en Tiendanube

| Mecánica TWP | App en TWP | En Tiendanube | Estado |
|---|---|---|---|
| Personalizador con vista previa en vivo (texto curvo), fija en móvil, imagen adjunta al pedido | Cloudlift | A) App Campo Personalizado, plan Nivel 3 (trae vista previa en vivo). B) Script propio, como el personalizador que hizo MBE, cargado por FTP o como app privada | Confirmar si A hace texto curvo. Si no, B con el prototipo del lienzo como base |
| Pack "unidad / pack regalo" en la ficha | Kaching Bundles | App Bundle Flow (combos y kits) o kits nativos | Confirmar que muestre el selector en tarjetas |
| Regalo automático en el carrito + mensaje de cuánto falta | UpCart | Nativo: promoción "regalo en el carrito" con descuento automático | Solo en diseños Ipanema, Recife, Rio, Baires, Cali, Lima, Morelia, Toluca, Uyuni. El mínimo es por monto: ponerlo ≤ precio del embosador |
| Upsells en el carrito + interruptor de garantía | UpCart | Buscar app o código propio | Pendiente |
| Reseñas con foto | Loox | Reviews Rakun: fotos, pedido automático por email, estrellas en tarjetas, plan gratis | Sin video |
| Pop-up de email con descuento | Klaviyo | Pop-up nativo de Tiendanube o app de pop-up | Elegir |
| Barra de anuncios, contador de envío gratis | Apps | Nativo | OK |
| Seguí tu pedido | ParcelPanel | Seguimiento de Tiendanube / empresa de envíos | Confirmar |
| Pagos | Shop Pay, PayPal, tarjetas | Mercado Pago / Pago Nube, tarjetas, transferencia | — |

## 5. Comunicación de la landing (orden de TWP)
Home: anuncio → header → hero → reseñas (banda verde) → 2 productos → 4 beneficios → banda verde de producto → editorial de legado → UGC con cifra → cómo se usa → regalo → comparativa → preguntas → widget de reseñas → footer.
Producto: galería con vista previa → título, estrellas, 4 bullets → diseño → color → texto → pack → agregar al carrito → 3 íconos de confianza → incluido gratis → preguntas → descripción + envíos + garantía → banda de beneficios → preguntas con foto → reseñas.
Carrito: regalo desbloqueado + barra → línea del producto con diseño, color y texto → regalo en $0 → "Te van a encantar" (stickers, caja) → garantía con interruptor → ahorro, subtotal, "Iniciar compra".
Tono: emotivo y nostálgico (biblioteca, legado, regalo), en castellano rioplatense.

## 6. Garantías y servicio
- 90 días de devolución con reembolso total.
- Plazos de TWP: 3 días de producción + 3–7 hábiles de envío → en AR: [N] + [N] según proveedor y zona.
- Seguimiento enviado al arrancar la producción. Contacto por formulario.

## 7. Qué se adapta por ley argentina (requisito, no rediseño)
No soy abogado: conviene validarlo con un abogado o contador antes de lanzar.
- **Cifras** (vendidos, reseñas, "95 % eligió el pack"): solo datos reales. La Ley 24.240 y el DNU 274/2019 de Lealtad Comercial prohíben la publicidad engañosa. En la landing quedan los espacios con [N] y se llenan cuando haya datos.
- **Precio tachado y "% OFF" fijo:** solo con un precio anterior real.
- **Botón de arrepentimiento** visible (Res. 424/2020). Ya está en el footer.
- **Precios en pesos**, finales.
- El arrepentimiento legal (10 días) exceptúa productos personalizados (art. 1116 del CCyC); la garantía de 90 días de TWP es más generosa y se mantiene si el margen la banca.

## 8. Qué no se copia literal
Textos, fotos, diseños de sello, nombre y logo de TWP y MBE son de ellos. Se replica la estructura, la oferta, las mecánicas y el tono, con textos y diseños propios.

## 9. Manual de marca aplicado
Tokens de `whispering-pages-tokens.css`: verde #16423C / #366251, crema #FEFDF8, Alike en el hero, Passion One en titulares, Poppins en cuerpo (General Sans no está en Google Fonts).
Único ajuste: el verde del botón del hero pasa de #00BF64 a #00A356 para que el texto blanco se lea (contraste mínimo).

## 10. Pendiente para lanzar
1. Proveedor: costo puesto, material, diámetro del sello, placas intercambiables, colores, estuche.
2. Nombre de marca (hoy [MARCA]).
3. 12–16 diseños de sello propios.
4. Fotos y videos (cada espacio del lienzo dice qué foto va).
5. Plazos de producción y envío.
