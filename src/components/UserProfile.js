import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({
        name: "Melchior",
        email: "melchior@example.com",
        bio: "Food lover & Recipe creator. Sharing my favorite meals!",
        followers: 1234,
        following: 456,
        posts: 78,
        profilePicture: "https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939436_1280.jpg",
        postImages: [
            "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=is&k=20&c=_WAbcCXxO927NToMhnQ3ERTdGXZVHPzHq7ENvzwFHj8=",
            "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg"
        ]
    });
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const [newPostImage, setNewPostImage] = useState(null);

    const handleEditProfile = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleProfilePictureChange = (e) => {
        setNewProfilePicture(URL.createObjectURL(e.target.files[0]));
    };

    const handlePostImageChange = (e) => {
        setNewPostImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSaveChanges = () => {
        if (newProfilePicture) {
            setUser(prevState => ({
                ...prevState,
                profilePicture: newProfilePicture
            }));
        }

        if (newPostImage) {
            setUser(prevState => ({
                ...prevState,
                postImages: [...prevState.postImages, newPostImage]
            }));
        }

        
        alert('Profile updated!');
        setShowModal(false);
    };

    return (
        <div className="user-profile-container">
            <div className="user-profile-header">
                <img src={user.profilePicture} alt="User Profile" className="user-profile-picture" />
                <div className="user-profile-details">
                    <h2>{user.name}</h2>
                    <p className="user-profile-bio">{user.bio}</p>
                    <div className="user-profile-stats">
                        <div><strong>{user.posts}</strong> Posts</div>
                        <div><strong>{user.followers}</strong> Followers</div>
                        <div><strong>{user.following}</strong> Following</div>
                    </div>
                </div>
                <button className="edit-profile-button" onClick={handleEditProfile}>
                    Edit Profile
                </button>
            </div>
            <div className="user-profile-info">
                <p>Email: {user.email}</p>
            </div>
            <div className="user-posts">
                <h3>Food Posts</h3>
                <div className="post-images">
                    {user.postImages.map((image, index) => (
                        <img key={index} src={image} alt={`Post ${index + 1}`} className="post-image" />
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Edit Profile</h2>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                        />
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                        <label>Bio:</label>
                        <textarea
                            name="bio"
                            value={user.bio}
                            onChange={handleInputChange}
                        />
                        <label>Profile Picture:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                        />
                        <label>Add a New Post Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePostImageChange}
                        />
                        <div className="modal-actions">
                            <button className="save-button" onClick={handleSaveChanges}>Save</button>
                            <button className="cancel-button" onClick={handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
