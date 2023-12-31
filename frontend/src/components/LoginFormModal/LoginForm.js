import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./LoginForm.css";
import { login } from "../../store/session";


function LoginForm({closeModal}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const currentUser = useSelector(state => state.session.user)

  const loginDemo = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(login({email: "demo@gmail.com", password: "password"}))
  }

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setErrors([]);
    
    return dispatch(sessionActions.login({ email, password }))
    .catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };
  
  useEffect(()=> {
    if (currentUser) {
      closeModal()
    }
  }, [currentUser])
  

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div className="loginHeader">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Log In</h2>
          <hr/>
          <h3>Welcome to Air Bnb</h3>

        </div>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label onClick={(e) => e.stopPropagation()}>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br/>
        <label onClick={(e) => e.stopPropagation()}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br/>
        <button className="loginBtn" type="submit">Log In</button>
        <br/>
        <button className="loginBtn" id="loginDemo" onClick={loginDemo}>Demo Login</button>

      </form>

    </div>

  );
}

export default LoginForm;