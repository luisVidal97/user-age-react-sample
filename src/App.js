import { useState } from 'react';
import style from './App.module.css';
import { AddUser } from './components/users/AddUser';
import { UsersList } from './components/users/UsersList';

function App() {

  const [users, setusers] = useState([]);

  return (
    <div className={style.app}>
        <AddUser setusers={setusers}/>
        <UsersList users={users} />
    </div>
  );
}

export default App;
