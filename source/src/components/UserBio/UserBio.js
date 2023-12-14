import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserBio() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [avatar, setAvatar] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = (e) => {
        e.preventDefault();
        // Validate input and perform password change logic
        if (!password || !newPassword || !confirmPassword) {
            alert('Please fill in all password fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match');
            return;
        }

        // Call your update password function with the necessary parameters
        // updatePasswordFunction(password, newPassword);
        alert('Password changed successfully');
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Validate input and perform profile update logic
        if (!phoneNumber || !gender || !avatar) {
            alert('Please fill in all fields');
            return;
        }

        // Call your update profile function with the necessary parameters
        // updateProfileFunction(phoneNumber, gender, avatar);
        alert('Profile updated successfully');
    };

    return (
        <div className="bio">
            <form className="bio-container">
                <h1>My Profile</h1>

                {/* Change Password Section */}
                <div className="bio-section">
                    <h2>Change Password</h2>
                    <input type="password" placeholder="Current Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button onClick={handleChangePassword}>Change Password</button>
                </div>

                {/* Update Profile Section */}
                <div className="bio-section">
                    <h2>Update Profile</h2>
                    <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <input type="text" placeholder="Avatar URL" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                    <button onClick={handleUpdateProfile}>Update Profile</button>
                </div>

            </form>
        </div>
    );
}

export default UserBio;
