import React, {ChangeEvent} from 'react';
import s from "./InputMin.module.css";

type InputMinPropsType ={
    valueInputMin: string
    setValueInputMin: (valueInputMin: string) => void
    titleMin: string
}

export const InputMin = (props:InputMinPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueInputMin(e.currentTarget.value)
    }

    return (
        <div className={s.input}>
            <p>{props.titleMin}</p>
            <input type={"number"} value={props.valueInputMin} onChange={onChangeHandler}/>
        </div>
    );
};

