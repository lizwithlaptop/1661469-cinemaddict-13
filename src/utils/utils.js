import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getReleaseYear = (releaseDate) => {
  return dayjs(releaseDate).format(`YYYY`);
};

const formatReleaseDate = (releaseDate) => {
  return dayjs(releaseDate).format(`DD MMMM YYYY`);
};

const formatPublishedDate = (published) => {
  return dayjs(published).format(`YYYY/MM/DD HH:mm`);
};

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return hours < 1
    ? `${minutes}m`
    : `${hours}h ${minutes}m`;
};

const getShortDescription = (description, length) => {
  return description.length > length
    ? `${description.slice(0, length - 2)}...`
    : description;
};

const getControlStateClass = (controlState = false, className = ``) => {
  return controlState ? className : ``;
};

export {
  getRandomInteger,
  getReleaseYear,
  formatReleaseDate,
  formatPublishedDate,
  formatDuration,
  getShortDescription,
  getControlStateClass
};
