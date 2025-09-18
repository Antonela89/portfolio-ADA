// ========================== Manejo de Switch ====================================

// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // OBTENER REFERENCIAS A LOS ELEMENTOS
  // Obtiene el checkbox del interruptor del tema
  const themeSwitch = document.getElementById('theme-switch-checkbox');
  // Obtiene el elemento body para poder cambiarle la clase
  const currentBody = document.body;
  // Define el nombre que usaremos para guardar la preferencia en el almacenamiento local
  const themeKey = 'user-theme';

  // FUNCIÓN PARA APLICAR EL TEMA
  // Esta función aplica el tema (claro u oscuro) y lo guarda en localStorage
  const applyTheme = (theme) => {
    // Si el tema es 'light', añade la clase 'light-mode' al body.
    // Si no (es 'dark'), la elimina.
    currentBody.classList.toggle('light-mode', theme === 'light');

    // Guardar la elección del usuario en localStorage para que se recuerde
    localStorage.setItem(themeKey, theme);

    // Actualizar el estado del checkbox para que coincida con el tema aplicado
    themeSwitch.checked = theme === 'light';
  };

  // OBTENER PREFERENCIA GUARDADA Y APLICAR TEMA INICIAL
  // Obtiene el tema guardado en localStorage (si existe)
  const savedTheme = localStorage.getItem(themeKey);

  // Si hay un tema guardado, lo aplica.
  // Si no hay nada guardado, por defecto se quedará el tema oscuro (sin la clase .light-mode)
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // AÑADIR EVENT LISTENER AL INTERRUPTOR
  // Escucha los cambios en el checkbox (cuando el usuario hace clic)
  themeSwitch.addEventListener('change', (event) => {
    // Si el checkbox está marcado, el tema es 'light'
    // Si no está marcado, el tema es 'dark'
    const newTheme = event.target.checked ? 'light' : 'dark';
    
    // Aplica el nuevo tema
    applyTheme(newTheme);
  });


  // ========================== Manejo de Menú Hamburguesa ====================================
    const hamburguesa = document.querySelector('.encabezado__hamburguesa');
    const nav = document.querySelector('.encabezado__nav');

    // Verificar que los elementos existan
    if (hamburguesa && nav) {
        // 'escuchador' de eventos para el clic
        hamburguesa.addEventListener('click', () => {
            // Cada vez que se hace clic, alterna la clase '--visible'
            nav.classList.toggle('encabezado__nav--visible');
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    const enlaces = document.querySelectorAll('.encabezado__link');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            // Si el menú está visible, lo ocultamos
            if (nav.classList.contains('encabezado__nav--visible')) {
                nav.classList.remove('encabezado__nav--visible');
            }
        });
    });
});


