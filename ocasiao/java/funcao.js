document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.Card-1');
  cards.forEach(card => {
    const content = card.querySelector('.text-container p');
    const btn = card.querySelector('.btn-read-more');
    const parent = card.querySelector('.Div-p-Content');
    const textContainer = card.querySelector('.text-container');
    
    const maxLines = 2;
    const lineHeight = parseFloat(window.getComputedStyle(content).lineHeight);
    const maxHeight = maxLines * lineHeight;
    
    if (content.scrollHeight > maxHeight) {
      textContainer.style.maxHeight = `${maxHeight}px`;
      btn.style.display = 'inline-block';
      parent.classList.add('truncated');
    } else {
      btn.style.display = 'none';
      textContainer.style.maxHeight = 'none';
      parent.classList.remove('truncated');
    }
  });
});
function abrirCard(btn) {
  const card = btn.closest('.Card-1');
  const content = card.querySelector('.text-container p');
  const parent = card.querySelector('.Div-p-Content');
  const textContainer = card.querySelector('.text-container');
  
  parent.classList.toggle('open');
  if (parent.classList.contains('open')) {
    btn.textContent = "Ver menos";
    textContainer.style.maxHeight = `${content.scrollHeight}px`;
  } else {
    btn.textContent = "Detalhes";
    const maxLines = 2;
    const lineHeight = parseFloat(window.getComputedStyle(content).lineHeight);
    const maxHeight = maxLines * lineHeight;
    textContainer.style.maxHeight = `${maxHeight}px`;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // Get the button
  var mybutton = document.getElementById("btnTop");

  // Hide the button initially
  mybutton.style.display = "none";

  // Add scroll event listener
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 400) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  });

  // Add click event listener to the button
  mybutton.addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('btn-mobile');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('overlay');
  const links = navLinks.querySelectorAll('a');

  const toggleMenu = () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  };

  const closeMenu = () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuButton.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
function animateArrow() {
  const arrow = document.querySelector('.arrow');
  arrow.classList.add('animate');

  setTimeout(() => {
      arrow.classList.remove('animate');
  }, 300); // Duração da animação
}
window.onload = function() {
  Swal.fire({
      title: 'Atenção!',
      text: 'Todos os itens estão sujeitos a uma revista pela autoridade competente.',
      icon: 'info',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#2E8B57',
      background: '#f7f7f7',
      color: '#333',
      padding: '2rem',
  });
};
 document.addEventListener('DOMContentLoaded', function() {
      const sections = document.querySelectorAll('.observacao-section');

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => {
        observer.observe(section);
      });
    });
