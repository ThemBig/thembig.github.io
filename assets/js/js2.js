const content = document.getElementsByClassName('content')[0];
const about = document.getElementsByClassName('about')[0];
let navbar = document.getElementsByClassName('navbar')[0];
about.addEventListener('click', function() {
  content.scrollTop = 0;
})

// if (navbar.scrollTop == 0) {
//   navbar.style.position = "fixed";
// }

window.onscroll = function() {myFunction()};
window.onresize = function() {navbar.offset().top;
  console.log('resize', sticky);

}

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
