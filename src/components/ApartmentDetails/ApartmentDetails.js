import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Thumbs, EffectFade} from 'swiper';

import classes from './ApartmentDetails.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/thumbs/thumbs.scss';

import WrapperLayout from '../../hoc/WrapperLayout';
import Button from '../UI/Button';

SwiperCore.use([Navigation, Thumbs, EffectFade]);

const ApartmentDetails = (props) => {
  window.scrollTo(0, 0);
  const {title, street, type, price, rooms, square, date, photos} = props.apartment;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slider = photos.map((photo, index) => (
    <SwiperSlide key={index}>
      <img src={photo} alt="" />
    </SwiperSlide>
  ));

  return (
    <article className={classes.ApartmentDetails}>
      <h2 className="visually-hidden">Apartment</h2>
      <WrapperLayout>

        <div className={classes.Columns}>
          <div className={classes.Gallery}>
            <div className={classes.MainPicture}>
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
            <div className={classes.ButtonsWrapper}>
              <Button clicked={() => props.history.push('/buy' + props.location.search)}>Back</Button>
              <Button clicked={() => console.log(`Doesn't do anything yet.`)} buttonType="Favorite">Add Favorite</Button>
            </div>

            <p>Title: {title}</p>
            <p>Type: {type}</p>
            <p>Price: {price}</p>
            <p>Rooms: {rooms}</p>
            <p>Square: {square}m<sup>2</sup></p>
            <p>Street: {street}</p>
            <p>Date: {moment(date).format('MMMM Do YYYY')}</p>
          </div>
        </div>

        <p>Description: <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum, nobis. Ab aspernatur commodi cum distinctio dolore ducimus est et exercitationem hic illo in iste itaque modi nam obcaecati praesentium quaerat quia quibusdam quisquam quod saepe sapiente, sequi similique sint unde. Architecto asperiores aspernatur consequuntur cumque cupiditate debitis delectus dignissimos distinctio dolor doloribus eaque error excepturi facilis id iure maiores maxime, minus nesciunt nostrum numquam officiis perferendis porro possimus praesentium quidem quod, recusandae rerum saepe sapiente sed similique sunt tempore ullam vel veritatis vero voluptates! Atque beatae impedit maxime nisi vel. Asperiores, aspernatur assumenda consequatur cum debitis deleniti dignissimos distinctio dolorum eius enim excepturi expedita facere libero modi molestiae nesciunt odio quas quidem quos reiciendis temporibus veniam voluptatum? Ad aut beatae dolor dolorem doloremque doloribus dolorum ducimus eaque error et facere impedit incidunt ipsam ipsum itaque iure libero magni maiores minima molestiae molestias nemo neque nostrum obcaecati odio odit officia placeat, praesentium quam quis quod rerum similique suscipit tempore unde veritatis voluptate! Error facilis fugit minima! Aliquam amet animi asperiores beatae commodi delectus doloremque dolorum eligendi facilis fuga illo impedit iure molestias, nesciunt quaerat, quisquam rerum temporibus, tenetur veritatis voluptates. Dolorem eaque excepturi provident quis similique veniam voluptates? Deserunt, dolore?</p>
      </WrapperLayout>
    </article>

  );
};

export default withRouter(ApartmentDetails);