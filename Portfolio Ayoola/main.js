let menu = document.querySelector('#menu-bars')
let header = document.querySelector('header')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}       

var typed = new Typed('.typing-text', {
strings : ['front end developer', 'web designer', 'computer technician', 'human capital developer', 'critical thinker', 'web developer'],
loop: true,
typedSpeed: 50
});

VanillTilt.init(querySelectorAll('.tilt'),{
    max : 25
});
