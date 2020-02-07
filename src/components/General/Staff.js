import React from "react";
import BusinessCard from "./BusinessCard";

const Staff = ({ staffData }) => (
  <>
    {staffData.map((emp, index) => (
      <BusinessCard emp={emp} key={index} />
    ))}
  </>
);

export default Staff;
