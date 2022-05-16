import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import styles from '../styles/components/ArrayFillButton.module.scss';

type Props = {
    setShowFillForm: Dispatch<SetStateAction<boolean>>
}

const ArrayFillButton = ({ setShowFillForm }: Props) => {

    const onClick = () => {
        setShowFillForm(true);
    };

    return (
        <button className={ styles['button'] } onClick={ onClick }>
            Fill The Array
        </button>
    );
};

export default ArrayFillButton;