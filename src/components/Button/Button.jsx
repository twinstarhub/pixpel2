import React from "react";

const Button = ({ title }) => {
  return (
    <div className="bg-app-blue py-6 px-24 w-max text-black rounded-lg text-xl font-medium cursor-pointer">{title}</div>
  );
};

export default Button;
