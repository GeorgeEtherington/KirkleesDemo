import React, { Component } from "react";

function TopBar() {
  const style = {
    color: "white",
    background: "black",
    textAlign: "center",
    fontFamily: "Arial",
    padding: 10,
  };
  return (
    <div>
      <h1 style={style}>Wellness Service</h1>
    </div>
  );
}

export default TopBar;
