import React from "react";
import Button from "../components/Button";

function Contact() {
  const clickMe = () => alert("Greetings")
  return (
    <center>
      <h1>Welcome to Contact Page </h1>
      <Button title={"Wellcome"} clickMe={clickMe} />
    </center>
  );
}

export default Contact;