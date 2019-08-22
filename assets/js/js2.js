const content = document.getElementsByClassName('content')[0];
const about = document.getElementsByClassName('about')[0];

about.addEventListener('click', function() {
  content.scrollTop = 0;
})
