import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivatRoute({ children, path, user }) {
  return (
    <Route path={path}>
            { user.isAuth ? children : <Redirect to='/login'/> }
        </Route>
  );
}

export default PrivatRoute;
