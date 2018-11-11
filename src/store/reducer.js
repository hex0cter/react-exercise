const initialState = {
    currentValue: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                currentValue: state.currentValue + 1
            }
        case 'DEC':
            return {
                currentValue: state.currentValue - 1
            }
        case 'ADD':
            return {
                currentValue: state.currentValue + action.step
            }
        case 'SUB':
            return {
                currentValue: state.currentValue - action.step
            }
        default:
            return state
    }
}

export default reducer