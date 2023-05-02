import React from 'react';
import Modal from '../Modal/Modal';

function Contact({ contact, deleteHandler, editHandler }) {
  const clickHandler = () => {
    deleteHandler(contact);
  };
  return (
        <div className="container-fluid d-flex justify-content-between mt-3 mb-3 p-3 bg-light">
            <Modal exampleModal={`${contact.name}${contact.id}`}contact={contact} editHandler={editHandler}/>
            <div className="d-flex justify-content-start">
              <p className="pr-3">Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
            </div>
            <div className="d-flex justify-content-end">
            <button onClick={clickHandler} type="button" className="btn btn-danger mr-3">Delete</button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${contact.name}${contact.id}`}>
                Edit
            </button>
            </div>
        </div>
  );
}

export default Contact;
