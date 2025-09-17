# Portafolio de Antonela Borgogno - Desarrolladora Web

¡Hola! 👋 Bienvenido al repositorio de mi portafolio personal. Este proyecto es una **Single Page Application (SPA)** estática, construida desde cero con un enfoque en **código limpio, diseño responsive y accesibilidad**.

### ✨ **[Ver el proyecto en vivo](https://[URL-PROYECTO])** ✨

---

## 🚀 Propósito del Proyecto

El objetivo de este portafolio es funcionar como mi carta de presentación digital, mostrando no solo los proyectos en los que he trabajado, sino también la calidad y las técnicas modernas que aplico en mi proceso de desarrollo, desde la estructura semántica hasta las microinteracciones más detalladas.

---

## 📸 Captura de Pantalla

![Captura de pantalla del portafolio mostrando las secciones principales](https://[URL-DE-UNA-CAPTURA-DE-PANTALLA])

---

## 🎯 Características Destacadas

*   **🏠 Sobre Mí:** Una introducción que resume mi perfil y mis objetivos profesionales, presentada en un layout adaptable.
*   **🧠 Conocimientos:** Una galería de tarjetas dinámicas con un **efecto 3D al interactuar** (`:hover`, `:active`), demostrando el uso de `perspective` y `transform` en CSS.
*   **💡 Proyectos:** Un **carrusel horizontal nativo de CSS** creado con `Scroll Snap` para una experiencia de usuario fluida en todos los dispositivos. Cada proyecto incluye:
    *   Una vista previa en vivo renderizada mediante la **técnica del `<iframe>` escalado**, que muestra una réplica fiel del sitio original sin afectar el rendimiento.
    *   Enlaces directos al proyecto en vivo y a su repositorio en GitHub.
*   **📬 Contacto:** Un formulario completo con **validación de datos en tiempo real hecha exclusivamente con CSS**, utilizando pseudoclases avanzadas (`:valid`, `:invalid`, `:not(:placeholder-shown)`) para una retroalimentación instantánea al usuario.
*   **🎨 Diseño Responsivo (Mobile First):** La interfaz está diseñada partiendo de la base móvil y escala de manera fluida y coherente a tabletas y escritorios.
*   **♿ Accesibilidad (a11y):** Se implementaron rigurosas prácticas de accesibilidad, incluyendo una estructura de HTML5 semántica, atributos `ARIA` para una correcta interpretación por lectores de pantalla y estilos de foco visibles (`:focus-visible`) para la navegación con teclado.
*   **⚡ Rendimiento:** Se optimizó la carga del sitio mediante el uso de formatos de imagen modernos (`.webp` con fallback a `.jpg`), la carga asíncrona de fuentes y la carga de estilos a través de múltiples etiquetas `<link>` para permitir descargas en paralelo, evitando el uso de `@import` que bloquea la renderización.

---

## 🛠️ Stack Tecnológico y Metodologías

Este proyecto es un testimonio del poder de las tecnologías web fundamentales, sin depender de frameworks de JavaScript.

#### Estructura y Accesibilidad (HTML5)
*   **HTML5 Semántico:** Uso de etiquetas como `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<figure>` para construir un DOM claro y significativo.
*   **Atributos ARIA:** Implementación de roles (`role="banner"`, `role="navigation"`) y atributos (`aria-label`, `aria-labelledby`, `aria-required`) para mejorar la accesibilidad.

#### Estilo y Maquetación (CSS3)
*   **Metodología Mobile First:** El diseño se construye desde la vista móvil hacia escritorios.
*   **CSS Variables (Custom Properties):** Se utilizó un sistema de variables globales para la paleta de colores y tipografías, garantizando consistencia y fácil mantenimiento.
*   **Flexbox:** Es la base de todos los layouts, permitiendo crear estructuras complejas y flexibles de manera eficiente.
*   **Metodología BEM:** Las clases siguen la convención `Bloque__Elemento--Modificador` para un CSS escalable, modular y libre de conflictos.
*   **Animaciones y Transiciones:** Se aplicaron para crear microinteracciones que mejoran la experiencia de usuario sin sacrificar el rendimiento.
*   **Técnicas Avanzadas:**
    *   **Scroll Snap** para el carrusel de proyectos.
    *   **Transformaciones 3D** (`perspective`, `rotateY`) para las tarjetas de conocimientos.
    *   **Pseudoclases avanzadas** (`:valid`, `:invalid`, `:not(:placeholder-shown)`) para la validación del formulario.
    *   **Estilos de scrollbar personalizados** para una estética coherente en todo el sitio.
    *   **Propiedades lógicas de CSS** (`inline-size`, `margin-block`, etc.) para un diseño más robusto y preparado para la internacionalización.

#### Herramientas y Librerías
*   **Font Awesome:** Para la librería de iconos.
*   **Google Fonts:** Para las tipografías personalizadas (`Poppins` y `Roboto`).

---

## 📁 Estructura de Archivos

El código CSS está organizado en una arquitectura modular para facilitar su mantenimiento y escalabilidad. Cada componente principal de la página tiene su propio archivo de estilos.

```
/styles/
├── 1-config.css              # Variables CSS globales y reseteo
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
*   **LinkedIn:** [https://www.linkedin.com/in/antonela-borgogno/](https://www.linkedin.com/in/antonela-borgogno])

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT.