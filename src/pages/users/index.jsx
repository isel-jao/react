/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const User = (props) => {
  const { user, setUser } = props;
  const dispatch = useDispatch();
  return (
    <div
      style={{ gap: "1em" }}
      className="h3 border-bottom d-flex justify-content-between"
    >
      <div>{user.name}</div> <div>{user.email}</div>
      <div>
        <button
          className="me-2 btn btn-outline-info rounded"
          onClick={() => setUser(user)}
        >
          i
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            dispatch({
              type: "DELETE_USER",
              payload: user.id,
            });
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

const UsersList = ({ users, setUser }) => {
  return (
    <div>
      {users.map((user) => {
        return <User setUser={setUser} key={user.id} user={user} />;
      })}
    </div>
  );
};

const UpSertUser = (props) => {
  const { user, setUser } = props;
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const dispatch = useDispatch();
  return (
    <div className="card p-2 rounded">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-outline-info"
          onClick={() => {
            if (!user.id)
              dispatch({
                type: "ADD_USER",
                payload: {
                  name,
                  email,
                },
              });
            else
              dispatch({
                type: "UPDATE_USER",
                payload: {
                  id: user.id,
                  name,
                  email,
                },
              });

            setUser(null);
          }}
        >
          {user.id ? "update" : "add"}
        </button>
      </div>
    </div>
  );
};

const UsersPage = () => {
  const [user, setUser] = useState(null);
  const users = useSelector((state) => state.users);
  return (
    <div className="card p-2 rounded">
      <div className="text-center h1">users</div>
      <UsersList setUser={setUser} users={users} />
      {!user && (
        <button
          className="btn btn-outline-success"
          onClick={() => {
            setUser({ name: "", email: "" });
          }}
        >
          add user
        </button>
      )}
      {user && <UpSertUser setUser={setUser} user={user} />}
    </div>
  );
};

export default UsersPage;
