import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setAge(event.target.value);
  };

  const addUserHandler = event => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }

    setUsername('');
    setAge('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={username} />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
