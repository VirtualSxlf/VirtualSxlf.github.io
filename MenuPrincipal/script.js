document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.center-button, .below-button'); // Coloca las animaciones en los botones enter y Below
    var images = [
        "../img/Mordecai.png",
        "../img/Riigby.png",
        "../img/Laschicas.png"
    ];
    var currentImageIndex = 0;
    var body = document.querySelector('body');

    function changeBackgroundImage() {
        var tempImage = new Image();
        tempImage.src = images[currentImageIndex];

        tempImage.onload = function() {
            body.style.opacity = 0; // Establecer la opacidad en 0

            setTimeout(function() {
                body.style.backgroundImage = "url('" + tempImage.src + "')";
                body.style.opacity = 1; // Establecer la opacidad en 1 después de que la nueva imagen se haya cargado
            }, 500); // Establecer un retraso de 500 ms antes de cambiar la imagen y establecer la opacidad en 1

            currentImageIndex = (currentImageIndex + 1) % images.length;
        };
    }

    // Establecer la imagen de fondo inicial
    changeBackgroundImage();

    setInterval(changeBackgroundImage, 10000); // Cambiar la imagen cada 10 segundos
});
