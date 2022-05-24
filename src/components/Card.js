import React from 'react';
import './CSS/home.css';
import card from './CSS/IMAGE/dom_night.jpg';
import mal from './CSS/IMAGE/maldives.jpg';
import him from './CSS/IMAGE/him.jpg';
import sea from './CSS/IMAGE/sea.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Card() {
    let imgStyle={
        width:"100%"
    }
  return (
      <>
      <div className=' main-heading'>
          <h3>Events</h3>
          <p>Explore upcoming events designed for Alumni to grow their network,</p>

      </div>
    <div className='main-class'>
        <div className='inner-class' id='try'>
            <img src={sea} style={imgStyle}/>
            <div className='write'>
                <h>Events</h><br/>
                <p>Explore upcoming events designed for Alumni to grow their network,
                    develop their business knowledge, reconnect with former classmates,
                    and celebrate their Gopher pride.</p>
                    <br/>
                <button className='event'>Learn More {/*<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/>*/}</button>
            </div>
        </div>
        <div className='inner-class'>
            <img src={him} style={imgStyle}/><br/><br/>
            <div className='write'>
                <h>Networks</h><br/>
                <p>The Carlson School Network is made up of 55,000 alumni in 102 countries worldwide. 
                    Forge new connections among our community of influential business leaders.</p><br/>
                <button className='event'>Learn More {/*<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/>*/}</button>
            </div>
        </div>
        <div className='inner-class'>
            <img src={mal} style={imgStyle}/>
            <div className='write'>
                <h>Discover</h><br/>
                <p>Access career resources and professional development opportunities, 
                    request a transcript or get in touch with us.</p><br/><br/>
                <button className='event'>Learn More {/*<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px",fontSize:"17px"}}/>*/}</button>
            </div>
        </div>
    </div>
    </>
  )
}
