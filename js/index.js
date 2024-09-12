// Capturar los elementos del DOM
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Agrego el evento al botón para guardar el valor en localStorage
buttonText.addEventListener('click', function() {
    // Obtenemos el valor del input
    const textValue = inputText.value;
    
    // Guardar el valor en localStorage
    localStorage.setItem('storedText', textValue);
    
    // Limpiar el input después de guardar el dato
    inputText.value = '';
});
