import React, { useState } from 'react';

function SearchForm({ user, setSearchUser }) {
  const [inputs, setInputs] = useState('');
  const changeHandler = ({ target }) => {
    setInputs(target.value);
    setSearchUser(() => {
      const newList = user.contactList.filter((el) => el.name.includes(target.value));
      return { ...user, contactList: newList };
    });
  };
  return (
        <label>
            Search:<input onChange={changeHandler} className="form-control" name='search' type='text' value={inputs}/>
        </label>
  );
}

export default SearchForm;
