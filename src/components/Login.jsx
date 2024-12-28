import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({});
  const [employeeData, setEmployeeData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://employeeappbackend-2.onrender.com/login", loginData)
      .then((response) => {
        if (response.data) {
          setEmployeeData(response.data);
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        setError("Error logging in");
      });
  };

  if (employeeData) {
    return <EmployeeData employeeData={employeeData} />;
  }

  return (
    <div>
      <h1 className="bg-red mt-4 text-white">Login Page!</h1>
      <div className="mt-4 flex justify-center bg-black ">
        <form onSubmit={handleSubmit} className="mt-8 mb-8">
          <div className="mt-2 flex">
            <span
              className="text-white flex justify-start"
              style={{ width: 150 }}
            >
              Email
            </span>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-2 flex">
            <span
              className="text-white flex justify-start"
              style={{ width: 150 }}
            >
              Password
            </span>
            <Input
              type="password"
              name="password"
              placeholder="Enter your contact"
              onChange={handleInputChange}
            />
          </div>

          <Button
            type="submit"
            radius="none"
            className="mt-4 h-6 mr-8 text-white bg-emerald"
          >
            Login
          </Button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}

const EmployeeData = ({ employeeData }) => {
  return (
    <div className="bg-black text-white">
    
      <h1 className="bg-red text-white mb-4 mt-4">Welcome {employeeData.name}!</h1>
      <p>Email: {employeeData.email}</p>
      <p>Name: {employeeData.name}</p>
      <p>Designation: {employeeData.designation}</p>
      <p>Contact: {employeeData.contact}</p>
    </div>
  );
};

export default Login;