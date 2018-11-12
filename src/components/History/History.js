import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions';

const history = (props) => {
    return (
        <ul>
            {
                props.history.map(element => {
                    console.log('listing element', element)
                    const uuid = element.k
                    return (
                    <li key={uuid} onClick={() => props.onDeleteHistory(uuid)}>{element.v}</li>
                )})
            }
        </ul>
    )
}

const mapStateToProps = (state) => ({
    history: state.hist.history
})

const mapDispatchToProps = (dispatch) => ({
    onDeleteHistory: (id) => dispatch({ type: actionTypes.DELETE, id: id })
})
export default connect(mapStateToProps, mapDispatchToProps)(history)