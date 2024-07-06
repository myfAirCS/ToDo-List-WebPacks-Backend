import { getTokenFromLocalStorage } from "../../../../../utils/getTokenFromLocalStorage.js";

export const requestToRemoveRefreshToken = async () => {
  const { accessToken, refreshToken } = getTokenFromLocalStorage();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ accessToken, refreshToken }),
  };

  const respone = await fetch(
    "http://localhost:3000/api/v1/user/logout",
    options
  );

  if (respone.ok) {
    return true;
  }

  throw new Error("Can't Log Out");
};
