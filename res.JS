
hamburger = document.querySelector('.burger')
navbar = document.querySelector('.nav-bar')
leftnav = document.querySelector('.left-nav')
rightnav = document.querySelector('.right-nav')

hamburger.addEventListener('click',function () {
    navbar.classList.toggle('nav-bar-resp')
    leftnav.classList.toggle('left-nav-resp');
    rightnav.classList.toggle('right-nav-resp');
})

