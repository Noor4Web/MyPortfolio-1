/*NAVIGATION BAR FUNCTION*/

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

//ADD SHADOW TO NAVIGATION BAR WHILE CROLING //

window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}


/*-------PROJECT BOX---------*/
sr.reveal('.project-box',{interval: 200})

/*-----------------HEADING-------*/
sr.reveal('.top-header',{})

/*ABOUT INFO & CONTACT INFO----------*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/*----ABOUT SKILLS & FORM BOX----*/

const srRight = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.skills-box',{delay: 100})
srLeft.reveal('.form-control',{delay: 100})

/*----CHANGE ACTIVE LINKS--*/

const sections = document.querySelectorAll('section[id]')

function scrollActive (){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


//  PHOTO GALLERY


