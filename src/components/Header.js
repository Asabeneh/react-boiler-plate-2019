import React from "react";
import PropTypes from "prop-types";

const Header = ({ firstName, lastName, title, year }) => (
  <header>
    <h1 className="header-title">{title}</h1>
    <h4>
      Teacher:{firstName} {lastName}
    </h4>
    <p>Year:{year}</p>
  </header>
);
Header.defaultProps  = {
title:'This is going to be the default title',
firstName:"David",
year:2019
}
Header.propTypes = {
  firstName:PropTypes.string.isRequired,
  lastName:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired

}

export default Header;
