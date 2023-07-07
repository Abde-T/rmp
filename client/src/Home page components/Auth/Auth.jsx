import React, { useState } from "react";
import Nav from "../Nav";
import SideBar from "../SideBar";
import Input from "./Input";
import { Button } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from '@react-oauth/google';
import Icon from "./icon";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = () => {};
  const handleShowPassword = () => setShowPassword(!showPassword);
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  return (
    <>
      <Nav />
      <SideBar />
      <div className="auth__container">
        <form className="auth__form">
          <div name="title">{isSignUp ? "Sign Up" : "Sign In"}</div>
          {isSignUp && (
            <>
              <div className="name__input">
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  className="auth_input"
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  className="auth_input"
                  half
                />
              </div>
            </>
          )}
          <Input
            className="auth_input-"
            name="email"
            label="Email Address"
            handleChange={handleChange}
            type="email"
          />
          <Input
            className="auth_input-"
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
          />
          {isSignUp && (
            <Input
              className="auth_input-"
              name="confirmPassword"
              label="Confirm Password"
              handleChange={handleChange}
              type="password"
            />
          )}
          <Button
            type="submit"
            className="auth_button"
            color="inherit"
            variant="containedInherit"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            onClick={switchMode}
            className="auth_button"
            variant="containedInherit"
            color="inherit"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Button>

          <GoogleOAuthProvider 
            >
          <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="" /> Sign in with google
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
          </GoogleOAuthProvider >
        </form>
      </div>
    </>
  );
};

export default Auth;
