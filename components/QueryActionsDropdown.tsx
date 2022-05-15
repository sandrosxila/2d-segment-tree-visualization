import React from 'react';
import styles from '../styles/components/QueryActionsDropdown.module.scss';
import { useState } from 'react';

const QueryActionsDropdown = () => {

    const [active, setActive] = useState(false);
    const onButtonClick = () => {
        setActive(!active);
    };


    return (
        <div className={ styles['dropdown'] } id="getAnswer">
            <button 
                type="button" 
                id="queryActionsButton" 
                className={ `${styles['button']} ${active ? styles['button-active'] : ''}` }
                onClick={ onButtonClick }
            >
                Query Actions
            </button>

            <div>
                <div className={ `${styles['dropdown-box']} ${active ? styles['dropdown-box-active'] : ''}` }>
                    { /* Title */ }
                    <h6 className={ `${styles['title']}` }> Calculate Sum From The Range </h6>

                    <hr className="dropdown-divider"/>
                    { /* Range */ }
                    { /* From */ }
                    <div className={ `${styles['dropdown-box-section']}` }>
                        <span className={ `${styles['title']}` }>
                            From:
                        </span>
                        <div className={ `${styles['row']}` }>
                            <div>
                                <label id="fromI" htmlFor='fieldFormI' className={ `${styles['input-label']}` }>I</label>
                                <input type="text" id="fieldFromI" className={ `${styles['input']}` }/>
                            </div>
                            <div>
                                <label id="fromJ" htmlFor='fieldFormJ' className={ `${styles['input-label']}` }>J</label>
                                <input type="text" id="fieldFromJ" className={ `${styles['input']}` }/>
                            </div>
                        </div>
                    </div>

                    { /* To */ }
                    <div className={ `${styles['dropdown-box-section']}` }>
                        <span className={ `${styles['title']}` }>
                            To:
                        </span>
                        <div className={ `${styles['row']}` }>
                            <div>
                                <label id="toI" htmlFor='fieldToI' className={ `${styles['input-label']}` }>I</label>
                                <input type="text" id = "fieldToI" className={ `${styles['input']}` }/>
                            </div>

                            <div>
                                <label id="toJ" htmlFor='fieldToJ' className={ `${styles['input-label']}` }>J</label>
                                <input type="text" id = "fieldToJ" className={ `${styles['input']}` }/>
                            </div>

                        </div>
                    </div>
                    <hr className="dropdown-divider"/>
                    <div id ="cells">
                        { /* <!--                    <div class="container" style="flex-wrap: nowrap;justify-content: left;">--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                    </div>--> */ }
                        { /* <!--                    <div class="container" style="flex-wrap: nowrap;justify-content: left;">--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                        <div class="cell"></div>--> */ }
                        { /* <!--                    </div>--> */ }
                    </div>
                    <hr className="dropdown-divider"/>
                    { /* <!--                Result--> */ }
                    <div className={ `${styles['dropdown-box-section']}` }>
                        <label htmlFor='result' className={ `${styles['title']}` }>Result:</label>
                        <input type="text" id="result" className={ `${styles['input']} ${styles['input-long']}` } disabled/>
                    </div>
                    { /* Answer Button */ }
                    <div className={ `${styles['dropdown-box-section']}` }>
                        <input type="button" className={ `${styles['button']} ${styles['button-answer']}` } value="Calculate" id="answer"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryActionsDropdown;    