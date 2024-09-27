
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Evitar el envío del formulario inicialmente
        event.preventDefault();
        
        // Obtener los valores de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();
        
        // Variable para controlar si hay errores
        let hasErrors = false;

        // Validar cada campo
        if (name === "") {
            alert("Por favor, ingrese su nombre.");
            hasErrors = true;
        }
        if (email === "") {
            alert("Por favor, ingrese su email.");
            hasErrors = true;
        }
        if (address === "") {
            alert("Por favor, ingrese su dirección.");
            hasErrors = true;
        }
        if (phone === "") {
            alert("Por favor, ingrese su teléfono.");
            hasErrors = true;
        }
        if (password === "") {
            alert("Por favor, ingrese su contraseña.");
            hasErrors = true;
        }

        // Validación adicional: verificar el formato del email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Por favor, introduce un correo electrónico válido.");
            hasErrors = true;
        }

        // Validación de longitud de la contraseña
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            hasErrors = true;
        }

        // Validación del número de teléfono
        const phonePattern = /^[0-9]+$/; // solo números
        if (!phone.match(phonePattern)) {
            alert("El número de teléfono debe contener solo números.");
            hasErrors = true;
        }

        // Si hay errores, no enviar el formulario
        if (hasErrors) {
            return; // Salir de la función sin enviar el formulario
        }

        // Si no hay errores, se puede enviar el formulario
        form.submit();
    });
});
