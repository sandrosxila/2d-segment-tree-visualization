import React from 'react';
import TreeActionsDropdown from './TreeActionsDropdown';
import PipeModePanel from './PipeModePanel';
import QueryActionsDropdown from './QueryActionsDropdown';
import UploadPanel from './UploadPanel';
import styles from '../styles/components/Navbar.module.scss';
import { Dispatch, SetStateAction } from 'react';
import ArrayFillButton from './ArrayFillButton';
import Credits from './Credits';

type Props = {
    setShowFillForm: Dispatch<SetStateAction<boolean>>
}

const NavBar = ({ setShowFillForm }: Props) => {
    return (
        <nav className={ `${styles['navbar']}` } id="nav-bar">
            <TreeActionsDropdown />

            <QueryActionsDropdown />

            <PipeModePanel/>

            <UploadPanel/>

            <ArrayFillButton setShowFillForm={ setShowFillForm }/>

            <Credits/>
        </nav>
    );
};

export default NavBar;