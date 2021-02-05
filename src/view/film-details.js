import {formatReleaseDate, formatPublishedDate, formatDuration} from '../utils/utils';

const createDetailTemplate = (name, value) => {
  return `<tr class="film-details__row">
    <td class="film-details__term">${name}</td>
    <td class="film-details__cell">${value}</td>
  </tr>`;
};

const createCommentTemplate = (comment) => {
  const {text, author, published, emotion} = comment;

  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${formatPublishedDate(published)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
};

const createEmotionTemplate = (emotion) => {
  return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion}" value=${emotion}>
    <label class="film-details__emoji-label" for="emoji-${emotion}">
      <img src="./images/emoji/${emotion}.png" width="30" height="30" alt="emoji">
    </label>`;
};

const createCommentsSectionTemplate = (comments) => {
  const COMMENTS_COUNT = comments.length;
  //
  return `<section class="film-details__comments-wrap">
    <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${COMMENTS_COUNT}</span></h3>

    <ul class="film-details__comments-list">
      ${comments.map((comment) => createCommentTemplate(comment)).join(``)}
    </ul>

    <div class="film-details__new-comment">
      <div class="film-details__add-emoji-label"></div>

      <label class="film-details__comment-label">
        <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
      </label>

      <div class="film-details__emoji-list">
        ${[`smile`, `sleeping`, `puke`, `angry`].map((emotion) => createEmotionTemplate(emotion)).join(``)}
      </div>
    </div>
  </section>`;
};

export const createFilmDetailsTemplate = (film, comments = []) => {
  const {
    poster,
    title,
    originalTitle,
    rating,
    director,
    writers,
    cast,
    releaseDate,
    duration,
    country,
    genres,
    description,
    rated,
    isWatchlisted,
    isAlreadyWatched,
    isFavorite
  } = film;

  const isAFewGenres = genres.length > 1;
  const genresTemplate = genres.map(
      (genre, index) => `<span class="film-details__genre">${genre}${index === genres.length - 1 ? `` : `,`}</span>`
  ).join(``);
  //
  const controls = [
    {
      caption: `Add to watchlist`,
      modifier: `watchlist`,
      state: isWatchlisted
    },
    {
      caption: `Already watched`,
      modifier: `watched`,
      state: isAlreadyWatched
    },
    {
      caption: `Add to favorites`,
      modifier: `favorite`,
      state: isFavorite
    }
  ];
  //
  const controlsTemplate = controls.map(
      ({caption, modifier, state}) => `
        <input type="checkbox" class="film-details__control-input visually-hidden" id=${modifier} name=${modifier} ${state ? `checked` : ``}>
        <label for=${modifier} class="film-details__control-label film-details__control-label--${modifier}">${caption}</label>
      `
  ).join(``);
  //
  const commentsSectionTemplate = createCommentsSectionTemplate(comments);
  //
  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src=${poster} alt="">

            <p class="film-details__age">${rated}</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">Original: ${originalTitle}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              ${createDetailTemplate(`Director`, director)}
              ${createDetailTemplate(`Writers`, writers)}
              ${createDetailTemplate(`Actors`, cast)}
              ${createDetailTemplate(`Release Date`, formatReleaseDate(releaseDate))}
              ${createDetailTemplate(`Runtime`, formatDuration(duration))}
              ${createDetailTemplate(`Country`, country)}
              ${createDetailTemplate(isAFewGenres ? `Genres` : `Genre`, genresTemplate)}
            </table>

            <p class="film-details__film-description">
              ${description}
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          ${controlsTemplate}
        </section>
      </div>

      <div class="film-details__bottom-container">
        ${commentsSectionTemplate}
      </div>
    </form>
  </section>`;
};
