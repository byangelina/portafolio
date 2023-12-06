// Función para el desplazamiento suave
function scrollToElement(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajusta el valor "50" según sea necesario para el espacio superior del encabezado
            behavior: 'smooth'
        });
    }
}

// Agregar eventos de clic a los enlaces de navegación
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToElement(targetId);
    });
});

function mostrarImagen(src, caption) {
var modal = document.getElementById('imagenModal');
var modalImg = document.getElementById('imagenModalSrc');
var captionText = document.getElementById('imagenModalCaption');

modal.style.display = 'block';
modalImg.src = src;
captionText.innerHTML = caption;
}

function cerrarImagen() {
var modal = document.getElementById('imagenModal');
modal.style.display = 'none';
}



// Obtener todas las imágenes miniatura
const miniaturas = document.querySelectorAll('.publicacion img');

// Crear un div para la imagen ampliada
const imagenAmpliada = document.createElement('div');
imagenAmpliada.classList.add('imagen-ampliada');
document.body.appendChild(imagenAmpliada);

// Agregar evento de clic para ocultar la imagen ampliada
imagenAmpliada.addEventListener('click', () => {
imagenAmpliada.style.display = 'none';
});

// Agregar eventos de ratón para mostrar la imagen ampliada
miniaturas.forEach((miniatura) => {
miniatura.addEventListener('mouseenter', () => {
    const src = miniatura.getAttribute('src');
    imagenAmpliada.innerHTML = `<img src="${src}" alt="Imagen Ampliada">`;
    imagenAmpliada.style.display = 'block';
});
});

// Añadir evento mousemove para seguir el cursor
document.addEventListener('mousemove', (e) => {
if (imagenAmpliada.style.display === 'block') {
    const x = e.clientX;
    const y = e.clientY;
    imagenAmpliada.style.left = `${x}px`;
    imagenAmpliada.style.top = `${y}px`;
}
});


