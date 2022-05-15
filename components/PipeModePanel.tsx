import React, { useState } from 'react';
import styles from '../styles/components/PipeModePanel.module.scss';

const PipeModePanel = () => {

    const [proportional, setProportional] = useState(true);
    const [relative, setRelative] = useState(false);
    const [average, setAverage] = useState(false);

    const onProportionalChange = () => {
        setProportional(true);
        setRelative(false);
        setAverage(false);
    };

    const onRelativeChange = () => {
        setProportional(false);
        setRelative(true);
        setAverage(false);
    };

    const onAverageChange = () => {
        setProportional(false);
        setRelative(false);
        setAverage(true);
    };

    return (
        <form name="pipeMode" className={ `${styles['form']}` }>
            Pipe Mode:

            <div className={ `${styles['radio-group']}` }>
                <input
                    type="radio"
                    name="pipeRadio"
                    id="Proportional"
                    value="Proportional"
                    checked={ proportional }
                    onChange={ onProportionalChange }
                />
                <label 
                    htmlFor="Proportional" 
                    className={ `${styles['radio-label']}` }
                >
                    Proportional
                </label>
            </div>

            <div className={ `${styles['radio-group']}` }>
                <input 
                    type="radio" 
                    name="pipeRadio" 
                    id="Relative" 
                    value="Relative" 
                    checked = { relative } 
                    onChange={ onRelativeChange }
                />
                <label 
                    htmlFor="Relative"
                    className={ `${styles['radio-label']}` }
                >
                    Relative
                </label>
            </div>

            <div className={ `${styles['radio-group']}` }>
                <input 
                    type="radio" 
                    name="pipeRadio"
                    id="Average" 
                    value="Average" 
                    checked = { average } 
                    onChange={ onAverageChange }
                />
                <label 
                    htmlFor="Average"
                    className={ `${styles['radio-label']}` }
                >
                    Average
                </label>
            </div>
        </form>
    );
};

export default PipeModePanel;