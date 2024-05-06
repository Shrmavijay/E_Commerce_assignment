import React from "react";
import Form from "react-bootstrap/Form";

interface SliderProps {
  min: number;
  max: number;
  price: number;
  handleChange: any;
}

const Slider: React.FC<SliderProps> = ({ min, max, price, handleChange }) => {
  
  return (
    <>
      <Form.Label>Slide Range:</Form.Label>
      {/* <Form.Range min={min} max={max} onChange={handleChange} /> */}
      <input
        type="range"
        min={min}
        max={max}
        value={price}
        onChange={handleChange}
        style={{
          // background: `linear-gradient(to right, green ${price}%, #ccc ${price}%)`,
          backgroundColor: "green .15s ease-in-out",
          borderColor: ".15s ease-in-out",
          boxShadow: ".15s ease-in-out",
        }}
      />
    </>
  );
};

export default Slider;
