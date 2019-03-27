import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Navigation from './Navigation'


export default class Contact extends Component {
  
  render() {
      const MapWithAMarker = withGoogleMap(props =>
          <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: 49.8402803, lng: 24.0292775 }}
          >
              <Marker
                  position={{ lat: 49.8402803, lng: 24.0292775 }}
              />
          </GoogleMap>)
    return (
      <div className='constactMain'>
      <Navigation/>
        <div className='Contact'>
      <div className='contactInfo'>
            <div className='contact_container_top'>
                <h1>Modern art gallery</h1>
                <p>phone: 097 555 555 555</p>
                <p>wmail: gallery@gallery.com</p>
            </div>
            <div className='contact_container_medium'>
                <h2>Opening hours</h2>
                <p>During exhibitions:<br/>
                Tuesday – Friday | 12:00-18:00<br/>
                Saturday | 12:00-16:00</p>
            </div>
            <div className='contact_container_bottom'>
                <h2>Team</h2>
                <p>Roksolana Pavlyk /owner</p><p>097 555 555 555</p>
                        <p>Roksolana Pavlyk /assistant</p><p>097 555 555 555</p>
            </div>
                    <div className='contact_icons'>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
            </div>
                <MapWithAMarker
                    containerElement={<div className='contactMap' />}
                    mapElement={<div style={{ height: `100%`, width: '100%' }} />}
                />
                
            
      </div>
           
        </div >
    )
  }
}
