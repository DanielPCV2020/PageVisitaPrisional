
 function abrirCard(btn) {
  var card = btn.closest('.Card-1'); // Encontrar o card específico
  var dots = card.querySelector(".dots");
  var moreText = card.querySelector(".more");
  var btnText = card.querySelector(".btn-read-more");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Detalhes";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.textContent = "Ver menos";
      moreText.style.display = "inline";
  }
}
function toggleMenu() {
  var navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}  