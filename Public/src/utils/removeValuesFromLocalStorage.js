export const removeValuesFormLocalStorage = () => {
  localStorage.removeItem("AccessToken");
  localStorage.removeItem("RefreshToken");
  localStorage.removeItem("userId");
};
