import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import NavBar from './components/NavBar/NavBar';
import PrivatRoute from './components/PrivatRoute/PrivatRoute';
import SignUp from './components/SignUp/SignUp';

function App() {
  const windowUser = JSON.parse(window.localStorage.getItem('user'));
  const [user, setUser] = useState(windowUser);

  if (!user) {
    setUser({ isAuth: false });
  }

  useEffect(() => {
    if (user) window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div className='container-fluid d-flex flex-column align-items-center align-content-center' style={{ padding: 0, height: '100vh' }}>
    <Router>
      <NavBar user={user}/>
      <Switch>
        <Route exact path='/'> { user ? <Redirect to='/dashboard'/> : <Redirect to='/login'/>} </Route>
        <Route path='/login'><Login setUser={setUser} /></Route>
        <Route path='/signup'><SignUp setUser={setUser} /></Route>
        <Route path='/logout'><Logout setUser={setUser} /></Route>
        <PrivatRoute path='/dashboard' user={user}><Dashboard setUser={setUser} user={user}/></PrivatRoute>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
