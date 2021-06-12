import {Fragment, useEffect} from 'react';
import {createPortal} from 'react-dom';

import Backdrop from '../Backdrop';

import classes from './Modal.module.scss';

const Modal = props => {
  useEffect(() => {
    const modalCloseHandler = (event) => {
      if (event.key === 'Escape') {
        props.hide();
      }
    };

    window.addEventListener('keydown', modalCloseHandler);

    return () => window.removeEventListener('keydown', modalCloseHandler);
  }, []);

  const modal = (
    <Fragment>
      <div className={classes.Modal}>
        <button type="button"
                className={classes.CloseModalButton}
                aria-label="close modal"
                onClick={props.hide} />
        {props.children}
      </div>

      <Backdrop show={props.show} clicked={props.hide} />
    </Fragment>
  );

  const portalElement = document.getElementById('modal');

  return createPortal(modal, portalElement);
};

export default Modal;
