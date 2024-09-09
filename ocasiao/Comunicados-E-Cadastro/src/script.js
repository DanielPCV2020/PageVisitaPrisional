let currentIndex = 0;
let imageElements = [];
const container = document.querySelector(".container1");
let autoSlideInterval;

// Função para atualizar a imagem exibida
function updateImage() {
    imageElements.forEach((img, index) => {
        img.classList.remove('active');
    });
    imageElements[currentIndex].classList.add('active');
}

// Função para iniciar o slideshow automático
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageElements.length;
        updateImage();
    }, 15000); // Trocar a cada 15 segundos
}

// Função para parar o slideshow automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Função para navegar para a imagem anterior
function prevImage() {
    stopAutoSlide(); // Parar temporariamente o auto slide
    currentIndex = (currentIndex - 1 + imageElements.length) % imageElements.length;
    updateImage();
    startAutoSlide(); // Reiniciar o auto slide
}

// Função para navegar para a próxima imagem
function nextImage() {
    stopAutoSlide(); // Parar temporariamente o auto slide
    currentIndex = (currentIndex + 1) % imageElements.length;
    updateImage();
    startAutoSlide(); // Reiniciar o auto slide
}

// Buscar imagens da API do Instagram
const campos = "media_type,media_url";
const limite = 5;
const token = "SUdRV1JQUkZaQUhSa3hEVDJ4b1NEZGZURVJYYzNOWVFVSldlRTVYWWpkcUxYY3lUWEpCWkFtSnNZeko1VVRSWFlYTkJkMFZzVFV0TlpBQzB3ZEVWeUxYTm9aQUVwUVVGSlhVV2xKY21KeFZrMWtWemRaQWJGZEZNRkZUTFZORFYwWkFETkdaQUVZVlpBdlVIRlBWa2cxV1MxUU9FcHVZbDk2VFZScFNYTVpE";
const decodedToken = atob(token);
const baseURL = `https://graph.instagram.com/me/media?fields=${campos}&access_token=${decodedToken}&limit=${limite}`;

fetch(baseURL)
    .then(response => response.json())
    .then((data) => {
        data.data.forEach((imgData) => {
            const mediaType = imgData.media_type;
            const mediaURL = imgData.media_url;
            if (mediaType === "IMAGE" || mediaType === "CAROUSEL_ALBUM") {
                const img = document.createElement("img");
                img.src = mediaURL;
                img.classList.add("container-img");
                container.appendChild(img);
                imageElements.push(img);
            }
        });
        
        // Iniciar o slideshow se houver imagens
        if (imageElements.length > 0) {
            updateImage(); // Exibir a primeira imagem
            startAutoSlide(); // Começar o auto slide
        }
    })
    .catch((error) => console.log('Erro ao carregar imagens da API do Instagram:', error));

// Adicionar eventos de clique para os botões de navegação
document.querySelector(".left-arrow").addEventListener("click", prevImage);
document.querySelector(".right-arrow").addEventListener("click", nextImage);
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleSidePanel');
    const sidePanel = document.getElementById('sidePanel');
    const mainContent = document.querySelector('.main-content');

    toggleBtn.addEventListener('click', function() {
        sidePanel.classList.toggle('open');
        toggleBtn.classList.toggle('open');
        mainContent.style.marginRight = sidePanel.classList.contains('open') ? '300px' : '0';
    });
});
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();