# Fotografías de obras: regla persistente del usuario

Aplicar esta regla a todas las actualizaciones del catálogo, desde el 3 de noviembre de 2026.

- Fuente principal confirmada en Chrome: Drive `FOTOS PARA PAGINA FINAL`, carpeta `1Nb_yXEAJm5vIs5vBG4rN3nZa8STMJ3mE`.
- Recorrer `obra / Fotos Página` y elegir exclusivamente de esa subcarpeta cuando exista. Se admiten diferencias de mayúsculas, tildes y las variantes reales `fotos pagina AP` y `fotos pagina ila`. Guernica usa `Fotos Finales/FOTOS PAGINA`.
- Si no existe esa subcarpeta, el usuario autorizó explícitamente elegir igualmente las mejores fotos de la carpeta de la obra: respuesta «mejores 10 igual». Registrar esa excepción como `work-folder-selection`; nunca mezclar fotos de la raíz si la subcarpeta sí existe.
- Lote 19, Puerta del Sol y Primera Comisaría de Punta Arenas no están en la carpeta actual de Drive. Sus fotos anteriores fueron revisadas y se registran como `legacy-selection`. Buscar primero una fuente nueva antes de ampliar esas galerías.
- Máximo 10 imágenes en total por obra, incluida la portada. Es un límite, no una cuota. Elegir menos si no hay variedad útil. No duplicar archivos ni publicar varios ángulos que muestran esencialmente lo mismo.
- Revisar visualmente todas las candidatas. Priorizar las instalaciones de CWSS ya terminadas, claras y bien encuadradas. Evitar montaje, andamios, OSB, cintas, películas protectoras, herramientas o residuos dominantes. En obras en instalación, preferir el producto ya instalado frente a vistas generales de construcción. Apoquindo Los Militares fue el ejemplo explícito del usuario.
- La primera foto es la portada. Mantener nombres, clientes, años y productos confirmados. No inventar atribuciones ante fotos ambiguas entre obras.
- Actualizar conjuntamente `site.js` y `content/photo-selection.json`, incluyendo procedencia, carpeta de Drive y motivo de selección. Ejecutar `node scripts/validate-photo-selection.cjs` y `node --test scripts/validate-photo-selection.test.cjs` antes de publicar.
- Los importadores históricos de `_image-audit` no autorizan publicar todas las imágenes ni recuperar automáticamente fotos descartadas. El manifiesto actual define la selección visible.
- Conservar todos los originales y assets descartados. Guardar un ZIP local completo fuera de este repositorio, sin `.git`, y comprobarlo antes de finalizar.
- La sección Obras destacadas fue retirada de Productos/Soluciones por pedido del usuario. No restaurarla al actualizar fotografías.
