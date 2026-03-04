/* ===== VALIDACIÓN DE FORMULARIO ===== */

// Obtener el formulario de contacto
const contactForm = document.getElementById('contactForm');

// Validar el formulario cuando se envía
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Limpiar mensajes previos
        limpiarErrores();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const ciudad = document.getElementById('ciudad').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();
        
        // Validar y acumular errores
        let errores = {};
        
        // Validar nombre
        if (nombre === '') {
            errores.nombre = 'El nombre es obligatorio';
        } else if (nombre.length < 3) {
            errores.nombre = 'El nombre debe tener mínimo 3 caracteres';
        }
        
        // Validar ciudad
        if (ciudad === '') {
            errores.ciudad = 'La ciudad es obligatoria';
        }
        
        // Validar email
        if (email === '') {
            errores.email = 'El email es obligatorio';
        } else if (!validarEmail(email)) {
            errores.email = 'Por favor ingresa un email válido';
        }
        
        // Validar asunto
        if (asunto === '') {
            errores.asunto = 'Debes seleccionar un asunto';
        }
        
        // Validar descripción
        if (descripcion === '') {
            errores.descripcion = 'La descripción es obligatoria';
        } else if (descripcion.length < 10) {
            errores.descripcion = 'La descripción debe tener mínimo 10 caracteres';
        }
        
        // Si hay errores, mostrarlos y detener envío
        if (Object.keys(errores).length > 0) {
            mostrarErrores(errores);
            return;
        }
        
        // Si no hay errores, mostrar mensaje de éxito
        mostrarExito();
        contactForm.reset();
    });
}

/**
 * Función para validar formato de email
 * @param {string} email - Email a validar
 * @returns {boolean} - True si el email es válido
 */
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

/**
 * Función para mostrar errores en el formulario
 * @param {object} errores - Objeto con los errores
 */
function mostrarErrores(errores) {
    for (const campo in errores) {
        const elementoError = document.getElementById(`${campo}Error`);
        const inputElement = document.getElementById(campo);
        
        if (elementoError && inputElement) {
            elementoError.textContent = errores[campo];
            elementoError.classList.add('show');
            inputElement.classList.add('error');
        }
    }
}

/**
 * Función para limpiar errores del formulario
 */
function limpiarErrores() {
    const erroresElements = document.querySelectorAll('.error-msg');
    erroresElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });
    
    const inputsError = document.querySelectorAll('input.error, select.error, textarea.error');
    inputsError.forEach(input => {
        input.classList.remove('error');
    });
}

/**
 * Función para mostrar mensaje de éxito
 */
function mostrarExito() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.textContent = '✓ ¡Mensaje enviado correctamente! Te contactaremos pronto.';
        successMessage.classList.add('show');
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.classList.remove('show');
            successMessage.textContent = '';
        }, 5000);
    }
}

// Limpiar errores cuando el usuario escribe en los campos
const inputsForm = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
inputsForm.forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.remove('error');
        const errorMsg = document.getElementById(`${this.id}Error`);
        if (errorMsg) {
            errorMsg.textContent = '';
            errorMsg.classList.remove('show');
        }
    });
});



/**
 * Función para validar en tiempo real el email
 */
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (this.value && !validarEmail(this.value)) {
            const errorMsg = document.getElementById('emailError');
            errorMsg.textContent = 'Por favor ingresa un email válido';
            errorMsg.classList.add('show');
            this.classList.add('error');
        }
    });
}

/**
 * Función para contar caracteres en tiempo real
 */
const descripcionInput = document.getElementById('descripcion');
if (descripcionInput) {
    descripcionInput.addEventListener('input', function() {
        const errorMsg = document.getElementById('descripcionError');
        if (this.value.length < 10 && this.value.length > 0) {
            errorMsg.textContent = `Mínimo 10 caracteres (${this.value.length}/10)`;
            errorMsg.classList.add('show');
        } else {
            errorMsg.textContent = '';
            errorMsg.classList.remove('show');
        }
    });
}

// Exportar funciones para uso en otras páginas si es necesario
console.log('Script.js cargado correctamente');
