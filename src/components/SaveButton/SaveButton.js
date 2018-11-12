import React from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'
const uuidv4 = require('uuid/v4');

const saveButton = (props) => {
    console.log('saveButton props', props)
    return (
        <button onClick={() => props.onSave(props.currentValue)}>Save</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSave: (currentValue) => dispatch({ type: actionTypes.SAVE, value: currentValue, id: uuidv4() })
})

const mapStateToProps = (state) => ({
    currentValue: state.counter.currentValue
})

export default connect(mapStateToProps, mapDispatchToProps)(saveButton)