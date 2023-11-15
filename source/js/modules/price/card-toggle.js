const cards = document.querySelector('.price__cards');

export const initActiveCard = () => {
  if (cards) {
    cards.addEventListener('click', (evt) => {
      if (evt.target.closest('.card') && !evt.target.closest('.card--active')) {
        document.querySelector('.card--active').classList.remove('card--active');
        evt.target.closest('.card').classList.add('card--active');
      }
    });
  }
};
