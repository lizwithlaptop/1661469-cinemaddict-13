import {getReleaseYear, formatDuration, getShortDescription, getControlStateClass} from '../utils/utils';

export const createFilmCardTemplate = (film) => {
  const { poster, title, rating, releaseDate, duration, genres, description, commentsCount, isWatchlisted, isAlreadyWatched, isFavorite } = film;
  
  const CONTROLS_ACTIVE_CLASS_NAME = 'film-card__controls-item--active';
  const SHORT_DESC_LENGTH = 140;
  
  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${getReleaseYear(releaseDate)}</span>
      <span class="film-card__duration">${formatDuration(duration)}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src=${poster} alt="" class="film-card__poster">
    <p class="film-card__description">${getShortDescription(description, SHORT_DESC_LENGTH)}</p>
    <a class="film-card__comments">${commentsCount} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${getControlStateClass(isWatchlisted, CONTROLS_ACTIVE_CLASS_NAME)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${getControlStateClass(isAlreadyWatched, CONTROLS_ACTIVE_CLASS_NAME)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${getControlStateClass(isFavorite, CONTROLS_ACTIVE_CLASS_NAME)}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
