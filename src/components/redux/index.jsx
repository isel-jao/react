/* eslint-disable */ /* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const ReduxComponent = () => {
  const stateCounter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const incrementCounter = (e) => dispatch(increment(2));
  const decrementCounter = (e) => dispatch(decrement());

  return (
    <div className="text-center card p-2">
      <div>state counter: {stateCounter}</div>
      <div>
        <button
          className="btn btn-outline-info mx-1"
          onClick={incrementCounter}
        >
          +
        </button>
        <button
          className="btn btn-outline-info mx-1"
          onClick={decrementCounter}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ReduxComponent;
