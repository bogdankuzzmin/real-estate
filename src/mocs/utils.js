export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getRandomArr = function (arr) {
  const randomArr = [];

  arr.forEach(function (element) {
    if (getRandomInteger(0, 1) === 1) {
      randomArr.push(element);
    }
  });

  return randomArr;
};

export const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
