import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Test from "./components/use-reducer";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="card bg-light"
    >
      <div className="card">
        <Test></Test>
      </div>
    </div>
  );
};

export default App;
