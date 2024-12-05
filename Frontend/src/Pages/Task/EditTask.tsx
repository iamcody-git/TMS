import React from "react";
import Form from "./Form";
import Layout from "../../Globals/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../config";

// Define the type for the task data
interface EditData {
  title: string;
  dueDate: string;
  description: string;
}

const EditTask: React.FC = () => {
  const navigate = useNavigate();

  const handleEditTask = async (data: EditData) => {
    try {
      const response = await axios.put(`${baseURL}/task`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
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
      <Form type="Edit" onSubmit={handleEditTask} />
    </Layout>
  );
};

export default EditTask;
