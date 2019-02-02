import React from 'react';
import PropTypes from 'prop-types';

const SocialLogin = (props) => {
    return (
      <div className="container-social-login">
        <h5 className="social-login-title">
          Login using...
        </h5>
        <div className="Github">
          <button className="btnGithub" onClick={() => props.handleGithubSignIn('Github')}>
            Github
          </button>
        </div>
        <div className="Facebook">
          <button className="btnfacebook">
            facebook
          </button>
        </div>
        <div className="signout" onClick={props.signOutUsers}>
          <button className="btnSignOut">
            Signout
          </button>
        </div>
        <p>Current user: {props.currentUser}</p>
      </div>
    );
  }

SocialLogin.propTypes = {
  handleGithubSignIn: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
}
export default SocialLogin;
