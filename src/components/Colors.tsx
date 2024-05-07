import React from "react";
interface ColorsProps {
  color: String;
}

const Colors: React.FC<ColorsProps> = ({ color }) => {
  return (
    <div className="flex gap-1 text-center cursor-pointer" >
      <div
        style={{
          backgroundColor: `${color}`,
          height: "0.8rem",
          width: "0.8rem",
          borderRadius:'50%'
        }}
      ></div>
      <span style={{ fontWeight: 500, fontSize: "0.7rem" }}> {color}</span>
    </div>
  );
};

export default Colors;
