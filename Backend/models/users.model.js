import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function savePassword(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.comparePassword = async function (password) {
  const isPasswordValid = await bcrypt.compareSync(password, this.password);
  return isPasswordValid;
};

userSchema.methods.generateAccessToken = async function () {
  const token = await jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET_ACCESS,
    {
      expiresIn: process.env.JWT_SECRET_ACCESS_EXPIRY,
    }
  );
  return token;
};

userSchema.methods.generateRefreshToken = async function () {
  const token = await jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET_REFRESH,
    {
      expiresIn: process.env.JWT_SECRET_REFRESH_EXPIRY,
    }
  );
  return token;
};

export const User = model("User", userSchema);
