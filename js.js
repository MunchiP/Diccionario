var gif = document.getElementById('gif')

gif.addEventListener('mouseenter',function () {
    gif.src = 'Imagenes/giphy.gif'    
})

gif.addEventListener('mouseleave',function () {
    gif.src = 'Imagenes/gif_imagen.png'
})



// var gif = document.getElementById('gif');

// // Agregar un controlador de eventos para cuando el mouse entra en el área del GIF
// gif.addEventListener('mouseenter', function() {
//   // Cambiar la ruta de la imagen para iniciar la animación
//   gif.src = 'tu_gif_animado.gif';
// });

// // Agregar un controlador de eventos para cuando el mouse sale del área del GIF
// gif.addEventListener('mouseleave', function() {
//   // Restaurar la ruta de la imagen al GIF estático
//   gif.src = 'tu_gif.gif';
// });