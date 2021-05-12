import {priceValue} from "../constants/constants";

const filterByType = (filterType, apartment) => {
  return filterType !== 'any' ? apartment.type === filterType : apartment;
};

const filterByRooms = (filterRooms, apartment) => {
  const roomsValueToNumber = +filterRooms;

  switch (filterRooms) {
    case 'any':
      return apartment;
    case '4-more':
      return apartment.rooms >= 4;

    default:
      return apartment.rooms === roomsValueToNumber;
  }

  // return filterType !== 'any' ? apartment.rooms === filterType : apartment;
};

const filterByPrice = (filterPrice, apartment) => {
  return apartment.price >= priceValue[filterPrice].min && apartment.price < priceValue[filterPrice].max;
};

const filterApartmentsUtil = (filterType, apartment) => {
  return filterByType(filterType.type, apartment) &&
         filterByRooms(filterType.rooms, apartment) &&
         filterByPrice(filterType.price, apartment);
};

export default filterApartmentsUtil;
