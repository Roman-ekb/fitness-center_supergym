const sliderJury = new window.Swiper('.games__slider', {
  // Optional parameters
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 2,
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,

    },
  },

  navigation: {
    nextEl: '.games__slider-button--next',
    prevEl: '.games__slider-button--prev',
  },
});

const slides = document.querySelector('.games__slider');

const initJuryCard = () => {
  if (slides) {
    slides.addEventListener('click', (evt) => {
      if (evt.target.closest('.card-jury') && !evt.target.closest('.card-jury--active')) {
        evt.target.closest('.card-jury').classList.add('card-jury--active');
        return;
      }
      if (evt.target.closest('.card-jury--active')) {
        evt.target.closest('.card-jury--active').classList.remove('card-jury--active');
        return;
      }
    });
  }
};

const sliderReviews = new window.Swiper('.reviews__slider', {
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
});

export {sliderJury, sliderReviews, initJuryCard};
