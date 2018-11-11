import React, { Component } from 'react'
import Button from './../Button/Button'
import './Buttons.css'
import { connect } from 'react-redux'

class Buttons extends Component {

    render() {
        return (
            <div className='Buttons'>
                <Button text='Increament' clicked={this.props.onIncreament} />
                <Button text='Decreament' clicked={this.props.onDecrement} />
                <Button text='Add 5' clicked={this.props.onAdd } />
                <Button text='Sub 5' clicked={this.props.onSubtract} />
            </div>
        )
    }
}

const mapDispactchToProps = dispatch => {
    return {
        onIncreament: () => dispatch({ type: 'INC' }),
        onDecrement: () => dispatch({ type: 'DEC' }),
        onAdd: () => dispatch({ type: 'ADD', step: 5 }),
        onSubtract: () => dispatch({ type: 'SUB', step: 5 })
    }
}

export default connect(null, mapDispactchToProps)(Buttons)