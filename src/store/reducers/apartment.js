import mockData from '../../mocs/apartments';

import {updateObject} from '../../utils/common';
import {ActionType} from '../actions/actionTypes';
import {SortType} from "../../constants/constants";
import {APARTMENT_COUNT_PER_STEP} from '../../constants/constants';
import sort from "../../utils/sortApartments";

const data = new Array(20).fill().map(mockData).map((item, index) => {
  return {
    ...item,
    id: index,
  };
});

const initialState = {
  apartments: [],
  loading: false,
  error: null,
  count: APARTMENT_COUNT_PER_STEP,
  sortType: SortType.NEWEST,
};

const fetchApartmentsStart = (state) => {
  return updateObject(state, {loading: true});
};

const fetchApartmentsSuccess = (state, action) => {
  return updateObject(state, {
    apartments: action.payload,
    loading: false,
  });
};

const fetchApartmentsFail = (state, action) => {
  console.log(data);
  return updateObject(state, {
    loading: false,
    error: action.payload.message,
    apartments: data,
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
  return updateObject(state, {apartments: sort(state.apartments, action.payload), sortType: action.payload});
};


const apartment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_APARTMENTS_START: return fetchApartmentsStart(state, action);
    case ActionType.FETCH_APARTMENTS_SUCCESS: return fetchApartmentsSuccess(state, action);
    case ActionType.FETCH_APARTMENTS_FAIL: return fetchApartmentsFail(state, action);
    case ActionType.INCREASE_APARTMENT_COUNT: return increaseApartmentCount(state, action);
    case ActionType.UPDATE_APARTMENT: return updateApartment(state, action);
    case ActionType.SORT_APARTMENTS: return sortApartments(state, action);
    default: return state;
  }
};

export default apartment;
