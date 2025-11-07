# Deploy a GitHub Pages

## Comandos completos para copiar y pegar

```bash
# 1. Desde main: limpiar y generar build
rm -rf dist/
rm -rf .angular/cache/
npm install
ng build --configuration=github-pages

# 2. Copiar archivos a directorio temporal
cp -r dist/wedding-b-y-e /tmp/gh-pages-build

# 3. Cambiar a rama gh-pages
git checkout gh-pages

# 4. Limpiar completamente la rama gh-pages
git rm -rf .

# 5. Copiar archivos del build
cp -r /tmp/gh-pages-build/* .
mv browser/* .
rmdir browser

# 6. Corregir baseHref si es necesario
sed -i '' 's|/wedding-b-y-e/|/wedding/|g' index.html

# 7. Crear directorios para rutas directas
mkdir -p jorge-y-lupita
cp index.html jorge-y-lupita/index.html
cp *.css jorge-y-lupita/ 2>/dev/null || true
cp *.js jorge-y-lupita/ 2>/dev/null || true

mkdir -p bety-y-erick
cp index.html bety-y-erick/index.html
cp *.css bety-y-erick/ 2>/dev/null || true
cp *.js bety-y-erick/ 2>/dev/null || true

# 8. Commit y push
git add .
git commit -m "Update GitHub Pages deployment"
git push origin gh-pages

# 9. Regresar a main
git checkout main
```

### 7. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Folder: / (root)

## URL del sitio
Tu sitio estará disponible en: `https://tris460.github.io/wedding/`

## URLs directas
- Home: `https://tris460.github.io/wedding/`
- Jorge y Lupita: `https://tris460.github.io/wedding/jorge-y-lupita`
- Bety y Erick: `https://tris460.github.io/wedding/bety-y-erick`

## Actualizaciones futuras
Para actualizar el sitio, repite los pasos 1-9 desde la rama main.

## Notas importantes
- Los archivos CSS/JS se copian a los subdirectorios para evitar errores 404
- El comando `2>/dev/null || true` evita errores si no hay archivos CSS/JS
- Siempre ejecuta desde la rama main