/* eslint-disable */
import React from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
  { id: 5, name: "Tom" },
  { id: 6, name: "Sam" },
  { id: 7, name: "Mary" },
];

const Home = () => {
  return (
    <div className="text-center">
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="text-center">
      <h1>About</h1>
    </div>
  );
};

const User = (props) => {
  const location = useLocation();
  console.log(location);
  const id = parseInt(useParams().id, 10);
  const user = users.find((user) => user.id === id);
  return (
    <div>
      <div className="text-center">
        <Link to={`/users/${user.id}/name`}>name</Link>
      </div>
      <div className="text-center">
        <Link to={`/users/${user.id}/id`}>id</Link>
      </div>
    </div>
  );
};

const UserName = () => {
  const id = parseInt(useParams().id, 10);
  const user = users.find((user) => user.id === id);
  return (
    <div className="text-center">
      <h1>{user.name}</h1>
    </div>
  );
};

const UserId = () => {
  const id = parseInt(useParams().id, 10);
  const user = users.find((user) => user.id === id);
  return (
    <div className="text-center">
      <h1>userId: {id}</h1>
    </div>
  );
};

const Users = () => {
  let navigate = useNavigate();
  const redirUser = (id) => {
    navigate(`/users/${id}`, { state: { from: "users" } });
  };
  return (
    <div className="text-center">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} state={{ from: "kldsfj" }}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div
      style={{ top: "2em", gap: "10px" }}
      className="d-flex position-absolute  justify-content-center "
    >
      <Link to="/">
        <button className="btn btn-outline-info">Home</button>
      </Link>
      <Link to="/about">
        <button className="btn btn-outline-info">About</button>
      </Link>
      <Link to="/test">
        <button className="btn btn-outline-info">Test</button>
      </Link>
      <Link to="/users">
        <button className="btn btn-outline-info">Users</button>
      </Link>
    </div>
  );
};

const RouterView = () => {
  return (
    <Routes>
      <Route index="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="test" element={<Test />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<User />}></Route>
      <Route path="users/:id/name" element={<UserName />} />
      <Route path="users/:id/id" element={<UserId />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

import Test from "./components/redux";
const App = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="card bg-light d-flex justify-content-center align-items-center"
    >
      <Nav />
      <RouterView />
    </div>
  );
};

export default App;
