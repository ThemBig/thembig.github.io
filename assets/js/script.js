let about, contact, education, hobby, skill, contactItem;
about = `<div id="about">
            Hello friends, my name is Malik Fajar. <span id="age">${age}</span>, you can find me <a class="contact" style="color: #eb2f23;">here</a>
           </div>`;
contact = `<div id="contact">
                Find me in :
                <ul>
                  <li><a href="https://facebook.com/_thembig" target="_blank"><img src="./assets/img/facebook-logo.png" alt="facebook">&nbsp;&nbsp;<span class="hide">Facebook</span></a></li>
                  <li><a href="https://github.com/thembig" target="_blank"><img src="./assets/img/github.png" alt="github">&nbsp;&nbsp;<span class="hide">GitHub</span></a></li>
                  <li><a href="https://instagram.com/malilfajar17" target="_blank"><img src="./assets/img/insta.png" alt="instagram">&nbsp;&nbsp;<span class="hide">Instagram</span></a></li>
                  <li><a href="https://twitter.com/_thembig" target="_blank"><img src="./assets/img/twitter.png" alt="twitter">&nbsp;&nbsp;<span class="hide">Twitter</span></a></li>
                  <li><a href="tel:+6285878776936"><img src="./assets/img/whatsapp-logo.png" alt="whatsapp">&nbsp;&nbsp;<span class="hide">WhatsApp</span></a></li>
                </ul>
              </div>`;
education = `<div id="education">
                <div class="formal">
                  Formal Education
                  <ol>
                    <li>SD N 2 Temuwangi</li>
                    <li>SMP N 2 Pedan</li>
                    <li>SMK N 2 Klaten</li>
                  </ol>
                </div>
                <div class="nonFormal">
                  Non Formal Education
                  <ol>
                    <li><a href="https://www.freecodecamp.org/malikfajar" target="_blank">FreeCodeCamp</a></li>
                  </ol>
                </div>
              </div>`;
hobby = `<div id="hobby">
            <ul>
              <li>Reading</li>
            </ul>
          </div>`;
skill = `<div id="skill">
            My Skill is : 1. madang
                          2. Turu
          </div>`;
function getElement(element) {
  if (element[0] == '.') {
    var getEl = document.getElementsByClassName(element.slice(1, element.length))[0];
  } else if (element[0] == '#') {
    var getEl = document.getElementById(element.slice(1, element.length))[0];
  }else {
    var getEl = document.getElementsByTagName(element);
  }
  return getEl;
}

//NAV
const menu          = getElement('li');
const content       = getElement('.content');
const navAbout      = getElement('.about');
const navContact    = getElement('.contact');
const navEducation  = getElement('.education');
const navHobby      = getElement('.hobby');
const navSkill      = getElement('.skill');
const contactView   = function() {
  document.getElementsByClassName('contact')[1]
    .addEventListener('click', function() {
    content.innerHTML = contact;
    getElement('.active').classList.remove('active');
    navContact.classList.add('active');
    contactItem();
  })
}

contactView()
navAbout.addEventListener('click', function() {
  content.innerHTML = about;
  getElement('.active').classList.remove('active');
  navAbout.classList.add('active');
  contactView()
})

navContact.addEventListener('click', function() {
  content.innerHTML = contact;
  getElement('.active').classList.remove('active');
  navContact.classList.add('active');
  contactItem();
})

navEducation.addEventListener('click', function() {
  content.innerHTML = education;
  getElement('.active').classList.remove('active');
  navEducation.classList.add('active');
})

navHobby.addEventListener('click', function() {
  content.innerHTML = hobby;
  getElement('.active').classList.remove('active');
  navHobby.classList.add('active');
})

navSkill.addEventListener('click', function() {
  content.innerHTML = skill;
  getElement('.active').classList.remove('active');
  navSkill.classList.add('active');
})

contactItem = function() {
  // const list      = getElement('li');
  const list      = document.getElementById('contact').getElementsByTagName('li');
  const sosmed    = getElement('span');
  const facebook  = list[0];
  const github    = list[1];
  const instagram = list[2];
  const twitter   = list[3];
  const whatsApp  = list[4];

  facebook.addEventListener('mouseover', function() {
    sosmed[0].classList.add('show');
  })
  facebook.addEventListener('mouseout', function() {
    sosmed[0].classList.remove('show');
  })
  github.addEventListener('mouseover', function() {
    sosmed[1].classList.add('show');
  })
  github.addEventListener('mouseout', function() {
    sosmed[1].classList.remove('show');
  })
  instagram.addEventListener('mouseover', function() {
    sosmed[2].classList.add('show');
  })
  instagram.addEventListener('mouseout', function() {
    sosmed[2].classList.remove('show');
  })
  twitter.addEventListener('mouseover', function() {
    sosmed[3].classList.add('show');
  })
  twitter.addEventListener('mouseout', function() {
    sosmed[3].classList.remove('show');
  })
  whatsApp.addEventListener('mouseover', function() {
    sosmed[4].classList.add('show');
  })
  whatsApp.addEventListener('mouseout', function() {
    sosmed[4].classList.remove('show');
  })

}
