import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Authenticate } from "../redux/action";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Just to check Admin I haven't added functionality
    dispatch(Authenticate(true))
    navigate("/admin")


   
  };

  return (
    <Box>
      
      <form onSubmit={handleSubmit}>
        <Box>
          <label>Email:</label>
          <Input type="email" value={email} onChange={handleEmailChange} required />
        </Box>
        <Box>
          <label>Password:</label>
          <Input type="password" value={password} onChange={handlePasswordChange} required />
        </Box>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
}

export default LoginPage;
