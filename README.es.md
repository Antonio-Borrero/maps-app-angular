Español | [English](README.md)

# MapsApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-FDE047?logo=daisyui&logoColor=black)](https://daisyui.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-000000?logo=mapbox&logoColor=white)](https://www.mapbox.com/)

![Maps App Preview](assets/preview.png)

<br>

Este es un **proyecto de aprendizaje y práctica** construido con Angular como parte del **curso de Angular de DevTalles (Fernando Herrera)** centrado en la integración de datos geoespaciales interactivos utilizando **Mapbox GL**. La aplicación demuestra la manipulación de mapas, como la gestión dinámica de marcadores, estados de UI sincronizados y el renderizado de múltiples instancias de mapas en una sola vista.

<br>

## Aspectos Técnicos Destacados

- **Integración con Mapbox GL:** Gestión del ciclo de vida completo de mapas interactivos dentro de componentes de Angular.
- **Estado Reactivo con Signals:** Uso de **Angular Signals** para una sincronización de UI de alto rendimiento entre el mapa y las listas laterales.
- **Gestión Dinámica de Marcadores:** Lógica para crear, almacenar (LocalStorage) y navegar a través de marcadores interactivos.
- **Reutilización de Componentes:** Implementación de un componente "Mini-Map" diseñado para renderizarse dentro de tarjetas y listas sin degradación del rendimiento.
- **Layouts Responsivos:** Diseños optimizados para aplicaciones basadas en mapas.

<br>

## Tecnologías

- **Angular 21** (Signals, Standalone Components)
- **Mapbox GL JS**
- **Tailwind CSS 4.2** & **DaisyUI 5.5**
- **TypeScript**

<br>

## Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/Antonio-Borrero/maps-app-angular.git
    ```

2. Instalar dependencias:
    ```bash
    npm install
    ```
3. Generar archivos de entorno:
    ```bash
    npm run set-envs
    ```

    - Actualizar el token de Mapbox por el propio en `src/environments/environment.ts`.
4. Ejecutar el servidor de desarrollo:

    ```bash
    ng serve
    ```

5. abrir en el navegador:
    - Ir a `http://localhost:4200/`.
    - La aplicación se recargará automáticamente al modificar cualquier archivo.

<br>

## Estructura del Proyecto

```bash
   - src/
   ├── app
   │   ├── maps
   │   │   └── components
   │   │       └── mini-map        # Componente de mini mapa reutilizable para renderizar mapas en otras vistas (ej. cards)
   │   ├── pages
   │   │   ├── fullscreen-map-page # Vista de mapa interactivo a pantalla completa
   │   │   ├── houses-page         # Página que muestra elementos en layout de tarjetas, cada una con su propio mapa
   │   │   └── markers-page        # Página de gestión de marcadores (lista, navegación, borrado)
   │   └── shared
   │       └── components
   │           └── navbar          # Componente de barra de navegación compartido
   └── environments                # Configuración de entorno (API keys, ajustes para dev/prod)
```

<br>

## Aprendizaje

- Trabajar con mapas interactivos utilizando datos de una API externa.
- Sincronización de coordenadas geográficas con elementos de la UI en tiempo real.
- Personalización dinámica de marcadores y popups de Mapbox.
- Implementación de layouts responsivos para aplicaciones basadas en mapas.

<br>

## Build

To build the production version:

```bash
ng build
```
