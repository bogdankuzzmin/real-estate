import React from 'react';
import {connect} from 'react-redux';

import classes from './FavoriteButton.module.scss';
import {ReactComponent as HeartIcon} from '../../../../assets/icons/filled-heart.svg';

import {updateApartment} from '../../../../store/actions/apartment';

const favoriteButton = (props) => {
  const favoriteButtonClass = [classes.FavoriteButton];

  if (props.isFavorite) {
    favoriteButtonClass.push(classes.FavoriteButtonActive);
  }

  const clickFavoriteButtonHandler = (apartment) => {
    console.log(`add to favorite`);
    console.log(apartment);
    localStorage.setItem('favorite@' + apartment.id, !apartment.isFavorite);

    const updatedApartment = {
      ...apartment,
      isFavorite: !apartment.isFavorite,
    };

    props.updateApartment(updatedApartment);
  };

  return (
    <button onClick={() => clickFavoriteButtonHandler(props.apartment)} className={favoriteButtonClass.join(' ')}>
      <HeartIcon width="30" height="28"/>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateApartment: (updatedApartment) => dispatch(updateApartment(updatedApartment)),
  };
};

export default connect(null, mapDispatchToProps)(favoriteButton);
