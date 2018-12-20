import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className={`header-${props.title}`}>
    <h1>{props.title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
