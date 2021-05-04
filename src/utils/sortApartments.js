import moment from "moment";

const sort = (apartments, sortType) => {
  switch (sortType) {
    case 'price-up':
      return apartments.sort((a, b) =>  b.price - a.price);
    case 'price-down':
      return apartments.sort((a, b) => a.price - b.price);
    case 'newest':
      return apartments.sort((a, b) => {
        const dateA = moment(a.date);
        const dateB = moment(b.date);

        return dateB - dateA;
      });
    case 'square':
      return apartments.sort((a, b) =>  b.square - a.square);
    case 'rooms':
      return apartments.sort((a, b) =>  b.rooms - a.rooms);

    default: return apartments;
  }
};

export default sort;
