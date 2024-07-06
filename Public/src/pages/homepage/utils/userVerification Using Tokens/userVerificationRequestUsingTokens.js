import { getTokenFromLocalStorage } from "../../../../utils/getTokenFromLocalStorage";

export const userVerificationRequestUsingTokens = async () => {
  const { accessToken, refreshToken } = getTokenFromLocalStorage();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/user/verifyuser`,
    options
  ).then((data) => data.json());

  console.log("Resp : ", response);

  return response.success;
};
