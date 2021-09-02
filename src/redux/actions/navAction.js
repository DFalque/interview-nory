export const changeActiveLink = (icon) => {
  return {
    type: "@nav/changeActiveLink",
    payload: { [icon]: "active" },
  };
};
