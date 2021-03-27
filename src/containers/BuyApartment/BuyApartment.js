import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {fetchApartments, increaseApartmentCount} from '../../store/actions/apartment';

import classes from './BuyApartment.module.scss';


import WrapperLayout from '../../hoc/WrapperLayout';
import Spinner from '../../components/UI/Spinner';
import Button from '../../components/UI/Button';
import ListApartment from '../../components/ListApartments';


const BuyApartment = (props) => {
  useEffect(() => {
    if (props.apartments.length === 0) {
      props.fetchApartments();
    }
  }, []);

  const clickApartmentHandler = (id) => {
    props.history.push(props.location.pathname + '/' + id);
  };

  const clickMoreApartmentsHandler = () => {
    props.increaseApartmentCount();
  };

  if (props.loading) {
    return <Spinner />;
  }

  let moreApartmentsButton;
  if (props.apartments.length >= props.count) {
    moreApartmentsButton = (
      <Button clicked={clickMoreApartmentsHandler}>More Apartments</Button>
    );
  }

  return (
    <section className={classes.BuyApartment}>
      <h2 className="visually-hidden">Buy Apartments</h2>
      <WrapperLayout>
        <ListApartment apartments={props.apartments.slice(0, props.count)} clicked={clickApartmentHandler} />

        {moreApartmentsButton}
      </WrapperLayout>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    apartments: state.apartments,
    loading: state.loading,
    error: state.error,
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
    increaseApartmentCount: () => dispatch(increaseApartmentCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuyApartment));
