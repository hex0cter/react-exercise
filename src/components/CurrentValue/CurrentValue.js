import React, { Component } from 'react'
import './CurrentValue.css'
import { connect } from 'react-redux'

class CurrentValue extends Component {
    render() {
        console.log('[CurrrentValue] props', this.props)
        return (
            <div className='CurrentValue'>
                {this.props.ctr}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('[CurrentValue] state', state)
    return {
        ctr: state.counter.currentValue
    };
}

export default connect(mapStateToProps, null)(CurrentValue)