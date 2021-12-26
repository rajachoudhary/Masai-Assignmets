export const actionConstants = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER"
};

export const increment = () => ({
  type: actionConstants.INCREMENT_COUNTER
  // payload : amount
});
export const decrement = () => ({
  type: actionConstants.DECREMENT_COUNTER
  // payload:amount
});
