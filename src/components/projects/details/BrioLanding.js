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
          <p className='first-section-par'>BRIOVR is an online platform for people with less 3d experiences and no coding experiences to create a quick and short 3D interactive experience. This section includes all my work on the different iterations we had on the landing page.</p>
        </div>

        <div className='project-section'>
          <h2>Team and Roles</h2>
          <hr/>
          <p className='list-title first-section-par'>For this project, I’m working as a UI/UX designer. My work can be summarized as:
          </p>
          <ul>
            <li>Wireframe, mockup</li>
            <li>User Test</li>
          </ul>
        </div>

        <div className='project-section'>
          <h2>Underconstruction</h2>
          <hr/>

        </div>


















      </div>
    </div>);
  }
}
