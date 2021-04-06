import {ActionType} from './actionTypes';
import axios from '../../axios-apartments';

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
        // const fetchedOrders = [];
        // for (let key in response.data) {
        //   fetchedOrders.push({
        //     ...response.data[key],
        //     id: key,
        //   });
        // }

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
  console.log(updatedApartment);
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