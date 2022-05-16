import React, { Dispatch, SetStateAction } from 'react';
import NavBar from './NavBar';
import styles from '../styles/components/Header.module.scss';

type Props = {
    setShowFillForm: Dispatch<SetStateAction<boolean>>
}

const Header = ({ setShowFillForm }: Props) => {
    return (
        <header className={ styles['header'] }>
            <NavBar setShowFillForm={ setShowFillForm }/>
        </header>
    );
};

export default Header;