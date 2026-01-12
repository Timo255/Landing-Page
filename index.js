const menuBtn = document.getElementById('menuBar');
const closeBtn = document.getElementById('closeBtn');
const navLink = document.querySelectorAll('.navItem');
const header = document.querySelector("header");
const openPopUp = document.querySelector("#topOffer-btn");
const closePopUp = document.querySelector(".popup-close-btn");


window.addEventListener("scroll", function(){
    // let header = document.querySelector("header");
    

    header.classList.toggle("scrolling-active", window.scrollY > 0);
})

menuBtn.addEventListener('click', (e)=>{
    const navBox = document.querySelector('.navItems');
    navBox.classList.toggle('show');
})

closeBtn.addEventListener('click', (e)=>{
    const navBox = document.querySelector('.navItems');
    navBox.classList.remove('show');
})

navLink.forEach(nLink =>{
    if(nLink.href === window.location.href){
        nLink.classList.add('active');
    }
})

openPopUp.addEventListener("click", ()=>{
    var popup = document.querySelector('.popup');
    var btnOpen = document.querySelector('#topOffer-btn')
    btnOpen.style.zIndex = '0'
    popup.classList.add('active')
    popup.style.zIndex = '100'
})

closePopUp.addEventListener("click", ()=>{
    var popup = document.querySelector('.popup');
    var btnOpen = document.querySelector('#topOffer-btn')
    btnOpen.style.zIndex = '0'
    popup.classList.remove('active')
    popup.style.zIndex = '0'
})
