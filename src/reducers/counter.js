/* eslint-disable */
const counterReducer = (state = 0, action) => {
  const { amount } = action.payload || { amount: 1 };
  switch (action.type) {
    case "INCREMENT":
      return state + +amount;
    case "DECREMENT":
      return state - +amount;
    default:
      return state;
  }
};

export default counterReducer;
