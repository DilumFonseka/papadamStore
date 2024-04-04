import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");

  async function submit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
        usertype,
      });
  
      const { data } = response;
  
      if (data === "exist") {
        switch (usertype) {
          case "Regular Customer":
            history("/RegularCustomerHomePage", { state: { id: email } });
            break;
          case "Wholesale Buyer":
            history("/WholesaleBuyerHomePage", { state: { id: email } });
            break;
          case "Supplier":
            history("/SupplierHomePage", { state: { id: email } });
            break;
          default:
            alert("Invalid user type");
        }
      } else if (data === "notexist") {
        alert("User has not signed up");
      } else {
        alert("Wrong details");
      }
    } catch (e) {
      console.error("Error occurred:", e);
    }
  }
  

  return (
    <div className="login-container">
      

      <form action="POST">
      <h1>Admin Login</h1>

      <div className="form-group">

      <label htmlFor="email">Enter Email Address</label>
        <input type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        </div>

        <div className="form-group">

<label htmlFor="password">Enter Password</label>

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        </div>

        <div className="form-group">
        <label htmlFor="user-type">Select Usertype</label>

        <select
          value={usertype}
          onChange={(e) => setUserType(e.target.value)}
          className="user-type"
        >
          <option value="">Select User Type</option>
          <option value="Wholesale Buyer">Wholesale Buyer</option>
          <option value="Regular Customer">Regular Customer</option>
          <option value="Supplier">Supplier</option>
        </select>

        </div>
        
        <div className="form-but">
        <button type="submit" onClick={submit}> Login</button>
        </div>
      </form>

      
    </div>
  );
}

export default Login;
