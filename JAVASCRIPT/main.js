const navlinks = document.querySelector('.navlinks')
const navlinksEl = document.querySelectorAll('.navlinks a')
const navOpen = document.querySelector('.open')
const navClose = document.querySelector('.close')

function openNav(){
  navlinks.style.top = "40%";
  navOpen.style.display = "none"
  navClose.style.display = "block"
}


function closeNav(){
  navlinks.style.top = "-40%";
  navOpen.style.display = "block"
  navClose.style.display = "none"
}

navlinksEl.forEach(navLink => {
  navLink.addEventListener('click', function(){
    closeNav()
  })
})