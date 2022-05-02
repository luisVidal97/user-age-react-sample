import React from 'react';
import {Card} from './Card';
import {Button} from './Button';
import style from './ErrorModal.module.css';

export const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.errorHandler}>
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
      </div>
    </div>
  )
}
