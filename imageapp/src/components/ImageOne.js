import React, { Component } from 'react'

export default class ImageOne extends Component {
    constructor() {
        super()
        this.state = {
            isClicked: false
        }
    }
    handleClick = e => {
        e.preventDefault()
       this.setState(prevState=>({
        isClicked: !prevState.isClicked
       }))
        console.log('cklicked')
    }
  render() {
      let lili = this.state.isClicked ? 'lulu' : 'dada'
    return (
        <div className={lili}style={this.props.data} onClick={this.handleClick}/>
    )
  }
}
