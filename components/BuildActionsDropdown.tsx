import React, { useState } from 'react';
import styles from '../styles/components/BuildActionsDropdown.module.scss';

const BuildActionsDropdown = () => {

    const [active, setActive] = useState(false);
    const onButtonClick = () => {
        setActive(!active);
    };

    return (
        <div className={ `${styles['dropdown']}` } id="buildActions">
            <button 
                type="button"
                id="buildActionsButton"
                className={ `${styles['button']} ${active ? styles['button-active'] : ''}` }
                onClick={ onButtonClick }
            >
                Build Actions
            </button>
            <div>
                <ul className={ `${styles['dropdown-list']} ${active ? styles['dropdown-list-visible'] : ''}` }>
                    <li id="add-slow" className={ `${styles['dropdown-list-item']}` }>
                        add slow
                    </li>
                    <li id="add-fast" className={ `${styles['dropdown-list-item']}` }>
                        add fast
                    </li>
                    <hr className="dropdown-divider"/>
                    <li id="back" className={ `${styles['dropdown-list-item']}` }>
                        back
                    </li>
                    <hr className="dropdown-divider"/>
                    <li id="add-all" className={ `${styles['dropdown-list-item']}` }>
                        add all
                    </li>
                    <li id="build" className={ `${styles['dropdown-list-item']}` }>
                        build
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default BuildActionsDropdown;