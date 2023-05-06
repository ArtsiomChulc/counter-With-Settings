import React, {ChangeEvent} from 'react';
import s from './InputMax.module.css'


type SuperInputPropsType = {
    valueInput: string
    setValueInput: (valueInput: string) => void
    title: string
    valueInputStart: string
}

export const InputMax = (
    {
        valueInput,
        setValueInput,
        title,
        valueInputStart
    }: SuperInputPropsType) => {
    const styleInputMax = `${+valueInputStart >= +valueInput ? s.inputMaxError : ''}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            return
        } else {
            setValueInput(e.currentTarget.value)
        }
    }

    return (
        <div className={s.input}>
            <p>{title}</p>
            <input
                className={styleInputMax}
                type={"number"}
                value={valueInput ? valueInput : 0}
                onChange={onChangeHandler}/>
        </div>
    );
};

