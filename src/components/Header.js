// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import classes from './Header.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <h1 className="title">Call a Friend</h1>
            <p className="subtitle">Your Friendly Contact App</p>
            <hr></hr>
        </div>
    );
}

export default Header;