export type HiddenType = {
    isHidden: boolean
}
export let initialState = {
    isHidden: false
}

type ActionsType = hiddenActionType

type hiddenActionType = ReturnType<typeof hiddenAC>

export const forHiddenReducer = (state: HiddenType = initialState, action: ActionsType) => {

    if(action.type === "HIDDEN") {

        return {
            ...state,
            isHidden: !state.isHidden
        }
    } else {
        return state
    }
}

export const hiddenAC = () => {
    return {
        type: "HIDDEN"
    } as const
}