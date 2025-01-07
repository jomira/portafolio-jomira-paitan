document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact__form___form'); // Selecciona el formulario
    const inputs = form.querySelectorAll('input, textarea'); // Selecciona todos los campos de entrada
    const submitButton = form.querySelector('button'); // Selecciona el botón de envío

    // Función para verificar si el campo está vacío
    const validateField = (input) => {
        if (input.value.trim() === "") {
            input.style.borderColor = 'red';  // Marca el borde en rojo
            return false;
        } else {
            input.style.borderColor = '';  // Elimina el borde rojo si el campo está lleno
            return true;
        }
    };

    // Función para validar el formulario antes de enviarlo
    const validateForm = (e) => {
        e.preventDefault(); // Previene el envío del formulario para validar

        let isValid = true;

        // Verificar todos los campos
        inputs.forEach((input) => {
            if (!validateField(input)) {
                isValid = false; // Si algún campo es inválido, se marca como inválido
            }
        });

        if (isValid) {
            // Si todos los campos son válidos, muestra un popup de éxito
            alert("¡Mensaje enviado con éxito!");
            form.reset();  // Limpia el formulario
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    };

    // Evento para validar al hacer clic en el botón de envío
    submitButton.addEventListener("click", validateForm);

    // También podemos validar en cada cambio de los campos
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            validateField(input); // Valida el campo individualmente mientras el usuario escribe
        });
    });
});
