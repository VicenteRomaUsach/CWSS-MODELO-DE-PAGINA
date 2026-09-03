# Historial de cambios de CWSS

## Cambios locales posteriores a CWSS.CL3.1 — 2026-09-03

- La categoría visible Soluciones pasó a llamarse Productos en el menú, el encabezado de la página y sus mensajes, manteniendo la ruta existente.
- El texto de Quiénes somos ahora resalta en negrita CWSS Ingeniería Ltda. e incorpora los ajustes de redacción solicitados.
- Se reemplazó la presentación de Quiénes somos por el nuevo texto corporativo de CWSS Ingeniería Ltda., organizado en tres párrafos.
- El bloque aumentó su altura mínima para alojar el contenido sin comprimirlo.
- `Quiénes somos` incorpora tres pestañas en su borde derecho: `Quiénes somos`, `Misión` y `Visión`.
- Las pestañas reemplazan el párrafo del bloque sin abandonar la página; `Quiénes somos` restaura el texto original.
- En pantallas móviles las tres pestañas se reorganizan horizontalmente bajo el contenido para conservar su legibilidad.
- La obra `El Sauce` pasó a llamarse `El Sauce 3` sin modificar su identificador ni las rutas de sus fotografías.
- El título `Obras en instalación` usa exactamente el mismo tamaño que `Quiénes somos`.
- Cada solución se convirtió en un botón desplegable que empuja el contenido siguiente hacia abajo y cierra cualquier otro producto abierto.
- Cada producto muestra tres espacios visuales. Se asignaron fotografías verificadas de obras a Mamparas, Barandas, Shower Door, Espejos, Pasamanos, Panel compuesto y Lucarnas.
- Puertas Protex, Revestimiento y chambranas de acero inoxidable y Ventanas de PVC conservan tres placeholders identificados porque el catálogo actual no contiene tres fotografías verificadas para esas categorías.
- Las fotografías se cargan y aparecen secuencialmente de izquierda a derecha con una animación de entrada lateral.
- Se retiró la administración local, su página de acceso, el código de edición y sus recursos asociados. El catálogo público permanece estático.
- En `Obras en instalación` se retiró la línea negra del enlace y se alineó el encabezado con la primera miniatura.
- En `proyectos.html` se eliminó el título `Obras` y la línea negra anterior al catálogo.
- La página de Soluciones incorpora más espacio vacío antes del pie y ya no muestra una franja blanca posterior.
- Los dos sliders de `Obras en instalación` avanzan con el mismo intervalo.
- El logo del encabezado quedó fuera del efecto de aparición y el resto de los elementos ahora aparece de abajo hacia arriba.

## CWSS.CL3.1 — 2026-09-03

- Se actualizaron las 23 obras con las constructoras, años, ubicaciones y productos entregados.
- Las obras ahora muestran `Constructora X` en el dato de cliente.
- Se corrigió `Datacenter` a `Data Center` y Scala Santa Teresa quedó asociado a Constructora Puerto Octay.
- Bustamante quedó como una sola obra con sus fotografías exteriores e interiores reunidas en una galería de ocho imágenes.
- Todas las barandas y separadores se identifican como soluciones de cristal.
- Los productos de las tarjetas y fichas se muestran en blanco y sin opacidad reducida.
- Se agregó `#` a `Oficina #404` en todos los pies de página.
- En `Quiénes somos`, el subtítulo quedó como `Soluciones vidriadas`, el título quedó 6 px sobre el texto normal y se aplicó el fondo de Soluciones.
- Se agregó una separación azul de 5 px entre las dos portadas.
- El bloque completo de `Quiénes somos` se centró verticalmente dentro de su columna.
- La nueva imagen de `Quiénes somos` conserva su proporción completa y ya no se recorta.
- La página de Obras alterna `FONDO SOLUCIONES.png` y `FONDO PROYECTOS.png` en bloques verticales apilados a lo largo del catálogo.
- Cada ficha individual de obra recibe, según su ID, uno de los dos fondos en las áreas claras; la selección se mantiene estable para cada proyecto.
- Cada ficha incorpora flechas anterior/siguiente y un contador sobre el título para recorrer circularmente las 23 obras.
- La sección `Obras en instalación` del inicio usa `FONDO PROYECTOS.png`, distinto del fondo de `Quiénes somos`.
- Los productos con el sufijo `de cristal` se agrupan automáticamente, por ejemplo `Barandas y separadores de cristal`.
- El grosor y color del borde de `Quiénes somos`, junto con los tamaños de `Obras` y `Soluciones`, quedaron expuestos como variables editables al inicio del CSS.
- Los títulos principales de `Obras` y `Soluciones` quedaron fijados en 36 px.
- El borde entre `Quiénes somos` y `Obras en instalación` quedó en 10 px.
- Esta actualización corresponde a la versión de contenido `CWSS.CL3.1`.

## 2026-09-02

### Segunda actualización visual y de contenido

- Se eliminó definitivamente `PORTADA 02` y se unieron `PORTADA 01` y `PORTADA 03` en una portada de dos columnas.
- La sección `Últimas obras` pasó a llamarse `Obras en instalación` y muestra únicamente El Sauce y Apoquindo Los Militares.
- Las dos tarjetas de obras en instalación recorren automáticamente las fotografías de cada obra.
- Las galerías inferiores de todas las fichas avanzan automáticamente y se pausan durante la interacción.
- Se unificaron las obras exterior e interior de Club de Campo en `Club de Campo Vitacura`, con nueve imágenes y el subtítulo `Boldo, Peumo y Quillai`.
- `DATACENTER SCALA` se actualizó a `Datacenter Scala Santa Teresa`, cliente `Scala`, año 2025.
- La antigua ficha interior de Scala se separó como `Data Center Chile 3`, cliente `Puerto Octay`, año 2024.
- Se agregó el dato `Producto` a cada obra y al formulario de administración. Las obras existentes usan inicialmente `Soluciones vidriadas`.
- Se bajó la posición del texto de `Quiénes somos` y del encabezado de `Soluciones`.
- Se redujo el espacio vertical del listado de soluciones, se redujo el título principal y se aumentó la tipografía de los productos.

### Tercera actualización visual y funcional

- Se redujo en 5 px el título `Quiénes somos` y el título `Soluciones`.
- Se redujo en 20 px el espacio entre el título de Soluciones y su listado.
- Se añadió al final de Soluciones un slider grande que alterna automáticamente entre `PORTADA 01` y `PORTADA 02`.
- Se eliminó la separación blanca antes del pie de página de Soluciones.
- Se corrigió el enlace `Contacto` para desplazar la página al pie y cerrar el menú móvil.
- Se ocultó el estado `En instalación` en las tarjetas y fichas; se conserva únicamente como criterio interno para el bloque del inicio.
- Los productos de cada obra ahora aceptan varios valores y comienzan con `PLACEHOLDER #1` y `PLACEHOLDER #2`.
- El formulario de obras admite hasta 10 imágenes totales: una portada y nueve imágenes adicionales.
- Se agregaron controles anterior/siguiente y contador al mini slider de las obras en instalación.
- Se redujo en 4 px la tipografía principal de Obras y de los títulos de las fichas.
- La segunda fotografía activa de portada fue normalizada como `CWSS--PORTADA--02.webp`.

### Catálogo de obras

- Se ordenaron las obras desde el año más reciente al más antiguo y alfabéticamente dentro de cada año.
- Se actualizó la obra `DATACENTER` a `DATACENTER SCALA`.
- Se actualizó su cliente de `SCALA` a `Puerto Octay` en las fichas exterior e interior.
- Se asignó el año `2018` a la obra `Puerta del Sol`.
- Se renovó la versión del catálogo local para descartar datos antiguos guardados por aperturas anteriores con `localhost`.

### Imágenes y galerías

- Se corrigió la galería de El Sauce para conservar sus cuatro fotografías diferentes en el orden `01` a `04`.
- Se eliminaron automáticamente las rutas repetidas dentro de las galerías.
- Se organizaron las fotografías en carpetas con el formato `AÑO - NOMBRE DE OBRA`.
- Se estandarizaron los nombres con el formato `OBRA CONSTRUCTORA AÑO--NOMBRE--0X.webp`.
- Se verificaron 92 imágenes y se convirtieron a WebP real cuatro archivos que todavía contenían datos JPEG o PNG.
- Se sustituyó la imagen central de la portada por un placeholder identificado como `PORTADA 02`.

### Funcionamiento local

- El sitio puede abrirse directamente desde `index.html` sin servidor local y sin archivo `.bat`.
- Se versionó la carga de `site.js` para impedir que el navegador reutilice una copia antigua del catálogo.
- Se comprobaron las rutas locales de HTML, CSS, JavaScript e imágenes.
