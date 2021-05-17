import axios from '../../axios-apartments';

import {ActionType} from './actionTypes';

export const fetchApartmentsStart = () => {
  return {
    type: ActionType.FETCH_APARTMENTS_START,
  };
};

export const fetchApartmentsSuccess = (apartments) => {
  return {
    type: ActionType.FETCH_APARTMENTS_SUCCESS,
    payload: apartments,
  };
};

export const fetchApartmentsFail = (error) => {
  return {
    type: ActionType.FETCH_APARTMENTS_FAIL,
    payload: error,
  };
};

export const fetchApartments = () => {
  return dispatch => {
    dispatch(fetchApartmentsStart());
    axios.get('/apartments.json')
      .then((response) => {

        const data = response.data.map(item => {
          return {
            ...item,
            isFavorite: JSON.parse(localStorage.getItem('favorite@' + item.id)),
          };
        });

        dispatch(fetchApartmentsSuccess(data));
      })
      .catch((error) =>{
        dispatch(fetchApartmentsFail(error));
      });
  };
};

export const updateApartment = (updatedApartment) => {
  return {
    type: ActionType.UPDATE_APARTMENT,
    payload: updatedApartment,
  };
};

export const increaseApartmentCount = () => {
  return {
    type: ActionType.INCREASE_APARTMENT_COUNT,
  };
};

export const sortApartments = (sortType) => {
  return {
    type: ActionType.SORT_APARTMENTS,
    payload: sortType,
  };
};

export const filterApartments = (filterType) => {
  return {
    type: ActionType.FILTER_APARTMENTS,
    payload: filterType,
  };
};

export const resetFilters = () => {
  return {
    type: ActionType.RESET_FILTERS,
  };
};
