

export type CountType = {
	count: number
}

let initialState = {
	count: 0
}

type ActionType = {
	type: string
}

export const countReducer = (state: CountType = initialState, action: ActionType): CountType => {
	switch (action.type) {
		case "INCR-COUNT":
			return {
				...state,
				count: ++state.count
			}
		default:
			return state
	}
}