import React, { Component } from 'react'
import Button from './../Button/Button'
import './Buttons.css'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

class Buttons extends Component {

    render() {
        return (
            <div className='Buttons'>
                <Button text='Increament' clicked={this.props.onIncreament} />
                <Button text='Decreament' clicked={this.props.onDecrement} />
                <Button text='Add 5' clicked={this.props.onAdd } />
                <Button text='Sub 8' clicked={this.props.onSubtract} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncreament: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, step: 5 }),
        onSubtract: () => dispatch({ type: actionTypes.SUBSTRACT, step: 8 })
    }
}

export default connect(null, mapDispatchToProps)(Buttons)