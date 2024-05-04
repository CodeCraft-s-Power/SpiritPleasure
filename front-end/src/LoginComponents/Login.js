import React, { Component } from 'react';
import {Navigate, NavLink} from "react-router-dom";
import { UserContext } from '../UserContext'; // Якщо ваш контекст експортується як UserContext
import './Login.css';
class Login extends Component {
    static contextType = UserContext; // Встановлюємо тип контексту

    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
            errorMessage: '',
            redirectToHome: false,
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode
        }));
    };

    userLogin = async () => {
        const user_name = document.getElementById("name")
        const user_password = document.getElementById("password")

        let userdata = {
            username: user_name.value,
            password: user_password.value
        }

        try{
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: "POST",
                body: JSON.stringify(userdata),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok){
                const data = await response.json();

                // Отримуємо функції з контексту
                const { setUserId, setIsLoggedIn } = this.context;

                // Встановлюємо стани через функції з контексту
                setUserId(data.user_id);
                setIsLoggedIn(true);

                this.setState({ redirectToHome: true });
                console.log("Successfully logged in", data.user_id);
            }
            else {
                console.log("Login failed");
                throw new Error("Failed to log in!");
            }
        }
        catch(error){
            this.setState({ errorMessage: error.message });
        }
    }

    render() {
        const { isDarkMode, errorMessage } = this.state;
        return (
            <div>
                <div className={`container ${isDarkMode ? 'dark-theme' : ''}`}>
                    <div className="left-pane1">
                        <div className="logo-left-pane1"></div>
                        <p className="logo-text1"> SpiritPleasure</p>
                        <p className="logo-text21">насолодись Україною</p>
                    </div>
                    <div className="right-pane1">
                        <div className="top-right1">
                            <label className="slider0">
                                <input type="checkbox" checked={isDarkMode} onChange={this.toggleTheme} value="true"/>
                                <span className="slider-toggle0"></span>
                            </label>
                            <div className="top-text1">
                                <h1 className="Login">LOGIN</h1>
                                <h2 className="subtitle1"> Don't have an account? <a target="" href="/registration" className="subtitle-text"> Create new account </a>
                                </h2>
                            </div>
                        </div>
                        <div className="bottom-right1">
                            <div className="input-group1">
                                <label className="Name1" htmlFor="name">Name</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="input-group1">
                                <label className="Password1" htmlFor="password">Password</label>
                                <input type="password" id="password"/>
                            </div>
                            <button className="Login-button" onClick={this.userLogin}>Login</button>
                            {this.state.redirectToHome && <Navigate to="/" />}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
