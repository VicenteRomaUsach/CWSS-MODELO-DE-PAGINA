# Historial de cambios de CWSS

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
