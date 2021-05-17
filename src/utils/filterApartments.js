import {priceValue} from "../constants/constants";

const filterByType = (filterType, apartment) => {
  if (filterType.length === 0) {
    return apartment;
  }

  return filterType.find((type) => {
    return apartment.type === type;
  });
};

const filterByRooms = (filterRooms, apartment) => {
  if (filterRooms.length === 0) {
    return apartment;
  }

  return filterRooms.find((room) => {
    if (room === '4-more') {
      return apartment.rooms >= 4;
    }

    return apartment.rooms === +room;
  });
};

const filterByPrice = (filterPrice, apartment) => {
  if (filterPrice.length === 0) {
    return apartment;
  }

  return filterPrice.find((price) => {
    return apartment.price >= priceValue[price].min && apartment.price < priceValue[price].max;
  });
};

const filterApartmentsUtil = (filterType, apartment) => {
  return filterByType(filterType.type, apartment) &&
         filterByRooms(filterType.rooms, apartment) &&
         filterByPrice(filterType.price, apartment);
};

export default filterApartmentsUtil;
