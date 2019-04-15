import React, { Component } from 'react';
import {arFlow, moveind, arFlow2,height,save} from '../../../Constants/Video'
import Slider from 'react-slick'
import {settings} from '../../../Constants/SliderSettings.js'
import Takeaways from './components/Takeaways'


export default class Animation extends Component {

  render() {
    return (<div>
      <div className='project-content header-home animated project-header-section'>
        <h1 className='title'>Adding Sparks to Elements </h1>
        <hr/>
        <h2>Animation & Motion Design</h2>
        <p className='first-section-par'>In this section, I included some of the interaction design that I've done using animation and motion design. I used After Effects for some of the animations and Principle for the ones that are interactive.</p>

      </div>
      <div className='project-content animated'>
        <div className='project-section'>
          <h2>Move Behaviour Waypoint  For BRIOVR</h2>
          <hr/>
          <div className='brio-fin-video section-title'><video className='brio-animation project-image' src={moveind} autoPlay="autoPlay" loop="loop" muted="muted"/></div>
          <p className='first-section-par'>For 3D objects in Brio, they all have an inspector for users to type the exact number for its positions and rotations. We decided to include the inspector for waypoints as well since they are also 3D objects as well. In case the user doesn't notice the indicator, we decided to add some motion to the indicator when the user selects the waypoint indicator. If this helps users to use the indicator more, we would, therefore, add this feature to all indicators.</p>
          <p>The concept for the animation was to have a subtle movement that would be enough for people to notice but not to surprise them. I decided to have a slide down animation and just give it an ease-in and ease-out to smooth the transition.</p>
        </div>



        <div className='project-section'>
          <h2>AR Viewer For BRIOVR</h2>
          <hr/>
          <div className='split-section'>
            <div className='split-left'><video className='brio-animation section-title' src={arFlow} autoPlay='autoPlay' loop='loop' muted='muted' width='400'/></div>
            <div className='split-right'>
              <video className='brio-animation section-title' src={arFlow2} autoPlay='autoPlay' loop='loop' muted='muted' width='400'/>
            </div>
          </div>
          <p className='first-section-par'>The Brio AR viewer was pushed out quickly due to customer requirements. I was assigned to rework on the AR viewer to make it easy to use.</p>
          <p>The left-hand side animation was made in Principle for testing. The right-hand side is the version I made with After Effects for better adjustments on motions based on the prototype made with Principle. For the phone rotation animation, I didn't choose to give it ease since it might make the animation look better, but the will mislead the user to have sudden movements of their phone, which is not good for computer vision. In order to have a faster recognition of the space, we would want the user to move their phone slowly and steady.</p>
          <p>The bouncing effect adds a bit more fun and excitement to the app since our target was designers and educators. Their audiences would be more sensitive to animations. I hope to bring the feeling of excitement to the user and their viewers when they see their creations in the real world via the lens and Brio. This could help with creating a memory and a story together with the user and Brio.</p>

          <div className='project-section'>
            <h2>Placement Indicator for BRIOVR</h2>
            <hr/>
            <div className='brio-fin-video section-title'><video className='brio-animation project-image' src={height} autoPlay="autoPlay" loop="loop" muted="muted"/></div>
            <p className='first-section-par'>This is the feature that I worked on and tried many different things with it. This animation was created within Brio and later added the gizmo to demonstrate the usage and experience.</p>
            <p>Once the object moves 1 unit up or down, the closest sphere would be bigger to indicate that it moved 1 unit.</p>
          </div>

          <div className='project-section'>
            <h2>Save Icon Update</h2>
            <hr/>
            <div className='brio-fin-video section-title'><video className='brio-animation project-image' src={save} autoPlay="autoPlay" loop="loop" muted="muted"/></div>
            <p className='first-section-par'>When a user uploads an object to Brio, Brio shows the status bar on top of the editor. But when it gets to 100%, it just disappears. The same thing happens to the save indicator, it shows Brio is saving, but it never tells the user if it's saved. We got complains about this. Users felt insecure about their creations: is my object saved? Is my scene saved? We've all experienced loss when an app just crashed, and we don't want our users to always have this feeling of insecure. We decided to change this.</p>
            <p>I added a new status bar with the Brio accent colour after the loading bar to ensure users that their model is saved. I added a save icon as well at the beginning of the bar so it takes a glimpse to understand that something has been saved. The same idea for the save status indicator. A saved notification would slide in after saving the scene. They are in the same location, so users won't be confused about whether the scene has been saved. Normally we would want more noticeable animations, but since Brio autosaves, we shouldn't take users attention too much (imagine seeing "Congratulations! Your scene has been saved!" every time you try to move an object). </p>
          </div>






        </div>



      </div>
    </div>);
  }
}
