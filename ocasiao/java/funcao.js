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