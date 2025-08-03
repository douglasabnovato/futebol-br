// Classe reutilizável para gerenciar qualquer carrossel de imagens
class Slideshow {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll(".slideshow-item, .modal-slideshow-item");
    this.dotsContainer = container.nextElementSibling;
    this.dots = this.dotsContainer ? this.dotsContainer.querySelectorAll(".slideshow-dot") : null;
    this.prevBtn = container.querySelector(".prev, .modal-prev");
    this.nextBtn = container.querySelector(".next, .modal-next");

    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
    this.initEvents();
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach((slide) => (slide.style.display = "none"));
    if (this.dots) {
      this.dots.forEach((dot) => dot.classList.remove("active"));
    }
    this.slides[this.slideIndex - 1].style.display = "block";
    if (this.dots) {
      this.dots[this.slideIndex - 1].classList.add("active");
    }
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  initEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.plusSlides(-1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.plusSlides(1));
    }
    if (this.dots) {
      this.dots.forEach((dot, index) => {
        dot.addEventListener("click", () => this.currentSlide(index + 1));
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa todos os carrosséis existentes na página
  const slideshows = document.querySelectorAll(".slideshow-container");
  slideshows.forEach((container) => {
    new Slideshow(container);
  });

  // Lógica do Modal
  const modal = document.getElementById("pelada-modal");
  const modalCloseBtn = modal.querySelector(".modal-close");
  const peladaCards = document.querySelectorAll(".pelada-card");
  const modalTitle = document.getElementById("modal-title");
  const modalRelato = document.getElementById("modal-relato");
  const modalSlideshowContainer = modal.querySelector(".modal-slideshow-container");

  // Função para abrir o modal
  function openModal(cardData) {
    modalTitle.textContent = cardData.title;
    modalRelato.textContent = cardData.relato;

    // Constrói e inicializa o carrossel do modal
    const images = JSON.parse(cardData.images);
    if (images && images.length > 0) {
      modalSlideshowContainer.innerHTML = createModalSlideshow(images);
      new Slideshow(modalSlideshowContainer); // Cria uma nova instância do carrossel
    } else {
      modalSlideshowContainer.innerHTML = ''; // Limpa o container se não houver imagens
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Impede o scroll da página
  }

  // Função para fechar o modal
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  // Event Listeners para abrir o modal
  peladaCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardData = {
        title: card.getAttribute("data-title"),
        relato: card.getAttribute("data-relato"),
        images: card.getAttribute("data-images"),
      };
      openModal(cardData);
    });
  });

  // Event Listeners para fechar o modal
  modalCloseBtn.addEventListener("click", closeModal);
  modal.querySelector(".modal-overlay").addEventListener("click", closeModal);
});

// Função auxiliar para criar o HTML do carrossel no modal
function createModalSlideshow(images) {
  let slidesHtml = '';
  let dotsHtml = '';
  images.forEach((image, index) => {
    slidesHtml += `<div class="modal-slideshow-item fade"><img src="${image}" alt="Imagem do evento ${index + 1}"></div>`;
    dotsHtml += `<span class="slideshow-dot"></span>`;
  });

  return `
    ${slidesHtml}
    <div class="modal-slideshow-nav">
      <a class="modal-prev">❮</a>
      <a class="modal-next">❯</a>
    </div>
    <div class="slideshow-dots-container">
      ${dotsHtml}
    </div>
  `;
}