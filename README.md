English | [Español](README.es.md)

# MapsApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-FDE047?logo=daisyui&logoColor=black)](https://daisyui.com/)

This is a **learning and practice project** built with Angular learn how to work with interactive maps using Mapbox GL.
The application demonstrates features such as creating, displaying, and managing markers, navigating to selected locations, and rendering map instances within dynamic UI components like lists and cards, including responsive design and state management using Angular signals.
The goal of this project is to practice Angular concepts such as:

- Integrating and working with interactive maps using Mapbox GL
- Dynamically creating and managing map markers
- Handling user interactions such as navigation, selection, and marker removal
- Implementing responsive layouts for map-based applications

## Tech Stack

- Angular 21
- TypeScript
- Tailwind 4.2
- Daisyui 5.5

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Antonio-Borrero/maps-app-angular.git
   ```

2. Enter the project folder:
   ```bash
   cd maps-app-angular
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Generate environment files:
   ```bash
   npm run set-envs
   ```
   
5. Development Server:
   ```bash
   ng serve
   ```

6. Open in browser:
   - Go to `http://localhost:4200/`.
   - The app will automatically reload when any file is modified

## Features

- Interactive maps with Mapbox GL
- Dynamic marker creation and management
- Marker navigation and removal
- Synchronized UI between map and marker list
- Reusable map components and card-based layout
- Responsive design for different screen sizes
- Reactive state handling with Angular signals

## Learning 

- Working with interactive maps using data from an external API
- Creating, displaying, and managing map markers dynamically
- Handling user interactions with maps (navigation, selection, and marker removal)
- Synchronizing UI elements (lists, cards) with map state
- Implementing responsive layouts for map-based applications

## Project Structure

```bash
- src/
 ├── app
│   ├── maps
│   │   └── components
│   │       └── mini-map        # Reusable mini map component for rendering maps inside other views (e.g., cards)
│   ├── pages
│   │   ├── fullscreen-map-page # Fullscreen interactive map view
│   │   ├── houses-page         # Page displaying items in a card layout, each with its own map
│   │   └── markers-page        # Marker management page (list, navigation, deletion)
│   └── shared
│       └── components
│           └── navbar          # Shared navigation bar component
└── environments                # Environment configuration (API keys, settings for dev/prod)
```

## Build

To build the production version:

```bash
ng build
```
