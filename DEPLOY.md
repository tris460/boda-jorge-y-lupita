# Despliegue a GitHub Pages

## Comando para desplegar

```bash
ng build --configuration=github-pages
npx angular-cli-ghpages --dir=dist/wedding-b-y-e/browser
```

## URL del sitio

https://tris460.github.io/boda-jorge-y-lupita/

## Notas

- La configuración `github-pages` en angular.json ya incluye el `baseHref` correcto
- Asegúrate de que todas las rutas de imágenes en CSS sean relativas (sin `/` al inicio)
