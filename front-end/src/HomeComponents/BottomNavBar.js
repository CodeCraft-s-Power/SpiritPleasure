import React, {Component} from 'react';
import "./BottomNavBar.css"
class BottomNavBar extends Component {
    render() {
        return (
            <div>
                <ul className="ulnavbar2">
                    <li id="li-text1"> <span className="custom-span1">Spirit Pleasure</span>
                        <br/>
                        <span className='custom-span2'> насолодись Україною</span>
                    </li>
                    <li>Home</li>
                    <li>Find</li>
                    <li>Liked</li>
                    <li>History</li>
                </ul>

            </div>
        );
    }
}

export default BottomNavBar;