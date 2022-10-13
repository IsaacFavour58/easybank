// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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