import {useState} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import classes from './ItemApartment.module.scss';

import FavoriteButton from '../../UI/Button/FavoriteButton';

const NAVIGATION_PHOTOS_COUNT = 3;

const ItemApartment = (props) => {
  const {id, title, street, type, price, date, rooms, square, photos} = props.apartment;
  // console.log(props);

  const [imageURL, setImageURL] = useState(photos[0]);
  const [imageMorePhotosClass, setImageMorePhotosClass] = useState([classes.ImageMorePhotos]);

  const photosLength = photos.length;

  let imageNavigation = photos.slice(0, NAVIGATION_PHOTOS_COUNT).map((photo, index) => {
    return (
      <div className={classes.NavigationColumn}
           key={index}
           data-photo-index={index}>
        <span>decorative lines</span>
      </div>
    );
  });

  const mouseOverImageNavigationHandler = (event) => {
    const photoIndex = Number(event.target.dataset.photoIndex);
    const photo = photos[photoIndex];

    if (!photo) {
      return;
    }

    if (photoIndex === (NAVIGATION_PHOTOS_COUNT - 1) && photosLength > NAVIGATION_PHOTOS_COUNT) {
      setImageMorePhotosClass([...imageMorePhotosClass, classes.ImageMorePhotosShow]);
      event.target.addEventListener(`mouseout`, () => setImageMorePhotosClass([classes.ImageMorePhotos]));
    }

    setImageURL(photo);
  };

  return (
    <li className={classes.ItemApartment} style={{animationDelay: props.animationDelay}}>
      <FavoriteButton apartment={props.apartment} />

      <div className={classes.Image}>
        <Link to={`/buy/${id}`}>
          <div className={classes.ImageNavigation}
               onMouseOver={mouseOverImageNavigationHandler}>
            {imageNavigation}
          </div>
          <div className={imageMorePhotosClass.join(' ')}>+ {photosLength - NAVIGATION_PHOTOS_COUNT} фото</div>

          <img src={imageURL ? imageURL : '#'} alt="apartment" />
        </Link>
      </div>
      <div className={classes.Content}>
        <h3><Link to={`/buy/${id}`}>{title}</Link></h3>
        <div className={classes.Description}>
          <div className={classes.Description__row}>
            <div className={classes.Description__price}>$ {price}</div>
            <div>{type}</div>
            <div>{rooms}bd / {square}m<sup>2</sup></div>
          </div>
          <div className={classes.Description__row}>
            <div>{street}</div>
            <div>Date: {moment(date).format('MMMM Do YYYY')}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ItemApartment;
