import { useState, useContext } from 'react';
import AppContext from './AppContext';

function ChangeProfile() {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    setUsername(newUsername);
    setNewUsername('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input onChange={(e) => setNewUsername(e.target.value)} value={newUsername} />
      <button type="submit">Change Username</button>
    </form>
  );
}

export default ChangeProfile;
