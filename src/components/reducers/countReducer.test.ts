import { countReducer, CountType } from './countReducer';
test('count should be incr', () => {

	let startState: CountType = {
		count: 0
	}

	let endState = countReducer(startState, { type: "INCR-COUNT" })
	expect(endState.count).toBe(1)
})