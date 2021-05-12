import {useDispatch, useSelector} from 'react-redux';

import {sortApartments} from '../../store/actions/apartment';

import classes from './ApartmentSoritng.module.scss';


const ApartmentSorting = props => {
  const dispatch = useDispatch();

  const sortApartmentsH = (sortType) => dispatch(sortApartments(sortType));
  const sortType = useSelector(state => state.sortType);

  const changeSortTypeHandler = (event) => {
    sortApartmentsH(event.target.value);
  };

  return (
    <form className={classes.Sorting}>
      <label htmlFor="sortingApartments">Sort: </label>
      <select value={sortType} id="sortingApartments" onChange={(event) => changeSortTypeHandler(event)}>
        <option value="price-up">Price (High to Low)</option>
        <option value="price-down">Price (Low to High)</option>
        <option value="newest">Newest</option>
        <option value="square">Square Feet</option>
        <option value="rooms">Rooms</option>
      </select>
    </form>
  );
};

export default ApartmentSorting;
