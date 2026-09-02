# Sitio web CWSS

Sitio HTML editable y sin dependencias. Los archivos principales son:

- `index.html`: página de inicio.
- `proyectos.html`: listado de obras.
- `proyecto.html`: ficha y galería de cada obra.
- `soluciones.html`: listado textual de soluciones y servicios.
- `cuenta.html`: acceso y administración de obras.
- `styles.css`: diseño completo y adaptación móvil.
- `site.js`: navegación, obras, login y carga de imágenes.
- `imagenes/`: recursos gráficos del sitio.

Las obras iniciales y sus galerías usan únicamente archivos WebP publicados en `imagenes-optimizadas/`. Cada obra tiene una carpeta propia con el formato `AÑO - NOMBRE DE OBRA`. Dentro de ella, las imágenes siguen el formato `NOMBRE DE OBRA CONSTRUCTORA AÑO--NOMBRE-IMAGEN--0X.webp`.

El catálogo se ordena por año, del más reciente al más antiguo; las obras del mismo año se ordenan alfabéticamente. Las obras sin año confirmado aparecen al final. Las versiones anteriores, fotografías originales, capturas y recursos sin uso se movieron fuera del sitio a `../COSAS A BORRAR (R)/CWSS.CL2`, desde donde se pueden recuperar antes de su eliminación definitiva.

La portada usa dos imágenes. La sección `Obras en instalación` muestra dos obras, sus fotografías cambian automáticamente y también se pueden recorrer con sus controles. Las galerías de las fichas avanzan automáticamente y conservan sus controles manuales. Cada obra admite varios productos y un máximo de 10 imágenes totales.

El historial detallado de correcciones y actualizaciones está disponible en [`CHANGELOG.md`](CHANGELOG.md).

Cada ficha muestra nombre, cliente y año. La etiqueta de estado se muestra solamente en las obras que están en instalación. Las galerías se pueden recorrer con los controles visibles o con las flechas izquierda y derecha del teclado. Cuando el cliente no está informado se muestra `No indica`.

## Abrir el sitio

1. Extrae la carpeta completa del ZIP.
2. Abre `index.html` directamente con doble clic.
3. No necesitas Python, servidor local ni archivo `.bat` para visualizar las páginas e imágenes incluidas.

Si ya habías abierto una versión anterior, cierra esa pestaña y vuelve a abrir `index.html`. Esta edición usa una nueva versión del catálogo para evitar que el navegador recupere rutas antiguas o galerías duplicadas guardadas por `localhost`.

Importante: no abras `index.html` desde dentro del ZIP sin extraerlo, porque Windows puede abrir únicamente una copia temporal del HTML y las rutas relativas a imágenes/CSS/JS dejarán de existir.

## Administración

- Usuario: `roman`
- Contraseña: `roman`

Las obras agregadas y sus imágenes se guardan en el almacenamiento del navegador del equipo. Al limpiar los datos del navegador o abrir el sitio en otro dispositivo, esas obras no estarán disponibles. Para publicación real con administración compartida entre equipos se necesitará conectar una base de datos y almacenamiento de archivos.
