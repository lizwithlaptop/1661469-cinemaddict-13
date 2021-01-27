import {getRandomInteger} from '../utils/utils';

const generatePoster = () => {
  const path = '/images/posters/';
  const posters = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg'
  ];

  return `${path}${posters[getRandomInteger(0, posters.length - 1)]}`;
};

const generateTitle = () => {
  const titles = [
    'Made for Each Other',
    'Popeye the Sailor Meets Sindbad the Sailor',
    'Sagebrush Trail',
    'Santa Claus Conquers the Martians',
    'The Dance of Life',
    'The Great Flamarion',
    'The Man with the Golden Arm'
  ];

  return titles[getRandomInteger(0, titles.length - 1)];
};

const generateRating = () => {
  return getRandomInteger(0, 100) / 10;
};

const generateReleaseDate = () => {
  return new Date(getRandomInteger(1920, 2020), getRandomInteger(1, 12), getRandomInteger(1, 31));
};

const generateDuration = () => {
  return `${getRandomInteger(90, 180)} min`;
};

const generateGenre = () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller'];

  return genres[getRandomInteger(0, genres.length - 1)];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const DESC_COUNT_MIN = 1;
  const DESC_COUNT_MAX = 5;
  
  const randomLength = getRandomInteger(DESC_COUNT_MIN, DESC_COUNT_MAX);
  const randomDescription = [];

  for (let i = 0; i < randomLength; i++) {
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    
    randomDescription.push(`${descriptions[randomIndex]} `);
  }

  return randomDescription.join(' ');
};

const generateCommentsCount = () => {
  return getRandomInteger(0, 5);
};

const generateDirector = () => {
  const directors = [
    'John Cromwell',
    'Dave Fleischer, Willard Bowsky',
    'Armand Schaefer',
    'Nicholas Webster',
    'John Cromwell, A. Edward Sutherland',
    'Anthony Mann',
    'Otto Preminger'
  ];

  return directors[getRandomInteger(0, directors.length - 1)];
};

const generateWriters = () => {
  const writers = [
    'Jo Swerling, Rose Franken',
    'Unknown',
    'Lindsley Parsons, Lindsley Parsons',
    'Glenville Mareth, Paul L. Jacobson',
    'Benjamin Glazer, Arthur Hopkins',
    'Anne Wigton, Heinz Herald',
    'Walter Newman, Lewis Meltzer'
  ];

  return writers[getRandomInteger(0, writers.length - 1)];
};

const generateCast = () => {
  const casts = [
    'Carole Lombard, James Stewart, Charles Coburn',
    'Jack Mercer, Mae Questel, Lou Fleischer',
    'John Wayne, Nancy Shubert, Lane Chandler',
    'John Call, Leonard Hicks, Vincent Beck',
    'Hal Skelly, Nancy Carroll, Dorothy Revier',
    'Erich von Stroheim, Mary Beth Hughes, Dan Duryea',
    'Frank Sinatra, Kim Novak, Eleanor Parker'
  ];

  return casts[getRandomInteger(0, casts.length - 1)];
};

const generateCountry = () => {
  const countries = ['USA', 'France', 'Germany', 'United Kingdom', 'Russia', 'Canada'];

  return countries[getRandomInteger(0, countries.length - 1)];
};

const generateRated = () => {
  const rated = ['G', 'PG', 'PG-13', 'R'];

  return rated[getRandomInteger(0, rated.length - 1)];
};

const generateBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
}

export const generateFilmCard = () => {
  return {
    poster: generatePoster(),
    title: generateTitle(),
    rating: generateRating(),
    releaseDate: generateReleaseDate(),
    duration: generateDuration(),
    genre: generateGenre(),
    description: generateDescription(),
    commentsCount: generateCommentsCount(),
    originalTitle: generateTitle(),
    director: generateDirector(),
    writers: generateWriters(),
    cast: generateCast(),
    country: generateCountry(),
    rated: generateRated(),
    isWatchlisted: generateBoolean(),
    isAlreadyWatched: generateBoolean(),
    isFavorite: generateBoolean()
  };
};
