import React, {useEffect, useReducer, useState} from 'react';
import s from './App.module.css';
import { Display } from "./components/Display/Display";
import { InputMax } from "./components/InputMax/InputMax";
import { InputStart } from "./components/InputMin/InputStart";
import { Button } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { SuperButton } from "./components/SuperButton/SuperButton";
import {countReducer, incrCountAC, resetCountAC} from './components/reducers/countReducer';


function App() {

    let [valueInput, setValueInputMax] = useState<string>('')
    const [valueInputStart, setValueInputStart] = useState<string>('')
    const [isHidden, setIsHidden] = useState<boolean>(true)

    useEffect(() => {
        let newCountStartString = localStorage.getItem('setValueInputStart')
        if (newCountStartString) {
            setValueInputStart(JSON.parse(newCountStartString))
            let newValue = JSON.parse(newCountStartString)
            const action = resetCountAC(newValue)
            dispatchCount(action)
            // setCount(newValue)
        }
    }, [])

    useEffect(() => {
        let inputMaxGetLS = localStorage.getItem("inputMax")
        if (inputMaxGetLS) setValueInputMax(JSON.parse(inputMaxGetLS))
    }, [])


    let newCountString = localStorage.getItem('inputMax')

    let [count, dispatchCount] = useReducer(countReducer, { count: 0 })

    const countIncrHandlerCB = () => {

        const action = incrCountAC()
        dispatchCount(action)
    }

    const countResetHandlerCB = () => {
        const action = resetCountAC(valueInputStart)
        dispatchCount(action)
        // setCount(+valueInputStart)
    }

    const setSettingsCount = () => {
        setIsHidden(!isHidden)
        localStorage.setItem('setValueInputStart', JSON.stringify(valueInputStart))
        localStorage.setItem("inputMax", JSON.stringify(valueInput))
        const action = resetCountAC(valueInputStart)
        dispatchCount(action)
        // setCount(+valueInputStart)
    }

    return (
        <div className={s.wrapCounter}>
            <div className={s.Counter}>
                <Display
                    count={count.count}
                    newCountString={newCountString}
                />
                {isHidden && <div className={s.inputs}>
                    <InputMax
                        title={'Max'}
                        valueInput={valueInput}
                        setValueInput={setValueInputMax}
                        valueInputStart={valueInputStart}
                    />
                    <InputStart
                        titleMin={'Start'}
                        valueInputStart={valueInputStart}
                        setValueInputStart={setValueInputStart}
                        valueInput={valueInput}
                    />
                </div>}


                <div className={s.wrapBTN}>
                    {!isHidden && <>
                        {/*<Button*/}
                        {/*    size={"small"}*/}
                        {/*    variant={"outlined"}*/}
                        {/*    onClick={countIncrHandlerCB}*/}
                        {/*>Incr</Button>*/}
                        {/*<Button*/}
                        {/*    disabled*/}
                        {/*    size={"small"}*/}
                        {/*    endIcon={<RestartAltIcon/>}*/}
                        {/*    variant={"outlined"}*/}
                        {/*    onClick={countResetHandlerCB}*/}
                        {/*>Reset</Button>*/}
                        <SuperButton
                            disabled={+valueInput === count.count}
                            name={'Incr'}
                            callBack={countIncrHandlerCB}
                        />
                        <SuperButton
                            disabled={+valueInputStart === count.count}
                            name={'Reset'}
                            callBack={countResetHandlerCB}
                        />
                    </>}
                    {/*<Button*/}
                    {/*    endIcon={<TuneIcon/>}*/}
                    {/*    size={"small"}*/}
                    {/*    onClick={setSettingsCount}*/}
                    {/*    variant={"contained"}*/}
                    {/*>Set</Button>*/}
                    <SuperButton
                        disabled={+valueInput <= +valueInputStart}
                        name={'Set'}
                        callBack={setSettingsCount}
                    />
                </div>
            </div>
        </div>

    );
}

export default App;