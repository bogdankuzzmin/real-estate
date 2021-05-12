import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import classes from './ApartmentFilter.module.scss';
import {filterApartments, sortApartments} from "../../store/actions/apartment";
import {priceValue} from "../../constants/constants";

const ApartmentFilter = props => {
  // const [filter, setFilter] = useState({
  //   type: 'any',
  //   rooms: 'any',
  //   price: 'any',
  // });

  const dispatch = useDispatch();

  const filterApartmentsH = (filterType) => dispatch(filterApartments(filterType));
  const sortT = (sortType) => dispatch(sortApartments(sortType));
  const currentFilter = useSelector(state => state.currentFilter);

  useEffect(() => {

  }, [currentFilter]);

  const changeFilterHandler = (event) => {
    // const filters = {
    //   ...filterType,
    //   [event.target.id]: event.target.value,
    // };
    const filteredData = {
      ...currentFilter,
      [event.target.id]: event.target.value,
    };

    filterApartmentsH(filteredData);
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //
  //   filterApartmentsH(filter);
  // };

  const asd = Object.entries(priceValue);
  const test = asd.map((it) => {
    const type = it[0];
    const minPrice = it[1].min;
    const maxPrice = it[1].max;
    const optionLabel = type === 'any' ? 'All prices' : `${minPrice} - ${maxPrice}`;

    return <option value={type} key={type}>{optionLabel}</option>;
  });

  const resetClickHandler = () => {
    filterApartmentsH({
      type: 'any',
      rooms: 'any',
      price: 'any',
    });

    sortT('newest');
  };

  return (
    <form className={classes.Form} onChange={(event) => changeFilterHandler(event)}>
      <label htmlFor="type">Type:</label>
      <select defaultValue={currentFilter.type} id="type">
        <option value="any">All types</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
      </select>

      <label htmlFor="rooms">Rooms:</label>
      <select defaultValue={currentFilter.rooms} id="rooms">
        <option value="any">All rooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4-more">4+</option>
      </select>

      <label htmlFor="price">Price:</label>
      <select defaultValue={currentFilter.price} id="price">
        {test}
      </select>

      <button type="reset" onClick={resetClickHandler}>Reset</button>

    </form>
  );
};

export default ApartmentFilter;
