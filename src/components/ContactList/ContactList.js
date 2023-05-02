/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import AddForm from '../AddFrom/AddForm';
import Contact from '../Contact/Contact';
import SearchForm from '../SearchForm/SearchForm';

function ContactList({ user, setUser }) {
  const [error, setError] = useState(false);
  const [searchUser, setSearchUser] = useState(user);

  useEffect(() => {
    setSearchUser(user);
  }, [user]);
  const editHandler = (contact) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contactList: [...user.contactList.map((userContact) => {
          if (userContact.id === contact.id) {
            return contact;
          }
          return userContact;
        })]
      })
    })
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          serverData.isAuth = true;
          return setUser(serverData);
        }
        return setError('Server error');
      })
      .catch(() => setError('Server error'));
  };
  const deleteHandler = (contact) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contactList: [...user.contactList.filter((userContact) => userContact.id !== contact.id)]
      })
    })
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData) {
          serverData.isAuth = true;
          return setUser(serverData);
        }
        return setError('Server error');
      })
      .catch(() => setError('Server error'));
  };
  return (
        <div>
            <SearchForm user={user} setSearchUser={setSearchUser}/>
            <AddForm user={user} setUser={setUser}/>
            <div className='error'>
                {error}
            </div>
            {searchUser.contactList
              ? searchUser.contactList.map((contact) => (
                  <Contact
                  key={contact.id}
                  deleteHandler={deleteHandler}
                  editHandler={editHandler}
                  contact={contact}/>
              ))
              : null}
        </div>
  );
}

export default ContactList;
