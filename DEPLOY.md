# Deploy a GitHub Pages

## Pasos para desplegar el proyecto

### 1. Generar build de producción
```bash
ng build --configuration=github-pages
```

### 2. Cambiar a rama gh-pages
```bash
git checkout gh-pages
```

### 3. Limpiar y copiar archivos del build
```bash
git rm -rf .
cp -r dist/wedding-b-y-e/* .
cp browser/index.html .
```

### 4. Commit y push
```bash
git add .
git commit -m "Update GitHub Pages deployment"
git push origin gh-pages
```

### 5. Regresar a main
```bash
git checkout main
```

### 6. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Folder: / (root)

## URL del sitio
Tu sitio estará disponible en: `https://tu-usuario.github.io/wedding-b-y-e/`

## Actualizaciones futuras
Para actualizar el sitio, repite los pasos 1-5 desde la rama main.