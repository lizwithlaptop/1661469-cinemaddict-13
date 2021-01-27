import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getReleaseYear = (releaseDate) => {
  return dayjs(releaseDate).format(`YYYY`);
};

const getControlStateClass = (controlState = false, className = '') => {
  return controlState ? className : '';
};

export {
  getRandomInteger,
  getReleaseYear,
  getControlStateClass
};
