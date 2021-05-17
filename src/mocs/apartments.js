import {AMENITIES, TYPES, TITLES, STREETS, PHOTOS} from './constants';
import {getRandomElement, getRandomArr, getRandomInteger, shuffleArray} from './utils';

const apartments = () => {
  return {
    // id: getRandomInteger(0, 50000),
    title: getRandomElement(TITLES),
    street: getRandomElement(STREETS),
    type: getRandomElement(TYPES),
    amenities: getRandomArr(AMENITIES),
    price: getRandomInteger(10000, 2300000),
    date: new Date(),
    rooms: getRandomInteger(1, 7),
    square: getRandomInteger(20, 100),
    photos: shuffleArray(getRandomArr(PHOTOS)),
    isFavorite: false,
  };
};

export default apartments;
