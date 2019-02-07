import React from 'react';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import Avatar from './Avatar';

const SocialLogin = (props) => {
  return (
    <div>
      { props.currentUser.username === 'anonymous'
        ? <SignIn 
            handleSignIn={props.handleSignIn}
            signOutUsers={props.signOutUsers}
            currentUser={props.currentUser}
          />
        : <Avatar 
            currentUser={props.currentUser}
            signOutUsers={props.signOutUsers}
          />
      }
    </div>
  );
}

SocialLogin.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default SocialLogin;
