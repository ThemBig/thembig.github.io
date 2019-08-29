const content = document.getElementsByClassName('content')[0];
const about = document.getElementsByClassName('about')[0];
about.addEventListener('click', function() {
  content.scrollTop = 0;
})

const myBorn = 2002;
let myAge = () => {
  const dt = new Date();
  return (dt.getFullYear() - 2002);
}
const age = document.getElementById('age');
age.innerHTML = myAge();
