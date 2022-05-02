import React from 'react';
import style from './Form.module.css';
import { Button } from './ui/Button';

export const Form = () => {
  return (
    <form 
      className={style.form}
      onSubmit={(e)=> e.preventDefault()}
    >
      <label className={style.label}>Username</label>
      <input type='text' />
      <label className={style.label}>Age (Years)</label>
      <input type='text' />
      <Button>Add user</Button>
    </form>
  )
}
