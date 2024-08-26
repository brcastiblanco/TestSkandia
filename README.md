
# Proyecto Angular v18 - LandingSkandia

## Descripción

Este proyecto es una aplicación Angular v18 que incluye la integración de Tailwind CSS, Angular Material, y `ngx-owl-carousel-o` para un diseño responsive y moderno. El proyecto está estructurado para una fácil navegación y escalabilidad.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Angular CLI (versión 18 o superior)

## Estructura de Carpetas

La estructura de carpetas del proyecto es la siguiente:

```plaintext
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── footer
│   │   │   ├── nav-bar
│   │   │   ├── nav-menu
│   │   │   ├── objective-card
│   │   │   └── product-carousel
│   │   ├── core
│   │   │   ├── resolvers
│   │   │   └── services
│   │   ├── features
│   │   │   ├── actions
│   │   │   ├── agreements
│   │   │   ├── customer-service
│   │   │   ├── goals
│   │   │   ├── home
│   │   │   ├── page-not-found
│   │   │   └── tools
│   │   ├── models
│   │   │   └── card.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── index.html
│   ├── main.ts
│   ├── colors.ts
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

### Explicación de la Estructura

- **`app/components/`**: Contiene los componentes reutilizables de la aplicación que son responsables de la presentación visual y la interacción básica, como:
  - **`footer/`**: Componente del pie de página.
  - **`nav-bar/`**: Componente de la barra de navegación superior.
  - **`nav-menu/`**: Componente del menú de navegación lateral.
  - **`objective-card/`**: Componente de tarjetas para mostrar objetivos.
  - **`product-carousel/`**: Componente de carrusel para mostrar productos.

- **`app/core/`**: Incluye la lógica central y los servicios compartidos en toda la aplicación:
  - **`resolvers/`**: Contiene resolvers que se utilizan para pre-cargar datos antes de cargar rutas específicas.
  - **`services/`**: Incluye los servicios que manejan la lógica de negocio y las llamadas a la API.

- **`app/features/`**: Contiene módulos específicos de funcionalidades de la aplicación. Cada carpeta en esta sección representa una característica o página específica:
  - **`actions/`**: Funcionalidades relacionadas con acciones específicas del usuario.
  - **`agreements/`**: Módulo relacionado con acuerdos o contratos.
  - **`customer-service/`**: Funcionalidades relacionadas con el servicio al cliente.
  - **`goals/`**: Módulo relacionado con la gestión de metas u objetivos.
  - **`home/`**: Módulo principal o página de inicio de la aplicación.
  - **`page-not-found/`**: Componente de página no encontrada para manejar rutas incorrectas.
  - **`tools/`**: Funcionalidades relacionadas con herramientas disponibles en la aplicación.

- **`app/models/`**: Contiene definiciones de modelos de datos utilizados en la aplicación:
  - **`card.ts`**: Modelo de datos para las tarjetas utilizadas en la aplicación.

- **`assets/`**: Contiene los activos estáticos como imágenes y otros recursos multimedia utilizados en la aplicación.

- **`colors.ts`**: Archivo donde se definen colores personalizados utilizados en la aplicación, posiblemente integrados con Tailwind CSS.

- **`styles.scss`**: Archivo global de estilos para la aplicación, donde se centralizan las definiciones de estilos globales.

Esta estructura modular facilita la escalabilidad y el mantenimiento del código, permitiendo que cada sección de la aplicación sea independiente y fácil de gestionar.

## Instalación y Ejecución del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/brcastiblanco/TestSkandia.git
   cd TestSkandia
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar la aplicación en modo desarrollo**

   ```bash
   ng serve
   ```

   La aplicación estará disponible en `http://localhost:4200`.

4. **Compilar para producción**

   ```bash
   ng build --prod
   ```

   Los archivos compilados estarán en la carpeta `dist/`.

## Librerías Usadas

- **Angular v18**: Framework principal para construir la aplicación.
- **Tailwind CSS**: Framework de utilidades para estilizar la aplicación de manera eficiente.
- **Angular Material**: Conjunto de componentes UI para Angular basados en Material Design.
- **ngx-owl-carousel-o**: Librería para implementar carruseles de imágenes en Angular.
- **Typescript**: Lenguaje de programación utilizado para el desarrollo de la aplicación.
- **Express.js**: (Si aplica para el backend) Framework web para Node.js, utilizado en el backend.