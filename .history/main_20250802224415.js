document.addEventListener("DOMContentLoaded", () => {
  // Encontra todos os slideshows na página
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach((container) => {
    let slideIndex = 1;

    const slides = container.querySelectorAll(".slideshow-item");
    const dotsContainer = container.nextElementSibling;
    const dots = dotsContainer.querySelectorAll(".slideshow-dot");
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((slide) => {
        slide.style.display = "none";
      });

      dots.forEach((dot) => {
        dot.classList.remove("active");
      });

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    }

    // Event listeners para os botões de navegação
    prevBtn.addEventListener("click", () => {
      showSlides((slideIndex -= 1));
    });

    nextBtn.addEventListener("click", () => {
      showSlides((slideIndex += 1));
    });

    // Event listeners para os dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlides((slideIndex = index + 1));
      });
    });

    // Transição automática a cada 5 segundos
    setInterval(() => {
      showSlides((slideIndex += 1));
    }, 5000);

    // Exibe o primeiro slide ao carregar a página
    showSlides(slideIndex);
  });
});