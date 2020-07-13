import React, { Component } from "react";

function Header() {
  const ulStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 10,
    overflow: "hidden",
    fontFamily: "Arial",
  };
  return (
    <div>
      <ul style={ulStyle}>
        <li style={{ float: "left" }}>
          <a
            style={{
              display: "block",
              color: "black",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            Kirklees
          </a>
        </li>

        <li style={{ float: "right" }}>
          <a
            style={{
              display: "block",
              color: "black",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            Make A Payment
          </a>
        </li>
        <li style={{ float: "right" }}>
          <a
            style={{
              display: "block",
              color: "black",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            Menu
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
