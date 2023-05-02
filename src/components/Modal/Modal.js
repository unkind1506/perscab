import React, { useState } from 'react';

function Modal({ contact, editHandler, exampleModal }) {
  const [inputs, setInputs] = useState({ nameContact: contact.name, email: contact.email });
  const { nameContact, email } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = () => {
    editHandler({ name: nameContact, email, id: contact.id });
  };
  return (
    <div className="modal fade" id={exampleModal} tabIndex="-1" role="dialog" aria-labelledby={`${exampleModal}Label`} aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id={`${exampleModal}Label`}>Edit form</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
        <label>
                UserName:
                <input name='nameContact' type='text' required onChange={handleChange} value={ nameContact }/>
            </label>
            <label>
                Email:
                <input name='email' type='email' required onChange={handleChange} value={ email }/>
            </label>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" onClick={handleSubmit} className="btn btn-primary" data-dismiss="modal">Save changes</button>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Modal;
