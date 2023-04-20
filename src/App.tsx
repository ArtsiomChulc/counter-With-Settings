import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display/Display";
import {InputMax} from "./components/InputMax/InputMax";
import {InputStart} from "./components/InputMin/InputStart";
import {Button} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function App() {

    let [valueInput, setValueInput] = useState<string>('')
    const [valueInputStart, setValueInputStart] = useState<string>('')
    const [error, setError] = useState<string | null>('')
    const [isHidden, setIsHidden] = useState<boolean>(true)

    useEffect(() => {
        let newCountStartString = localStorage.getItem('setValueInputStart')
        if (newCountStartString) {
            setValueInputStart(JSON.parse(newCountStartString))
            let newValue = +JSON.parse(newCountStartString)
            setCount(newValue)
        }
    }, [])

    useEffect(()=>{
        let inputMaxGetLS = localStorage.getItem("inputMax")
        if (inputMaxGetLS) setValueInput(JSON.parse(inputMaxGetLS))
    }, [])


    let newCountString = localStorage.getItem('setValueInput')

    let [count, setCount] = useState<number>(0)

    const countIncrHandlerCB = () => {
        setCount(++count)
    }

    const countResetHandlerCB = () => {
        setCount(0)
        localStorage.removeItem('setValueInputStart')
        localStorage.removeItem('inputMax')
        localStorage.clear()
    }

    const setSettingsCount = () => {
        setIsHidden(!isHidden)
        localStorage.setItem('setValueInputStart', JSON.stringify(valueInputStart))
        localStorage.setItem("inputMax", JSON.stringify(valueInput))
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
                    <InputStart titleMin={'Start'} valueInputStart={valueInputStart} setValueInputStart={setValueInputStart}/>
                </div>}


                <div className={s.wrapBTN}>
                    {!isHidden && <>
                        <Button
                            size={"small"}
                            variant={"outlined"}
                            onClick={countIncrHandlerCB}
                        >Incr</Button>
                        <Button
                            size={"small"}
                            endIcon={<RestartAltIcon/>}
                            variant={"outlined"}
                            onClick={countResetHandlerCB}
                        >Reset</Button>
                        {/*<SuperButton name={'Incr'} callBack={countIncrHandlerCB}/>*/}
                        {/*<SuperButton name={'Reset'} callBack={countResetHandlerCB}/>*/}
                    </>}
                    <Button
                        endIcon={<TuneIcon/>}
                        size={"small"}
                        onClick={setSettingsCount}
                        variant={"contained"}
                    >Set</Button>
                    {/*<SuperButton name={'Set'} callBack={setSettingsCount}/>*/}
                </div>
            </div>
        </div>

    );
}

export default App;
