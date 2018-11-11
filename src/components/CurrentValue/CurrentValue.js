import React, { Component } from 'react'
import './CurrentValue.css'
import { connect } from 'react-redux'

class CurrentValue extends Component {
    render() {
        return (
            <div className='CurrentValue'>
                {this.props.ctr}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.currentValue
    };
}

export default connect(mapStateToProps, null)(CurrentValue)