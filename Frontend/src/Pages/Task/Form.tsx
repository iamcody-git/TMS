import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the props type
interface FormProps {
  type: "Edit" | "Create";
  onSubmit: (data: FormData) => void;  // Add onSubmit prop
}

// Define the state type
interface FormData {
  title: string;
  dueDate: string;
  description: string;
}

const Form: React.FC<FormProps> = ({ type, onSubmit }) => {
  const [data, setData] = useState<FormData>({
    title: "",
    dueDate: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);  // Call the onSubmit function passed via props
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              {type === "Edit" ? "Edit" : "Create"} <br /> Task
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title*"
                name="title"
                value={data.title}
                onChange={handleChange}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="DueDate*"
                name="dueDate"  // Corrected the name to match the state
                value={data.dueDate}
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Description"
                name="description"
                value={data.description}
                onChange={handleChange}
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                {type === "Edit" ? "Update Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
