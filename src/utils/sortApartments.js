import moment from "moment";

import {SortType} from "../constants/constants";

const sort = (apartments, sortType) => {
  switch (sortType) {
    case SortType.PRICE_UP:
      return apartments.sort((a, b) =>  b.price - a.price);
    case SortType.PRICE_DOWN:
      return apartments.sort((a, b) => a.price - b.price);
    case SortType.NEWEST:
      return apartments.sort((a, b) => {
        const dateA = moment(a.date);
        const dateB = moment(b.date);

        return dateB - dateA;
      });
    case SortType.SQUARE:
      return apartments.sort((a, b) =>  b.square - a.square);
    case SortType.ROOMS:
      return apartments.sort((a, b) =>  b.rooms - a.rooms);

    default: return apartments;
  }
};

export default sort;
