import React from 'react';
import { Card } from '../ui/Card';
import style from './UserList.module.css'


export const UsersList = ({users}) => {

  if(users.length === 0) return null;

  return (
    <Card className={style.users}>
      <ul>
        {
          users.map(user=> (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))
        }
      </ul>
    </Card>
  )
}
