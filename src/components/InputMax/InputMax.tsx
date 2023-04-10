import React, {ChangeEvent} from 'react';
import s from './InputMax.module.css'

type SuperInputPropsType = {
    valueInput: string
    setValueInput: (valueInput: string) => void
    title: string
}

export const InputMax = (props: SuperInputPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueInput(e.currentTarget.value)
    }

    return (
        <div className={s.input}>
            <p>{props.title}</p>
            <input type={"number"} value={props.valueInput} onChange={onChangeHandler}/>
        </div>
    );
};

