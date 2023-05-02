/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignUp({ setUser }) {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({ email: '', username: '', password: '' });
  const { username, password } = inputs;
  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000000),
        name: username,
        password,
        contactList: []
      })
    }).then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          serverData.isAuth = true;
          setUser(serverData);
          return history.push('/dashboard');
        }
        return setError('Server error');
      })
      .catch(() => setError('Server error'));
  };
  return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input name='username' type='text' required onChange={handleChange} value={ username }/>
            </label>
            <label>
                Password:
                <input name='password' type='password' required onChange={handleChange} value={ password } />
            </label>
            <button type="submit">SignUp</button>
            <div className='error'>
                {error}
            </div>
        </form>
  );
}
export default SignUp;
