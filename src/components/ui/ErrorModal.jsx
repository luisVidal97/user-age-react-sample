import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import {Card} from './Card';
import {Button} from './Button';
import style from './ErrorModal.module.css';

const Backdrop = props => {
  return <div className={style.backdrop} onClick={props.errorHandler}></div>;
};

const ModalOverlay = props => {
  return(
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button 
          type='button' 
          onClick={props.errorHandler}
        >Okay</Button>
      </footer>
    </Card>
  );
};

export const ErrorModal = (props) => {
  return (
    <Fragment>
      { 
        ReactDom.createPortal( <Backdrop errorHandler={props.errorHandler} />, document.getElementById('backdrop-root') ) 
      }
      { 
        ReactDom.createPortal( 
          <ModalOverlay title={props.title} message={props.message} errorHandler={props.errorHandler}/>, 
          document.getElementById('modal-root') 
        ) 
      }
    </Fragment>
  )
}
