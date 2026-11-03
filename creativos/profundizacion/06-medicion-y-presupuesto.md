# 06 · Medición y presupuesto: que los tests se puedan leer

Investigación del 03/11/2026. El manual explica qué métricas mirar. Esto cubre lo que va **antes**: que los datos lleguen bien desde Tiendanube, que cada venta se pueda atribuir a un creativo, y una cuenta de cuánto presupuesto hace falta para que un test diga algo.

---

## 1. Tiendanube → Meta: píxel + API de conversiones

Según la ayuda oficial de Tiendanube ([píxel](https://ayuda.tiendanube.com/es_AR/pixel-de-facebook/como-utilizar-el-pixel-de-facebook-con-mi-tiendanube) · [API de conversiones](https://ayuda.tiendanube.com/pixel-de-facebook/como-activar-la-api-de-conversiones-de-facebook), actualizada el 05/03/2026):
1. Crear el píxel en el **Administrador de eventos** de Meta y vincularlo desde Tiendanube.
2. Activar la **API de conversiones** desde la sección "Instagram y Facebook" del administrador de Tiendanube. Para eso hay que **verificar el dominio** de la tienda en el Administrador comercial de Meta. Tiendanube aclara que es complementaria al píxel y que no hace perder los anuncios activos.
3. Ver "Conectado" en "Mi cuenta" y hacer una **compra de prueba** para confirmar que los eventos llegan.
4. **Eventos que manda la API de conversiones hoy:** Agregar al carrito, Agregar información de pago y Compra. El resto se va sumando de a poco. Los eventos tienen que figurar como recibidos **desde el navegador y desde el servidor**.
5. Conectar el **catálogo sincronizado** con el píxel si se van a hacer anuncios dinámicos o de catálogo.
6. Meta puede seguir mostrando alertas aunque esté todo bien configurado, porque el proceso lo maneja Tiendanube (misma fuente).

**Pendiente del proyecto:** la tienda está en el plan Inicial y en construcción (`relevamiento/LEEME_2.md`). **Confirmá en qué plan está disponible la API de conversiones** antes de lanzar [No verificado por plan].

**Checklist antes del primer peso de pauta:**
- [ ] Dominio propio verificado en Meta.
- [ ] Píxel y API de conversiones conectados; compra de prueba vista en el Administrador de eventos.
- [ ] Evento de optimización elegido: **Compra**. Si en la primera semana no hay volumen, **Iniciar pago** (manual, sección 8.1).
- [ ] UTMs configurados (punto 2).
- [ ] Precio, stock y textos reales en la ficha. La tienda tiene que estar visible para el público.

---

## 2. Que cada venta diga de qué anuncio vino (UTMs)

Meta permite cargar **parámetros de URL dinámicos** a nivel de anuncio, que se completan solos con el nombre de la campaña, del conjunto y del anuncio. Con la convención de nombres del manual (10.7), cada venta en Tiendanube o en Google Analytics queda asociada al concepto y al gancho.

**Meta** (campo "Parámetros de URL" del anuncio):
```
utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```
**TikTok:** usa macros equivalentes (por ejemplo `__CAMPAIGN_NAME__` y `__CID_NAME__`) [No verificado: confirmar la lista vigente de macros en TikTok Ads Manager].
**Orgánico:** link en la bio con `utm_source=instagram&utm_medium=organic&utm_campaign=bio`.

Con el nombre de anuncio `C07 | EST | REGALO | H02 | V1 | …`, `utm_content` trae ese texto, y el agente `analista-resultados` lo separa en columnas.

---

## 3. ¿Cuánto presupuesto hace falta para que un test diga algo?

### 3.1 Datos de entrada (algunos todavía no existen)
| Dato | Valor | Estado |
|---|---|---|
| CPM de Meta en Argentina | **US$3–8** cada 1.000 impresiones (≈ $4.700–12.500 al oficial) | Rango de guías de terceros, no oficial; volátil en 2026 ([Novoads](https://novoads.ai/es/blog/cuanto-cuesta-publicidad-en-meta); [Superads, CPM Argentina](https://www.superads.ai/facebook-ads-costs/cpm-cost-per-mille/argentina)) |
| CTR (clics al enlace) | Supuesto de 0,8–1,5 % | **Hipótesis**, reemplazar con tu cuenta |
| Conversión de la tienda | Supuesto de 1–2,5 % | **Hipótesis** |
| Precio y margen | [N] | Pendiente del proveedor (manual, 10.9) |
| Impuestos sobre la pauta | IVA y percepciones según tu situación fiscal | [No verificado]: consultalo con tu contador |

### 3.2 Cuánto cuesta una venta según los supuestos (CPA = CPM ÷ (1.000 × CTR × conversión))
| CPM | CTR 0,8 % · conv. 1 % | CTR 1 % · conv. 1,5 % | CTR 1,5 % · conv. 2,5 % |
|---|---|---|---|
| $5.000 | $62.500 | $33.300 | $13.300 |
| $8.000 | $100.000 | $53.300 | $21.300 |
| $12.000 | $150.000 | $80.000 | $32.000 |

**Cómo leerla:** con un producto de regalo de ticket medio, el negocio solo cierra si el creativo y la tienda logran la columna de la derecha. Por eso **la tienda pesa tanto como el creativo**: la vista previa, la confianza (cuidado con la objeción "¿es estafa?", ver `01`) y los plazos visibles. Si al arrancar el CPA real cae en la columna del medio, el problema está en el embudo, no solo en el anuncio.

### 3.3 Presupuesto mínimo de test (regla del manual: 2–3 × CPA objetivo por concepto)
Ejemplo con un **CPA objetivo de $30.000** [reemplazar con la calculadora 10.9 del manual]:
- Por concepto: $60.000–90.000 hasta decidir.
- 3 conceptos por semana: **$180.000–270.000 por semana** de test (≈ $26.000–39.000 por día).
- Si el presupuesto es menor: **2 conceptos por semana**, o probá primero en **orgánico y Trial Reels** (`05`) y pautá solo los ganchos que ya retuvieron gratis.

### 3.4 Con poco presupuesto, señales tempranas
Con pocas compras, decidí con una **cadena de señales**:
1. Gancho (24–48 h): hook rate o CTR.
2. Clic → **Agregar al carrito** (la API de conversiones de Tiendanube lo manda).
3. Iniciar pago → Compra.

Un concepto con buen gancho y muchos "agregar al carrito" pero sin compras **no se mata**: se revisa la ficha, el precio o los plazos.

---

## 4. Tablero semanal mínimo (lo arma `analista-resultados`)
| Concepto | Formato | Gasto | Impr. | Hook rate | CTR | Agregar al carrito | Compras | CPA | Decisión |
|---|---|---|---|---|---|---|---|---|---|
| C01 POV regalo | VID | | | | | | | | matar / iterar / escalar |

**Fuente de datos:** exportación CSV de Ads Manager con columnas de nombre de anuncio, importe gastado, impresiones, reproducciones de 3 s, ThruPlays, clics en el enlace, agregar al carrito, compras y valor de las compras. Más el informe de ventas de Tiendanube (UTM).
