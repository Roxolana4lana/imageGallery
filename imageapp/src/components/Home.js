import React, { Component } from 'react'
import NavigationMain from './NavigationMain'


export default class Home extends Component {
  render() {
    return (
        <React.Fragment>
        <NavigationMain/>
        
      <div className='Home'>
                <div className="section left" style={{
            backgroundImage: `url(https://images.pexels.com/photos/929282/pexels-photo-929282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
                
            </div>
            <div className='section right'>
                    <h1>Beauty in every detail...</h1>
                <h2>Gallery is all about contemporary art, with work by <br/>
                young artists or international artists rarely exhibited in Ukraine</h2>
            </div>
      </div>
        </React.Fragment>
    )
  }
}
