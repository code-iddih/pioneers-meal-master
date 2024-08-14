import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import './UserProfile.css';
import { FaPen } from 'react-icons/fa';

function UserProfile() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        profilePicture: 'https://via.placeholder.com/150',
    });
    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        password: false,
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3001/users'); 
                const users = await response.json();
                const currentUser = users.find(user => user.username === 'kil'); 

                if (currentUser) {
                    setUser({
                        ...currentUser,
                        profilePicture: currentUser.profileImage || 'https://via.placeholder.com/150'
                    });
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        if (isLoggedIn) {
            fetchUserData();
        }
    }, [isLoggedIn]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profileImage', file);

            fetch(`http://localhost:3001/users/${user.id}/uploadProfileImage`, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setUser(prevUser => ({
                        ...prevUser,
                        profilePicture: data.profileImageUrl
                    }));
                    alert('Profile picture updated successfully!');
                } else {
                    alert('Failed to upload profile picture.');
                }
            })
            .catch(error => {
                console.error('Error uploading profile picture:', error);
                alert('Error uploading profile picture.');
            });
        }
    };

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`http://localhost:3001/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: user.name,
                    email: user.email,
                    password: user.password,
                    profileImage: user.profilePicture,
                }),
            });

            if (response.ok) {
                alert('Profile updated successfully!');
                setIsEditing({
                    name: false,
                    email: false,
                    password: false,
                });
            } else {
                const errorText = await response.text();
                console.error('Failed to update profile:', errorText);
                alert('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile.');
        }
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-card">
                <img src={user.profilePicture} alt="User Profile" className="profile-picture" />
                <div className="profile-field">
                    <label>Profile Picture:</label>
                    <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                </div>
                <h2>User Profile</h2>

                <div className="profile-field">
                    <label>Name:</label>
                    <div className="editable-field">
                        {isEditing.name ? (
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{user.name}</span>
                        )}
                        <FaPen
                            className="edit-icon"
                            onClick={() => setIsEditing(prev => ({ ...prev, name: !prev.name }))}
                        />
                    </div>
                </div>

                <div className="profile-field">
                    <label>Email:</label>
                    <div className="editable-field">
                        {isEditing.email ? (
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{user.email}</span>
                        )}
                        <FaPen
                            className="edit-icon"
                            onClick={() => setIsEditing(prev => ({ ...prev, email: !prev.email }))}
                        />
                    </div>
                </div>

                <div className="profile-field">
                    <label>Password:</label>
                    <div className="editable-field">
                        {isEditing.password ? (
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>********</span>
                        )}
                        <FaPen
                            className="edit-icon"
                            onClick={() => setIsEditing(prev => ({ ...prev, password: !prev.password }))}
                        />
                    </div>
                </div>

                <button onClick={handleSaveChanges} className="save-button">
                    Save Changes
                </button>
                <button onClick={logout} className="logout-button">
                    Sign Out
                </button>
            </div>
        </div>
    );
}

export default UserProfile;
