import React from 'react';

function UserProfile() {
    // For demo purposes
    const user = {
      name: "Melchior",
      email: "melchior@example.com"
    };
  
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  export default UserProfile;
  