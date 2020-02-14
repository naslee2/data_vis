import React from 'react'
import classes from '../Navbar/Navbar.module.css'

const navbar = (props) => (
    <header>
        <nav className={classes.Navbar}>
            <ul className={classes.Navlist}>
                <li><a href="#test">Visualization</a></li>
                <li><a href="#test">Options</a></li>
                <li><a href="#test">Dataset</a></li>
            </ul>
        </nav>
    </header>
);

export default navbar