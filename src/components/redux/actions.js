const increment = (amount = 1) => ({
  type: "INCREMENT",
  payload: { amount },
});

const decrement = (amount = 1) => ({
  type: "DECREMENT",
  payload: { amount },
});

export { increment, decrement };
