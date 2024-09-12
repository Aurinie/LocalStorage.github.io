// Obtener el elemento donde se mostrará el dato
const dataSpan = document.getElementById('data');

// Recuperar el dato almacenado en localStorage
const storedText = localStorage.getItem('storedText');

// Verifica si hay un dato en localStorage y lo mostramos
if (storedText) {
    dataSpan.textContent = storedText;
} else {
    dataSpan.textContent = 'No hay datos guardados.';
}
