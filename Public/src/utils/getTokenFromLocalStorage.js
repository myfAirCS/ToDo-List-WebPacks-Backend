export const getTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem("AccessToken");
  const refreshToken = localStorage.getItem("RefreshToken");

  console.log("access : ", accessToken, "Refresh : ", refreshToken);

  return { accessToken, refreshToken };
};
