import {useDispatch, useSelector} from 'react-redux';

import {SortType} from "../../constants/constants";
import {sortApartments} from '../../store/actions/apartment';

import classes from './ApartmentSoritng.module.scss';

const ApartmentSorting = props => {
  const dispatch = useDispatch();

  const sortApartmentsHandler = (sortType) => dispatch(sortApartments(sortType));
  const sortType = useSelector(state => state.sortType);

  const changeSortTypeHandler = (event) => {
    sortApartmentsHandler(event.target.value);
  };

  return (
    <form className={classes.Sorting}>
      <label htmlFor="sortingApartments">Sort: </label>
      <select value={sortType} id="sortingApartments" className={classes.SelectOption} disabled={props.disabled}
              onChange={(event) => changeSortTypeHandler(event)}>
        <option value={SortType.PRICE_UP}>Price (High to Low)</option>
        <option value={SortType.PRICE_DOWN}>Price (Low to High)</option>
        <option value={SortType.NEWEST}>Newest</option>
        <option value={SortType.SQUARE}>Square Feet</option>
        <option value={SortType.ROOMS}>Rooms</option>
      </select>
    </form>
  );
};

export default ApartmentSorting;
