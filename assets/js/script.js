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

/* ===== FUNCIONALIDAD ADICIONAL ===== */

/**
 * Función para inicializar la página
 */
document.addEventListener('DOMContentLoaded', function() {
    // Marcar el enlace de navegación activo
    marcarEnlaceActivo();
    
    // Agregar animación suave a los enlaces internos
    agregarAnimacionesEnlaces();

    // Inicializar filtro de precios si existe
    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) {
        priceFilter.addEventListener('change', filtrarPorPrecio);
    }
});

/**
 * Filtra los productos visibles según el valor del selector de precio.
 */
function filtrarPorPrecio() {
    const filtro = document.getElementById('price-filter').value;
    const articulos = document.querySelectorAll('.product-item');

    articulos.forEach(item => {
        const priceEl = item.querySelector('.price');
        let precio = 0;
        if (priceEl) {
            precio = parseFloat(priceEl.textContent.replace(/[^0-9\.]/g, ''));
        }

        let mostrar = true;
        switch (filtro) {
            case 'low':
                mostrar = precio < 50;
                break;
            case 'medium':
                mostrar = precio >= 50 && precio <= 100;
                break;
            case 'high':
                mostrar = precio > 100;
                break;
            default:
                mostrar = true;
        }

        item.style.display = mostrar ? '' : 'none';
    });
}

/**
 * Función para marcar el enlace de navegación activo
 */
function marcarEnlaceActivo() {
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlaces = document.querySelectorAll('.nav-list a');
    
    enlaces.forEach(enlace => {
        const href = enlace.getAttribute('href');
        
        // Comparar con la página actual
        if (href === paginaActual || 
            (paginaActual === '' && href === 'index.html') ||
            (paginaActual === '/' && href === 'index.html')) {
            enlace.classList.add('active');
        } else {
            enlace.classList.remove('active');
        }
    });
}

/**
 * Función para agregar efecto suave a los enlaces internos
 */
function agregarAnimacionesEnlaces() {
    const enlaces = document.querySelectorAll('a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const objetivo = document.querySelector(this.getAttribute('href'));
            if (objetivo) {
                objetivo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

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
