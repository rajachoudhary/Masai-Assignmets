import { actionConstants } from "../Redux/Action";
export const reducer = (count = 5, action) => {
  switch (action.type) {
    case actionConstants.INCREMENT_COUNTER: {
      return count + 1;
    }
    case actionConstants.DECREMENT_COUNTER: {
      return count - 1;
    }
    default:
      return count;
  }
};
