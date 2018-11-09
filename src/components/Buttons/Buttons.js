import React, { Component } from 'react'
import Button from './../Button/Button'
import './Buttons.css'

class Buttons extends Component {

    render() {
        return (
            <div className='Buttons'>
                <Button text='Increament' clicked={() => this.props.clicked('inc', 1)} />
                <Button text='Decreament' clicked={() => this.props.clicked('dec', 1)} />
                <Button text='Add 5' clicked={() => this.props.clicked('add', 5)} />
                <Button text='Sub 5' clicked={() => this.props.clicked('sub', 5)} />
            </div>
        )
    }
}

export default Buttons