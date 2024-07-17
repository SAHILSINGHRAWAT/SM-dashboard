// src/components/UserProfile.js
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Category: {user.category}</p>
      <p>Bio: {user.bio}</p>
      <p>Contact: {user.contact}</p>
      <p>Links: {user.links}</p>
    </div>
  );
};

export default UserDetails;
