import React from "react";
const Header = ({ firstName, lastName, title, year }) => (
  <header>
    <h1 className="header-title">{title}</h1>
    <h4>Teacher:{firstName} {lastName}</h4>
    <p>Year:{year}</p>
  </header>
);

export default Header;
