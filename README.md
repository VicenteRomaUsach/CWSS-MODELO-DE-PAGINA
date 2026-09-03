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

La portada usa dos imágenes. La sección `Obras en instalación` muestra dos obras, sus fotografías cambian automáticamente y también se pueden recorrer con sus controles. Las galerías de las fichas avanzan automáticamente y conservan sus controles manuales. Cada obra admite varios productos y un máximo de 10 imágenes totales.

El bloque `Quiénes somos` incluye pestañas para alternar entre la presentación de la empresa, su misión y su visión sin cambiar de página.

En `soluciones.html`, cada producto funciona como un botón desplegable. Solo puede permanecer uno abierto y sus tres imágenes se cargan y aparecen de izquierda a derecha; cuando no existe una fotografía verificada se muestra un placeholder identificado.

El historial detallado de correcciones y actualizaciones está disponible en [`CHANGELOG.md`](CHANGELOG.md).

Cada ficha muestra nombre, cliente y año. La etiqueta de estado se muestra solamente en las obras que están en instalación. Las galerías se pueden recorrer con los controles visibles o con las flechas izquierda y derecha del teclado. Cuando el cliente no está informado se muestra `No indica`.

## Abrir el sitio

1. Extrae la carpeta completa del ZIP.
2. Abre `index.html` directamente con doble clic.
3. No necesitas Python, servidor local ni archivo `.bat` para visualizar las páginas e imágenes incluidas.

Si ya habías abierto una versión anterior, cierra esa pestaña y vuelve a abrir `index.html`. Esta edición usa una nueva versión del catálogo para evitar que el navegador recupere rutas antiguas o galerías duplicadas guardadas por `localhost`.

Importante: no abras `index.html` desde dentro del ZIP sin extraerlo, porque Windows puede abrir únicamente una copia temporal del HTML y las rutas relativas a imágenes/CSS/JS dejarán de existir.
