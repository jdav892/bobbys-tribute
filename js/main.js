const mainImg = document.getElementById("main-img");
const passage = document.getElementById("passage")

document.addEventListener('click', () => {
    mainImg.style.opacity = '1';
})

document.addEventListener("scroll", () => {
    const rect = passage.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if(rect.top <= windowHeight * 0.8){
        passage.style.opacity = "1";
        passage.style.transform = "translateY(0)"
        passage.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
    }

})