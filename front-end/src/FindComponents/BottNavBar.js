import React, {Component} from 'react';
import "./BottNavBar.css"
class BottomNavBar extends Component {
    render() {
        return (
            <div>
                <ul className="ulnavbar">
                    <li id="li-text"> <span className="custom-span">Spirit Pleasure</span>
                        <br/>
                        <span className='custom-span2'> насолодись Україною</span>
                    </li>
                    <li className="menu">Home</li>
                    <li className="menu1">Find</li>
                    <li className="menu">Liked</li>
                    <li className="menu">History</li>
                </ul>

            </div>
        );
    }
}

export default BottomNavBar;