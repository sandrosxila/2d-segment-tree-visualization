import React, { useState } from 'react';
import styles from '../styles/components/TreeActionsDropdown.module.scss';

const TreeActionsDropdown = () => {

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
                Tree Actions
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
                    <li id="clear" className={ `${styles['dropdown-list-item']}` }>
                        clear
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

export default TreeActionsDropdown;