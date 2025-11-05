# Deploy a GitHub Pages

## Comandos completos para copiar y pegar

```bash
# 1. Desde main: instalar dependencias y generar build
npm install
ng build --configuration=github-pages

# 2. Copiar archivos a directorio temporal
cp -r dist/wedding-b-y-e /tmp/gh-pages-build

# 3. Cambiar a rama gh-pages
git checkout gh-pages

# 4. Limpiar y copiar archivos del build
git rm -rf .
cp -r /tmp/gh-pages-build/* .
mv browser/* .
rmdir browser

# 4.1 Corregir baseHref si es necesario
sed -i '' 's|/wedding-b-y-e/|/wedding/|g' index.html

# 5. Crear directorio para rutas directas
mkdir -p jorge-y-lupita
cp index.html jorge-y-lupita/index.html
mkdir -p bety-y-erick
cp index.html bety-y-erick/index.html

# 6. Commit y push
git add .
git commit -m "Update GitHub Pages deployment"
git push origin gh-pages

# 7. Regresar a main
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
Para actualizar el sitio, repite los pasos 1-6 desde la rama main.