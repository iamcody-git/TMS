import React from "react";
import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../config";

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: LoginData) => {
    try {
      const response = await axios.post(`${baseURL}/login`, data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        alert("Failed to login");
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;
