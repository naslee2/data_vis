import React from 'react'
import classes from '../Navbar/Navbar.css'

const navbar = (props) => (
    <header>
        <nav>
            <ul className={classes.Navlist}>
                <li><a href="#test">test 1</a></li>
                <li><a href="#test">test 2</a></li>
                <li><a href="#test">test 3</a></li>
            </ul>
            <p className={classes.Color}>sdf</p>
        </nav>
    </header>
);

export default navbar