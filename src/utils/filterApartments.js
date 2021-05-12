import {priceValue} from "../constants/constants";

const filterByType = (filterType, apartment) => {
  return filterType !== 'any' ? apartment.type === filterType : apartment;
};

const filterByRooms = (filterType, apartment) => {
  switch (filterType) {
    case 'any':
      return apartment;
    case '4-more':
      return apartment.rooms >= '4';

    default:
      return apartment.rooms === filterType;
  }

  // return filterType !== 'any' ? apartment.rooms === filterType : apartment;
};

const filterByPrice = (filterType, apartment) => {
  return apartment.price >= priceValue[filterType].min && apartment.price < priceValue[filterType].max;
};

const filter = (filterType, apartment) => {
  return filterByType(filterType.type, apartment) &&
         filterByRooms(filterType.rooms, apartment) &&
         filterByPrice(filterType.price, apartment);
};

export default filter;
