import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display/Display";
import {SuperButton} from "./components/SuperButton/SuperButton";
import {InputMax} from "./components/InputMax/InputMax";
import {InputMin} from "./components/InputMin/InputMin";


function App() {

    const [valueInput, setValueInput] = useState<string>('')
    const [valueInputMin, setValueInputMin] = useState<string>('')
    const [error, setError] = useState<string | null>('')
    const [isHidden, setIsHidden] = useState<boolean>(true)

    useEffect(() => {
        let value = localStorage.getItem('setValueInputMin')
        if(value) {
            let newValue = +JSON.parse(value)
            setCount(newValue)
        }
    }, [])

    let newCountString = localStorage.getItem('setValueInput')
    let newCountMinString = localStorage.getItem('setValueInputMin')



    let newMinCount = newCountMinString ? +JSON.parse(newCountMinString) : NaN

    let [count, setCount] = useState<number>(0)


    const countIncrHandlerCB = () => {
        if (newCountString) {
            if (count === +JSON.parse(newCountString)) {
                return
            } else {
                setCount(++count)
            }
        }
    }

    const countResetHandlerCB = () => {
        setCount(newMinCount)
    }

    const setSettingsCount = () => {
        setIsHidden(!isHidden)
        localStorage.setItem('setValueInput', JSON.stringify(valueInput))
        localStorage.setItem('setValueInputMin', JSON.stringify(valueInputMin))
        setCount(newMinCount)
    }

    return (
        <div className={s.wrapCounter}>
            <div className={s.Counter}>
                <Display
                    count={count}
                    newCountString={newCountString}
                    setError={setError}
                    error={error}
                />
                {isHidden && <div className={s.inputs}>
                    <InputMax title={'Max'} valueInput={valueInput} setValueInput={setValueInput}/>
                    <InputMin titleMin={'Min'} valueInputMin={valueInputMin} setValueInputMin={setValueInputMin}/>
                </div>}


                <div className={s.wrapBTN}>
                    {!isHidden && <>
                        <SuperButton name={'Incr'} callBack={countIncrHandlerCB}/>
                        <SuperButton name={'Reset'} callBack={countResetHandlerCB}/>
                    </>}

                    <SuperButton name={'Set'} callBack={setSettingsCount}/>
                </div>
            </div>
        </div>

    );
}

export default App;
