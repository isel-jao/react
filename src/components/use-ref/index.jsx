/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";

const userRefComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value", refInput.current.value);
  };
  // preserves value
  // does not trigger re-render
  //  target DOM nodes/elements
  const refInput = useRef();
  useEffect(() => {
    console.log("refInput", refInput);
    refInput.current.focus();
  }, []);
  return (
    <React.Fragment>
      <form className="form p-3 text-center" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refInput} />
          <button type="submit">submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default userRefComponent;
