import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../config";
import axios from "axios";

interface RegisterData {
  email: string;
  username?: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = async (data: RegisterData) => {
    try {
      const response = await axios.post(`${baseURL}/register`, data);

      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("Failed to register");
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <Form type="Register" onSubmit ={handleRegister} />
    </>
  );
};

export default Register;
