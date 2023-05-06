import {forHiddenReducer, HiddenType} from "./forHiddenReducer";

test('isHidden should switch', () => {
    let startState: HiddenType = {
        isHidden: false
    }

    let endState = forHiddenReducer(startState, {type: "HIDDEN"})
    expect(endState.isHidden).toBe(true)
    expect(startState.isHidden).toBe(false)
})