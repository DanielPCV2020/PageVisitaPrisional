$(document.body).on('click', 'a[href*="#"]', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 900);
  });
  
  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    var height = $(window).height();
    if (scrolled < height) {
      $('.full-image').css({
        'top': -scrolled * .5
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const h3Element = document.getElementById("portaria");
    const link = "https://drive.google.com/file/d/1Au9vt3Hy8dM5rhYGuHY14EBwLc557xzs/view?usp=drivesdk";
    const linkText = "4366/2023-SEJUS";
    
    h3Element.innerHTML = `Guia de itens permitido pela portaria <a href="${link}" target="_blank">${linkText}</a>`;
  });