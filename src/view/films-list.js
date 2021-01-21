export const createFilmsListTemplate = (listTitle, additionalСlass = '') => {
  return `<section class="films-list ${additionalСlass}">
    <h2 class="films-list__title">${listTitle}</h2>

    <div class="films-list__container">
    </div>
  </section>`;
}
