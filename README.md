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

Las obras iniciales y sus galerías se cargan desde `FOTOS PARA PAGINA FINAL-20260826T032356Z-1-001`. Cada ficha muestra nombre, cliente, año y estado. Cuando el cliente no está informado se muestra `No indica`.

La versión anterior de los archivos principales está respaldada en `OLD INDEX AND HTML`.

Las imágenes publicadas se sirven desde `imagenes-optimizadas/` en formato WebP. Las fotografías originales permanecen intactas. Para regenerar las copias optimizadas se puede ejecutar `scripts/optimize-images.cjs` con Node.js y Sharp disponibles.

## Abrir el sitio

En Windows, haz doble clic en `ABRIR-SITIO.bat`. Se abrirá el sitio en el navegador y una ventana quedará activa mientras lo usas.

También puedes servir esta carpeta manualmente. Por ejemplo, dentro de `CWSS.CL`:

```powershell
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Administración

- Usuario: `roman`
- Contraseña: `roman`

Las obras agregadas y sus imágenes se guardan en el almacenamiento del navegador del equipo. Al limpiar los datos del navegador o abrir el sitio en otro dispositivo, esas obras no estarán disponibles. Para publicación real con administración compartida entre equipos se necesitará conectar una base de datos y almacenamiento de archivos.
