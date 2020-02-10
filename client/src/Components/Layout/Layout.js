import React from 'react';
import Aux from '../../Aux/Aux'
import Navbar from '../Navbar/Navbar'
import classes from '../Layout/Layout.css'


const layout = (props) => (
    <Aux>
        <Navbar/>
        <main>
        {props.children}
        </main>
    </Aux>
);

export default layout;