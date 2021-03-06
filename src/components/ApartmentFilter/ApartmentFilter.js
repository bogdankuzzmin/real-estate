import React, {Fragment, useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import classes from './ApartmentFilter.module.scss';

import {filterApartments, sortApartments, resetFilters} from "../../store/actions/apartment";
import {typeFilters, priceValue, roomsFilter, SortType} from "../../constants/constants";
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

const initialFilters = {
  type: false,
  rooms: false,
  price: false,
};

const ApartmentFilter = props => {
  const dispatch = useDispatch();

  const filterApartmentsHandler = (filterType) => dispatch(filterApartments(filterType));
  const sortApartmentHandler = (sortType) => dispatch(sortApartments(sortType));
  const resetFiltersHandler = () => dispatch(resetFilters());
  const currentFilter = useSelector(state => state.apartments.currentFilter);
  const currentSortType = useSelector((state => state.apartments.sortType));

  const [filterTypes, setFilterTypes] = useState(initialFilters);

  const closeFilterModalHandler = useCallback((event) => {
    if (!event.target.closest(`.${classes.WrapperFilter}`) || event.key === 'Escape') {
      setFilterTypes(initialFilters);

      document.removeEventListener('click', closeFilterModalHandler);
      document.removeEventListener("keydown", closeFilterModalHandler);
    }
  }, []);

  useEffect(() => {
    for (let key in filterTypes) {
      if (filterTypes[key]) {
        document.addEventListener('click', closeFilterModalHandler);
        document.addEventListener("keydown", closeFilterModalHandler);
      }
    }
  }, [filterTypes, closeFilterModalHandler]);

  const changeFilterHandler = (event) => {
    const filterType = event.target.dataset.filterType;
    const checkedFilters = [];

    const filterInputs = Array.from(document.querySelectorAll(`input[data-filter-type=${filterType}]`));
    filterInputs.map((input) => input.checked && checkedFilters.push(input.value));

    const filteredData = {
      ...currentFilter,
      [event.target.dataset.filterType]: checkedFilters,
    };

    filterApartmentsHandler(filteredData);
  };

  const resetClickHandler = () => {
    resetFiltersHandler();

    if (currentSortType !== SortType.NEWEST) {
      sortApartmentHandler(SortType.NEWEST);
    }
  };

  const toggleFilter = (event) => {
    event.preventDefault();

    const filterType = event.target.dataset.filterType;

    setFilterTypes({
      ...initialFilters,
      [filterType]: !filterTypes[filterType]
    });
  };

  const clickFilterButtonHandler = () => {
  };

  const createFilterTemplate = (filterType) => {
    const filterTypeToLowerCase = filterType.toLowerCase();
    let type = [];
    let legend = '';

    switch (filterType) {
      case 'Type':
        type = typeFilters;
        legend = 'Home Type';
        break;
      case 'Rooms':
        type = roomsFilter;
        legend = 'Rooms Type';
        break;
      case 'Price':
        legend = 'Price Type';

        for (let key in priceValue) {
          const newPrice = {
            value: key,
            label: `${priceValue[key].min} - ${priceValue[key].max}`
          };

          type.push(newPrice);
        }
        break;

      default: throw new Error('Something went wrong!');
    }

    const inputOptions = type.map((it) => {
      return <Input key={it.label} type="checkbox" changed={changeFilterHandler} label={it.label} value={it.value} input={{
        type: 'checkbox',
        id: it.value,
        value: it.value,
        'data-filter-type': filterTypeToLowerCase,
        checked: currentFilter[filterTypeToLowerCase].includes(it.value) ? true : '',
      }} />;
    });

    return (
      <div className={classes.WrapperFilter}>
        <Button type="button"
                className={classes.Button}
                clicked={toggleFilter}
                dataFilterType={filterTypeToLowerCase}
                disabled={props.disabled}>{filterType}</Button>

        <div className={[classes.FilterModal, filterTypes[filterTypeToLowerCase] ? classes.ActiveModal : ''].join(' ')}>
          <fieldset>
            <legend>{legend}</legend>
            {inputOptions}
            <Button type="button"
                    className={classes.ModalFilterButton}
                    clicked={toggleFilter}
                    dataFilterType={filterTypeToLowerCase}>Done</Button>
          </fieldset>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <button onClick={clickFilterButtonHandler} className={classes.FilterButton}>FilterButton</button>
      <form className={classes.Form}>

        {createFilterTemplate('Type')}
        {createFilterTemplate('Rooms')}
        {createFilterTemplate('Price')}

        <Button type="reset" className={[classes.Button, classes.Reset].join(' ')} clicked={resetClickHandler}>Reset</Button>
      </form>
    </Fragment>
  );
};

export default React.memo(ApartmentFilter);
