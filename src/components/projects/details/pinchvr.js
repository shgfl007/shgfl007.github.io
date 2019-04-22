import React, { Component } from 'react';
import {pinchBKG} from '../../../Constants/Image'


export default class FairTrade extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>Pinch Discovery App & VR Collaborate Space</h1>
            <hr/>
            <h3>PinchVR</h3>

          </div>
          <div className='project-content animated'>
            <div className='project-section'>
              <h2>Pinch Discovery</h2>
              <div className='project-image'><img src={pinchBKG}/></div>
            <p>The Pinch Discovery app is an application that ships with the headset and the controller.
            The propose for the app was to showcase the possibilities of the controllers and the SDK.</p>

              <h3 className='section-title'>Team and Roles</h3>
              <p className='first-section-par'>I worked as a Unity developer. I created the Space Planner part of the app and later cleaned up and
              updated the app based on new SDK. I deployed 2 versions of the app: iOS and Android. And I shipped both
              version tp iTunes and Google Play Store.</p>
            <p>Other than creating and updating the app, I also prepared materials for marketing and demo purpose.</p>


                <h3 className='section-title'>The Product</h3>
                <div className='project-image'>
                  <iframe src="https://player.vimeo.com/video/205704938" width="800" height="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <p className='first-section-par'>The app can be found in iTunes: <a href='https://itunes.apple.com/bn/app/pinch-discovery/id1205542053?mt=8'
                  target='_blank'>Pinch Discovery</a></p>
              </div>

              <div className='project-section'>
                <h2>Pinch VR Collaborate Space</h2>
                <p>The Pinch VR Collaborate Space was a prototype to prove the concept of using the Pinch controllers to Collaborate with
                others in VR space.</p>

                <h3 className='section-title'>Team and Roles</h3>
                <p className='first-section-par'>I worked as a Unity developer. I used the Pinch SDK, Unity Network API and Facebook API to create the prototype. </p>

                <h3 className='section-title'>The Product</h3>
                <div className='project-image'>
                  <iframe width="800" height="450" src="https://www.youtube.com/embed/LqG8WDKqBhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p className='first-section-par'>The prototype was successfully made and was planned to be the next project after the Discovery app.</p>
              </div>




          </div>
    </div>
    );
  }
}
