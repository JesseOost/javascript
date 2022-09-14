let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(change){
    showSlides(slideIndex += change);
}

function currentSlide(change){
    showSlides(slideIndex = change)
}

function showSlides(index){
    let i;
    let slides = document.getElementsByClassName("slides");

    if(index > slides.length){
        slideIndex = 1;
    }

    if(index < 1){
        slideIndex = slideIndex.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[index].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    
}