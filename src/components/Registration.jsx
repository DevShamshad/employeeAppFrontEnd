import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  
    try {
      const response = await axios.post('https://employeeappbackend-2.onrender.com/registration/add', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = response.data;
  
      if (data.message) {
        setErrorMessage(data.message);
        alert(data.message);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-4">
      <h1 className="bg-red text-white">Registration form</h1>
      <div className="mt-4 flex justify-center bg-black ">
        <form onSubmit={handleSubmit} className="mt-8 mb-8">
          
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <div className="flex">
            <span className="text-white flex justify-start" style={{ width: 220 }}>
              Name
            </span>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-2 flex">
            <span className="text-white flex justify-start"  style={{ width: 220 }}>
              Designation
            </span>
            <Input
              type="text"
              name="designation"
              placeholder="Enter your designation"
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-2 flex">
            <span className="text-white flex justify-start"  style={{ width: 220 }}>
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
            <span className="text-white flex justify-start"  style={{ width: 220 }}>
              Contact
            </span>
            <Input
              type="tel"
              name="contact"
              placeholder="Enter your contact"
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2 flex">
            <span className="text-white flex justify-start"  style={{ width: 220}}>
              Password
            </span>
            <Input
              type="password"
              name="password"
              placeholder="Enter your contact"
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2 flex">
            <span className="text-white flex justify-start"  style={{ width: 220 }}>
              Confirm Password
            </span>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Enter your contact"
              onChange={handleInputChange}
            />
          </div>

          <Button
            type="submit"
            radius="none"
            className="mt-4 h-6 mr-8 text-white bg-emerald"
          >
            Register
          </Button>
          <div>


</div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
