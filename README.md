# Invitación de Boda - Jorge & Lupita

Invitación digital elegante para la boda de Jorge y Lupita, desarrollada con Angular 20.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Marcos Decorativos**: Bordes florales superior, inferior y laterales que acompañan el scroll
- **Música de Fondo**: Reproducción automática de música ambiental (Great Fairy Fountain)
- **Formulario de Confirmación**: Sistema de RSVP integrado con Google Sheets
- **Información del Evento**:
  - Ceremonia religiosa: Parroquia de Ntra. Sra. del Carmen (San Marcos) - 5:00 P.M.
  - Celebración: Salón La Pica - A partir de las 7:00 P.M.
  - Código de vestimenta formal
  - Enlaces a mesas de regalos (Liverpool y Cantia)
  - Mapas interactivos de ubicaciones

## 🛠️ Tecnologías

- **Framework**: Angular 20.0.4
- **Lenguaje**: TypeScript
- **Estilos**: SCSS
- **Fuentes**: Google Fonts (Allura, Lato, Cormorant)
- **Hosting**: GitHub Pages

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI (`npm install -g @angular/cli`)

## 🚀 Desarrollo Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tris460/boda-jorge-y-lupita.git
cd boda-jorge-y-lupita
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
ng serve
```

4. **Abrir en el navegador**
Navega a `http://localhost:4200/`

La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

## 📦 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── inicio/          # Componente principal de la invitación
│   │   └── footer/          # Pie de página con información del desarrollador
│   ├── app.config.ts        # Configuración de la aplicación
│   ├── app.routes.ts        # Rutas de la aplicación
│   └── app.ts               # Componente raíz
├── assets/                  # Recursos estáticos (imágenes para CSS)
│   ├── papel.avif          # Textura de fondo
│   └── margin-lateral.png  # Borde lateral decorativo
├── styles.scss             # Estilos globales
└── index.html              # HTML principal

public/
├── j-y-l/                  # Imágenes del evento
│   ├── bg.png             # Marco superior/inferior
│   ├── iglesia.jpeg       # Imagen de la ceremonia
│   ├── jardin.jpg         # Imagen del salón
│   ├── pareja.png         # Imagen de código de vestimenta
│   ├── regalos.png        # Imagen de mesa de regalos
│   └── ...
└── GreatFairyFountain.mp3 # Música de fondo
```

## 🏗️ Compilación para Producción

Para compilar el proyecto para producción:

```bash
ng build --configuration=production
```

Los archivos compilados se generarán en el directorio `dist/wedding-b-y-e/browser/`.

## 🌐 Despliegue a GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages con un subdirectorio.

### Comando de Despliegue

```bash
ng build --configuration=github-pages
npx angular-cli-ghpages --dir=dist/wedding-b-y-e/browser
```

### Configuración

La configuración de GitHub Pages está en `angular.json` bajo la sección `github-pages`:
- **baseHref**: `/boda-jorge-y-lupita/`
- **outputHashing**: `all`

### URL del Sitio

🔗 [https://tris460.github.io/boda-jorge-y-lupita/](https://tris460.github.io/boda-jorge-y-lupita/)

## 🎨 Personalización

### Colores

Los colores principales están definidos en `src/styles.scss`:
```scss
--jl-verde-oscuro: #465741;
--jl-verde-claro: #6B8E65;
--jl-gris-oscuro: #4A4A4A;
--jl-gris-claro: #D3D3D3;
--jl-blanco: #FFFFFF;
--jl-negro: #000000;
```

### Imágenes

- Coloca las imágenes en `public/j-y-l/`
- Para imágenes usadas en CSS, colócalas en `src/assets/`

### Música

Reemplaza `public/GreatFairyFountain.mp3` con tu archivo de audio preferido.

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px
- **Mobile pequeño**: ≤ 400px

## 🔧 Scripts Disponibles

- `ng serve` - Servidor de desarrollo
- `ng build` - Compilación para producción
- `ng build --configuration=github-pages` - Compilación para GitHub Pages
- `ng test` - Ejecutar pruebas unitarias
- `ng lint` - Verificar código

## 📝 Notas Importantes

1. **Rutas de Imágenes en CSS**: Usar rutas relativas (`../../../assets/imagen.png`) para que funcionen tanto en desarrollo como en producción.

2. **Autoplay de Audio**: Los navegadores modernos bloquean el autoplay. Si no se reproduce automáticamente, se activará con la primera interacción del usuario.

3. **Formulario de Confirmación**: Conectado a Google Sheets mediante Google Apps Script. La URL del webhook está en `src/app/components/inicio/inicio.ts`.

## 👩‍💻 Desarrolladora

**Beatriz Martínez Pérez**
- Facebook: [BettyMtzPerez](https://www.facebook.com/BettyMtzPerez/)
- WhatsApp: [+52 449 183 9173](https://wa.me/524491839173)
- Email: trism460@gmail.com

## 📄 Licencia

Este proyecto es privado y está desarrollado específicamente para el evento de boda de Jorge y Lupita.

---

Desarrollado con ❤️ usando Angular
