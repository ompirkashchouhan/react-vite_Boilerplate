import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";


function About() {
  const clickMe = () => alert("Hi, there")
  return (
    <>
    <center>
      <h1>Welcome to About Page </h1>
      <Button title={"Say, Hi"} clickMe={clickMe}/>
    </center>
    <ul style={{listStyle : "none", display : "flex"}}>
            <li style={{marginRight: "30px"}}><Link to="/">Home</Link></li>
            <li style={{marginRight: "30px"}}><Link to="/about">About</Link></li>
            <li style={{marginRight: "30px"}}><Link to="/contact">Contact</Link></li>
    </ul>
    </>
  );
}

export default About;
