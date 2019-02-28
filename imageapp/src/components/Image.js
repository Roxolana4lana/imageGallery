import React, { Component } from 'react'
import img from './images/img'
import InfiniteScroll from "react-infinite-scroll-component"

export default class Image extends Component {
    constructor(){
        super()
        this.state={
            images: Array.from({length:5})
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
      let myImg = img.map(image => (<div style={image.style} ></div>))
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
       <div className='wrapper'>
                {myImg}
                </div>
       </InfiniteScroll>
      </div>
    )
  }
}
