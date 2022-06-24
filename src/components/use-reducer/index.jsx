/* eslint-disable */ /* eslint-disable */
import React, { useEffect, useState, useReducer, useRef } from "react";
import Modal from "./modal";
import { data, reducer } from "./utils";

const defaultState = {
  users: data,
  modal: {
    isOpen: false,
    user: null,
  },
};

const userReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const nameRef = useRef();
  const emailRef = useRef();

  const removeUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const openModal = (user) => {
    dispatch({ type: "OPEN_MODAL", payload: user });
  };
  const updateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
  };
  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };
  return (
    <div>
      <div className="users card p-3">
        {state.users.map((u) => {
          return (
            <div
              key={u.id}
              className="user  border-bottom d-flex align-items-center justify-content-between"
            >
              <div key={u.id}>
                <div className="h3 text-center">{u.name}</div>
                <div className="h3 text-center">{u.email}</div>
              </div>
              <div className="mx-2">
                <button
                  className=" btn btn-outline-danger rounded-circle"
                  onClick={() => removeUser(u.id)}
                >
                  X
                </button>
                <button
                  className="mx-2 px-3 btn btn-outline-success rounded-circle"
                  onClick={() => {
                    openModal(u);
                  }}
                >
                  i
                </button>
              </div>
            </div>
          );
        })}
        <button
          className="btn btn-dark rounded mx-auto mt-3"
          onClick={() => openModal(null)}
        >
          AddUser
        </button>
      </div>
      {state.modal.isOpen && (
        <Modal
          user={state.modal.user}
          addUser={addUser}
          updateUser={updateUser}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default userReducerComponent;
