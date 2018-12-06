import React from 'react';

const Header = (props) => (
  <div className={`header-${props.title}`}>
    <h1>{props.title}</h1>
  </div>
);

export default Header;
