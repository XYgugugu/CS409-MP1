/* Your JS here. */

// 3. Position Indicator
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPos = window.scrollY;
            
            if (scrollPos >= sectionTop - 100 && scrollPos < sectionTop + sectionHeight - 100) {
                currentSectionId  = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            const href = link.getAttribute("href").substring(1);
            if (href === currentSectionId) {
                link.classList.add("active");
            }
        });
    });
});

// 4. Navbar Resizing on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});


// 6. Carousel
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-track img");
    const prevBtn = document.querySelector(".nav.prev");
    const nextBtn = document.querySelector(".nav.next");

    let currentIndex = 0;

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });
});

// 11. Modal
document.addEventListener("DOMContentLoaded", () => {
  const watchBtn = document.getElementById("watchNowBtn");
  const watchModal = document.getElementById("watchModal");
  const closeBtn = document.getElementById("closeWatchModal");

  watchBtn.addEventListener("click", () => {
    watchModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    watchModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === watchModal) {
      watchModal.style.display = "none";
    }
  });
});
