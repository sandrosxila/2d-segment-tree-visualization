import React from 'react';
import NavBar from './NavBar';
import styles from '../styles/components/Header.module.scss';

const Header = () => {
    return (
        <header className={ styles['header'] }>
            <NavBar/>
        </header>
    );
};

export default Header;