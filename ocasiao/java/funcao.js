document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.Card-1');

  cards.forEach(card => {
    const content = card.querySelector('p');
    const btn = card.querySelector('.btn-read-more');

    // Ajuste o limite de linhas visíveis
    const maxLines = 2;
    const lineHeight = parseFloat(window.getComputedStyle(content).lineHeight);
    const maxHeight = maxLines * lineHeight;

    // Verifica se o conteúdo excede a altura visível
    if (content.scrollHeight > maxHeight) {
      content.style.maxHeight = `${maxHeight}px`;
      btn.style.display = 'inline-block'; // Mostra o botão
    } else {
      btn.style.display = 'none'; // Oculta o botão se o texto não exceder
      content.style.maxHeight = 'none'; // Remove o limite de altura
    }
  });
});

function abrirCard(btn) {
  const card = btn.closest('.Card-1');
  const content = card.querySelector('p');
  const parent = content.parentElement;

  parent.classList.toggle('open');

  if (parent.classList.contains('open')) {
    btn.textContent = "Ver menos";
    content.style.maxHeight = `${content.scrollHeight}px`; // Ajusta a altura máxima para mostrar todo o texto
  } else {
    btn.textContent = "Detalhes";
    const maxLines = 2;
    const lineHeight = parseFloat(window.getComputedStyle(content).lineHeight);
    const maxHeight = maxLines * lineHeight;
    content.style.maxHeight = `${maxHeight}px`; // Reseta a altura máxima para ocultar o texto extra
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

