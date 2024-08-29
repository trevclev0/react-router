import { useContext } from 'react';
import ChangeProfile from '../ChangeProfile';
import AppContext from '../AppContext';

export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>
        This is the profile page and the username is:
        {username}
      </h1>
      <ChangeProfile />
    </div>
  );
}
