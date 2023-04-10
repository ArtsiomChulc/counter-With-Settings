import React from 'react';
import s from './Display.module.css'


type DisplayPropsType = {
    count: number
    newCountString: string |null
}

export const Display = (props:DisplayPropsType) => {

      const styleCount = `${s.count} ${props.count === 5 ? s.errorCount : ''}`




    return (
        <div className={s.wrapDisplay}>
            <div>
                <h1 className={styleCount}>{props.count}</h1>
            </div>
        </div>
    );
};
