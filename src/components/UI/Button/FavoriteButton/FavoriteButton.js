import React from 'react';
import {connect} from 'react-redux';

import classes from './FavoriteButton.module.scss';
import {ReactComponent as HeartIcon} from '../../../../assets/icons/filled-heart.svg';

import {addApartmentToFavoriteHandler, updateApartment} from '../../../../store/actions/apartment';

const favoriteButton = props => {
  const {apartment} = props;
  const favoriteButtonClass = [classes.FavoriteButton];

  if (apartment.isFavorite) {
    favoriteButtonClass.push(classes.FavoriteButtonActive);
  }

  const clickFavoriteButtonHandler = (apartment) => {
    props.addApartmentToFavoriteHandler(apartment);
  };

  return (
    <button onClick={() => clickFavoriteButtonHandler(apartment)} className={favoriteButtonClass.join(' ')}>
      <HeartIcon width="30" height="28"/>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateApartment: (updatedApartment) => dispatch(updateApartment(updatedApartment)),
    addApartmentToFavoriteHandler: (apartment) => dispatch(addApartmentToFavoriteHandler(apartment)),
  };
};

export default connect(null, mapDispatchToProps)(favoriteButton);
