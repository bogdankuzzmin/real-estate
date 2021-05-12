import mockData from '../../mocs/apartments';

import {ActionType} from '../actions/actionTypes';
import {APARTMENT_COUNT_PER_STEP, SortType} from '../../constants/constants';

import {updateObject} from '../../utils/common';
import sortApartmentsUtil from "../../utils/sortApartments";
import filterApartmentsUtil from "../../utils/filterApartments";

// const data = new Array(20).fill().map(mockData).map((item, index) => {
//   return {
//     ...item,
//     id: index,
//   };
// });

const initialState = {
  apartments: [],
  copiedApartments: [],
  loading: false,
  error: null,
  count: APARTMENT_COUNT_PER_STEP,
  sortType: SortType.NEWEST,
  currentFilter: {
    type: 'any',
    rooms: 'any',
    price: 'any',
  },
};

const fetchApartmentsStart = (state) => {
  return updateObject(state, {loading: true});
};

const fetchApartmentsSuccess = (state, action) => {
  return updateObject(state, {
    apartments: sortApartmentsUtil(action.payload, SortType.NEWEST),
    copiedApartments: action.payload,
    loading: false,
  });
};

const fetchApartmentsFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload.message,
    // apartments: data,   // used mock data when the internet is not available
  });
};

const increaseApartmentCount = (state) => {
  return updateObject(state, {
    count: state.count + APARTMENT_COUNT_PER_STEP,
  });
};

const updateApartment = (state, action) => {
  const index = state.apartments.findIndex((apartmentIndex) => apartmentIndex.id === action.payload.id);

  if (index === -1) {
    throw new Error(`Can't update non-existent apartment`);
  }

  const newApartments = [
    ...state.apartments.slice(0, index),
    action.payload,
    ...state.apartments.slice(index + 1),
  ];

  return updateObject(state, {apartments: newApartments});
};

const sortApartments = (state, action) => {
  return updateObject(state, {
    apartments: sortApartmentsUtil(state.apartments, action.payload),
    sortType: action.payload
  });
};

const filterApartments = (state, action) => {
  const filteredApartments = state.copiedApartments.filter((apartment) => {
    return filterApartmentsUtil(action.payload, apartment);
  });

  console.log(filteredApartments);

  return updateObject(state, {
    apartments: filteredApartments,
    currentFilter: action.payload,
  });
};

const apartment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_APARTMENTS_START: return fetchApartmentsStart(state, action);
    case ActionType.FETCH_APARTMENTS_SUCCESS: return fetchApartmentsSuccess(state, action);
    case ActionType.FETCH_APARTMENTS_FAIL: return fetchApartmentsFail(state, action);
    case ActionType.INCREASE_APARTMENT_COUNT: return increaseApartmentCount(state, action);
    case ActionType.UPDATE_APARTMENT: return updateApartment(state, action);
    case ActionType.SORT_APARTMENTS: return sortApartments(state, action);
    case ActionType.FILTER_APARTMENTS: return filterApartments(state, action);

    default: return state;
  }
};

export default apartment;
