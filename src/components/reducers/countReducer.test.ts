import { countReducer, CountType } from './countReducer';
test('count should be incr', () => {

	let startState: CountType = {
		count: 0
	}

	let endtState = countReducer(startState, { type: "INCR-COUNT" })
	expect(endtState.count).toBe(1)
})