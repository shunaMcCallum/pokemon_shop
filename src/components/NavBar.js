import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleClick }) => {


    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/" onClick={handleClick}>Home</Link>
                    </li>

                    <li>
                        <Link to="/pokemon">Pokemon</Link>
                    </li>
                </ul>
            </div>

            <div>
                <header>
                    <h1>
                        The Pokemon Store
                    </h1>
                </header>
            </div>
        </div>
    )
}

export default NavBar;