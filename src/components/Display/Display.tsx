import React, {useState} from 'react';
import s from './Display.module.css'


type DisplayPropsType = {
    valueInput?: string
    valueInputStart?: string
    count: number
    newCountString: string | null
}

export const Display = (props: DisplayPropsType) => {
    const {valueInput, valueInputStart, count, newCountString} = props


    let valueInputCount = newCountString ? +JSON.parse(newCountString) : ''

    const styleCount = `${s.count} ${count === valueInputCount ? s.errorCount : ''}`

    return (
        <div className={s.wrapDisplay}>
            <div>
                <h1 className={styleCount}>{count ? count : 0}</h1>
            </div>

        </div>
    );
};
