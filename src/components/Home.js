import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Home() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>Welcome {user?.name}!</h2>
            <img src={user?.profilePicture} alt="Profile" className="profile-icon" />
            <p>Explore various meal categories and recipes.</p>
        </div>
    );
}

export default Home;
