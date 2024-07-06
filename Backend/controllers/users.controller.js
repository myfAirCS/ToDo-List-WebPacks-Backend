import { asyncWrapper } from "../utils/asyncWrapper.js";
import { User } from "../models/users.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";

const generateAccessAndRefreshToken = async (userid) => {
  const user = await User.findById(userid);

  if (!user) throw new apiError("Invalid User Id", "402");

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

const registerUser = asyncWrapper(async (req, res) => {
  const { fullName, email, password, username } = req.body;

  if (
    [fullName, email, password, username].some(
      (Element) => Element.trim() === ""
    )
  ) {
    throw new apiError("All Fields Required", 400);
  }
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existingUser) new apiError(409, "CREDENTIALS already Exist");

  const user = await User.create({
    fullName,
    email,
    password,
    username,
  });

  if (!user) throw new apiError("Failed To create User", 500);

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  console.log("Registered");
  res
    .status(200)
    .json(new apiResponse(200, "User Registered Successfully", createdUser));

  //ends here
});

const logInUser = asyncWrapper(async (req, res) => {
  const { email, username, password } = req.body;

  if (!(email || username))
    throw new apiError("Email or Username Required", 404);

  let user = await User.findOne({ $or: [{ username }, { email }] });

  if (!user) throw new apiError("Invalid Credentials", 404);

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) throw new apiError("Invalid Password", 402);

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  user = {
    ...user,
    accessToken,
    refreshToken,
  };

  console.log("Logged In");
  res
    .status(200)
    .cookie("AccessToken", accessToken)
    .cookie("RefreshToken", refreshToken)
    .json(new apiResponse(200, "User Logged In Successfully", user));
});

const logoutUser = asyncWrapper(async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(404).json(new apiError("User Not Logged In", 401));
    throw new apiError("User Not Logged In", 401);
  }

  const loggedOutUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  console.log("Logged Out");
  res
    .status(200)
    .clearCookie("AccessToken")
    .clearCookie("RefreshToken")
    .json(new apiResponse(200, "User Logged Out Successfully", {}));
});

const verifyUser = asyncWrapper(async (req, res) => {
  try {
    const user = req.user;
    if (!user) throw new apiError("Cookies Not Found", 401);

    const loggedInUser = await User.findById(user._id);

    if (!loggedInUser) throw new apiError("User NoT Logged In");
    res
      .status(200)
      .json(new apiResponse(200, "User Verified Successfully", user));
  } catch (error) {
    console.error("Error : ", error.message);

    throw new apiError("Server Issue" || error.message, 500);
  }
});

export { registerUser, logInUser, logoutUser, verifyUser };
