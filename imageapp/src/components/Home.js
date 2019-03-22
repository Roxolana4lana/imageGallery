import React, { Component } from 'react'
import NavigationMain from './NavigationMain'
import image from './images/imageMain.jpeg'

export default class Home extends Component {
  render() {
    return (
        <React.Fragment>
        <NavigationMain/>
        
      <div className='Home'>
                <div className="section left" style={{
                    backgroundImage: `url(${image})`, backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
                
            </div>
            <div className='section right'>
                    <h1>Beauty in every detail...</h1>
                <h2>Gallery is all about contemporary art, with work by <br/>
                young artists or international artists rarely exhibited in the Ukraine</h2>
            </div>
      </div>
        </React.Fragment>
    )
  }
}
