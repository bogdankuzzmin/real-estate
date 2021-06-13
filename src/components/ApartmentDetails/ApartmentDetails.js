import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Thumbs, EffectFade} from 'swiper';
import moment from 'moment';

import classes from './ApartmentDetails.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/thumbs/thumbs.scss';

import WrapperLayout from '../../hoc/WrapperLayout';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';
import FavoriteButton from '../UI/Button/FavoriteButton';

import {fetchApartments} from '../../store/actions/apartment';

SwiperCore.use([Navigation, Thumbs, EffectFade]);

const ApartmentDetails = (props) => {
  window.scrollTo(0, 0);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    if (props.apartments.length === 0) {
      props.fetchApartments();
    }
  }, []);

  if (props.loading) {
    return <Spinner />;
  }

  const apartment = props.apartments.find(apartment => apartment.id === Number(props.apartmentId));

  if (!apartment) {
    return <p>It seems that apartment was deleted.</p>;
  }

  const {title, street, type, price, rooms, square, date, photos, isFavorite} = apartment;

  const slider = photos.map((photo, index) => (
    <SwiperSlide key={index}>
      <img src={photo} alt="" />
    </SwiperSlide>
  ));

  return (
    <section className={classes.ApartmentDetails}>
      <h2 className="visually-hidden">Apartment</h2>

      <WrapperLayout>
        <div className={classes.Columns}>
          <div className={classes.Gallery}>
            <div className={classes.MainPicture}>
              <FavoriteButton apartment={apartment} isFavorite={isFavorite} />

              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {slider}
              </Swiper>
            </div>
            <div className={classes.PreviewPictures}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
              >
                {slider}
              </Swiper>
            </div>
          </div>

          <div className={classes.ApartmentInfo}>
            {/*<div className={classes.ButtonsWrapper}>*/}
            {/*  <Button clicked={() => props.history.push('/buy' + props.location.search)}>Back</Button>*/}
            {/*</div>*/}

            <p><b>Title:</b> {title}</p>
            <p><b>Type:</b> {type}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Rooms:</b> {rooms}</p>
            <p><b>Square:</b> {square}m<sup>2</sup></p>
            <p><b>Street:</b> {street}</p>
            <p><b>Date:</b> {moment(date).format('MMMM Do YYYY')}</p>
          </div>
        </div>

        <p className={classes.Description}>Description: <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum, nobis. Ab aspernatur commodi cum distinctio dolore ducimus est et exercitationem hic illo in iste itaque modi nam obcaecati praesentium quaerat quia quibusdam quisquam quod saepe sapiente, sequi similique sint unde. Architecto asperiores aspernatur consequuntur cumque cupiditate debitis delectus dignissimos distinctio dolor doloribus eaque error excepturi facilis id iure maiores maxime, minus nesciunt nostrum numquam officiis perferendis porro possimus praesentium quidem quod, recusandae rerum saepe sapiente sed similique sunt tempore ullam vel veritatis vero voluptates! Atque beatae impedit maxime nisi vel. Asperiores, aspernatur assumenda consequatur cum debitis deleniti dignissimos distinctio dolorum eius enim excepturi expedita facere libero modi molestiae nesciunt odio quas quidem quos reiciendis temporibus veniam voluptatum? Ad aut beatae dolor dolorem doloremque doloribus dolorum ducimus eaque error et facere impedit incidunt ipsam ipsum itaque iure libero magni maiores minima molestiae molestias nemo neque nostrum obcaecati odio odit officia placeat, praesentium quam quis quod rerum similique suscipit tempore unde veritatis voluptate! Error facilis fugit minima! Aliquam amet animi asperiores beatae commodi delectus doloremque dolorum eligendi facilis fuga illo impedit iure molestias, nesciunt quaerat, quisquam rerum temporibus, tenetur veritatis voluptates. Dolorem eaque excepturi provident quis similique veniam voluptates? Deserunt, dolore?</p>
      </WrapperLayout>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    apartments: state.apartments.apartments,
    loading: state.apartments.loading,
    error: state.apartments.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApartmentDetails));
