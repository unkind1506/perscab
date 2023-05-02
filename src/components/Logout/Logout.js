import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout({ setUser }) {
  const history = useHistory();
  useEffect(() => {
    setUser({ isAuth: false });
    history.push('/');
  });
  return (<div></div>);
}
export default Logout;
