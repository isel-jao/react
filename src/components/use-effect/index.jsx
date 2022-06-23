/* eslint-disable */
import React, { useState, useEffect } from "react";

const useEffectComponent = () => {
  const [value, setValue] = useState(0);
  const increment = () => setValue(value + 1);

  // // useEffect(() //  //
  // by default, useEffect runs after every render
  // clean up function is called after every render
  // if you want to run useEffect only when the component is mounted, you can pass an empty array as second argument
  useEffect(() => {
    document.title = `You clicked ${value} times`;
    return () => {
      console.log("clean up function", value);
    };
  }, [value]);

  return (
    <div className="p-2 text-center">
      <p>{value}</p>
      <button className="btn btn-outline-info" onClick={increment}>
        clickme
      </button>
    </div>
  );
};

export default useEffectComponent;
