import React from 'react'
import './CurrentValue.css'

const currentValue = (props) => (
    <div className='currentValue'>
        {props.value}
    </div>
)

export default currentValue