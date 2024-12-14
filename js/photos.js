let slideIndex = 1;
let slideTimer;

clickShowSlides(slideIndex);

function plusSlides(n){
    clickShowSlides(slideIndex += n);
}

function currentSlide(n){
    clickShowSlides(slideIndex = n);
}

function clickShowSlides(n){
    clearTimeout(slideTimer);
    let i;
    let slides = document.getElementsByClassName("MySlides");

    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 9000);
}


function showSlides(){
    let i;
    let slides = document.getElementsByClassName("MySlides");

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 9000);
}
