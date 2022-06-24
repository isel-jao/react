/* eslint-disable */ /* eslint-disable */
import React, { useState, useEffect, useRef } from "react";

const Modal = (props) => {
  const { user, updateUser, addUser, closeModal } = props;
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  return (
    <div className="card p-3">
      <input
        type="text"
        placeholder="name"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        ref={emailRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="d-flex mt-2 justify-content-between">
        <button
          className="btn btn-outline-success"
          onClick={() => {
            if (name && email) {
              if (user) {
                updateUser({ id: user.id, name, email });
              } else {
                addUser({ name, email, id: Date.now().toString() });
              }
              closeModal();
            }
          }}
        >
          save
        </button>
        <button className="btn btn-outline-danger" onClick={closeModal}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
