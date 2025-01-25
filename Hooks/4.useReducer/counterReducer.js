export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT_BY_AMOUNT":
      return { count: state.count + action.payload };
    case "DECREMENT_BY_AMOUNT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
