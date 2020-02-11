import React from 'react';
import Aux from '../../Aux/Aux'
import Navbar from '../Navbar/Navbar'
import classes from './Layout.css'


const layout = (props) => (
    <Aux>
        <Navbar/>
        <main className={classes.Content}>
        {props.children}
        <p>haha</p>
        </main>
    </Aux>
);

export default layout;