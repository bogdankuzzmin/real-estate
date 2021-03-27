import React from 'react';

import classes from './FavoriteButton.module.scss';
import {ReactComponent as HeartIcon} from '../../../../assets/icons/filled-heart.svg'

const favoriteButton = (props) => {
  const favoriteButtonClass = [classes.FavoriteButton];

  if (props.isFavorite) {
    favoriteButtonClass.push(classes.FavoriteButtonActive);
  }

  return (
    <button onClick={props.clicked} className={favoriteButtonClass.join(' ')} aria-label="dasdas">
      <HeartIcon width="30" height="28"/>
    </button>
  );
};

export default favoriteButton;
