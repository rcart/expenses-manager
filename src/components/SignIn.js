import React from 'react';
import PropTypes from 'prop-types';

const SignIn = (props) => (
  <div className="wrapper social-login-container">
    <h5 className="social-login-title">
      Login Using:  
    </h5>
    <button className="button social-btn" onClick={() => props.handleSignIn('Github')}>
      <p>Github</p>
    </button>
    <button className="button social-btn" onClick={() => props.handleSignIn('Facebook')}>
      <p>Facebook</p>
    </button>
    <p>Current user: {props.currentUser.name}</p>
  </div>

)

SignIn.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
  signOutUsers: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default SignIn
