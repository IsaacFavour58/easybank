const openmenu = document.querySelector('.ri-menu-line')
const closemenu = document.querySelector('.ri-close-fill')
const menu = document.querySelector('.navlinks')

openmenu.addEventListener("click", function(){
    openmenu.style.display= "none"
    closemenu.style.display="block"
    menu.style.top="35%"
})


closemenu.addEventListener("click", function(){
    openmenu.style.display= " block"
    closemenu.style.display="none"
    menu.style.top="-35%"
})