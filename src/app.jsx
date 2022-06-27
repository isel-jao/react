/* eslint-disable */
import React from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Users from "./pages/users";

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
