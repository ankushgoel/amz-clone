import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //some firebase signin stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //signIn successfull
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();

    //some firebase signup stuff
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //account creation successfull
        // console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://techaccess.org/wp-content/uploads/2017/03/amazon-logo-copy.png"
          alt="amazon-logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>
        <div className="login__new">
          <small>New to Amazon?</small>
          <hr />
        </div>
        <button onClick={signUp} className="login__signUpButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
