import React from 'react';
import PropTypes from 'prop-types';

const SocialLogin = (props) => {
  return (
    <div className="wrapper social-login-container">
      <h5 className="social-login-title">
        You can save your items using: 
      </h5>
      <span className="social-btn" onClick={() => props.handleSignIn('Github')}>
        <p>Github</p>
      </span>
      <span className="social-btn" onClick={() => props.handleSignIn('Facebook')}>
        <p>Facebook</p>
      </span>
      <p>Current user: {props.currentUser}</p>
      <div className="signout">
        {props.currentUser !== 'anonymous' &&
        <span className="social-tbn" onClick={props.signOutUsers}>
          <p>Sign Out</p>
        </span>
        }
      </div>
    </div>
  );
}

SocialLogin.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
}
export default SocialLogin;
