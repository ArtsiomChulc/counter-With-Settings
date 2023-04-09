import React, {useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display/Display";
import {Buttons} from "./components/ButtonInput/Buttons";

function App() {
    let[count, setCount] = useState<number>(0)

    const countIncrHandlerCB = () => {
        if(count === 5) {
            return
        } else {
            setCount(++count)
        }
    }

    const countResetHandlerCB = () => {
        if(count > 0) setCount(0)
    }

    return (
        <div className={s.App}>
            <Display
                count={count}/>
            <Buttons
                count={count}
                countResetHandlerCB={countResetHandlerCB}
                countIncrHandlerCB={countIncrHandlerCB}/>
        </div>
    );
}

export default App;
