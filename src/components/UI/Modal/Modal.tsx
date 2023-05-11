import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

import { ModalInterface } from '../../types/types';
import Button from '../Button/Button';
import classesButton from '../Button/Button.module.css';

const Backdrop = (props: ModalInterface) => {
  const { onClose } = props;

  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props: ModalInterface) => {
  const { className, children, onClose } = props;

  return (
    <div className={className}>
      <div className={classes.content}>
        <Button
          className={`${classesButton.button} ${classesButton['button-close']}`}
          type="button"
          onClick={onClose}>
          <div>
            <span></span>
            <span></span>
          </div>
        </Button>
        {children}
      </div>
    </div>
  );
};

const portalElement: HTMLElement = document.getElementById('overlays')!;

const Modal = (props: ModalInterface) => {
  const { onClose, className, children } = props;
  return (
    <React.Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay className={className} onClose={onClose}>{children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
