document.getElementById("evaluation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;

    // Validación de nombre
    const nombre = document.getElementById("nombre");
    const nombreError = document.getElementById("nombre-error");
    if (nombre.value.trim() === "" || nombre.value.length < 3) {
        nombreError.textContent = "Debe ingresar un nombre válido.";
        valid = false;
    } else {
        nombreError.textContent = "";
    }

    // Validación de RUT
    const rut = document.getElementById("rut");
    const rutError = document.getElementById("rut-error");
    if (!/^\d{7,8}-[0-9kK]$/.test(rut.value)) {
        rutError.textContent = "Debe ingresar un RUT válido.";
        valid = false;
    } else {
        rutError.textContent = "";
    }

    // Validación de fecha de nacimiento
    const fechaNacimiento = document.getElementById("fecha-nacimiento");
    const fechaNacimientoError = document.getElementById("fecha-nacimiento-error");
    if (fechaNacimiento.value && !/^\d{2}\/\d{2}\/\d{4}$/.test(fechaNacimiento.value)) {
        fechaNacimientoError.textContent = "Formato de fecha incorrecto.";
        valid = false;
    } else {
        fechaNacimientoError.textContent = "";
    }

    // Validación de CV
    const cv = document.getElementById("cv");
    const cvError = document.getElementById("cv-error");
    if (cv.files.length > 0) {
        const fileType = cv.files[0].name.split(".").pop().toLowerCase();
        if (!["docx", "pdf"].includes(fileType)) {
            cvError.textContent = "El archivo debe ser .docx o .pdf.";
            valid = false;
        } else {
            cvError.textContent = "";
        }
    }

    // Validación de email
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        emailError.textContent = "Debe ingresar un email válido.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validación de contraseñas
    const password = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    const confirmPassword = document.getElementById("confirm-password");
    const confirmPasswordError = document.getElementById("confirm-password-error");

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/.test(password.value)) {
        passwordError.textContent = "La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1 número y entre 6-12 caracteres.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (valid) {
        alert("Formulario enviado correctamente.");
    }
});

// Botón cancelar
document.getElementById("cancel-button").addEventListener("click", function() {
    document.getElementById("evaluation-form").reset();
    document.querySelectorAll(".error-message").forEach(function(errorSpan) {
        errorSpan.textContent = "";
    });
});