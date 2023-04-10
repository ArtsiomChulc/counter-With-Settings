import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css'

type SuperInputPropsType = {
    valueInput: string
    setValueInput: (valueInput: string) => void
}

export const SuperInput = (props: SuperInputPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueInput(e.currentTarget.value)
    }

    return (
        <div className={s.input}>
            <input value={props.valueInput} onChange={onChangeHandler}/>
        </div>
    );
};

