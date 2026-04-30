Español | [English](README.md)

# MapsApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-FDE047?logo=daisyui&logoColor=black)](https://daisyui.com/)

Este es un **proyecto de aprendizaje y práctica** desarrollado con Angular para aprender a trabajar con mapas interactivos.
La aplicación demuestra funcionalidades como la creación, visualización y gestión de marcadores, la navegación a ubicaciones seleccionadas y el renderizado de instancias de mapas dentro de componentes dinámicos como listas y tarjetas, incluyendo diseño responsivo y gestión de estado usando signals de Angular.
El objetivo de este proyecto es practicar conceptos de Angular como:

- Integración y trabajo con mapas interactivos usando Mapbox GL
- Creación y gestión dinámica de marcadores en el mapa
- Manejo de interacciones del usuario como navegación, selección y eliminación de marcadores
- Implementación de layouts responsive para aplicaciones basadas en mapas

## Tecnologías

- Angular 21
- TypeScript
- Tailwind 4.2
- Daisyui 5.5

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Antonio-Borrero/maps-app-angular.git
   ```

2. Entrar en la carpeta del proyecto:
   ```bash
   cd maps-app-angular
   ```
   
3. Instalar dependencias:
   ```bash
   npm install
   ```
   
4. Generar los archivos de entorno:
   ```bash
   npm run set-envs
   ```
   
5. Levantar el servidor de desarrollo:
   ```bash
   ng serve
   ```

6. Abrir en el navegador:
   - Ir a `http://localhost:4200/`.
   - La aplicación se recargará automáticamente al detectar cambios

## Funcionalidades

- Mapas interactivos con Mapbox GL
- Creación y gestión dinámica de marcadores
- Navegación y eliminación de marcadores
- Sincronización entre el mapa y la lista de marcadores
- Componentes reutilizables y diseño basado en tarjetas
- Diseño responsive para diferentes tamaños de pantalla

## Aprendizaje

- Trabajo con mapas interactivos usando datos de una API externa
- Creación, visualización y gestión dinámica de marcadores
- Manejo de interacciones del usuario en mapas (navegación, selección y eliminación)
- Sincronización de elementos de la UI (listas, tarjetas) con el estado del mapa
- Implementación de layouts responsivos para aplicaciones basadas en mapas

## Estructura del proyecto

```bash
- src/
 ├── app
│   ├── maps
│   │   └── components
│   │       └── mini-map        # Componente reutilizable de mini mapa para mostrar mapas en otras vistas (ej. tarjetas)
│   ├── pages
│   │   ├── fullscreen-map-page # Vista de mapa en pantalla completa
│   │   ├── houses-page         # Página con tarjetas, cada una con su propio mapa
│   │   └── markers-page        # Página de gestión de marcadores (lista, navegación, eliminación)
│   └── shared
│       └── components
│           └── navbar          # Componente de barra de navegación reutilizable
└── environments                # Configuración de entornos (API keys, dev/prod)
```

## Producción

Para generar la versión de producción:

```bash
ng build
```
