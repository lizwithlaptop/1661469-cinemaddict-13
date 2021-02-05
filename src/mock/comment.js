import {getRandomInteger} from '../utils/utils';

const generateText = () => {
  const textParts = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const TEXT_COUNT_MIN = 1;
  const TEXT_COUNT_MAX = 4;
  //
  const randomLength = getRandomInteger(TEXT_COUNT_MIN, TEXT_COUNT_MAX);
  const randomText = [];

  for (let i = 0; i < randomLength; i++) {
    const randomIndex = getRandomInteger(0, textParts.length - 1);
    //
    randomText.push(`${textParts[randomIndex]} `);
  }

  return randomText.join(` `);
};

const generateAuthor = () => {
  const authors = [`John`, `Emma`, `Willard`, `Rose`, `Nick`, `Ted`, `Anthony`, `Otto`, `Dora`];

  return authors[getRandomInteger(0, authors.length - 1)];
};

const generatePublished = () => {
  return new Date(getRandomInteger(1920, 2020), getRandomInteger(1, 12), getRandomInteger(1, 31), getRandomInteger(0, 23), getRandomInteger(0, 59));
};

const generateEmotion = () => {
  const emotions = [`smile`, `sleeping`, `puke`, `angry`];

  return emotions[getRandomInteger(0, emotions.length - 1)];
};

export const generateComment = () => {
  return {
    text: generateText(),
    author: generateAuthor(),
    published: generatePublished(),
    emotion: generateEmotion()
  };
};
