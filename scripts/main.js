// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // 1. OBTENER REFERENCIAS A LOS ELEMENTOS
  // Obtiene el checkbox del interruptor del tema
  const themeSwitch = document.getElementById('theme-switch-checkbox');
  // Obtiene el elemento body para poder cambiarle la clase
  const currentBody = document.body;
  // Define el nombre que usaremos para guardar la preferencia en el almacenamiento local
  const themeKey = 'user-theme';

  // 2. FUNCIÓN PARA APLICAR EL TEMA
  // Esta función aplica el tema (claro u oscuro) y lo guarda en localStorage
  const applyTheme = (theme) => {
    // Si el tema es 'light', añade la clase 'light-mode' al body.
    // Si no (es 'dark'), la elimina.
    currentBody.classList.toggle('light-mode', theme === 'light');

    // Guarda la elección del usuario en localStorage para que se recuerde
    localStorage.setItem(themeKey, theme);

    // Actualiza el estado del checkbox para que coincida con el tema aplicado
    themeSwitch.checked = theme === 'light';
  };

  // 3. OBTENER PREFERENCIA GUARDADA Y APLICAR TEMA INICIAL
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

});