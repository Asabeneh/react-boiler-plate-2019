import React from "react";
import PropTypes from 'prop-types';
const Main = ({ techs }) => {
  const techList = techs.map((tech, i) => <li key={"tech" + i}>{tech}</li>);
  return (
    <main>
      <p className="main-title">You should have the following technologies before you get started with React</p>
      <ul>{techList}</ul>
    </main>
  );
};
Main.propTypes = {
  techs:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Main;