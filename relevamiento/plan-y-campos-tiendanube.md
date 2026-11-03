# Plan de Tiendanube y campos personalizados del pedido — decisión (v1)

28/10/2026. Complementa `propuesta-de-valor-replica-tiendanube.md` (sección 4). Precios en ARS, vigentes al 28/10/2026.
Marcas: **[No verificado]** = no hay fuente oficial que lo confirme; va a la lista de preguntas de la sección 7.

## Recomendación

**Plan:** Impulso. $79.999/mes pagando mes a mes, o $719.991 por año (equivale a $59.999/mes).
Es el plan más barato que trae acceso al código del tema, y sin código no hay forma confirmada de lograr el personalizador de TWP (texto curvo en vivo, vista previa fija en móvil, imagen para producción).

**Método de campos:** híbrido, sin apps pagas.
- **Variantes nativas** para lo que es una lista cerrada: Diseño × Color × Opción (Embosador / Pack regalo). Cada combinación tiene su precio y llega al pedido como variante.
- **Script propio en el tema** para lo demás: el campo de texto (20 caracteres, mayúsculas), la vista previa en canvas (la del prototipo del lienzo) y la imagen. El texto y el enlace a la imagen viajan como **propiedades de la línea del pedido** (`properties`), que es el mecanismo que ya usan las apps de personalización de Tiendanube.
- **Imagen de la vista previa:** el PNG se sube a un almacenamiento externo y el pedido guarda la URL en una propiedad oculta. Plan B sin almacenamiento: como el sello depende solo de diseño + texto, se regenera el PNG en producción con el mismo script. Tiendanube no tiene forma de adjuntar un archivo a un pedido.

**Costo mensual fijo estimado:** $79.999 (o $59.999 con pago anual). El personalizador no suma costo de software.

**Antes de pagar:** probarlo en los 7 días gratis de Impulso. Hay que confirmar que las propiedades se ven en el detalle de la venta y en la exportación, y que el regalo en el carrito funciona con el tema modificado (preguntas 1 a 4 de la sección 7).

**Si no se quiere programar:** Esencial + Campo Personalizado Nivel 3 cuesta $74.389/mes, casi lo mismo que Impulso. Pero no está confirmado que haga texto curvo, cobra 2 % por venta con Mercado Pago (Impulso cobra 1 %) y no da acceso al código para el resto de la réplica (upsells en el carrito, selector de pack en tarjetas).

---

## 1. Planes vigentes de Tiendanube Argentina

| | Inicial | Esencial | **Impulso** | Escala | Evolución |
|---|---|---|---|---|---|
| Precio mensual | Gratis | $27.999 | **$79.999** | $244.999 | A consultar |
| Pago anual | — | $251.991 ($20.999/mes) | **$719.991 ($59.999/mes)** | $2.204.991 ($183.749/mes) | — |
| Costo por transacción con Pago Nube | 0 | 0 | **0** | 0 | 0 |
| Costo por transacción con otros medios (Mercado Pago, etc.) | Solo Pago Nube | 2 % | **1 %** | 0,7 % | Negociable |
| Comisión Pago Nube (liberación a 30 días) | 2,99 % + IVA | 2,97 % + IVA | **2,85 % + IVA** | 2,65 % + IVA | Negociable |
| Código del tema (HTML, CSS, JS) | No | No | **Sí** | Sí | Sí |
| Dominio propio | No | Sí | Sí | Sí | Sí |
| +65 diseños | No | Sí | Sí | Sí | Sí |
| Perfiles (usuarios) | Ilimitados | Ilimitados | **Ilimitados** | Ilimitados | Ilimitados |
| Permisos distintos por usuario | No | No | **Sí** | Sí | Sí |
| Productos | Ilimitados | Ilimitados | **Ilimitados** | Ilimitados | Ilimitados |
| Campos personalizados de gestión (ventas, productos) | No | No | No | Sí | Sí |
| Soporte por WhatsApp | No | No | **Sí** | Sí | Sí |

Fuente: [Planes y precios, Tiendanube Argentina](https://www.tiendanube.com/planes-y-precios), tabla comparativa leída el 28/10/2026. Tiendanube ajusta los precios cada tres meses (enero, abril, julio y octubre), según las preguntas frecuentes de esa página.

Además:
- **Percepción de IVA:** si la tienda no está inscripta en ARCA, se suma una percepción del 10,5 % sobre el plan y los costos por transacción ([¿Qué costo tiene Tiendanube?](https://ayuda.tiendanube.com/es_AR/sobre-tiendanube/que-costo-tiene-tiendanube), 12/06/2026).
- **Plan gratuito:** solo cobra con Pago Nube y no tiene diseño a medida por FTP ([¿Qué incluye el plan gratuito?](https://ayuda.tiendanube.com/es_AR/123482-planes/que-funcionalidades-incluye-el-plan-gratuito-de-tiendanube), 28/09/2026).

### Costos de pago por venta (ejemplo: venta de $100.000, IVA del 21 % incluido)

| Medio | Liberación | Costo total sobre la venta en Impulso | Fuente |
|---|---|---|---|
| Pago Nube, tarjeta | 30 días | 3,45 % ($3.449) | [Comisiones de Pago Nube](https://ayuda.tiendanube.com/es_AR/pago-nube-2/cuales-son-las-comisiones-de-pago-nube) (25/09/2026) |
| Pago Nube, tarjeta | 14 días | 3,98 % | ídem |
| Pago Nube, tarjeta | 7 días | 5,07 % | ídem |
| Pago Nube, tarjeta | 1 día | 7,13 % | ídem |
| Pago Nube, transferencia | — | 1,20 % | ídem |
| Mercado Pago + 1 % de Tiendanube | 35 días | 2,80 % | [Mercado Pago Checkout](https://www.mercadopago.com.ar/herramientas-para-vender/check-out) + tabla de planes |
| Mercado Pago + 1 % de Tiendanube | 18 días | 5,10 % | ídem |
| Mercado Pago + 1 % de Tiendanube | 10 días | 6,31 % | ídem |
| Mercado Pago + 1 % de Tiendanube | Al instante | 8,61 % | ídem |

- La comisión de Pago Nube se calcula sobre el total, envío incluido. Las cuotas sin interés tienen un costo de financiación aparte.
- Mercado Pago aclara que sus costos pueden variar según impuestos provinciales.
- No está claro si el 1 % de Tiendanube lleva IVA; acá se calculó sin IVA **[No verificado]**.

---

## 2. Qué pide la réplica y desde qué plan se puede

| Requisito | Qué dice la fuente oficial | Plan mínimo |
|---|---|---|
| Editar el código del tema / FTP | "El acceso al código fuente está disponible para los planes Impulso, Escala y para Tiendanube Evolución" ([Cómo modificar el diseño desde el código](https://ayuda.tiendanube.com/es_AR/123227-editar-el-codigo-de-diseno/como-modificar-el-diseno-desde-el-codigo-de-mi-tienda), 23/09/2026) | **Impulso** |
| Cómo se edita según el diseño | Rio, Recife y los demás diseños clásicos: se abre el FTP y se edita con el CLI. Ipanema (por secciones): se hace un *fork* con el CLI, sin FTP. Con *fork*, las actualizaciones de Tiendanube llegan como aviso para revisar. Al cerrar el FTP se pierden los cambios. Tiendanube no hace backup del diseño modificado (misma fuente). | — |
| Qué no se puede tocar por código | El checkout, el logo de Tiendanube del pie y los formularios de contacto y registro. Tampoco hay modo borrador ni vista previa ([Qué cambios se pueden hacer vía código](https://ayuda.tiendanube.com/123227-editar-el-codigo-de-diseno/que-tipo-de-cambios-se-pueden-hacer-sobre-el-diseno-via-codigo), 02/10/2026) | — |
| Código propio en el checkout | Solo en el plan Evolución, con Nube SDK ([Códigos personalizados en el checkout](https://ayuda.tiendanube.com/es_CO/134108-configura-tu-tienda/como-agregar-codigos-personalizados-en-el-checkout-de-mi-tiendanube), 11/08/2026). La réplica no lo necesita. | Evolución |
| Apps privadas con acceso a la API | Se crean en el admin, en "Aplicaciones a medida", con token y permisos por recurso. Límite: 2 pedidos por segundo. La página no dice desde qué plan están disponibles **[No verificado]** ([Crear una aplicación a medida](https://ayuda.tiendanube.com/aplicaciones-a-medida/como-crear-una-aplicacion-a-medida-y-acceder-al-token-en-mi-tiendanube), 09/10/2026). | [No verificado] |
| Scripts propios en la tienda por API | Recurso *Script*: se registra desde el portal de socios con el permiso `scripts`. La API pública ya no registra scripts nuevos ([Script, documentación de la API](https://tiendanube.github.io/api-documentation/resources/script)). Con Impulso no hace falta: el JavaScript va directo en el tema. | Impulso (por tema) |
| Regalo en el carrito | Funciona con los diseños Ipanema, Recife, Rio, Baires, Cali, Lima, Morelia, Toluca y Uyuni. El mínimo es un monto sobre el total del carrito. Tiene barra de progreso opcional ("Sumá $… y llevá un regalo") ([Promoción de regalo en el carrito](https://ayuda.tiendanube.com/es_AR/123465-cupones-y-promociones/como-crear-una-promocion-de-regalo-en-el-carrito-en-mi-tiendanube), 22/10/2026). La nota no dice qué planes la incluyen; la tabla de planes marca "Promociones de marketing" en todos. No dice si sigue andando con un diseño modificado por código **[No verificado]**. | Todos (a confirmar) |
| ¿Los 9 diseños están en Impulso? | Sí: los 9 figuran como "Gratis" en la [Tienda de diseños](https://www.tiendanube.com/tienda-disenos-nube), y "+65 diseños" está incluido desde Esencial. | Esencial |
| Productos | Ilimitados en todos los planes (tabla de planes). Tope técnico: 100.000 productos y 250 fotos por producto ([Límite de elementos](https://ayuda.tiendanube.com/es_AR/122976-personalizar-tu-diseno/cual-es-el-limite-de-elementos-que-puedo-agregar-en-mi-tiendanube), 30/01/2026). | Todos |
| Variantes | Hasta 3 propiedades por producto y 999 combinaciones ([Variantes del producto](https://ayuda.tiendanube.com/es_AR/160437-variantes-del-producto/que-son-las-variantes-y-como-configurarlas-en-mis-productos), 16/10/2026). Otra página dice 1.000; tomamos 999. Se puede poner una foto distinta por variante. Sin diferencias por plan. | Todos |
| Usuarios | "Perfiles ilimitados" en todos los planes. Permisos distintos por usuario, desde Impulso (tabla de planes). | Todos (permisos: Impulso) |

**Encaje de las variantes:** 16 diseños × 7 colores × 2 opciones = 224 combinaciones, lejos del tope de 999. Las fotos por variante también entran: 16 × 7 = 112 de 250.

---

## 3. Campos del pedido: qué se necesita

Cada embosador del pedido (puede haber más de uno) tiene que llevar:
1. Diseño del sello
2. Color del aparato
3. Texto inferior: hasta 20 caracteres, en mayúsculas
4. Opción: unidad o pack regalo
5. Imagen de la vista previa para producción. MBE lo resuelve con una propiedad `_preview` que lleva el PNG del canvas.

Como un pedido puede tener dos embosadores, **los datos tienen que ir por línea de producto, no por pedido**.

---

## 4. Tabla comparativa

| | a) Solo variantes nativas | b1) Campo Personalizado Nivel 1 | b3) Campo Personalizado Nivel 3 | c1) Personalize | c2) Campos Personalizados (wzhub) | **d) Variantes + script propio** |
|---|---|---|---|---|---|---|
| Costo por mes | $0 | ARS 10.991,92 | ARS 46.389,65 | No publicado [No verificado] | Gratis a USD 14,99 | **$0** (+ almacenamiento opcional) |
| Plan de Tiendanube mínimo | Esencial | Esencial [No verificado] | Esencial [No verificado] | [No verificado] | [No verificado] | **Impulso** |
| Vista previa en vivo | No. Solo una foto fija por variante, sin el texto | No | Sí, "Live Preview" sobre la foto, con posición, tamaño y estilo | Sí, "mockup en tiempo real" | No | **Sí, la del lienzo, controlada por nosotros** |
| Texto curvo sobre el sello circular | — | — | [No verificado] | [No verificado] | — | **Sí** (ya está en el prototipo) |
| Vista previa fija arriba en móvil | — | — | [No verificado] | [No verificado] | — | **Sí** (se programa) |
| Diseño y color en el pedido | Como variante | Como variante, o como campo de la app | Ídem | Ídem | Ídem | **Como variante** |
| Texto inferior en el pedido | **No se puede.** Lo único nativo es la "Nota del cliente" del checkout: una por pedido, opcional y sin límite de caracteres ni mayúsculas | Campo de texto con límite de caracteres. Cómo llega a la venta: [No verificado] | Ídem | Llega a una "pantalla exclusiva para pedidos personalizados" de la app | "Guarda esos detalles en el artículo del pedido", según la ficha | **Propiedad de la línea** (`properties[Texto]`), con 20 caracteres y mayúsculas forzadas por el script |
| Opción unidad / pack regalo | Como variante (con precio propio) | Como variante | Como variante | Como variante | Como variante | **Como variante** |
| Imagen de la vista previa en el pedido | No | No | [No verificado] si guarda el PNG | Guarda archivos que sube el cliente; la vista previa [No verificado] | No | **URL en propiedad oculta**, o PNG regenerado en producción |
| Exportar para producción | Exportación de ventas nativa; si trae la variante: [No verificado] | Panel de la app, exporta CSV, XLS o PDF | Ídem, y permite marcar lo producido | Panel de producción y descarga de archivos | Lista de pedidos recientes en la app | **CSV propio armado con la API** (`GET /orders`), una fila por embosador |
| Antecedentes | — | 5,0 (129 reseñas). Empreender, Brasil | Ídem | 4,3 (90). Reseñas de jun–oct 2026 sobre cobros duplicados o indebidos | 5,0 (2 reseñas, sept. 2026); muy nueva | Depende de nosotros |
| Veredicto | No alcanza: le faltan el texto y la vista previa | No alcanza: no tiene vista previa | Única app con chance de igualar a TWP, si soporte confirma el texto curvo | Riesgosa por los cobros | Sirve solo para el texto | **Recomendada** |

Fuentes de la tabla:
- Campo Personalizado: [ficha](https://www.tiendanube.com/tienda-aplicaciones-nube/campo-personalizado). El precio en ARS se fija según el tipo de cambio con el real brasileño, así que varía (R$59 y R$249 en [su sitio](https://campopersonalizado.com.br/es)). [Video del Live Preview](https://www.youtube.com/watch?v=eL6iiW51vec).
- Personalize: [ficha](https://www.tiendanube.com/tienda-aplicaciones-nube/personalize).
- Campos Personalizados: [ficha](https://www.tiendanube.com/tienda-aplicaciones-nube/campos-personalizados7) y [precios](https://campos-personalizados.wzhub.pro/precos/?country=AR).
- Nota del cliente como único campo nativo: [Campos personalizados para clientes](https://ayuda.tiendanube.com/es_AR/160399-recursos-extra/como-agregar-campos-personalizados-para-que-mis-clientes-los-completen-en-mi-tiendanube) (14/10/2026).
- También revisada: [PreventaPersonalizados LerenTools](https://www.tiendanube.com/tienda-aplicaciones-nube/preorder-personalizados-lerentools), 3,8 (21 reseñas). Su ficha no menciona vista previa, así que quedó afuera.

---

## 5. Opción d en detalle: script propio y API

**¿Se pueden guardar propiedades por línea? Sí.**
- La API de pedidos tiene, en cada producto, el campo `properties`: "An array with values of custom fields" ([Order, documentación de la API](https://tiendanube.github.io/api-documentation/resources/order)).
- En Nube SDK, `cart:add` acepta `properties` por ítem, "e.g. personalization, gift messages" ([Cart events](https://dev.nuvemshop.com.br/en/docs/applications/nube-sdk/events/cart)).
- Un mantenedor de Tiendanube confirmó que esa propiedad "is persisted on the cart line and carries through to checkout (and to the resulting order)". También dijo que las claves que empiezan con `_` no se muestran en el checkout ([nube-sdk issue #428](https://github.com/TiendaNube/nube-sdk/issues/428)).
- **En el tema:** las apps de personalización agregan inputs `name="properties[...]"` al formulario de producto nativo ([README de nuvemshop-custom-fields](https://github.com/douglaspribeiro/nuvemshop-custom-fields); [issue #407](https://github.com/TiendaNube/nube-sdk/issues/407)). Con Impulso hacemos lo mismo en el tema. No hay página oficial que lo documente para el formulario del tema **[No verificado]**: se prueba en los 7 días gratis.

**¿Sirven las notas o los metacampos del pedido? Solo como respaldo.**
- `note` (nota del cliente) y `owner_note` (nota del dueño) son una por pedido.
- Los metafields admiten `Order` como dueño ([Metafields](https://github.com/TiendaNube/api-docs/blob/master/resources/metafields.md)), y los campos personalizados de pedido por API son a nivel pedido (`owner_resource: order`) ([Order Custom Fields](https://tiendanube.github.io/api-documentation/resources/orders/custom-fields)). Los campos personalizados de gestión del admin son desde Escala.
- Con dos embosadores en un pedido, todo eso mezcla los datos. Las propiedades por línea no.

**¿Cómo se adjunta la imagen?** Tiendanube no tiene forma de subir un archivo desde la tienda a un pedido, y las propiedades guardan texto. Opciones:
1. **URL en una propiedad oculta (como MBE).** Al tocar "Agregar al carrito", el script exporta el canvas a PNG, lo sube a un almacenamiento externo con plan gratuito y guarda la URL en `properties[_vista_previa]`. Hace falta confirmar el límite de largo de una propiedad **[No verificado]** y si las claves con `_` se ven en el admin **[No verificado]**.
2. **Regenerar en producción.** El sello sale solo de diseño + texto (el color es del aparato). El mismo código del canvas, corrido en una página interna, arma los PNG de todos los pedidos a partir del CSV. No depende de ningún servicio externo. **Se recomienda tener este plan B aunque se use el 1.**
3. **Metafield del pedido con la URL**, escrito por un servidor propio que escucha el webhook de pedido creado. Es la opción más trabajosa y queda a nivel pedido; solo si las opciones 1 y 2 fallan.

**Cómo llega cada dato y cómo se exporta:**

| Dato | Dónde se carga | Cómo llega al pedido |
|---|---|---|
| Diseño | Variante (propiedad 1) | Variante de la línea |
| Color | Variante (propiedad 2) | Variante de la línea |
| Opción unidad / pack regalo | Variante (propiedad 3), con precio propio | Variante de la línea |
| Texto inferior | Input del script, con `maxlength=20` y pasado a mayúsculas | `properties[Texto]` |
| Vista previa | Canvas del script | `properties[_vista_previa]` = URL, o se regenera |

Exportación: un script con el token de una aplicación a medida (permiso de lectura de pedidos) llama a `GET /orders` y arma un CSV con una fila por embosador: número de pedido, diseño, color, opción, texto y URL. Ese CSV alimenta la regeneración de PNG (opción 2). La exportación nativa de ventas en Impulso tiene un tope de 4 por mes (tabla de planes), y no está confirmado que incluya las propiedades **[No verificado]**.

**Límites y riesgos:**
- Hay que mantener el código del tema.
- Ipanema con *fork*: las actualizaciones llegan como aviso. Rio, Recife y demás por FTP: las mejoras dejan de llegar solas y, si se cierra el FTP, se pierden los cambios.
- Tiendanube no hace backup del diseño modificado: guardar el código en git.
- No está confirmado que el regalo en el carrito siga andando con el tema modificado.

---

## 6. Costo mensual total estimado

| Concepto | Mes a mes | Pago anual |
|---|---|---|
| Plan Impulso | $79.999 | $59.999 ($719.991 adelantados) |
| Personalizador y campos (script propio) | $0 | $0 |
| Almacenamiento de las vistas previas | $0 (plan gratuito) [No verificado límites] | $0 |
| **Total fijo** | **$79.999** | **$59.999** |
| Variable por venta | 3,45 % con Pago Nube a 30 días, o 2,80 % con Mercado Pago a 35 días (sección 1) | Ídem |

- Si la tienda no está inscripta en ARCA, se suma la percepción de IVA del 10,5 % sobre el plan.
- No entran en este cálculo las otras apps de la sección 4 de la propuesta (reseñas, upsells): siguen pendientes.

**Comparación con las alternativas:**

| Combinación | Mes a mes | Pago anual del plan | Costo con Mercado Pago |
|---|---|---|---|
| **Impulso + script propio** | **$79.999** | **$59.999** | **1 %** |
| Esencial + Campo Personalizado Nivel 3 | $74.389 | $67.389 | 2 % |
| Impulso + Campo Personalizado Nivel 3 | $126.389 | $106.389 | 1 % |

Con pago anual, Impulso + script es la opción más barata. Mes a mes, Esencial + Nivel 3 sale $5.610 menos por mes, pero el 1 % extra de comisión con Mercado Pago se come esa diferencia a partir de $561.000 de ventas mensuales. Además, esa opción no tiene acceso al código.

---

## 7. Preguntas para soporte

**Tiendanube** (en Impulso hay soporte por WhatsApp):
1. Si agrego al formulario de producto inputs `name="properties[Texto]"` en un *fork* de Ipanema o en Recife/Rio con FTP, ¿se guardan en la línea del pedido? ¿Se ven en el carrito, en el detalle de la venta del admin y en el email de confirmación?
2. Las propiedades con clave que empieza con `_`, ¿se ocultan también en el admin y en los emails? ¿Hay un límite de largo para el valor (para guardar una URL de ~150 caracteres)?
3. La exportación de ventas (CSV), ¿incluye la variante y las propiedades de cada producto?
4. La promoción "regalo en el carrito", ¿sigue funcionando en un diseño con *fork* o con FTP abierto? ¿Qué planes la incluyen?
5. "Aplicaciones a medida", ¿está disponible en Impulso? ¿El token permite leer pedidos con `properties`?
6. El 1 % de costo por transacción, ¿lleva IVA?
7. ¿Cuál es el próximo ajuste de precios (enero 2027)?

**Empreender** (Campo Personalizado, por WhatsApp):
1. El Live Preview del Nivel 3, ¿puede poner texto curvo sobre un arco (sello circular), con un texto de arriba fijo y uno de abajo que escribe el cliente?
2. ¿Puede forzar mayúsculas y limitar a 20 caracteres?
3. En móvil, ¿la vista previa queda fija arriba mientras el cliente escribe?
4. ¿Se guarda la imagen de la vista previa (PNG) en el pedido o en el panel? ¿En qué resolución?
5. ¿Cómo llegan los datos a la venta de Tiendanube: como propiedades de cada producto, en la nota o solo en el panel de la app?
6. ¿Funciona con Ipanema y junto con el regalo en el carrito? ¿Pide un plan mínimo de Tiendanube?
7. ¿El precio en pesos cambia cada mes con el real?

**Cake Digital** (Personalize), solo si se descarta lo anterior: precio en ARS, texto curvo, y qué pasó con los cobros duplicados de las reseñas.

---

## 8. Fuentes

**Tiendanube, oficiales:**
- [Planes y precios Argentina](https://www.tiendanube.com/planes-y-precios), leída el 28/10/2026
- [Blog: planes de Tiendanube](https://www.tiendanube.com/blog/planes-tiendanube/), actualizado 21/10/2026
- [¿Qué costo tiene Tiendanube?](https://ayuda.tiendanube.com/es_AR/sobre-tiendanube/que-costo-tiene-tiendanube)
- [¿Qué incluye el plan gratuito?](https://ayuda.tiendanube.com/es_AR/123482-planes/que-funcionalidades-incluye-el-plan-gratuito-de-tiendanube)
- [Comisiones de Pago Nube](https://ayuda.tiendanube.com/es_AR/pago-nube-2/cuales-son-las-comisiones-de-pago-nube)
- [Cómo modificar el diseño desde el código](https://ayuda.tiendanube.com/es_AR/123227-editar-el-codigo-de-diseno/como-modificar-el-diseno-desde-el-codigo-de-mi-tienda)
- [Qué cambios se pueden hacer vía código](https://ayuda.tiendanube.com/123227-editar-el-codigo-de-diseno/que-tipo-de-cambios-se-pueden-hacer-sobre-el-diseno-via-codigo)
- [Código fuente / FTP](https://ayuda.tiendanube.com/es_ES/123227-editar-el-codigo-de-diseno/como-trabajar-con-el-codigo-fuente-ftp-de-mi-tiendanube)
- [Códigos personalizados en el checkout](https://ayuda.tiendanube.com/es_CO/134108-configura-tu-tienda/como-agregar-codigos-personalizados-en-el-checkout-de-mi-tiendanube)
- [Aplicaciones a medida](https://ayuda.tiendanube.com/aplicaciones-a-medida/como-crear-una-aplicacion-a-medida-y-acceder-al-token-en-mi-tiendanube)
- [Agregar usuarios](https://ayuda.tiendanube.com/es_AR/123366-permisos-para-usuarios/como-agregar-mas-usuarios-para-que-administren-mi-tienda)
- [Regalo en el carrito](https://ayuda.tiendanube.com/es_AR/123465-cupones-y-promociones/como-crear-una-promocion-de-regalo-en-el-carrito-en-mi-tiendanube)
- [Tienda de diseños](https://www.tiendanube.com/tienda-disenos-nube)
- [Variantes](https://ayuda.tiendanube.com/es_AR/160437-variantes-del-producto/que-son-las-variantes-y-como-configurarlas-en-mis-productos)
- [Límite de elementos](https://ayuda.tiendanube.com/es_AR/122976-personalizar-tu-diseno/cual-es-el-limite-de-elementos-que-puedo-agregar-en-mi-tiendanube)
- [Campos personalizados del admin](https://ayuda.tiendanube.com/122708-lista-de-productos/como-usar-los-campos-personalizados-de-mi-tiendanube)
- [Campos personalizados para clientes](https://ayuda.tiendanube.com/es_AR/160399-recursos-extra/como-agregar-campos-personalizados-para-que-mis-clientes-los-completen-en-mi-tiendanube)
- API: [Order](https://tiendanube.github.io/api-documentation/resources/order), [Order Custom Fields](https://tiendanube.github.io/api-documentation/resources/orders/custom-fields), [Metafields](https://github.com/TiendaNube/api-docs/blob/master/resources/metafields.md), [Script](https://tiendanube.github.io/api-documentation/resources/script), [Nube SDK: eventos del carrito](https://dev.nuvemshop.com.br/en/docs/applications/nube-sdk/events/cart)

**Terceros:**
- [Mercado Pago Checkout](https://www.mercadopago.com.ar/herramientas-para-vender/check-out)
- [Campo Personalizado](https://www.tiendanube.com/tienda-aplicaciones-nube/campo-personalizado) y [su sitio](https://campopersonalizado.com.br/es)
- [Personalize](https://www.tiendanube.com/tienda-aplicaciones-nube/personalize)
- [Campos Personalizados (wzhub)](https://www.tiendanube.com/tienda-aplicaciones-nube/campos-personalizados7)
- [nube-sdk issue #407](https://github.com/TiendaNube/nube-sdk/issues/407) y [#428](https://github.com/TiendaNube/nube-sdk/issues/428)
- [nuvemshop-custom-fields](https://github.com/douglaspribeiro/nuvemshop-custom-fields)
