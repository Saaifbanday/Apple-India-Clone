const navLinks = document.querySelectorAll('.nav a'); // Get all .nav a elements
const megaMenu = document.querySelector('.mega-menu');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        megaMenu.classList.add('visible');
    });

    link.addEventListener('mouseout', () => {
        megaMenu.classList.remove('visible');
        megaMenu.style.transition = "0.70s ease"
    });
});


const hamburgerIcon  = document.querySelector('.own')
const hamburgerMenu  = document.querySelector('.hamburger-menu')

hamburgerIcon.addEventListener('click',()=>{

    if(hamburgerMenu.style.display == "none"){ // if not visible make visible
        hamburgerMenu.style.display =  "block"
        hamburgerMenu.classList.add('hamburger-menu')
    }
    else{
        hamburgerMenu.style.display ="none"  // if visible make invisible
    }

})



// Carousel Starts From here
let flag = 0;

function controller(x){
    flag = flag +x;
    slideshow(flag);
}

function slideshow(num){
   let slides = document.getElementsByClassName
   ('slide');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num<0){
        flag =slides.length-1;
        num =slides.length-1;
    }

    for (let y of slides){
        y.style.display ="none";
    }
    slides[num].style.display = "block";
}
slideshow(flag);

