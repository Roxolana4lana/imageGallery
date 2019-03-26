import React, { Component } from 'react'
import img from './images/img'
import InfiniteScroll from "react-infinite-scroll-component"
import ImageOne from './ImageOne'
import Navigation from './Navigation'



export default class Image extends Component {
    constructor(){
        super()
        this.state={
            images: Array.from({length:5}), 
         
        }
    }
    displayMore = () =>{
        setTimeout(()=>{
            this.setState({
                images: this.state.concat(Array.from({length:5}))
            })
        }, 10000)
    }

   

  render() {
      let myImg = img.map(image => <ImageOne key={image.id} data={image.style}/>)
    return (
      <div> 
            <InfiniteScroll
                dataLength={this.state.images.length}
                next={this.displayMore}
                hasMore={false}
                loader={<h2>Loading...</h2>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>}>
                    <Navigation/>
                <div className='wrapper' >      
                {myImg}
                </div>
            </InfiniteScroll>
  
      </div>
    )
  }
}
