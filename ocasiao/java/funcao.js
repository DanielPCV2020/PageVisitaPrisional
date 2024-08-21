
/*function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 
  function abrirCard (){
  
      let dots = document.getElementById("dots");
      let moreText = document.getElementById("more");
      let btnText = document.getElementsByClassName("btn-read-more");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Detalhes";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Menos";
        moreText.style.display = "inline";
      }  
 }
 */
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
  var navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
  } else {
      navLinks.classList.add("show");
  }
}