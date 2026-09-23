let carouselSlide = 0;
displaySlide();

function advanceSlide(n)
{
    carouselSlide += n;
    displaySlide();
}

function setSlide(n)
{
    carouselSlide = n;
    displaySlide();
}

function displaySlide()
{
    let slides = document.getElementsByClassName("carousel-slide");
    if (carouselSlide >= slides.length) { carouselSlide = 0; }
    if (carouselSlide < 0) { carouselSlide = slides.length - 1; }
    
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    let dots = document.getElementsByClassName("carousel-dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[carouselSlide].style.display = "block";
    dots[carouselSlide].className += " active";
}