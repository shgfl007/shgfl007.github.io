import React, { Component } from 'react';
import {geoBKG, geoS,geoflow,geomock,geocover} from '../../../Constants/Image'
import Persona from './components/persona'
import Takeaways from './components/Takeaways'

export default class Geogram extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>Live the Moment and Leave the Moment There</h1>
            <hr/>
            <h3>Geogram</h3>
            <div className='hero-img' style={{backgroundImage:`url(${geocover})`}}></div>
          </div>
          <div className='project-content animated'>
            <div className='project-section'>
              <h2>The Project</h2>
              <hr/>

            <p className='first-section-par'>Geogram was an AR social media app for people to create
            videos at their current location and save it at the current location. It aimed to help people
            save the moment they were living and share it with others with the location as if they were there
            or their future selves to relive the moment.</p>
            <ul>
              <li>Company: Geogram</li>
              <li>Project Duration: January 2017 - May 2017</li>
            </ul>
          </div>

          <div className='project-section'>

              <h2>Team and Roles</h2>
              <hr/>
              <p className='fist-section-par list-title'>In this project, I worked as a product
                designer. My overall work for this project can be summarized as:</p>
              <ul>
                <li>Create the user flow of Geogram</li>
                <li>User Research (early adopters)</li>
                <li>Create an interactive mockup & prototype</li>
                <li>Created the landing page & marketing materials</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Discovery</h2>
              <hr/>
              <h3 className='section-title'>Early Adopters and How They Use Social Media Now</h3>
              <div className='project-image'><img src={geoS} /></div>
              <p className='first-section-par'>I created a survey to understand how high school students (Geogram's target early adopters) were using
                social media to share videos and locations. I learned that they use Snapchat a lot and for video production, most of them just use their
                phones. In terms of when's the last time they shared a video with friends, most of them were within the past 3 days. This seemed that the
                younger generation was more willing to share videos with their friends.
              </p>
            </div>

            <div className='project-section'>
              <h2>User Flows, Wireframe, Prototype and Tests</h2>
              <hr/>

              <h3 className='section-title'>The Flow</h3>
              <div className='project-image'><img src={geoflow}/></div>
              <p className='first-section-par'>The flow is focusing on registration - creating a video - post & share. </p>



            <h3 className='section-title'>Mockup</h3>
            <div className='project-image'>
              <img src={geomock} />
            </div>
            <p>The mockup is based on the flow of creating a 'geogram' and share it on the map. This mockup also includes viewing other people's post
            in Geogram.</p>

        </div>


        <div className='project-section'>
          <h2>Geogram @ The Pulse Anniversary</h2>
          <hr/>
          <div className='project-image'>
            <iframe width="744" height="315" src="https://www.youtube.com/embed/LvEloKUb75g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p>The app was successfully delivered before the memorial event of the
            Pulse Shooting anniversary. People used the app to leave their videos
            at the location and they could also view other's story after the tragedy.
            Check out the link here: <a href='https://www.orlandosentinel.com/news/pulse-orlando-nightclub-shooting/os-pulse-memorial-mural-augmented-reality-20170611-story.html' target='_blank'>Orlando News</a></p>
        <p>Geogram is still creating exciting AR experiences for customers. Checkout Geogram's website <a href='https://www.geogram.xyz/home' target='_blank'>www.geogram.xyz</a></p>
        <h2>Reflection</h2>
          <p className='first-section-par'>What I could have done and what I can do better.</p>
          <p>This project was done 2 years ago. From the old user flow, wireframes, mockups and wireframes, there are many designs that were not mature. </p>
          <p className='list-title'>Here's what I would change:</p>
          <ul>
            <li>Create a more detailed and more completed user flow</li>
            <li>Think about more situations that people would use other than focusing on the Pulse memorial event</li>
            <li>Make use of the Material Design system to create the mockups and prototypes</li>
            <li>Make sure everything is consistent</li>
            <li>Do more iterations base on more user tests</li>
          </ul>

        </div>




          </div>
    </div>
    );
  }
}
