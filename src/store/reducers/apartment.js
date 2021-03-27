import {updateObject} from '../../utils/common';
import {ActionType} from '../actions/actionTypes';

const APARTMENT_COUNT_PER_STEP = 6;

const initialState = {
  apartments: [],
  loading: false,
  error: null,
  count: APARTMENT_COUNT_PER_STEP,
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

const fetchApartmentsFail = (state) => {
  return updateObject(state, {loading: false});
};

const increaseApartmentCount = (state, action) => {
  return updateObject(state, {
    count: state.count + APARTMENT_COUNT_PER_STEP,
  });
};

const addApartmentToFavorite = (state, action) => {
  console.log(action);
  localStorage.setItem('favorite@' + action.apartment.id, action.payload);

  const index = state.apartments.findIndex((apartmentIndex) => apartmentIndex.id === action.apartment.id);

    const newApartment = {
      ...action.apartment,
      isFavorite: !action.apartment.isFavorite,
    }

    if (index === -1) {
      throw new Error(`Can't update non-existent product`);
    }

    const newData = [
      ...state.apartments.slice(0, index),
      newApartment,
      ...state.apartments.slice(index + 1),
    ];

    return updateObject(state, {apartments: newData});

  // updateApartment(state, {
  //   ...action.apartment,
  //   isFavorite: action.payload,
  // });
};

const updateApartment = (state, action) => {
  const index = state.apartments.findIndex((apartmentIndex) => apartmentIndex.id === action.id);

  if (index === -1) {
    throw new Error(`Can't update non-existent product`);
  }

  const test = {
    ...action,
    isFavorite: !action.isFavorite,
  };

  const newApartment = [
    ...state.apartments(0, index),
    test,
    ...state.apartments(index + 1),
  ];

 console.log(newApartment);
};


const apartment = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_APARTMENTS_START: return fetchApartmentsStart(state, action);
    case ActionType.FETCH_APARTMENTS_SUCCESS: return fetchApartmentsSuccess(state, action);
    case ActionType.FETCH_APARTMENTS_FAIL: return fetchApartmentsFail(state, action);
    case ActionType.INCREASE_APARTMENT_COUNT: return increaseApartmentCount(state, action);
    case ActionType.ADD_APARTMENT_TO_FAVORITE: return addApartmentToFavorite(state, action);
    case ActionType.UPDATE_APARTMENT: return updateApartment(state, action);
    default: return state;
  }
};

export default apartment;
