let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navBar');
let section=document.querySelector('section');
let navLinks=document.querySelector('header nav a');
let header = document.querySelector('.header')


window.onscroll=()=>{
 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');

        if(top >= offset && top > offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ' ]').classList.add('active')
            });
        };
    });

};

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


