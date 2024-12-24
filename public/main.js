//nav responsive

const navClose = document.getElementById("nav-close");
const navOpen = document.getElementById("nav-open");
    navClose.addEventListener(("click"), () => {
    document.getElementById("sidenav").style.right ="-240px";

})
navOpen.addEventListener(("click"), () => {
    document.getElementById("sidenav").style.right ="0";

})




//Start About Me

let section = document.getElementById("about-me");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function (){
    if(window.scrollY >= section.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};



//Start My Projects 
let tablinks = document.getElementsByClassName("tab-linkes");
let tabcontents  = document.getElementsByClassName("tab-contents ");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

//testimonials



const slides = document.querySelectorAll('.test-card');
const bullets = document.querySelectorAll('.bullet');
let currentIndex = 0;
let interval;


// to update slides (slide & bullets)
        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                slide.classList.remove('left');
                slide.classList.remove('right');

                if (index === currentIndex) {
                    slide.classList.add('active');
                }else if (index === (currentIndex - 1 + slides.length)% slides.length) {
                    slide.classList.add('left'); //position
                }else{
                    slide.classList.add('right');//position
                }
            });
            bullets.forEach((bullet, index) => {
                bullet.classList.remove('active');
                if (index === currentIndex) {
                    bullet.classList.add('active');
                }
            });
        }

        function autoSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlides();
        }

        function startSlider(){
            interval = setInterval(autoSlide, 3000); //slider time
        }
        function stopSlider(){
            clearInterval(interval); 
        }



        slides.forEach((slide,index) => {
            slide.addEventListener("click", () =>{
                currentIndex = index;
                stopSlider();
                updateSlides();
            })

            slide.addEventListener("mouseover",stopSlider);
            slide.addEventListener("mouseout",startSlider);
            
        })


        bullets.forEach((bullet,index) => {
            bullet.addEventListener("click", () =>{
                currentIndex = index;
                stopSlider();
                updateSlides();
            })

            bullet.addEventListener("mouseover",stopSlider);
            bullet.addEventListener("mouseout",startSlider);
            
        })

        startSlider();

        updateSlides();









