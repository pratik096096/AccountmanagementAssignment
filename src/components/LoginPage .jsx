import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //it receives a onLogin props from the login function from App.js
    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedIn = onLogin(username, password);
        if (loggedIn) {
            navigate('/account');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button  className="btn btn-secondary" onClick={()=>navigate('/register')}>Register</button>
            </form>
        </div>
    );
};

export default LoginPage;