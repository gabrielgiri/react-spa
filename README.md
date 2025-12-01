# 🚀 Aplicación Web de Catálogo Tecnológico

## ![alt text](image.png)

Esta es una **Aplicación de Página Única (SPA)** creada con **React**, diseñada para funcionar como un catálogo interactivo de hardware y periféricos.

El proyecto se enfoca en la usabilidad y la estética **minimalista**, utilizando un diseño modular y **CSS Variables** para asegurar una fácil escalabilidad y personalización de la paleta de colores.

---

## 🛠️ Stack Tecnológico

| Herramienta          | Versión Principal | Uso Específico                                          |
| :------------------- | :---------------- | :------------------------------------------------------ |
| **React**            | 18+               | Construcción de la interfaz de usuario.                 |
| **React Router DOM** | v6                | Gestión eficiente de las rutas y navegación.            |
| **CSS Variables**    | N/A               | Definición de la paleta de colores y tipografía global. |
| **JavaScript**       | ES6+              | Lógica de la aplicación y componentes.                  |

---

## 📋 Estructura de Componentes y Rutas

### Rutas Principales

El enrutamiento se gestiona en `App.js` y permite la navegación sin recargar la página:

| Ruta           | Componente        | Tema de Contenido                              |
| :------------- | :---------------- | :--------------------------------------------- |
| `/`            | `Home.jsx`        | Introducción general y visión del hardware.    |
| `/notebook`    | `Notebook.jsx`    | Detalle sobre Notebooks Gamers y portabilidad. |
| `/impresoras`  | `Impresoras.jsx`  | Tecnologías de impresión (tinta vs. láser).    |
| `/perifericos` | `Perifericos.jsx` | [Pendiente de desarrollo]                      |

### Componentes Clave

- `App.js`: Contiene el `<BrowserRouter>` y define todas las `<Route>`.
- `Navbar.jsx`: Componente de navegación persistente (fuera de las rutas).
- `./css/style.css`: Archivo principal con todos los estilos, incluyendo las variables (e.g., `--accent`, `--bg-card`).

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

### 1. Requisitos

Necesitas tener **Node.js** y **npm** (o yarn) instalados en tu sistema.

### 2. Clonar el Repositorio

```bash
git clone [URL-DE-TU-REPOSITORIO]
cd [nombre-de-la-carpeta-del-proyecto]
```
