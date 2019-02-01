import React from 'react';
import firebase from 'firebase';
import { auth } from './backend/Firebase';

class SocialLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleGithubSignIn = this.handleGithubSignIn.bind(this);
  }

  handleGithubSignIn(platform) {
    const provider = new firebase.auth[`${platform}AuthProvider`]();
    auth.signInWithPopup(provider)
      .then( res => console.log(res.user))
  }
  render() {
    return (
      <div className="container-social-login">
        <h5 className="social-login-title">
          Login using...
        </h5>
        <div className="Github">
          <button className="btnGithub" onClick={() => this.handleGithubSignIn('Github')}>
            Github
          </button>
        </div>
        <div className="Facebook">
          <button className="btnFacebook">
            Facebook
          </button>
        </div>
      </div>
    );
  }
}

export default SocialLogin;
