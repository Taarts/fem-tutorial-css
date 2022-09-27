import './style.css'
const primaryHeader = document.querySelector('.primaryHeader')
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle?.addEventListener('click', () => {
  primaryNav?.hasAttribute("data-visible") 
  ? navToggle.setAttribute('aria-expanded', false)
  : navToggle.setAttribute('aria-expanded', true),
  primaryNav.toggleAttribute("data-visible"),
  primaryHeader?.toggleAttribute('data-overlay');
})
  const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true, 
    arrows: false,
    responsive: {
      768: {
        slidesToShow: 2,
        dots: true
      },
      960: {
        disable: false, // slider disabled 960px to 1279px
        slidesToShow: 2,
        dots : true // dots enabled 1280px and up
      },
      480: {
        disable: false,
        slidesToShow: 2,
        arrows: false,
        dots: true // dots enabled 1280px and up
      },
    }
    });
