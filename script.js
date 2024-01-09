document.addEventListener('DOMContentLoaded', function () {
    const slideshow = document.getElementById('slideshow');
    let currentIndex = 0;

    function showSlide(index) {
        const slides = slideshow.getElementsByTagName('img');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideshow.childElementCount;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 1000); 
});
