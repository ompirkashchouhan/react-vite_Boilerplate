import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
   const clickMe = ()=> alert("Hello, there wellcome ")
  return (
    <center>
      <h1>Welcome to Home Page </h1>
      <Button title={"Say, Hello"} clickMe={clickMe}/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </center>
  );
}

export default Home;
