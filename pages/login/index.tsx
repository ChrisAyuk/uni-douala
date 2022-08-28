import React from 'react'


const login = () => {
    return (
        <div classNam="login-container">
            <div className="login">
                <h1>Login</h1>
                <br />
                <div className="username">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" required/>
                </div>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default login;