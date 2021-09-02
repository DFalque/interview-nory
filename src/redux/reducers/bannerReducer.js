export const bannerReducer = (state = true, action) => {
  if (action.type === "@banner/close") {
    return false;
  }
  return state;
};
