import React from 'react';
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";

export default function SendEmail() {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo"/>

                <h1 className="title">E-mail has been sent</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
            
                <div className="email-image">
                    <img src={email} alt="email"/>
                </div>

                <button className="pimary-button login-button">Login</button>

                <p className="resend">
                    <span>Didn't recieve the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    )
}
