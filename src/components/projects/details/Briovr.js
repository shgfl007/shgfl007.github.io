import React, {Component} from 'react';
import {
  brioBKG,
  briop1,
  briop2,
  brioAnim,
  brioref,
  briodesign,
  brios1,
  briodesign2,
  briotweet,
  briodetail,
  brioFin
} from '../../../Constants/Image'

import Persona from './components/persona'
import Takeaways from './components/Takeaways'


const design = {
  width: '100%',
  height: '400px',
  margin: 'auto',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${briodesign})`
}

const tweet = {
  backgroundImage: `url(${briotweet})`
}

const detail = {
  width: '100%',
  height: '400px',
  margin: 'auto',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${briodetail})`
}

const personas = [
  {name:'Tony', age:'34', img: briop1,
    description:'Tony is an interaction designer that just start to get into the space of AR and VR. Tony tried to learn Unity and Unreal but realized that learning the engines took too much time and efforts. Tony wants something he can quickly create prototypes for the interactive experiences he\'s creating.',
    needs: ['Don\'t have time for diving into game engines to create prototypes', 'Can\'t build interactive prototypes in a short time without coding', 'Hard to visualize, create, build and deploy to AR/VR devices'],
    statues:['Veteran interaction designer with previous experiences in mobile and web design', 'Knows little about game engines'],
    sol:['Depend on developers to create something quick to test out', 'Use VR apps to place object then pass to devs to create interactions', 'Use other tools like storyboard and paper prototypes to simulate basic interactions']
  },
  {name:'Amy', age: '20', img: briop2,
    description:'Amy is a student that studying art in university. She\'s really intersted in the new technology of AR and VR and she\'s taking classes that uses Unity as the main tool kit. She has team assignments to create 3D experiences, when talking to the team, she wants something to present her thoughts.',
    needs: ['Hard to make something quick and direct in Unity that she could present to the team', 'Hard to collaborate in Unity'],
    statues:['Student, has time to learn and try different tools', 'Has to use Unity for class', 'Sometimes wants to create cute and short interactive experiences to show friends for fun'],
    sol:['Spends more time to learn Unity', 'Use Unity collaborate for team projects', 'Friends needs to download stuff each time if she wants to show off something']
  }
]

const takeaways = [
  {title:'Always Talk to the Team, discuss with them and listen to them', content:'Always talk to the team! They are all smart people, and I can always learn from them. Plus, fresh eyes are always helpful!'},
  {title:'Never be Afraid to Try New Things', content:'Especially working with new technology, I need to keep my mind open and be prepared to try, learn, adapt to new tools, concepts and workflows. This helps with the process and improves the result.'},
  {title:'Work Smart', content:'Sometimes, it\'s cool to break the rules and change the workflow. We tested the feature as we developing it. This wasn\'t the regular workflow, but for this feature it actually shorten the development circle.'}
]

export default class Briovr extends Component {

  render() {
    return (<div>
      <div className='project-content header-home animated project-header-section'>
        <h1 className='title'>Making Editing 3D Scenes Easier</h1>
        <hr/>
        <h2>Placement Indicator for BRIOVR</h2>
        <div className='hero-img' style={{
            backgroundImage: `url(${brioBKG})`
          }}></div>
      </div>
      <div className='project-content animated'>
        <div className='project-section'>
          <h2>The Project</h2>
          <hr/>
          <p className='first-section-par'>BRIOVR is an online platform for people with less 3d experiences and no coding experiences to create quick and short 3D interactive experience. We found that it’s hard to tell where the object is when editing in 3D space in a 2D window. This project was to help users visualize where they are moving/placing objects while editing in BRIOVR builder.</p>
        </div>

        <div className='project-section'>
          <h2>Team and Roles</h2>
          <hr/>
          <p className='list-title first-section-par'>For this project, I’m working as the UI/UX designer. I was working with a developer to build this feature for BRIOVR. My work can be summarized as:
          </p>
          <ul>
            <li>Define challenges</li>
            <li>User research</li>
            <li>Wireframe, prototype</li>
            <li>User Test</li>
          </ul>
        </div>

        <div className='project-section'>
          <h2>Discovery</h2>
          <hr/>
          <h3 className='section-title'>Challenges</h3>
          <p className='list-title first-section-par'>We found that the users were having problems moving 3d objects around because they couldn't figure out where the object was even though we had the grid system to aid them.
          </p>
          <ul>
            <li>Show 3d space inside the 2d editor</li>
            <li>Responsive to object's movements and size changes in realtime</li>
            <li>Understandable by the personas</li>
          </ul>

        </div>

        <h3 className='section-title'>Personas</h3>
        <p className='first-section-par'>I used the persona we had for BRIO as a full prototyping tool for designers and students. We know that our users are interested in building interactive experiences and share or collaborate with others. We also know that
        they are familiar with professional tools like Unity. </p>
        <div className='persona-section'>
          <Persona personas={personas} />
        </div>

        <h3 className='section-title'>Moving in 3D Space</h3>
        <div className='project-image'>
          <img src={brioref} />
        </div>
        <p className='first-section-par list-title'>Before getting started into the design process, I did some research on how 3d software represents 3d space. Here's what I've discovered:</p>
        <ul>
          <li>For 3d modeling software, most of them use split views of top, front and side.</li>
          <li>For game engines like Unreal and Unity, they also use the split views to identify the space.</li>
          <li>For AR apps (AR stickers in particular), they use a grid to identify the surface and a circle/square to identify where they are placing the object.</li>
          <li>In real life, we know that when objects are closer, they are bigger. If something is floating, we know how far by looking at the shadow it casts.</li>
        </ul>
        <p>I found that 3d modeling software and game engines are for users that are trained to view the 3d space using different view ports. While AR apps provides a better solution for regular users that doesn't have much experiences with professional 3d software.
        </p>
        <p>Also as human, we do have a natural understanding of 3 dimensional world by observing the size of we see an object and its shadow.</p>

        <p>After conducting the research, I started to build prototypes based on my discoveries.</p>

        <div className='project-section'>
          <h2>Design, Mockup and Iterations</h2>
          <hr/>

          <div className='split-section'>
            <div className='split-left'><img src={brios1}/></div>
            <div className='split-right'>
              <h3 className='section-title'>The Sketch</h3>
              <p className='first-section-par'>Based on the discoveries, I first did some sketches before going deeper into the design.</p>
              <p>I used simple elements to test out my assumptions: a cube, the grid and the indicator. The sketches includes something similar to real world shadows that would be affected by the shape of the objects, also something more abstract (a ring that represents the rough size of the object).
              </p>
            </div>
          </div>

          <h3 className='section-title'>The Mockup</h3>
          <p className='first-section-par'>I took some of the sketches and put it in Adobe XD on top of screenshots of the Brio builder. The elements are still simple: a cube, the grid with a background colour and the indicator.
          </p>
          <p>In this phase, I was focusing on the colour and shape of the variety indicators. It showed that what colour would be more visible with different background colours.
          </p>
          <p>After building the mockup, I showed it to the team that were working on other features. Before getting into it, I explain what was expected for the indicator. Here's the list I've mentioned to the team:
          </p>
          <p className='list-title'>The indicator should</p>
          <ul>
            <li>Show where the object is on the x-z plane (how far from the edit camera)</li>
            <li>Be visible and self explainary</li>
            <li>Be very light in terms of rendering & calculation within the web app</li>
          </ul>
          <p>From the feedbacks from the team, I learned that using an abstract base that won't be affected by the shape of the object would be a better choice in terms of performance. This helped me filtered out the realtime shadow like indicators and focused more on the abstract ring shapes.
          </p>

          <div className='project-image'><img src={briodesign}/></div>

          <h3 className='section-title'>The Base</h3>
          <p>I worked on a variaty of the abstract bases and for each round I asked artists and other team members for their feedback.</p>
          <p>After several iterations, the base became something similar to the final design: a ring shape with dotted outline.</p>

          <div className='split-section'>
            <div className='split-left'><img src={briodesign2}/></div>
            <div className='split-right'>
              <h3 className='section-title'>The Height Ruler</h3>
              <p className='first-section-par'>It was easier to design the height indicator after setting the base style and colour from the base. The height indicator was refering to rulers and and grid system we were using in Brio. The distance between each dot is the same distance between each 'x' on the grid. In this way, users wouldn't need to think about whether the distances were the same.</p>
            </div>
          </div>

          <h3 className='section-title'>The Rules</h3>
          <p className='list-title first-section-par'>Other than designing the actual appearance of the indicator, I also set the rules of the indicator. Here are the rules:</p>
          <ul>
            <li>When - The indicator appears when a object is being manipulated (move, scale, rotate)</li>
            <li>Where - The base should always be on the grid. The other side of the indicator should be in from the ceter of the object.</li>
            <li>What - The indicator should appear for: primitives, 3D models, images, videos, waypoints (camera & movement), player camera</li>
          </ul>

          <h3 className='section-title'>The Prototype</h3>
          <div className='project-image'>
            <iframe src="https://view.briovr.com/5b346383-9811-4f1f-a1f7-60e9271094bb?minimal=true" width="1000" height="360" frameBorder="0" allowFullscreen="allowfullscreen"/>
          </div>
          <p className='first-section-par'>I've made some quick mockups in Adobe XD, but the indicator is supposed to be used in 3D space. 2D mockups won't be good enough to represent how the indicator will look and function in a 3D space. So I built a quick prototype inside Brio since it was the fastest way I can think of to make a prototype in 3D without coding.
          </p>
          <p className='list-title'>I included following aspects in the mockup:</p>
          <ul>
            <li>A variaty of shapes of objects (using objects from Google Poly library)</li>
            <li>Different sizes of objects</li>
            <li>Objects that were rotated to different angels</li>
          </ul>

          <p className='list-title'>From the mockup, I added 2 more rules based on the tests and discoveries:</p>
          <ul>
            <li>The bottom part of the indicator has a minium and a maxium size, so it won't get lost when the model is either too small or too big</li>
            <li>The indicator is based from the center of the object's bounding box instead of pivit points</li>
          </ul>
          <p>
            <a href='https://view.briovr.com/5b346383-9811-4f1f-a1f7-60e9271094bb' target='_blank'>Here's the link to the prototype</a>
          </p>

          <div className='split-section'>
            <div className='split-left'><video className='brio-animation section-title' src={brioAnim} autoPlay='autoPlay' loop='loop' muted='muted'/></div>
            <div className='split-right'>
              <h3 className='section-title'>Give It A Bit Characteristics</h3>
              <p className='first-section-par'>To make the indicator more responsive and obvious, I added some animation to make it react more to user's interactions. For the height indicator, it pops up a sphere when the object moves up (or down underneath the grid) 0.5 meters (Brio unit). And a sphere will disapear when it reaches the base on both ways. The motion brought the indicator a bit more characteristics but not too much.
              </p>
            </div>

          </div>

          <h3 className='section-title'>Detailed Design</h3>
          <div className='project-image'><img src={briodetail}/></div>
          <p>The design doc contains the basic designs of the indicator. Since it was different than 2D design, there wasn't too many pixel relationed aspects. The mockup was passed to the developer along with this design doc so he could have a better understanding of the feature and see the animation easier.</p>

          <h3 className='section-title'>Test It Out</h3>
          <p className='first-section-par'>It's different to prototype in 3D space and it's different to test within 3D space. After talking to the developer that was assigned to the task, we decided to use the prototype as a reference to start developing and test it out when the indicator is interactable.
          </p>
          <p className='list-title'>The tests were focusing the following questions that I wasn't sure when doing tests on 2D prototypes:</p>
          <ul>
            <li>Is the indicator visible with any background colour?</li>
            <li>Can the indicator represent where the 3d object is (x,y,z direction)?</li>
            <li>Can the user understand how the indicator work?</li>
            <li>Is there other things that I didn't consider when I was doing the design?</li>
          </ul>

          <h3 className='section-title'>Developing & Testing</h3>
          <p className='first-section-par list-title'>Just like the mockup, we used objects with different shape and sizes and tested with different people in-house. From the result, we changed following things:</p>
          <ul>
            <li>The maxium size of the bottom indicator</li>
            <li>The minium size of the bottom indicator</li>
            <li>The starting point of the indicator changed from the center of the bounding box to the center of the bottom face of the bounding box</li>
            <li>The indicator will always be on top of anything in the scene (other than the editor interface)</li>
          </ul>
          <p>In addition to the list, we changed the animtion to a simpler one due to development timeline.</p>

        </div>

        <div className='project-section'>

          <h2>Result & Future Developments</h2>
          <hr />
          <div className='brio-fin-video'><video className='brio-animation' src={brioFin} autoPlay="autoPlay" loop="loop" muted="muted"/></div>
          <p className='list-title'>The final result of the indicator helped to locate objects within 3D space. From our analytics, I found that it surprisingly helped a lot on the waypoints other than 3D objects. For future developments, I would love to include:
          </p>
          <ul>
            <li>Add back the animation to make Brio more fun to use</li>
            <li>Adjust the base more based on the average model that users use</li>
            <li>Add inspector support when user drags model from the Brio library or Google Poly library and from their computer</li>
          </ul>

          <h3 className='section-title'>Social Proof</h3>
          <div className='project-image'>
            <div className='brio-sm-proof' style={tweet}></div>
          </div>
          <p>From our user Marie Graham's tweets, we found that Brio was easy and intuitive for students to build quick prototypes to experience in VR, which was great to hear as we wanted Brio to be a tool for building MVPs.
          </p>
        </div>

        <div className='project-section'>
          <h2>Takeaways</h2>
          <hr/>
          <Takeaways entries={takeaways} />
        </div>
      </div>
    </div>);
  }
}
