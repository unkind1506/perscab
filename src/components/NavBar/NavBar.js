import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user }) {
  return (
    <nav className='navbar navbar-light justify-content-center align-self-xl-stretch'>
     <Link className='navbar-brand' to="/">Account</Link>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
     </button>
     <div className='collapse navbar-collapse' id="navbarSupportedContent">
      <ul className='navbar-nav mr-auto align-items-center align-content-center'>
      { user.isAuth
        ? (
          <>
            <li className='nav-item'>
              <Link className='nav-link' to="/logout">Logout</Link>
            </li>
          </>
        )
        : (
          <>
          <li className='nav-item'>
              <Link className='nav-link' to="/login">Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/signup"> SignUp </Link>
            </li>
          </>
        )}
      </ul>
     </div>
    </nav>
  );
}
export default NavBar;
