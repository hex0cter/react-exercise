import * as actionTypes from './actions'

const initialState = {
    currentValue: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                currentValue: state.currentValue + 1
            }
        case actionTypes.DECREMENT:
            return {
                currentValue: state.currentValue - 1
            }
        case actionTypes.ADD:
            return {
                currentValue: state.currentValue + action.step
            }
        case actionTypes.SUBSTRACT:
            return {
                currentValue: state.currentValue - action.step
            }
        default:
            return state
    }
}

export default reducer