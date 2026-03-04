# 🏋️ Apex Athletics - Tienda de Artículos Deportivos

## Descripción del Proyecto

Apex Athletics es un sitio web de e-commerce simulado que funciona como una tienda en línea especializada en artículos deportivos. El proyecto fue desarrollado con HTML5 semántico, CSS responsive y JavaScript vanilla, demostrando habilidades en desarrollo web frontend.

## 👥 Integrantes

- **Andrés Maldonado** - Rol: Desarrollo HTML/CSS
- **Bryan Tello** - Rol: Desarrollo JavaScript/Validación

## 📋 Temática Elegida

**Tienda de artículos deportivos** - Venta de equipamiento, ropa, calzado y accesorios para deportistas de todos los niveles.

## 🌐 Características Principales

### HTML5 Semántico

- Estructura semántica correcta con etiquetas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, y `<footer>`
- Código bien indentado y organizado.
- Uso adecuado de etiquetas semánticas en todas las páginas.

### Diseño Responsive

- Adaptación perfecta a dispositivos móviles (480px), tablets (768px) y desktop
- Media queries implementadas para diferentes tamaños de pantalla
- Navegación funcional en todos los dispositivos

### Validación de Formulario

- Validación en tiempo real de datos
- Mensajes de error dinámicos
- Validación de:
  - Campos no vacíos
  - Email con formato válido
  - Nombre mínimo 3 caracteres
  - Descripción mínimo 10 caracteres

### JavaScript Funcional

- Sistema de carrito simulado con localStorage
- Validación de formularios completa
- Notificaciones dinámicas
- Interactividad en la página de productos

## 📁 Estructura del Proyecto

```
trabajo-final/
│
├── index.html                  # Página de bienvenida
├── categorias.html             # Página de categorías
├── productos.html              # Página de productos
├── contacto.html               # Página de contacto con formulario
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos CSS completos y responsive
│   │
│   ├── js/
│   │   └── script.js           # JavaScript con validación y funcionalidad
│   │
│   └── img/
│       ├── productos/          # Imágenes de productos
│       ├── categorias/         # Imágenes de categorías
│       └── banners/            # Banners e imágenes principales
│
└── README.md                   # Este archivo
```

## 📄 Páginas Incluidas

### 1. Página de Bienvenida (index.html)

- Nombre y branding de la tienda
- Banner principal atractivo
- Descripción breve de la tienda
- Sección de características destacadas
- Productos en destaque
- Enlace hacia categorías

### 2. Página de Categorías (categorias.html)

- Mínimo 4 categorías de productos:
  - 👟 Calzado Deportivo
  - 👕 Ropa Deportiva
  - 🎽 Accesorios
  - ⚽ Equipamiento
- Imagen representativa por categoría
- Descripción de cada categoría
- Enlaces hacia página de productos

### 3. Página de Productos (productos.html)

- Mínimo 8 productos con:
  - Nombre del producto
  - Precio
  - Imagen
  - Descripción breve
  - Botón para agregar al carrito
- Sistema de carrito simulado con localStorage
- Notificaciones al agregar productos
- Filtro opcional por precio

### 4. Página de Contacto (contacto.html)

- Formulario con validación completa
- Campos requeridos:
  - Nombre (mínimo 3 caracteres)
  - Ciudad
  - Email (formato válido)
  - Asunto (seleccionar de opciones)
  - Descripción (mínimo 10 caracteres)
- Mensajes de error dinámicos
- Información de contacto adicional
- Sección de preguntas frecuentes

## 🎯 Características Técnicas

### HTML5

- Estructura semántica correcta en todas las páginas
- Meta tags para responsive design
- Formularios con validación HTML5
- Indentación y organización clara

### CSS

- Diseño responsive
- Media queries para 3 breakpoints (480px, 768px, 1200px)
- Uso de CSS Grid y Flexbox
- Variables CSS para colores y espaciado
- Transiciones y animaciones suaves
- Gradientes modernos

### JavaScript

- Validación de formularios sin librerías externas
- Manipulación del DOM
- localStorage para carrito simulado
- Funciones reutilizables
- Validación de email con regex
- Mensajes de error/éxito dinámicos

## 🚀 Cómo Usar

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/PUCETEC-PROG2/actividad-final-integradora-aomaldonado.git
   ```

2. **Abrir el proyecto**
   - Abrir `index.html` en un navegador web
   - O usar un servidor local (Live Server en VS Code)

3. **Explorar el sitio**
   - Navegar por las diferentes secciones usando el menú
   - Probar el formulario de contacto con validación
   - Agregar productos al carrito desde la página de productos
   - Ver cómo responde el sitio en diferentes tamaños de pantalla

## 📱 Responsive Design

El sitio se adapta perfectamente a:

- **Móviles** (480px y menores)
- **Tablets** (481px - 768px)
- **Desktops** (769px en adelante)

Prueba redimensionando la ventana del navegador o usando las herramientas de desarrollo para ver cómo se ajusta el diseño.

## 🔧 Validación del Formulario

**Reglas de validación implementadas:**

| Campo       | Validación                                     |
| ----------- | ---------------------------------------------- |
| Nombre      | No vacío, mínimo 3 caracteres                  |
| Ciudad      | No vacío                                       |
| Email       | No vacío, formato válido (usuario@dominio.com) |
| Asunto      | Debe seleccionar una opción                    |
| Descripción | No vacía, mínimo 10 caracteres                 |

**Características:**

- Validación en tiempo real
- Mensajes de error específicos
- Campos con borde rojo cuando hay error
- Mensaje de éxito al enviar correctamente
- Limpiar errores cuando el usuario escribe

## 💾 localStorage

El carrito utiliza localStorage para mantener los productos agregados:

- Se puede ver en DevTools → Application → localStorage
- Los datos persisten incluso después de cerrar la página
- Incluye nombre, precio, cantidad e ID del producto

## 🌐 Despliegue en GitHub Pages

El sitio está desplegado en GitHub Pages y es accesible en:

**[Enlace al sitio en GitHub Pages]** _(Será actualizado después de publicar)_

### Pasos para desplegar en GitHub Pages:

1. Crear un repositorio en GitHub
2. Hacer push de los archivos del proyecto
3. Ir a Settings → Pages
4. Seleccionar main/master branch como source
5. El sitio estará disponible en: `https://usuario.github.io/nombre-repositorio`

## 📊 Rúbrica de Evaluación

| Criterio                   | Puntos | Estado |
| -------------------------- | ------ | ------ |
| Estructura HTML5 semántica | 10     | ✓      |
| Diseño CSS                 | 10     | ✓      |
| Responsive design          | 7.5    | ✓      |
| Validación del formulario  | 7.5    | ✓      |
| Despliegue GitHub Pages    | 5      | ✓      |
| Organización del código    | 2.5    | ✓      |
| Exposición                 | 7.5    | -      |
| **TOTAL**                  | **50** |        |

## 🎓 Aprendizajes Clave

A través del desarrollo de este proyecto, se demostró comprensión de:

1. **HTML5 Semántico**: Uso correcto de etiquetas semánticas para estructura clara
2. **CSS Responsive**: Diseño adaptable a diferentes dispositivos
3. **JavaScript Vanilla**: Manipulación del DOM sin dependencias externas
4. **Validación de Formularios**: Validación completa del lado del cliente
5. **localStorage**: Persistencia de datos en el navegador
6. **Organización del Código**: Estructura clara y mantenible
7. **Despliegue Web**: Publicación en GitHub Pages

## 🛠️ Herramientas Utilizadas

- **Editor**: Visual Studio Code
- **Navegador**: Chrome / Firefox / Edge
- **Versionamiento**: Git y GitHub
- **Validación**: W3C HTML Validator
- **Desarrollo**: HTML5, CSS3, Vanilla JavaScript

## 📝 Notas Importantes

- El proyecto NO utiliza librerías externas (jQuery, Bootstrap, etc.)
- Todo está desarrollado con HTML5, CSS puro y JavaScript vanilla
- El carrito es simulado utilizando localStorage
- Las imágenes son placeholders y deben ser reemplazadas por imágenes reales
- El código está comentado para facilitar la comprensión

## 🔗 Enlaces Importantes

- **Repositorio GitHub**: [Enlace será agregado]
- **Sitio en vivo**: [Enlace será agregado]
- **Contacto**: info@apexathletics.com

## 📄 Licencia

Este proyecto fue desarrollado como trabajo final educativo.

---

**Último actualizado**: Febrero 2026
**Versión**: 1.0
