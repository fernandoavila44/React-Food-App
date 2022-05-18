import React from 'react';
import classes from './Modal.module.css'
import ReactDom from 'react-dom';

const Backdrop = props => {
    return (
        <div onClick={props.onClick} className={classes.backdrop} />
    );
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClick={props.setStateBackdrop}/>, document.getElementById('modal-root'))}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modal-root'))}
        </>
    )
}

export default Modal