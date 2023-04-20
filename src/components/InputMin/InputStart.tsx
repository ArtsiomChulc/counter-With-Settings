import React, {ChangeEvent} from 'react';
import s from "./InputStart.module.css";

type InputMinPropsType ={
    valueInputStart: string
    setValueInputStart: (valueInputStart: string) => void
    titleMin: string
}

export const InputStart = (props:InputMinPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueInputStart(e.currentTarget.value)
    }

    return (
        <div className={s.input}>
            <p>{props.titleMin}</p>
            <input type={"number"} value={props.valueInputStart ? props.valueInputStart : 0} onChange={onChangeHandler}/>
        </div>
    );
};

