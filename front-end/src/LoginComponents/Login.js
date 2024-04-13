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
                    <div className="left-pane">
                        <div className="logo-left-pane"></div>
                        <p className="logo-text"> SpiritPleasure</p>
                        <p className="logo-text2">насолодись Україною</p>
                    </div>
                    <div className="right-pane">
                        <div className="top-right">
                            <label className="slider">
                                <input type="checkbox" checked={isDarkMode} onChange={this.toggleTheme} value="true"/>
                                <span className="slider-toggle"></span>
                            </label>
                            <div className="top-text">
                                <h1 className="Login">LOGIN</h1>
                                <h2 className="subtitle"> Sign in to continue
                                </h2>
                            </div>
                        </div>
                        <div className="bottom-right">
                            <div className="input-group">
                                <label className="Name" htmlFor="name">Name</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="input-group">
                                <label className="Password" htmlFor="password">Password</label>
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