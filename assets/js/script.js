let about, contact, education, hobby, contactItem;
  about = `<div id="about">
            Hello, my name Malik Fajar
           </div>`;
  contact = `<div id="contact">
                Call me in :
                <ul>
                  <li title="facebook"><a href="https://facebook.com/_thembig" target="_blank"><img src="./assets/img/facebook-logo.png" alt="facebook">&nbsp;&nbsp;<span class="hide">Facebook</span></a></li>
                  <li title="GitHub"><a href="https://github.com/thembig" target="_blank"><img src="./assets/img/github.png" alt="github">&nbsp;&nbsp;<span class="hide">GitHub</span></a></li>
                  <li title="Instagram"><a href="https://instagram.com/_thembig" target="_blank"><img src="./assets/img/insta.png" alt="instagram">&nbsp;&nbsp;<span class="hide">Instagram</span></a></li>
                  <li title="Twitter"><a href="https://twitter.com/_thembig" target="_blank"><img src="./assets/img/twitter.png" alt="twitter">&nbsp;&nbsp;<span class="hide">Twitter</span></a></li>
                  <li title="WhatsApp"><a href="tel:+6285878776936"><img src="./assets/img/whatsapp-logo.png" alt="whatsapp">&nbsp;&nbsp;<span class="hide">WhatsApp</span></a></li>
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

  contactItem = function() { //contact items
    $('li[title="facebook"]').mouseenter(function() {
      $('li[title="facebook"] span').removeClass('hide');
      $('li[title="facebook"] span').addClass('show');
    });

    $('li[title="facebook"]').mouseleave(function() {
      $('li[title="facebook"] span').removeClass('show');
      $('li[title="facebook"] span').addClass('hide');
    });

    $('li[title="GitHub"]').mouseenter(function() {
      $('li[title="GitHub"] span').removeClass('hide');
      $('li[title="GitHub"] span').addClass('show');
    })

    $('li[title="GitHub"]').mouseleave(function() {
      $('li[title="GitHub"] span').removeClass('show');
      $('li[title="GitHub"] span').addClass('hide');
    })

    $('li[title="Instagram"]').mouseenter(function() {
      $('li[title="Instagram"] span').removeClass('hide');
      $('li[title="Instagram"] span').addClass('show');
    })

    $('li[title="Instagram"]').mouseleave(function() {
      $('li[title="Instagram"] span').removeClass('show');
      $('li[title="Instagram"] span').addClass('hide');
    })

    $('li[title="Twitter"]').mouseenter(function() {
      $('li[title="Twitter"] span').removeClass('hide');
      $('li[title="Twitter"] span').addClass('show');
    })

    $('li[title="Twitter"]').mouseleave(function() {
      $('li[title="Twitter"] span').removeClass('show');
      $('li[title="Twitter"] span').addClass('hide');
    })

    $('li[title="WhatsApp"]').mouseenter(function() {
      $('li[title="WhatsApp"] span').removeClass('hide');
      $('li[title="WhatsApp"] span').addClass('show');
    })

    $('li[title="WhatsApp"]').mouseleave(function() {
      $('li[title="WhatsApp"] span').removeClass('show');
      $('li[title="WhatsApp"] span').addClass('hide');
    })
  }

  fade = (content) => {
    $('.content').fadeOut(function() {
      $('.content').html(content);
      $('.content').fadeIn();
    });
  };

$(function() {


  $('.about').click(function() {
    $('.active').removeClass('active');
    $('.about').addClass('active');
    fade(about);
  })

  $('.contact').click(function() {
    $('.active').removeClass('active');
    $('.contact').addClass('active');
    $('.content').fadeOut(function() {
      $('.content').html(contact);
      $('.content').fadeIn(function() {
        contactItem();
      });
    });
  });

  $('.education').click(function() {
    $('.active').removeClass('active');
    $('.education').addClass('active');
    fade(education);
  });

  $('.hobby').click(function() {
    $('.active').removeClass('active');
    $('.hobby').addClass('active');
    fade(hobby);
  });
})
