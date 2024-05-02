import React, {Component} from 'react';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode
        }));
    };

    render() {
        const {isDarkMode} = this.state;
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
                            <button className="Login-button">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;