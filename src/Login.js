/* eslint-disable no-empty-pattern */
import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateProviderValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateProviderValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h1>Sign in to <span style={{color:'tomato'}}>ShhhChat</span></h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
