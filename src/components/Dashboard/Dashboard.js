import React from 'react';
import ContactList from '../ContactList/ContactList';

function Dashboard({ setUser, user }) {
  return (
        <ContactList setUser={setUser} user={user}/>
  );
}

export default Dashboard;
