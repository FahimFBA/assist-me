/* ====================================
Template Name: GenAI
Description: AI Content Writing & Copywriting HTML5 Landing Page Template
Template URI: https://themeforest.net/item/genai-ai-based-copywriting-and-content-writing-landing-page-template/45150495
Author: Marvel Theme
Author URI: https://themeforest.net/user/marvel_theme
Version: 1.1
Published: 1 May 2023
Last Update: 9 May 2023
==================================== */

/* Table of contents
====================================
1. AOS initialization
2. Typing text animation
3. Video popup
4. Pricing switch
5. Review carousel
6. Review rolling carousel
7. Review rolling carousel reversed
8. Contact form
9. Sticky navbar

====================================
*/

(function () {
  // 1. AOS initialization
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 50,
    duration: 600,
    easing: "cubic-bezier(0.77, 0, 0.175, 1)",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  // 2. Typing text animation
  const typedElements = document.querySelectorAll(".typed-animation");
  if (typedElements.length > 0) {
    typedElements.forEach((typedElement) => {
      const typedAnimation = new Typed(typedElement, {
        strings: JSON.parse(typedElement.dataset.strings),
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 3000,
        startDelay: 1000,
        fadeOut: true,
        loop: true,
      });
    });
  }

  // 3. Video popup
  new VenoBox({
    selector: ".video-play-btn",
  });

  // 4. Pricing switch
  const tableWrapper = document.querySelector(".pricing-table");
  if (tableWrapper) {
    const switchInputs = document.querySelectorAll(".switch-wrapper input");
    const prices = tableWrapper.querySelectorAll(".price");
    const toggleClass = "d-none";

    switchInputs.forEach((switchInput) => {
      switchInput.addEventListener("input", function () {
        prices.forEach((price) => {
          price.classList.add(toggleClass);
        });

        const activePrices = tableWrapper.querySelectorAll(
          `.price.${switchInput.id}`,
        );
        activePrices.forEach((activePrice) => {
          activePrice.classList.remove(toggleClass);
        });
      });
    });
  }

  // 5. Review carousel
  const reviewCarousel = new Swiper(".review-carousel", {
    loop: false,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".review-carousel-container .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // 6. Review rolling carousel
  const reviewRollingCarousel = new Swiper(".review-rolling-carousel", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    allowTouchMove: true,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      1: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
      1600: {
        slidesPerView: 4,
      },
      1900: {
        slidesPerView: 4.5,
      },
    },
  });

  // 7. Review rolling carousel reversed
  const reviewRollingCarouselReversed = new Swiper(
    ".review-rolling-carousel-reversed",
    {
      loop: true,
      freemode: true,
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,
      allowTouchMove: true,
      speed: 8000,
      autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        1: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3.5,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4.5,
        },
      },
    },
  );

  // 8. Contact form
  const form = document.querySelector("#contact-form");

  if (form) {
    const formStatus = form.querySelector(".status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();
      xhr.open("POST", form.action);
      xhr.onload = function () {
        if (xhr.status === 200) {
          formStatus.classList.remove("d-none");
          formStatus.classList.remove("alert-danger");
          formStatus.classList.add("alert-success");
          formStatus.textContent = xhr.responseText;
          form.reset();
          setTimeout(() => {
            formStatus.classList.add("d-none");
          }, 6000);
        } else {
          formStatus.classList.remove("d-none");
          formStatus.classList.remove("alert-success");
          formStatus.classList.add("alert-danger");
          if (xhr.responseText !== "") {
            formStatus.textContent = xhr.responseText;
          } else {
            formStatus.textContent =
              "Oops! An error occurred and your message could not be sent.";
          }
          setTimeout(() => {
            formStatus.classList.add("d-none");
          }, 6000);
        }
      };
      xhr.send(formData);
    });
  }

  // 9. Sticky navbar
  const header = document.querySelector(".navbar");
  const htmlBody = document.querySelector("html");

  const headroomOptions = {
    // vertical offset in px before element is first unpinned
    offset: {
      up: 100,
      down: 50,
    },
    // scroll tolerance in px before state changes
    tolerance: {
      up: 5,
      down: 0,
    },
    // css classes to apply
    classes: {
      // when element is initialised
      initial: "headroom",
      // when scrolling up
      pinned: "headroom--pinned",
      // when scrolling down
      unpinned: "headroom--unpinned",
      // when above offset
      top: "headroom--top",
      // when below offset
      notTop: "headroom--not-top",
      // when at bottom of scroll area
      bottom: "headroom--bottom",
      // when not at bottom of scroll area
      notBottom: "headroom--not-bottom",
      // when frozen method has been called
      frozen: "headroom--frozen",
    },
  };

  if (header) {
    // Initialize headroom
    const headroom = new Headroom(header, headroomOptions);
    headroom.init();

    // body padding top of fixed header
    const onSectionTop = header.classList.contains("on-over");
    if (!onSectionTop) {
      const headerHeight = header.offsetHeight;
      htmlBody.style.paddingTop = headerHeight + "px";
      htmlBody.style.scrollPaddingTop = headerHeight + "px";
    }

    // Collapse navbar menu on scoll down
    if (window.matchMedia("(max-width: 991px)").matches) {
      const navbarCollapse = header.querySelector(".navbar-collapse");
      const navbarToggler = header.querySelector(".navbar-toggler");

      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const isExpanded =
          navbarToggler.getAttribute("aria-expanded") === "true";

        if (isExpanded && scrollPosition > 0) {
          navbarCollapse.classList.remove("show");
          navbarToggler.setAttribute("aria-expanded", "false");
        }
      });
    }
  }
})();
