import {combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";
import {forHiddenReducer} from "./forHiddenReducer";


const rootReducer = combineReducers({
    count: countReducer,
    hidden: forHiddenReducer
})

// type AppRootType = {
//     count: CountType
// }

export type AppRootType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)


// @ts-ignore
window.store = store


export default store