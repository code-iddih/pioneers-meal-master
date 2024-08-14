import React from 'react';

function UserProfile() {
    // For demo purposes
    const user = {
      name: "Melchior",
      email: "melchior@example.com"
    };
  
    return (
      <div className="user-profile-container">
        <div className="user-profile-card">
          <img src="https://via.placeholder.com/150" alt="User Profile" />
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    );
  }
  
  export default UserProfile;
  