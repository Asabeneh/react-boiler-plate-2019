import React from "react";
import PropTypes from 'prop-types';
const Footer = ({ year }) => (
  <footer>
    <p>Copyright &copy; {year}</p>
  </footer>
);

Footer.propTypes = {
  year:PropTypes.number.isRequired
}
export default Footer;
