import React from 'react';
import BuildActionsDropdown from './BuildActionsDropdown';
import PipeModePanel from './PipeModePanel';
import QueryActionsDropdown from './QueryActionsDropdown';
import UploadPanel from './UploadPanel';
import styles from '../styles/components/Navbar.module.scss';

const NavBar = () => {
    return (
        <nav className={ `${styles['navbar']}` } id="nav-bar">
            <BuildActionsDropdown />

            <QueryActionsDropdown />

            <PipeModePanel/>

            <UploadPanel/>
        </nav>
    );
};

export default NavBar;