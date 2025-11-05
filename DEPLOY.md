# Deploy a GitHub Pages

## Pasos para desplegar el proyecto

### 1. Desde main: instalar dependencias y generar build
```bash
npm install
ng build --configuration=github-pages
```

### 2. Cambiar a rama gh-pages
```bash
git checkout gh-pages
```

### 3. Copiar archivos a directorio temporal
```bash
cp -r dist/wedding-b-y-e /tmp/gh-pages-build
```

### 4. Limpiar y copiar archivos del build
```bash
git rm -rf .
cp -r /tmp/gh-pages-build/* .
mv browser/* .
rmdir browser
cp 404.html jorge-y-lupita.html
mkdir -p jorge-y-lupita
cp index.html jorge-y-lupita/index.html
```

### 5. Commit y push
```bash
git add .
git commit -m "Update GitHub Pages deployment"
git push origin gh-pages
```

### 6. Regresar a main
```bash
git checkout main
```

### 7. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Folder: / (root)

## URL del sitio
Tu sitio estará disponible en: `https://tu-usuario.github.io/wedding-b-y-e/`

## Actualizaciones futuras
Para actualizar el sitio, repite los pasos 1-6 desde la rama main.