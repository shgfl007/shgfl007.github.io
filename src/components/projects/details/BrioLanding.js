import React, {Component} from 'react';
import {
  briolandingBKG
} from '../../../Constants/Image'



export default class Briovr extends Component {

  render() {
    return (<div>
      <div className='project-content header-home animated project-header-section'>
        <h1 className='title'>Iterations of the BRIOVR Landing Page</h1>
        <hr/>
        <h2>BRIOVR</h2>
        <div className='hero-img' style={{
            backgroundImage: `url(${briolandingBKG})`
          }}></div>
      </div>
      <div className='project-content animated'>
        <div className='project-section'>
          <h2>The Project</h2>
          <hr/>
          <p className='first-section-par'>BRIOVR is an online platform for people with less 3d experiences and no coding experiences to create a quick and short 3D interactive experience. We found that it’s hard to tell where the object is when editing in 3D space in a 2D window. This project was to help users visualize where they are moving/placing objects while editing in BRIOVR builder.</p>
        </div>

        <div className='project-section'>
          <h2>Team and Roles</h2>
          <hr/>
          <p className='list-title first-section-par'>For this project, I’m working as a UI/UX designer. I was working with a developer to build this feature for BRIOVR. My work can be summarized as:
          </p>
          <ul>
            <li>Define challenges</li>
            <li>User research</li>
            <li>Wireframe, prototype</li>
            <li>User Test</li>
          </ul>
        </div>


















      </div>
    </div>);
  }
}
