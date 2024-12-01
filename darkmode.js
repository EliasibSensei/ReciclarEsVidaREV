// Esta funcion guarda el modo que prefieras
function applyDarkModePreference() {
    const darkModeEnabled = localStorage.getItem('niggamodo') === 'true';
    if (darkModeEnabled) {
      document.body.classList.add('niggamodo');
      toggleButton.textContent = 'Modo Claro';
    } else {
      document.body.classList.remove('niggamodo');
      toggleButton.textContent = 'Modo Oscuro';
    }
  }
  // Selecciona el boton
  const toggleButton = document.getElementById('modonigga');
  // Se aplica la preferencia al cargar la pagina 
  applyDarkModePreference();
  // El evento click de siempre
  toggleButton.addEventListener('click', () => {
    // Cambia a la clase 'niggamodo' en el documento XD
    document.body.classList.toggle('niggamodo');
    // Guardar lo que escogiste en LocalStorage
    const darkModeEnabled = document.body.classList.contains('niggamodo');
    localStorage.setItem('niggamodo', darkModeEnabled);
    // Cambiar el texto del botón cuando lo picas
    toggleButton.textContent = darkModeEnabled ? 'Modo Claro' : 'Modo Oscuro';
  });