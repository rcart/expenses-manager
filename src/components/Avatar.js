import React from 'react';

const Avatar = (props) => (
  <div className="wrapper avatar-container">
    <h3 className="avatar-welcome">Welcome, {props.currentUser.name}</h3>
    <img className="avatar-pict" src={props.currentUser.avatar} alt="User Profile" />
    <button className="button social-tbn" onClick={props.signOutUsers}>
      <p>Sign Out</p>
    </button>
  </div>
)

export default Avatar;
