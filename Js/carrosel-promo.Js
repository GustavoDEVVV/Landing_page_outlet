const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let index = 0;

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(changeImage, 2000); // Troca a cada 3 segundos