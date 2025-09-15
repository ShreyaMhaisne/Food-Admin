import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.css";

const Login = ({ url, setIsLoggedIn }) => {
  const [data, setData] = useState({ email: "shreya@gmail.com", password: "patil" });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/user/login`, data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token); // save token
          toast.success("Admin login successful!");
    setIsLoggedIn(true); // switch to admin panel
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>Admin Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={onChangeHandler}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
