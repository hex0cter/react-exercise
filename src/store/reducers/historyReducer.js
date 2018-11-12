import * as actionTypes from '../actions'

const initialState = {
    history: []
}

const historyReducer = (state = initialState, action) => {
    console.log('historyReducer - state', state)
    console.log('historyReducer - action', action)
    switch (action.type) {
        case actionTypes.SAVE:
            return {
                history: state.history.concat([{v: action.value, k: action.id}])
            }
        case actionTypes.DELETE:
            return {
                history: state.history.filter(element => element.k !== action.id)
            }
    }
    return state
}

export default historyReducer
