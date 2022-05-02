import React, { useState } from 'react';
import style from './AddUser.module.css';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ErrorModal } from '../ui/ErrorModal';
import { Wrapper } from '../helpers/Wrapper';

export const AddUser = ({ setusers }) => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username an age(non empty values)'
      });
      return;
    }
    if(+age > 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (>0)'
      });
      return;
    }

    setusers(prev => [...prev, { username, age, id: Math.random().toString() }]);
    setUsername('');
    setAge('');
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {
        error &&        
        <ErrorModal 
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        >
        </ErrorModal>
      }
      <Card className={style.input}>
        <form className={style.form} onSubmit={handleOnSubmit}>
          <label htmlFor="username" className={style.label}>Username</label>
          <input
            id="username"
            type='text' 
            value={username} 
            onChange={(e) => setUsername(e.target.value) }
          />
          <label htmlFor='age'className={style.label}>Age (Years)</label>
          <input 
            id='age'
            type='number' 
            value={age}
            onChange={(e) => setAge(e.target.value) }
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </Wrapper>
  )
}
