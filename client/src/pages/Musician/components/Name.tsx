import React from "react";

interface NameProps {
  name: string;
  className: string;
}

const Name: React.FC<NameProps> = ({ name, className }) => {
  return <span className={className}>{name}</span>;
};

export default Name;
