import React from "react";
import Form from "./Form";
import Layout from "../../Globals/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../config";

// Define the type for the task data
interface CreateData {
  title: string;
  dueDate: string;
  description: string;
}

const CreateTask: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateTask = async (data: CreateData) => {
    try {
      const response = await axios.post(`${baseURL}/task`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Layout>
      <Form type="Create" onSubmit={handleCreateTask} />
    </Layout>
  );
};

export default CreateTask;
