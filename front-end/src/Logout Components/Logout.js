import React, { Component } from 'react';
import { useUser } from '../UserContext';
import { UserContext } from '../UserContext';
import "./Logout.css";
class Logout extends Component {
    static contextType = UserContext;
    handleLogout = async () => {
        const { setUserId, setIsLoggedIn } = this.context;

        try {
            const response = await fetch('http://127.0.0.1:8000/logout/', {
                method: "GET"
            });

            if (response.ok) {
                setUserId(null); // Скидаємо ідентифікатор користувача
                setIsLoggedIn(false); // Позначаємо користувача як неавторизованого
                console.log("Successfully logged out!");
            } else {
                console.log("Can't log out, something went wrong!");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    render() {
        return (
            <img className={"Logout"} src="" alt="" onClick={this.handleLogout}/>
        );
    }
}

export default Logout;