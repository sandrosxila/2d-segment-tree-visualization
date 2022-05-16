import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/ArrayFillForm.module.scss';

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ArrayFillForm = ({ active, setActive }: Props) => {

    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [inputs, setInputs] = useState<{ [key in string]?: number }>({});
    const cardRef = useRef<HTMLDivElement | null>(null);
    const minLimit = 6;
    const maxLimit = 20;

    const onNumberFieldChange = (setter: React.Dispatch<React.SetStateAction<number>>) => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const num = Number(e.target.value);
            if(Number.isNaN(num) || num < 0 || num > maxLimit){
                e.preventDefault();
            }
            else{
                setter(Number(e.target.value));
                setInputs({});
            }
        };
    
    const onNumberFieldBlur = (setter: React.Dispatch<React.SetStateAction<number>>) => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const num = Number(e.target.value);
            if(Number.isNaN(num) || num < minLimit || num > maxLimit){
                alert(`please enter between ${minLimit} and ${maxLimit}!!!`);
                setter(minLimit);
            }
        };

    const onElementFieldChange = (key: string) => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const num = Number(e.target.value);
            if(Number.isNaN(num) || num < 0 || num > 100){
                e.preventDefault();
            }
            else{
                setInputs((prevState) => ({
                    ...prevState,
                    [key]: num
                }));
            }
        };
    
    const onBuildClick = () => {
        // eslint-disable
        const input = Array.from({ length: rows }).map((_, row) => {
            return Array.from({ length: columns }).map((_, column) => inputs[`elem-${row}-${column}`]);
        }).flat();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        doBuild([columns, rows, ...input]);
        setActive(false);
        // eslint-enable
    };

    const fillWithRandoms = () => {
        Array.from({ length: rows }).forEach((_, row) => {
            return Array.from({ length: columns }).forEach((_, column) => {
                setInputs(prevState => ({
                    ...prevState,
                    [`elem-${row}-${column}`]: Math.floor(Math.random() * 100)
                }));
            });
        });
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setActive(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cardRef, setActive]);
    
    return (
        <>
            {
                active && (
                    <div className={ styles['card'] } ref={ cardRef }>
                        <div className={ styles['title'] }>
                            Please Fill{ (rows > 0 && columns > 0) && ' the' } Array {
                            (rows <= 0 || columns <= 0) ? 
                                `Dimensions (min:${minLimit} max:${maxLimit})` : '(min:0 max:100)' 
                        }
                        </div>
                        <div className={ styles['row'] }>
                            <div className={ styles['col'] }>
                                <span>Columns:</span>
                                <input type="number" className={ styles['input'] } value={ columns || '' } onChange={ onNumberFieldChange(setColumns) }
                                    onBlur={ onNumberFieldBlur(setColumns) }
                                />
                            </div>

                            <div className={ styles['col'] }>
                                <span>Rows:</span>
                                <input type="number" className={ styles['input'] } value= { rows || '' } onChange={ onNumberFieldChange(setRows) }
                                    onBlur={ onNumberFieldBlur(setRows) }
                                />
                            </div>

                            <div className={ styles['col-rev'] }>
                                <button 
                                    className={ styles['button'] } 
                                    disabled = { !(Object.entries(inputs).length > 0 && Object.entries(inputs).length === (rows * columns)) }
                                    onClick={
                                        onBuildClick
                                    }
                                >
                                    Build
                                </button>
                            </div>
                            <div className={ styles['col-rev'] }>
                                <button 
                                    className={ `${styles['button']} ${styles['button-fill']}` } 
                                    disabled = { !(rows >= minLimit && columns >= minLimit) }
                                    onClick={
                                        fillWithRandoms
                                    }
                                >
                                    Fill With Random Numbers
                                </button>
                            </div>
                        </div>
                        {
                            rows >= minLimit && columns >= minLimit &&
                            Array.from({ length: rows }).map((_, row) => (
                                <div key={ `${row}` } className={ styles['row'] }>
                                    {
                                        Array.from({ length: columns }).map((_, column) => (
                                            <input 
                                                key={ `${column}` }
                                                type="text" 
                                                className={ `${styles['input']} ${styles['input-small']}` } 
                                                title={ `( c:${column + 1}, r:${row + 1} )` }
                                                id={ `elem-${row}-${column}` }
                                                onChange={ onElementFieldChange(`elem-${row}-${column}`) }
                                                value={ inputs[`elem-${row}-${column}`] !== undefined ? inputs[`elem-${row}-${column}`] : '' }
                                            />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default ArrayFillForm;