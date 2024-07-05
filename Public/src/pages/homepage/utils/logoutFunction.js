import { removeValuesFormLocalStorage } from "../../../utils/removeValuesFromLocalStorage.js";
import { requestToRemoveRefreshToken } from "./requestToRemoveRefreshToken.js";

export const logoutFunction = async () => {
  const success = await requestToRemoveRefreshToken();
  if (!success) {
    alert("Issue While Logging Out!");
    return false;
  }
  removeValuesFormLocalStorage();

  alert("User Logged Out Succesfully");

  return true;
};
