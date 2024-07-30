import React, { useState } from 'react';
import { HashRouter as Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage ';
import RegistrationPage from './components/RegistrationPage ';
import AccountPage from './components/AccountPage ';

const App = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    //passing this function with its props
    const handleLogin = (username, password) => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setCurrentUser(user);
            return true;
        } else {
            return false;
        }
    };

    //passing this function with its props
    const handleRegister = (username, password) => {
        const userExists = users.some(user => user.username === username);
        if (!userExists) {
            const newUser = { username, password, image: '', address: '', phone: '' };
            setUsers([...users, newUser]);
            return true;
        } else {
            return false;
        }
    };

    //passing this function with its props
    const handleUpdate = (updatedUser) => {
        setUsers(users.map(user => (user.username === updatedUser.username ? updatedUser : user)));
        setCurrentUser(updatedUser);
    };

    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="/register" element={<RegistrationPage onRegister={handleRegister} />} />
                    <Route path="/account" element={currentUser ? <AccountPage user={currentUser} onUpdate={handleUpdate} /> : <Navigate to="/login" />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default App;