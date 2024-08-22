function abrirCard(btn) {
  var card = btn.closest('.Card-1'); // Encontrar o card específico
  var content = card.querySelector("p"); // Pega o parágrafo do card
  var parent = content.parentElement; // Pega o elemento .Div-p-Content
  var btnText = card.querySelector(".btn-read-more"); // Botão

  parent.classList.toggle('open');

  if (parent.classList.contains('open')) {
      btnText.textContent = "Ver menos"; // Altera o texto do botão para "Ver menos"
  } else {
      btnText.textContent = "Detalhes"; // Volta o texto do botão para "Detalhes"
  }
}

function toggleMenu() {
  var navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}  
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
      confirmButtonColor: '#d33',
      background: '#f7f7f7',
      color: '#333',
      padding: '2rem',
  });
};
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

