import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="login-left">
                    <h3 className="login-logo">FACEBOOK</h3>
                    <span className="login-desc">
                        Lets connect with friends and the world around you on Facebook
                    </span>
                </div>
                <div className="login-right">
                    <div className="loginbox">
                        <input placeholder="Email" className="login-input" />
                        <input placeholder="Password" className="login-input" />
                        <button className="login-button">Login</button>
                        <span className="login-forget">Forgot Password?</span>
                        <button className="login-register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
