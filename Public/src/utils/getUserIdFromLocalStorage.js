export const getUserIdFromLocalStorage = () => {
  const userId = localStorage.getItem("userId");
  console.log("userId : ", userId);
  return userId;
};
