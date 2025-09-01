import React from "react";
import Button from "../components/Button";


function About() {
  const clickMe = () => alert("Hi, there")
  return (
    <center>
      <h1>Welcome to About Page </h1>
      <Button title={"Say, Hi"} clickMe={clickMe}/>
    </center>
  );
}

export default About;
