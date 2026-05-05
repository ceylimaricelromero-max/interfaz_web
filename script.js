// script.js
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-alerta');

    boton.addEventListener('click', () => {
        alert('¡Excelente elección! Redirigiendo a los mejores tours de El Salvador...');
        
        // Efecto extra: Scroll suave hasta la galería
        document.querySelector('.gallery-container').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});