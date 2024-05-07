import React from "react";
import Form from "react-bootstrap/Form";

interface SliderProps {
  max: number;
  price: number;
  handleChange: any;
}

const Slider: React.FC<SliderProps> = ({ max, price, handleChange }) => {
  
  return (
    <>
      <Form.Label>Slide Range:</Form.Label>
      <input
        type="range"
        min={0}
        max={max}
        value={price}
        onChange={handleChange}
        style={{
          backgroundColor: "green .15s ease-in-out",
          borderColor: ".15s ease-in-out",
          boxShadow: ".15s ease-in-out",
        }}
      />
    </>
  );
};

export default Slider;
