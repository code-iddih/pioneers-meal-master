function UserProfile() {
    // For demo purposes, static user data is shown
    const user = {
      name: "John Doe",
      email: "john.doe@example.com"
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
  