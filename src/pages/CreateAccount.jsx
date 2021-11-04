import React from 'react';
import "../styles/CreateAccount.scss"
import Header from '../components/Header';

export default function CreateAccount() {
    return (
        <><Header /><div className="login">
            <div className="form-container">
                <h1 className="title">My Account</h1>
                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">Name</label>
                        <input type="text" id="name" placeholder="Ramon" className="input input-name" />

                        <label for="email" className="label">Email</label>
                        <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />

                        <label for="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" />
                    </div>
                    <input type="submit" value="Create" className="pimary-button login-button" />
                </form>
            </div>
        </div></>
    )
}
