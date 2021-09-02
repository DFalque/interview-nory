const initialState = { firstIcon: "active" };

export const navReducer = (state = initialState, action) => {
  if (action.type === "@nav/changeActiveLink") {
    return action.payload;
  }
  return state;
};
