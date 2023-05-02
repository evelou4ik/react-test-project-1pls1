import React from 'react';
import {createPortal} from "react-dom";

import classes from './Modal.module.css'

const Backdrop = (props:any) => {
    const {onClose} = props;
    return <div className={classes.backdrop} onClick={onClose}/>
}

const ModalOverlay = (props:any) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement: any = document.getElementById('overlays');

const Modal = (props:any) => {
    const {onClose} = props;
    return (
        <React.Fragment>
            {createPortal(<Backdrop onClose={onClose}/>, portalElement )}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    );
};

export default Modal;