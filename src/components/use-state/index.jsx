import React, { useState } from "react";
import "./index.css";
const useStateExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const increment1 = () => setCount1(count1 + 1);

  const increment2 = () => {
    setTimeout(() => {
      setCount2(count2 + 1);
    }, 1000);
  };
  const increment3 = () => {
    setTimeout(() => {
      setCount3((prevState) => prevState + 1);
    }, 1000);
  };
  return (
    <div className="d-flex text-center p-2">
      <div className="mx-2">
        <p className="text-info">Count1: {count1} </p>
        <button className="btn btn-outline-info" onClick={increment1}>
          Count1++
        </button>
      </div>
      <div className="mx-2">
        <p className="text-info">Count2: {count2} </p>
        <button className="btn btn-outline-info" onClick={increment2}>
          Count1++
        </button>
      </div>
      <div className="mx-2">
        <p className="text-info">Count2: {count3} </p>
        <button className="btn btn-outline-info" onClick={increment3}>
          Count3++
        </button>
      </div>
    </div>
  );
};

export default useStateExample;
