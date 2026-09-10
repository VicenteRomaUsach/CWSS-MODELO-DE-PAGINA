# Sitio web CWSS — CWSS.CL3.1

La página tiene tres categorías principales:

- Índice: `index.html`.
- Productos: `soluciones.html`.
- Obras: `proyectos.html` y `proyecto.html`.

El código está escrito generalmente en inglés. Los ajustes estéticos principales se encuentran al comienzo de `styles.css`, donde están los tamaños, colores y bordes editables.

## Archivos principales

- `index.html`: página de inicio.
- `proyectos.html`: listado de obras.
- `proyecto.html`: ficha y galería de cada obra.
- `soluciones.html`: catálogo desplegable de productos y servicios.
- `styles.css`: diseño completo y adaptación móvil.
- `site.js`: navegación, catálogo, fondos y galerías.
- `imagenes/`: recursos gráficos del sitio.

La administración local fue retirada. El catálogo se actualiza editando los archivos del proyecto; no existe una conexión SQL o backend.

La portada usa dos imágenes. La sección `OBRAS EN INSTALACION` muestra dos obras, sus fotografías cambian automáticamente y también se pueden recorrer con sus controles. El inicio incorpora cuatro mosaicos fijos: Tabiques vidriados, Barandas de cristal, Shower Door y Espejos D-FROSTER Retroiluminados. Las fotografías cambian con un fundido de 0,85 segundos: cada 6 segundos comienza una ronda de los cuatro mosaicos, de izquierda a derecha: Tabiques al inicio, Barandas 1 segundo después, Shower a los 2 segundos y Espejos a los 3 segundos. Se conservan el título y el enlace de cada producto. La rotación se pausa al interactuar con los mosaicos, al ocultar la página o si se ha solicitado movimiento reducido. Cada obra admite varios productos y un máximo de 10 imágenes totales.

El bloque `QUIENES SOMOS` incluye pestañas para alternar entre la presentación de la empresa, su misión y su visión sin cambiar de página. El título cambia a `QUIENES SOMOS`, `MISION` o `VISION`, sin tildes; el cuerpo conserva las mayúsculas de inicio de oración y de los nombres propios.

En `soluciones.html`, cada producto funciona como un botón desplegable. Solo puede permanecer uno abierto; el primero se abre inicialmente o se selecciona el indicado en el enlace. Cada galería compacta muestra las fotografías disponibles sin espacios vacíos. Las flechas arriba/abajo seleccionan el producto anterior/siguiente; izquierda/derecha cambian su fotografía. Los mismos controles funcionan en la vista ampliada, que conserva el título y pausa el avance automático. Al cerrar se mantiene la última fotografía seleccionada. Los espejos utilizan las dos fotografías retroiluminadas válidas.

Las fichas de obras tienen una cabecera y una galería más pequeñas. `Ver imagen completa` abre la fotografía sin recorte y permite cambiarla con botones o con izquierda/derecha, sincronizando la imagen ampliada. Se incluyen ajustes adaptables a 720, 736 y 1080 píxeles de ancho y a pantallas de poca altura.

El historial detallado de correcciones y actualizaciones está disponible en [`CHANGELOG.md`](CHANGELOG.md).

Cada ficha muestra nombre, cliente y año. La etiqueta de estado se muestra solamente en las obras que están en instalación. Las galerías se pueden recorrer con los controles visibles o con las flechas izquierda y derecha del teclado. Las obras importadas desde Drive que todavía no tienen fotografías muestran una tarjeta neutra y omiten la galería. Cuando el cliente o el año no están informados se muestra `N/A`.

## Abrir el sitio

1. Extrae la carpeta completa del ZIP.
2. Abre `index.html` directamente con doble clic.
3. No necesitas Python, servidor local ni archivo `.bat` para visualizar las páginas e imágenes incluidas.

Si ya habías abierto una versión anterior, cierra esa pestaña y vuelve a abrir `index.html`. Esta edición usa una nueva versión del catálogo para evitar que el navegador recupere rutas antiguas o galerías duplicadas guardadas por `localhost`.

Importante: no abras `index.html` desde dentro del ZIP sin extraerlo, porque Windows puede abrir únicamente una copia temporal del HTML y las rutas relativas a imágenes/CSS/JS dejarán de existir.
