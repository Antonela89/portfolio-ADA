# Portafolio de Antonela Borgogno - Desarrolladora Web

¡Hola! 👋 Bienvenido al repositorio de mi portafolio personal. Este proyecto es una **Single Page Application (SPA)** estática, construida desde cero con un enfoque en **código limpio, diseño adaptable y accesibilidad web**.

### ✨ **[Ver el proyecto en vivo](https://[URL-DEL-PROYECTO-EN-PRODUCCION])** ✨

---

## 📜 Tabla de Contenidos

*   [Vistazo General y Diseño Adaptativo](#-vistazo-general-y-diseño-adaptativo)
*   [Propósito del Proyecto](#-propósito-del-proyecto)
*   [Características Destacadas](#-características-destacadas)
*   [Stack Tecnológico y Metodologías](#️-stack-tecnológico-y-metodologías)
*   [Estructura de Archivos](#-estructura-de-archivos)
*   [Cómo ejecutar este proyecto localmente](#-cómo-ejecutar-este-proyecto-localmente)
*   [Autora](#-autora)
*   [Licencia](#-licencia)

---

## 📸 Vistazo General y Diseño Adaptativo

El portafolio está diseñado con la metodología **Mobile First** y es completamente adaptable. Además, incluye un interruptor para cambiar entre un tema oscuro y uno claro, brindando una experiencia de usuario personalizada.

| | Tema Oscuro (Por defecto) | Tema Claro |
| :---: | :---: | :---: |
| **Diseño Móvil** | <img src="images/responsive/tema_oscuro/mobile.png" alt="Diseño móvil en tema oscuro" width="400px"/> | <img src="images/responsive/tema_claro/mobile.png" alt="Diseño móvil en tema claro" width="400px"/> |
| **Diseño Tablet** | <img src="images/responsive/tema_oscuro/tablet.png" alt="Diseño tablet en tema oscuro" width="400px"/> | <img src="images/responsive/tema_claro/tablet.png" alt="Diseño tablet en tema claro" width="400px"/> |
| **Diseño Desktop** | <img src="images/responsive/tema_oscuro/desktop.png" alt="Diseño de escritorio en tema oscuro" width="400px"/> | <img src="images/responsive/tema_claro/desktop.png" alt="Diseño de escritorio en tema claro" width="400px"/> |

*(**Nota:** Para optimizar la carga del `README.md`, todas las imágenes de previsualización han sido comprimidas)*.

---

## 🚀 Propósito del Proyecto

El objetivo de este portafolio es funcionar como mi carta de presentación digital, mostrando no solo los proyectos en los que he trabajado, sino también la calidad y las técnicas modernas que aplico en mi proceso de desarrollo, desde la estructura semántica hasta las microinteracciones más detalladas.

---

## 🎯 Características Destacadas

*   **🌓 Doble Tema (Claro y Oscuro):** Un interruptor de fácil acceso permite al usuario cambiar la paleta de colores del sitio, almacenando su preferencia para futuras visitas.
*   **🏠 Sobre Mí:** Una introducción que resume mi perfil y mis objetivos profesionales, presentada en un layout adaptable.
*   **🧠 Conocimientos:** Una galería de tarjetas dinámicas con un **efecto 3D al interactuar** (`:hover`, `:active`), demostrando el uso de `perspective` y `transform` en CSS.
*   **💡 Proyectos:** Un **carrusel horizontal nativo de CSS** creado con `Scroll Snap` para una experiencia de usuario fluida. Cada proyecto incluye:
    *   Una vista previa en vivo renderizada mediante la **técnica del `<iframe>` escalado**, que muestra una réplica fiel del sitio sin afectar el rendimiento.
    *   Enlaces directos al proyecto en vivo y a su repositorio en GitHub.
*   **📬 Contacto:** Un formulario completo con **validación de datos en tiempo real hecha exclusivamente con CSS**, utilizando pseudoclases avanzadas (`:valid`, `:invalid`, `:not(:placeholder-shown)`) para una retroalimentación instantánea al usuario sin necesidad de JavaScript.
*   **♿ Accesibilidad (a11y):** Se implementaron rigurosas prácticas de accesibilidad, incluyendo una estructura de HTML5 semántica, atributos `ARIA` para una correcta interpretación por lectores de pantalla y estilos de foco visibles (`:focus-visible`) para la navegación con teclado.
*   **⚡ Rendimiento:** Se optimizó la carga del sitio mediante el uso de formatos de imagen modernos (`.webp` con fallback a `.jpg`), la carga asíncrona de fuentes y la carga de estilos a través de múltiples etiquetas `<link>` para permitir descargas en paralelo, evitando el uso de `@import` que bloquea la renderización.

---

## 🛠️ Stack Tecnológico y Metodologías

Este proyecto es un testimonio del poder de las tecnologías web fundamentales, sin depender de frameworks complejos.

#### Estructura y Accesibilidad (HTML5)
*   **HTML5 Semántico:** Uso de etiquetas como `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` para construir un DOM claro y significativo.
*   **Atributos ARIA:** Implementación de roles y atributos (`aria-label`, `aria-required`, `role="banner"`) para mejorar la accesibilidad.

#### Estilo y Maquetación (CSS3)
*   **Metodología Mobile First:** El diseño se construye desde la vista móvil hacia escritorios.
*   **CSS Variables (Custom Properties):** Se utilizó un sistema de variables globales para la paleta de colores, tipografías y espaciados, facilitando la implementación del **cambio de tema** y garantizando un mantenimiento sencillo.
*   **Flexbox:** Es la base de todos los layouts, permitiendo crear estructuras complejas y flexibles.
*   **Metodología BEM:** Las clases siguen la convención `Bloque__Elemento--Modificador` para un CSS escalable y libre de conflictos.
*   **Técnicas Avanzadas:**
    *   **Scroll Snap** para el carrusel de proyectos.
    *   **Transformaciones 3D** (`perspective`, `rotateY`) para las tarjetas de conocimientos.
    *   **Pseudoclases avanzadas** (`:valid`, `:invalid`, `:not(:placeholder-shown)`) para la validación del formulario.
    *   **Estilos de scrollbar personalizados**.
    *   **Propiedades lógicas de CSS** (`inline-size`, `margin-block`, etc.) para un diseño robusto.

#### Interactividad (JavaScript Vanilla)
*   **Manejo del DOM:** Se utiliza JavaScript puro y ligero para gestionar interacciones clave:
    *   **Menú de navegación móvil (hamburguesa):** Controla la visibilidad del menú en pantallas pequeñas.
    *   **Interruptor de Tema:** Activa y desactiva la clase `.light-mode` en el `<body>` y guarda la preferencia del usuario en `localStorage`.

#### Herramientas y Librerías
*   **Font Awesome:** Para la librería de iconos.
*   **Google Fonts:** Para las tipografías personalizadas (`Poppins` y `Roboto`).

---

## 📁 Estructura de Archivos

El código CSS está organizado en una arquitectura modular para facilitar su mantenimiento. Cada componente principal de la página tiene su propio archivo de estilos, cargado en un orden lógico.

```
/styles/
├── 1-config.css              # Variables CSS globales, modo claro/oscuro y reseteo
├── 2-header.css              # Estilos del encabezado y navegación
├── 3-main.css                # Estilos generales del contenido principal
├── 4-section-sobreMi.css     # Estilos de la sección "Sobre Mí"
├── 5-section-conocimientos.css # Estilos de la sección "Conocimientos"
├── 6-section-frase.css       # Estilos de la sección "Frase"
├── 7-section-proyectos.css   # Estilos de la sección "Proyectos"
├── 8-section-contacto.css    # Estilos de la sección "Contacto"
└── 9-footer.css              # Estilos del pie de página
```

---

## 🏁 Cómo ejecutar este proyecto localmente

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Antonela89/portfolio-ADA.git
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd portfolio-ADA
    ```

3.  **Abre el archivo `index.html` en tu navegador.**
    *   *Recomendación:* Para una mejor experiencia de desarrollo, utiliza una extensión como **Live Server** en Visual Studio Code.

---

## 👤 Autora

¡Gracias por tomarte el tiempo de revisar mi trabajo! Estaré encantada de conectar.

*   **Antonela Borgogno**
*   **GitHub:** [@Antonela89](https://github.com/Antonela89)
*   **LinkedIn:** [https://www.linkedin.com/in/antonela-borgogno/](https://www.linkedin.com/in/antonela-borgogno)

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT.