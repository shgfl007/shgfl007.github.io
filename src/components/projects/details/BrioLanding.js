import React, {Component} from 'react';
import {
  briopricingBKG
} from '../../../Constants/Image'

import {
  pricing1, pricing2, pricing3
} from '../../../Constants/Video'




export default class Briovr extends Component {

  render() {
    return (<div>
      <div className='project-content header-home animated project-header-section'>
        <h1 className='title'>Iterations of the BRIOVR Pricing Page</h1>
        <hr/>
        <h2>BRIOVR</h2>
        <div className='hero-img' style={{
            backgroundImage: `url(${briopricingBKG})`
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
          <h2>First Version</h2>
          <hr/>
          <div className='project-image'>
            <video src={pricing1} muted loop autoPlay playsInline />
          </div>

          <p className='first-section-par'>The first iteration has 2 versions. One is for users that are not logged in. They will see the version
          which lists all the plans and has features underneath the plan name. The other one is for users that have a Brio account already. They will
          see their space usage with all the plans. This idea was to show how much they have used and thus encourage them to pickup a plan.</p>

        </div>

        <div className='project-section'>
          <h2>Second Version</h2>
          <hr/>
          <div className='project-image'>
            <video src={pricing2} muted loop autoPlay playsInline />
          </div>

          <p className='first-section-par'>The second version aimed for a cleaner look. This used only cards with plans and its details listed below
          the name of the plan. Since we were thinking about providing service work as well, I added a section where people can choose to have an add-on.</p>

        </div>

        <div className='project-section'>
          <h2>Third Version</h2>
          <hr/>
          <div className='project-image'>
            <video src={pricing3} muted loop autoPlay playsInline />
          </div>

          <p className='first-section-par'>The third version is the current version that is on the Brio site. The full version can be viewed on
          <a href='https://briovr.com/pricing' target='_blank'> the Brio pricing page</a>.</p>

        </div>


















      </div>
    </div>);
  }
}
