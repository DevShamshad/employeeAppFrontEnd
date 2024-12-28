import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Card,
  CardBody,
} from "@nextui-org/react";

function Employee() {
  const [empData, setEmpData] = useState([]);

  const fetchEmpData = async () => {
    try {
      const response = await axios.get("https://employeeappbackend-2.onrender.com/employee");
      const data = response.data;
      setEmpData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmpData();
  }, []);

  return (
    <>
    <div>
      <h1 className="text-black mt-2">All Registered Employess are listed below</h1>
    </div>
    <div className="flex flex-wrap justify-evenly mt-4">
      {empData.map((Emp, index) => (
        <Card key={Emp.id || index} className="max-w-[200px] bg-black text-white mt-2">
          <CardBody>
            <p>Name: {Emp.name}</p>
            <p>Designation: {Emp.designation}</p>
            <p>Contact: {Emp.contact}</p>
          </CardBody>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Employee;