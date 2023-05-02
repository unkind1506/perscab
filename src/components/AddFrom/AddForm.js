/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddForm({ user, setUser }) {
  const history = useHistory();
  const [error, setError] = useState(false);

  const [inputs, setInputs] = useState({ nameContact: '', email: '' });
  const { nameContact, email } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contactList: [
          ...user.contactList,
          { name: nameContact, email, id: Math.floor(Math.random() * 1000000) }]
      })
    })
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          serverData.isAuth = true;
          setUser(serverData);
          setInputs({ nameContact: '', email: '' });
          return history.push('/dashboard');
        }
        return setError('Server error');
      })
      .catch(() => setError('Server error'));
  };

  return (
        <form className="form-group bg-dark text-light p-3" onSubmit={handleSubmit}>
            <h2>Add new contact</h2>
            <label>
                UserName:
                <input className="form-control" name='nameContact' type='text' required onChange={handleChange} value={ nameContact }/>
            </label>
            <label className="ml-3">
                Email:
                <input className="form-control" name='email' type='email' required onChange={handleChange} value={ email }/>
            </label>
            <button type="submit" className="btn btn-light ml-3">Add</button>
            <div className='error'>
                {error}
            </div>
        </form>
  );
}

export default AddForm;
