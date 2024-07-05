export const setTokenToLocalStorage = (accessToken, refreshToken) => {
  localStorage.setItem("AccessToken", accessToken);
  localStorage.setItem("RefreshToken", refreshToken);
};
