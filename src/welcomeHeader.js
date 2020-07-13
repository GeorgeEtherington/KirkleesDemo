import React, { Component } from "react";

function welcomeHeader() {
  const style = {
    color: "white",
    background: "black",
    textAlign: "left",
    fontFamily: "Arial",
    padding: 10,
  };
  return (
    <div style={style}>
      <h1>Wellness Service</h1>
    </div>
  );
}

export default welcomeHeader;
