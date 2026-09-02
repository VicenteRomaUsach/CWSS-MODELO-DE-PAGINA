# Historial de cambios de CWSS

## 2026-09-02

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
