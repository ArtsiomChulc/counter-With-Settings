export type CountType = {
    count: number
}

let initialState = {
    count: 0
}

type ActionsType = incrCountActionType | resetCountActionType | setCountActionType


export type incrCountActionType = ReturnType<typeof incrCountAC>
export type resetCountActionType = ReturnType<typeof resetCountAC>
export type setCountActionType = ReturnType<typeof settingsCountAC>

export const countReducer = (state: CountType = initialState, action: ActionsType): CountType => {

    switch (action.type) {
        case "INCR-COUNT":
            return {
                ...state,
                count: state.count + 1
            }
        case "RESET":
            return {
                ...state,
                count: +action.valueInput
            }
        case "SET":
            return {
                ...state,
                count: +action.valueInput
            }
        default:
            return state
    }
}


export const incrCountAC = () => {
    return {
        type: "INCR-COUNT"
    } as const
}

export const resetCountAC = (valueInput: string) => {
    return {
        type: "RESET",
        valueInput: valueInput
    } as const
}

export const settingsCountAC = (valueInput: string) => {
    return {
        type: "SET",
        valueInput: valueInput
    } as const
}