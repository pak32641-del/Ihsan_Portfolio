// ===============================
// DARK / LIGHT MODE TOGGLE
// ===============================

const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }
    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ===============================
// TYPING EFFECT
// ===============================

const text = [
    "Front-End Web Developer",
    "Web Designer",
    "Computer Science Graduate"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".hero-text h2");


function typeEffect(){

    currentText = text[index];

    if(!isDeleting){

        typingElement.textContent =
        currentText.substring(0,charIndex++);

        if(charIndex > currentText.length){

            isDeleting = true;
            setTimeout(typeEffect,1200);
            return;

        }

    }
    else{

        typingElement.textContent =
        currentText.substring(0,charIndex--);


        if(charIndex === 0){

            isDeleting = false;
            index++;

            if(index >= text.length){

                index = 0;

            }

        }

    }


    setTimeout(typeEffect,100);

}


typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position =
        section.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }


    });


});


// Initial animation setup

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="0.8s ease";

});


// ===============================
// MOBILE MENU (BASIC)
// ===============================

const navLinks = document.querySelector(".nav-links");


document.querySelector("nav").addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});









// ===============================
// PROJECT IMAGE SLIDER
// ===============================

const projectImages = [

    [
        "images/project1/1.png",
        "images/project1/2.png",
        "images/project1/3.png",
        "images/project1/4.png",
        "images/project1/5.png"
    ],

    [
        "images/project2/1.png",
        "images/project2/2.png",
        "images/project2/3.png",
        "images/project2/4.png",
        "images/project2/5.png"
    ]

];

document.querySelectorAll(".project-slider").forEach((slider, projectIndex) => {

    let current = 0;

    const image = slider.querySelector(".slider-image");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    image.src = projectImages[projectIndex][0];

    next.onclick = () => {

        current = (current + 1) % projectImages[projectIndex].length;
        image.src = projectImages[projectIndex][current];

    };

    prev.onclick = () => {

        current = (current - 1 + projectImages[projectIndex].length) % projectImages[projectIndex].length;
        image.src = projectImages[projectIndex][current];

    };

    setInterval(() => {

        current = (current + 1) % projectImages[projectIndex].length;
        image.src = projectImages[projectIndex][current];

    }, 3000);

    image.onclick = () => {

        openLightbox(projectIndex, current);

    };

});



/* When click on screenshot then open the image */

// ===== Lightbox =====

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");
const nextBtn = document.querySelector(".lightbox-next");
const prevBtn = document.querySelector(".lightbox-prev");

let currentProject = 0;
let currentImage = 0;

function openLightbox(project, image){

    currentProject = project;
    currentImage = image;

    lightbox.style.display = "flex";
    lightboxImg.src = projectImages[currentProject][currentImage];

}

nextBtn.onclick = () => {

    currentImage = (currentImage + 1) % projectImages[currentProject].length;

    lightboxImg.src = projectImages[currentProject][currentImage];

};

prevBtn.onclick = () => {

    currentImage = (currentImage - 1 + projectImages[currentProject].length) %
                   projectImages[currentProject].length;

    lightboxImg.src = projectImages[currentProject][currentImage];

};

closeBtn.onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowRight") nextBtn.click();

        if(e.key==="ArrowLeft") prevBtn.click();

        if(e.key==="Escape") lightbox.style.display="none";

    }

});

