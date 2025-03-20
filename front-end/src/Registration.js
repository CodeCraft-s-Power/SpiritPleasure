import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom'; // Додали Link
import Login from "./LoginComponents/Login";
import './style.css';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
            errorMessage: '', // стан для зберігання повідомлення про помилку
            redirectToLogin: false
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode
        }));
    };


    sendNewUserData = async () => {      //Запит для створення користувача
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;


        const userData = {
            username: username,
            email: email,
            password: password
        };

        try{
            const response = await fetch('http://127.0.0.1:8000/register/', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok){
                console.log(await response.text());
                this.setState({ redirectToLogin: true });
            }
            else{
                throw new Error("Registration failed, try one more time!");
            }
        }
        catch(error){
            this.setState({ errorMessage: error.message });
        }
    };


    render() {
        const { isDarkMode, errorMessage, redirectToLogin } = this.state;
        return (
            <div>
                <div className={`container ${isDarkMode ? 'dark-theme' : ''}`}>
                    <div className="left-pane">
                        <div className="logo-left-pane"></div>
                        <p className="logo-text"> SpiritPleasure</p>
                        <p className="logo-text2">насолодись Україною</p>
                    </div>
                    <div className="right-pane">
                        <div className="top-right">
                            <label className="slider">
                                <input type="checkbox" checked={isDarkMode} onChange={this.toggleTheme} value="true" />
                                <span className="slider-toggle"></span>
                            </label>
                            <div className="top-text">
                                <h1 className="Create-New-Account">CREATE NEW ACCOUNT</h1>
                                <h2 className="subtitle"> Already registered?  <Link to="/login" className="login-text"> Login </Link>
                                </h2>
                            </div>
                        </div>
                        <div className="bottom-right">
                            <div className="input-group">
                                <label className="Name" htmlFor="name">Name</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="input-group">
                                <label className="Email" htmlFor="name">E-mail</label>
                                <input type="text" id="email"/>
                            </div>
                            <div className="input-group">
                                <label className="Password" htmlFor="password">Password</label>
                                <input type="password" id="password"/>
                            </div>
                            <button className="Create-Account-button" onClick={this.sendNewUserData}>Create account
                            </button>
                            {this.state.redirectToLogin && <Navigate to="/login" />}
                            {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;

