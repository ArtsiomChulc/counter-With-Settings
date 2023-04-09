import React, {useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display/Display";
import {SuperButton} from "./components/SuperButton/SuperButton";


export type ButtonsNameType = {
    reset?: string
    increment?: string
    settings?: string
}

function App() {

    let [count, setCount] = useState<number>(0)

    const countIncrHandlerCB = () => {
        if (count === 5) {
            return
        } else {
            setCount(++count)
        }
    }

    const countResetHandlerCB = () => {
        if (count > 0) setCount(0)
    }

    const getSettingsCount =() => {

    }

    return (
        <div className={s.wrapCounter}>
            <div className={s.Counter}>
                <Display count={count}/>
                <div className={s.wrapBTN}>
                    <SuperButton name={'Incr'} callBack={countIncrHandlerCB}/>
                    <SuperButton name={'Reset'} callBack={countResetHandlerCB}/>
                    <SuperButton name={'Set'} callBack={getSettingsCount}/>
                </div>
            </div>
        </div>

    );
}

export default App;
