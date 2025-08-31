import React from "react";
import "../styles/button.css"

const Button = (props) => {
  return (
      <button onClick={props.clickMe} className="btn shimmer">{props.title}</button>

  );
};

export default Button;