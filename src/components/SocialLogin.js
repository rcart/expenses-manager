import React from 'react';
import PropTypes from 'prop-types';

const SocialLogin = (props) => {
  return (
    <div className="wrapper social-login-container">
      <h5 className="social-login-title">
        You can save your items using: 
      </h5>
      <button className="button social-btn" onClick={() => props.handleSignIn('Github')}>
        <p>Github</p>
      </button>
      <button className="button social-btn" onClick={() => props.handleSignIn('Facebook')}>
        <p>Facebook</p>
      </button>
      <p>Current user: {props.currentUser}</p>
      <div className="signout">
        {props.currentUser !== 'anonymous' &&
        <button className="button social-tbn" onClick={props.signOutUsers}>
          <p>Sign Out</p>
        </button>
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
