import React, {Component} from 'react';
import {
  briolandingBKG
} from '../../../Constants/Image'

import {
  landing1, landing2, gift1, gift2, gift3
} from '../../../Constants/Video'

export default class Briovr extends Component {

  render() {
    return (<div>
      <div className='project-content header-home animated project-header-section'>
        <h1 className='title'>2D Projects</h1>
        <hr/>
      </div>
      <div className='project-content animated'>
        <div className='project-section'>
          <h2>BRIOVR Landing Page</h2>
          <hr/>
          <p className='first-section-par'>This project includes different iterations of the landing page. The iterations
          were based on user feedbacks, as well as updates on contents.</p>
          <div className='gallery'>
          <div className='large-item'>
            <video src={landing1} muted autoPlay playsInline loop/>
          </div>
          <div className='large-item'>
            <video src={landing2} muted autoPlay playsInline loop/>
          </div>
          </div>
        </div>


        <div className='project-section'>
          <h2>eGift Card App</h2>
          <hr/>
          <p className='first-section-par'>When working on this project, I tried to go beyond and above the current mobile
          design norm and trend. I tried something bolder and more colourful. The animation was inspired by the shelves in
          shops that a customer can rotate the shelf to see more products.</p>
          <div className='gallery'>
            <div className='item'><video src={gift1} muted autoPlay playsInline loop/></div>
            <div className='item'><video src={gift2} muted autoPlay playsInline loop/></div>
            <div className='item'><video src={gift3} muted autoPlay playsInline loop/></div>

          </div>




        </div>




















      </div>
    </div>);
  }
}
