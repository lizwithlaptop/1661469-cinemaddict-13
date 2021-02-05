import {createUserRankTemplate} from './view/user-rank';
import {createMainNavigationTemplate} from './view/main-navigation';
import {createStatsTemplate} from './view/stats';
import {createFilterTemplate} from './view/filter';
import {createFilmsSectionTemplate} from './view/films-section';
import {createFilmsListTemplate} from './view/films-list';
import {createFilmCardTemplate} from './view/film-card';
import {createShowMoreTemplate} from './view/show-more';
import {createFooterStatsTemplate} from './view/footer-stats';
import {createFilmDetailsTemplate} from './view/film-details';
import {generateFilm} from './mock/film';

const FILM_CARDS_COUNT = 5;
const FILM_CARDS_COUNT_EXTRA = 2;
const FILMS_MOCK_COUNT = 20;

// Генерация списка фильмов
const films = new Array(FILMS_MOCK_COUNT).fill().map(generateFilm);

// Функция рендера
const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
}

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

// Рендер ранга пользователя, меню навигации и сортировки
render(siteHeaderElement, createUserRankTemplate(), 'beforeend');
render(siteMainElement, createMainNavigationTemplate(), 'beforeend');
render(siteMainElement, createFilterTemplate(), 'beforeend');

// Рендер пользовательской статистики
// render(siteMainElement, createStatsTemplate(), 'beforeend');

// Рендер основного контейнера фильмов
render(siteMainElement, createFilmsSectionTemplate(), 'beforeend');

const  filmsElement = siteMainElement.querySelector('.films');

// Рендер списка всех фильмов
render(filmsElement, createFilmsListTemplate('All movies. Upcoming'), 'beforeend');

const filmsListContainerElement = filmsElement.querySelector('.films-list__container');

for (let i = 0; i < FILM_CARDS_COUNT; i++) {
  render(filmsListContainerElement, createFilmCardTemplate(films[i]), 'beforeend');
}

// Рендер кнопки Show more
render(filmsElement, createShowMoreTemplate(), 'beforeend');

// Рендер списка Top rated фильмов
render(filmsElement, createFilmsListTemplate('Top rated', 'films-list--extra'), 'beforeend');

const filmsTopRatedContainerElement = filmsElement.querySelectorAll('.films-list--extra')[0];

for (let i = 0; i < FILM_CARDS_COUNT_EXTRA; i++) {
  render(filmsTopRatedContainerElement, createFilmCardTemplate(films[i]), 'beforeend');
}

// Рендер списка Most commented фильмов
render(filmsElement, createFilmsListTemplate('Most commented', 'films-list--extra'), 'beforeend');

const filmsMostCommentedContainerElement = filmsElement.querySelectorAll('.films-list--extra')[1];

for (let i = 0; i < FILM_CARDS_COUNT_EXTRA; i++) {
  render(filmsMostCommentedContainerElement, createFilmCardTemplate(films[i]), 'beforeend');
}

// Рендер количества фильмов
render(siteFooterElement, createFooterStatsTemplate(), 'beforeend');

// Рендер дополнительной информации о фильме
render(siteFooterElement, createFilmDetailsTemplate(films[0]), 'afterend');
