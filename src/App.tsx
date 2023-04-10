import React, {useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display/Display";
import {SuperButton} from "./components/SuperButton/SuperButton";
import {SuperInput} from "./components/SuperInput/SuperInput";



function App() {

    const [valueInput, setValueInput] = useState<string>('')

    let [count, setCount] = useState<number>(0)

    let newCountString = localStorage.getItem('setValueInput')

    const countIncrHandlerCB = () => {

        if(newCountString) {
            if (count === JSON.parse(newCountString)) {
                return
            } else {
                setCount(++count)
            }
        }

    }

    const countResetHandlerCB = () => {
        if (count > 0) setCount(0)
    }

    const setSettingsCount =() => {
        localStorage.setItem('setValueInput', JSON.stringify(valueInput))
        setValueInput('')
    }

    return (
        <div className={s.wrapCounter}>
            <div className={s.Counter}>
                <Display
                    count={count}
                    newCountString={newCountString}
                />
                <SuperInput valueInput={valueInput} setValueInput={setValueInput} />

                <div className={s.wrapBTN}>
                    <SuperButton name={'Incr'} callBack={countIncrHandlerCB}/>
                    <SuperButton name={'Reset'} callBack={countResetHandlerCB}/>
                    <SuperButton name={'Set'} callBack={setSettingsCount}/>
                </div>
            </div>
        </div>

    );
}

export default App;
