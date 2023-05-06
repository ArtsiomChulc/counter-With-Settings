import React, {ChangeEvent} from 'react';
import s from "./InputStart.module.css";

type InputMinPropsType = {
    valueInputStart: string
    setValueInputStart: (valueInputStart: string) => void
    titleMin: string
    valueInput: string
}

export const InputStart = (
    {
        valueInputStart,
        setValueInputStart,
        titleMin,
        valueInput
    }: InputMinPropsType) => {
    const styleInputStart = `${+valueInputStart >= +valueInput ? s.inputStartError : ''}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            return
        } else {
            setValueInputStart(e.currentTarget.value)
        }
    }
    return (
        <div className={s.input}>
            <p>{titleMin}</p>
            <input
                className={styleInputStart}
                type={"number"}
                value={valueInputStart ? valueInputStart : 0}
                onChange={onChangeHandler}/>
        </div>
    );
};

