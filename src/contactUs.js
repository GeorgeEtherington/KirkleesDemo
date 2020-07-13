import React, { Component } from "react";

function ContactUs() {
  const style = {
    color: "black",
    padding: 100,
    background: "white",
    textAlign: "left",
    fontFamily: "Arial",
  };
  return (
    <div style={style}>
      <h1>Contact Us</h1>
      <p>wellness.service@kirklees.gov.uk</p>
      <p>01484 234095</p>
    </div>
  );
}

export default ContactUs;
