
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

function TopNavBar() {

    return (
        <div className="slider-button">
            <div className="Exit-button">
                <NavLink to="/login">
                    <button className="exit-button-button"></button>
                </NavLink>
            </div>
            <label className="slider">
                <input type="checkbox" />
                <span className="slider-toggle"></span>
            </label>
        </div>
    );
}

export default TopNavBar;
