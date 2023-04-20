import React from 'react';
import s from './Display.module.css'


type DisplayPropsType = {
    count: number
    newCountString: string | null
    setError: (error: string) => void
    error: string | null
}

export const Display = (props:DisplayPropsType) => {

      // const styleCount = `${s.count} ${props.count === 5 ? s.errorCount : ''}`

    let valueInput = props.newCountString ? +JSON.parse(props.newCountString) : ''

      const styleCount = `${s.count} ${props.count === valueInput ? s.errorCount : ''}`




    return (
        <div className={s.wrapDisplay}>
            <div>
                <h1 className={styleCount}>{props.count ? props.count : 0}</h1>
            </div>
        </div>
    );
};
