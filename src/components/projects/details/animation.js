import React, { Component } from 'react';
import {arFlow, moveind} from '../../../Constants/Video'
import Slider from 'react-slick'
import {settings} from '../../../Constants/SliderSettings.js'
import Takeaways from './components/Takeaways'

export default class Animation extends Component {
  render(){
    return(
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>Add Characteristics to Elements</h1>
            <hr/>
            <h3>Animation</h3>


        </div>
        <div className='project-content animated'>
          <div className='project-section'>
            <h2 className='section-title'>Move Behaviour Waypoint Inspector</h2>
            <div className='brio-fin-video'><video className='brio-animation' src={moveind} autoPlay="autoPlay" loop="loop" muted="muted" /></div>
          </div>
        </div>

        <div className='project-section'>
        <div className='split-section'>
          <div className='split-left'><video className='brio-animation' src={arFlow} autoPlay="autoPlay" loop="loop" muted="muted" /></div>
          <div className='split-right'>
            <h3 className='section-title'>AR Flow</h3>
            <p className='first-section-par'>Based on the discoveries, I first did some sketches before going deeper into the design.</p>
            <p>I used simple elements to test out my assumptions: a cube, the grid and the indicator. The sketches includes something similar to real world shadows that would be affected by the shape of the objects, also something more abstract (a ring that represents the rough size of the object).
            </p>
          </div>
        
        </div>
      </div>
      </div>

    )
  }
}
