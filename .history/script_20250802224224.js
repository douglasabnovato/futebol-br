

      let slideIndex = 1;

      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }

      // Opcional: Adicionar transição automática
      setInterval(() => plusSlides(1), 5000); // Troca de slide a cada 5 segundos

      

      let slideIndex2 = 1;

      showSlides2(slideIndex2);

      function plusSlides2(n) {
        showSlides2((slideIndex2 += n));
      }

      function currentSlide2(n) {
        showSlides2((slideIndex2 = n));
      }

      function showSlides2(n) {
        let i;
        let slides = document.getElementsByClassName("slide2");
        let dots = document.getElementsByClassName("dot2");

        if (n > slides.length) {
          slideIndex2 = 1;
        }
        if (n < 1) {
          slideIndex2 = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex2 - 1].style.display = "block";
        dots[slideIndex2 - 1].className += " active";
      }

      // Opcional: Adicionar transição automática
      setInterval(() => plusSlides2(1), 5000); // Troca de slide a cada 5 segundos
    