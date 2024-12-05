import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormProps {
  type: "Login" | "Register";
  onSubmit: (data: FormData) => void;
}

type FormData = {
  email: string;
  password: string;
} & ( // Add username conditionally
  | { username: string } // For Register
  | { username?: undefined } // For Login
);

const Form: React.FC<FormProps> = ({ type, onSubmit }) => {
  const [data, setData] = useState<FormData>(
    type === "Register"
      ? { email: "", username: "", password: "" } // Register requires username
      : { email: "", password: "" } // Login does not require username
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Runtime check to ensure data matches expected structure
    if (type === "Register" && "username" in data && data.username) {
      onSubmit(data); // Valid Register data
    } else if (type === "Login") {
      onSubmit(data); // Valid Login data
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">
              {type === "Login" ? "Login here..." : "Register here..."}
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={data.email}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>

                  {type === "Register" && (
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="username"
                        name="username"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="Username"
                        onChange={handleChange}
                        value={"username" in data ? data.username : ""}
                        required
                      />
                      <label
                        htmlFor="username"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Username
                      </label>
                    </div>
                  )}

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                      value={data.password}
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              {type === "Register" ? (
                <Link to="/login" style={{ color: "blue" }}>
                  Go to Login
                </Link>
              ) : (
                <Link to="/register" style={{ color: "blue" }}>
                  Go to Register
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
