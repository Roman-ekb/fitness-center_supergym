const prices = document.querySelector('.price__list');

const BasePrice = {
  trainer: '5000',
  day: '1700',
  fullDay: '2700',
};

const togglePrice = (period) => {
  const trainer = document.querySelector('.price__card--trainer');
  const day = document.querySelector('.price__card--day');
  const fullDay = document.querySelector('.price__card--fullDay');
  if (trainer) {
    trainer.querySelector('.card__price-background').textContent = BasePrice.trainer * period;
    trainer.querySelector('.card__price-value').textContent = BasePrice.trainer * period;
  }
  if (day) {
    day.querySelector('.card__price-background').textContent = BasePrice.day * period;
    day.querySelector('.card__price-value').textContent = BasePrice.day * period;
  }
  if (fullDay) {
    fullDay.querySelector('.card__price-background').textContent = BasePrice.fullDay * period;
    fullDay.querySelector('.card__price-value').textContent = BasePrice.fullDay * period;
  }
};


export const initPriceFilter = () => {
  if (prices) {
    prices.addEventListener('click', (evt) => {
      if (evt.target.closest('.price__filter') && !evt.target.closest('.price__filter--active')) {
        document.querySelector('.price__filter--active').classList.remove('price__filter--active');
        evt.target.classList.add('price__filter--active');
        togglePrice(evt.target.getAttribute('data-month-period'));
      }
    });
  }
};
