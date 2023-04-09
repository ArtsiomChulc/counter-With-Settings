import React from 'react';
import s from './Buttons.module.css'

type ButtonsPropsType ={
    countIncrHandlerCB: () => void
    countResetHandlerCB: () => void
    count: number
}

export const Buttons = (props:ButtonsPropsType) => {

    const countIncrHandler = () => {
        props.countIncrHandlerCB()
    }
    const countResetHandler = () => {
        props.countResetHandlerCB()
    }

    return (
        <div className={s.wrapButtons}>
            <button onClick={countIncrHandler}>Incr</button>
            <button onClick={countResetHandler}>Reset</button>
        </div>
    );
};

