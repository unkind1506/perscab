import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ setUser }) {
  const history = useHistory();
  const [inputs, setInputs] = useState({ userName: '', password: '' });
  const [error, setError] = useState(false);
  const { userName, password } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          const newUser = serverData.find((serverUser) => (
            (serverUser.name.trim().toLowerCase() === userName.trim().toLowerCase())
              && (serverUser.password === password)
          ));
          if (newUser) {
            newUser.isAuth = true;
            setUser(newUser);
            return history.push('/dashboard');
          }
        }
        return setError('Wrong userName or password');
      })
      .catch(() => setError('Wrong userName or password'));
  };
  return (
        <form onSubmit={handleSubmit}>
            <label>
                UserName:
                <input name='userName' type='text' required onChange={handleChange} value={ userName }/>
            </label>
            <label>
                Password:
                <input name='password' type='password' required onChange={handleChange} value={ password } />
            </label>
            <button type="submit">SignIn</button>
            <div className='error'>
                {error}
            </div>
        </form>
  );
}

export default Login;
