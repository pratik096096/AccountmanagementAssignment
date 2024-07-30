import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = ({ user, onUpdate }) => {
    const [image, setImage] = useState(user.image);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const navigate = useNavigate();

    //reads file and displays it on screen
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ ...user, image, address, phone });
        alert("Updated successfully");
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <h2>Account Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleImageChange}
                    />
                    {image && <img src={image} alt="User" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
};

export default AccountPage;