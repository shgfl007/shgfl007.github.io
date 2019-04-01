import React, { Component } from 'react';
import {foguangBKG, fgflow, fgIA, briop1, briop2, fgmain,fgphoto,fgp1, fgdp, fgvid, fgdd,fgaudio,fgflow2,fgui} from '../../../Constants/Image'
import Persona from './components/persona'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Takeaways from './components/Takeaways'

const personas = [
  {name:'Tina', age:'20', img: briop2,
    description:'Tina is a college student that is majored in Architecture. She comes to the site to see the temple in reallife because she’s taking a Chinese architecture history class. Tina knows the site but she has never seen its full.',
    needs: ['Can‘t see the statues inside', 'Can\'t see the ceilling strucutures clearly', 'Can\'t see the wall painting', 'Won\'t be able to go up and exam the structure of the East Hall'],
    statues:['College student majors in architecture', 'Heared of the temple from professors', 'Brings camera to the site to take as many photos as she can'],
    sol:['Research online - photo & story', 'Ask professors - architecture structure & formation', 'Research in school library - photo & historical background']
  },
  {name:'Ru Zhi', age: '65', img: briop1,
    description:'Ru Zhi comes to the temple with his grandson. He wants to show his grandchild the cultural heritage so he could learn about the history and appreciate the culture.',
    needs: ['Hard to gather all background stories of Fo Guang Temple (history and religious)', 'Hard to find authority source of information about the temple', 'Hard to make the experience fun for the child'],
    statues:['Retired, helps taking care of grandchild', 'Hobbyist of Chinese architecture', 'Brings grandchild here to visit and learn about the temple'],
    sol:['Uses own knowledge', 'Tells the story in his own mouth']
  }
]

const flow = {
  width: '200px',
  height:'400px',
  margin:'auto',
  backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${fgflow})`
}

const takeaways = [
  {title:'Know the Audience & Location', content:'This project involves physical setups. Learn the location well to tailor the solution that is suitable for the location is important.'},
  {title:'Choose the Tech to Serve the Story & Experience', content:'Technology is just tools. We should never design something for the technology because it\'s cool. We pickup the right technology for the solution we proposed.'},
  {title:'Learn from the Client & Work with Them', content:'Our client knows best in their fields. We brought our client into our design process. We showed our client our process on bi-weekly meetings and took their advice.'},
  {title:'Past Designs Are Always Good Examples to Learn From', content:'Designs in the past are not out-dated. They are like elderly people - always have a good story to tell. When doing "new" designs, there are always things to learn from them.'}
]


export default class Foguang extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <div className='project-content header-home animated project-header-section' >
            <h1 className='title'>Telling the Story Behind Acient Temple with Digital Media</h1>
            <hr/>
            <h2>Foguang Temple Touring Guide</h2>
            <div className='hero-img' style={{backgroundImage:`url(${fgmain})`}}></div>
          </div>
          <div className='project-content animated'>
            <div className='project-section'>
              <h2>The Project</h2>
              <hr/>
              <p>This project was commissioned by our client - Cultural Heritage Conservation Center (Beijing, China)
                to tell the historical and cultural story behind the FoGuang Temple.
              </p>
              <p className='list-title'>We worked closely with our client to give the tourists onsite and visitors from online an indeepth
                experience via the web app we created.
              </p>
              <ul>
                <li>Client: Cultural Heritage Conservation Center, Beijing GWY CO., LTD</li>
                <li>Project Time: 2015 - 2016</li>
                <li>Role: Product Designer / Developer, Client Contact Person</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Team and Roles</h2>
              <hr />
              <p className='list-title'>I worked as one of the product designers on this project and also involded in
                development for the 360 tour. My work can be summarized as:
              </p>
              <ul>
                <li>Project management (contacting point between the client and us)</li>
                <li>Define challenges</li>
                <li>User research</li>
                <li>Information architect</li>
                <li>Wireframe, prototype</li>
                <li>Implementation</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Design Process</h2>
              <hr/>
              <img className='project-img project-img-small' src={fgdp} />
              <p className='list-title'>For this project, we took the following steps to design and develope the experience</p>
              <ul>
                <li>Talked to the client, had better understanding of the challenges & problems</li>
                <li>Research on the users based on client's requirements</li>
                <li>Create the information architecture based on the content</li>
                <li>Storyboard on user interactions & wireframes</li>
                <li>Prototyping</li>
                <li>Implementation</li>
              </ul>
            </div>


            <div className='project-section'>
              <h2>Discovery</h2>
              <hr/>
              <h3 className='section-title'>Location & Visitors</h3>
              <img className='project-img' src={fgphoto}/>
                  <p className='first-par'>FoGuang Temple located in ShanXi Province. Arounding the temple, there is a small
                  village with some local restuarants opened for tourists. Inside the temple there wasn't
                  much trace of modern technology since the temple itself is made of wood. Avoiding modern technology is to protect
                   the temple from fire. Because of the location (the temple is surrounded by moutains), even phone network wasn't very strong.
                </p>
                <p>Most of the visitors to the site had knowledge of the temple: why it's important to the
                  Chinese architectural history. While some visitors came to the site with a book telling
                  the story of Liang SiChen finding the site in their hands.</p>
                <p>Most of the visitors came around the noon. Inside most of its halls, there wasn't artifical
                  lights. The site was lighten up by the sunlight. The site closed early since later visitors won't
                  be able to see anything.
                </p>
                <p className='list-title'>In conclusion:</p>
                <ul>
                  <li>The temple has no built-in infrustructure for modern technology</li>
                  <li>Setting up infrustructure would be hard and bad for the temple</li>
                  <li>Visitors are not allowed to get near the atlar, all statues are behind the bars</li>
                  <li>There are more to see behind the reach and sight of visitors, like wall paintings, poems written on ceilling etc. </li>
                  <li>Visiting hours are limited due to lack of electricity</li>
                  <li>On-site description boards tells little stories behind the temple</li>
                  <li>Most visitors are Chinese architecture hobbyists, professionals or students</li>
                </ul>

                <h3 className='section-title'>Problems & Challenges</h3>
                  <p className='first-section-par list-title'>
                    Our client collect data in their process of conserve the Foguang Temple.
                    They wanted to use the data to tell the story of Foguang Temple.
                    Here are their problems:
                  </p>
                  <ul>
                    <li>A huge amount of data is not being used</li>
                    <li>Wanted to tell the story, but didn't know where to start</li>
                    <li>The product needs to be accessible for both onsite and offsite visitors</li>
                  </ul>
                  <p className='list-title'>Their current solutions were:</p>
                  <ul>
                    <li>Indexed database for the database (not open to public)</li>
                    <li>Give presentations in person</li>
                  </ul>

                <h3 className='section-title'>Personas</h3>
                  <div className='persona-section'>
                    <Persona personas={personas} />
                  </div>


                <h3 className='section-title'>Goal</h3>
                  <p className='first-section-par'>We went through all our discoveries about our personas with our clients, and we purposed the following goals for the app:</p>
                  <div className='section-block list-title'>

                    <ul>
                      <li>Tell the story behind the temple - history, culture, and its position in Chinese architecture history</li>
                      <li>Include the contents that the visitors wouldn't be able to see even onsite</li>
                      <li>Present the data from our client with context instead of creating a data library</li>
                      <li>The product should be accessible online and offline</li>
                    </ul>
                  </div>

            </div>


            <div className='project-section'>
            <h2>Prototyping and Tests</h2>
            <hr />
              <h3 className='section-title'>The Flow (First Try)</h3>
                <div className='split-section'>
                  <div className='split-left'><img className='foguang-photo' src={fgflow} /></div>
                  <div className='split-right' style={{marginTop:'0'}}>
                    <p className='first-section-par' >We decided to create a touring guide for the temple. Because we had 2 types of personas, one was professionals and the other was
                    hobbyist that loved Chinese architectures, we decided to provide the audiences with 2 different routes. One was curated route for hobbyists. This route would
                    be designed to go through everything about the Foguang Temple and guide the audience to go to different halls one by one. The other one was self-guided tour.
                    This would give the seasoned audiences freedom to choose where to go.
                    </p>
                  </div>
                </div>
                <p>Our client thought that this way they might not be able to tell the full story behind the temple. They would like to tell some of the background stories
                before guiding the audiences into the East hall.</p>

              <p>After the discusstion, because both of the client and us had a better idea of what to do, we decided to collaborate with our client first to curate the story and tailor the experience accordingly.</p>


            <h3 className='section-title'>Information Architecture</h3>
            <div className='project-image'><img className='project-img' src={fgIA}/></div>

            <p className='list-title'>We worked closely with our client to narraw down the storyline. </p>
              <ul>
                <li>One side of the story takes the temple as the main character and takes the audiences through its life.</li>
                <li>The other side of the story takes Liang SiCheng, the famous Chinese Architect as the main character.</li>
              </ul>
              <p>The two storyline comes together when the temple was rediscovered by Liang SiCheng.</p>
              <p>After the two story merging together, we decided to take advantage of the data from our client by showing the
                360 photos of current FoGuang Temple. </p>
              <p>In this section, we tell the story that are related to the Temple, so that the audience can see the content within
              its context.</p>

              <h3 className='section-title'>Learn from Museums</h3>
              <p className='first-section-par list-title' >After creating the the IA, we realized that this experience was very content heavy. Let’s face the truth, no one reads nowadays!
                We realized that we were facing the situation that many museums were facing: </p>
              <ul>
                <li>Visitors are in the same room with the subject</li>
                <li>The subject had so much story behind that could not be shown with the subject</li>
                <li>Visitors has limited time and concentration with each subject</li>
              </ul>
              <div className='split-section'>
                <div className='split-left'><img className='foguang-photo' src={fgaudio} /></div>
                <div className='split-right'>
                <p className='list-title' style={{marginTop:'0'}}>We researched how museums solved these problem. This might not be the best solution but it worked for many museums: audio guide.
                   We pitched the audio guide idea to the client with these benefits:
                </p>
                <ul>
                  <li>Visitors don't need to read anything</li>
                  <li>The guide won't steal visitors attention too much</li>
                  <li>With the audio plus some background music, it could create a more immersive experience</li>
                </ul>
              </div>
            </div>
            <p>We added vioce over for all the main contents. For the first 2 chapters, we also added some background music to create a more immersive
            experience. For most of the import content within the 360 experience, we also added voice over. So that the visitors could look at the subject
            and listen to the story behind. We tried to keep the part without vioce over to be very short. By providing this, we hope that the audiences can
            spend more time on looking at the subject instead of the reading a bunch of text.</p>

            <h3 className='section-title'>The Flow (Touring Route)</h3>
              <div className='project-image'><img className='project-img' src={fgflow2} /></div>
                  <p className='list-title first-section-par'>We decided to create a touring guide for the temple. We proposed the following flow:</p>
                  <ul className='numbered-list'>
                    <li>The visitor starts the tour at the front gate by picking up a tablet with the app installed/loaded</li>
                    <li>The visitor click on "start" to start the tour</li>
                    <li>While looking at the whole temple from the front gate, the visitor listens to the brief history of the temple and Buddhism in China</li>
                    <li>Following the guide, the visitor moves to the center of the first courtyard, facing the Tang funerary pillar</li>
                    <li>The guide auto plays the 2nd chapter: history of the Society for the study of Chinese Architecture and how Liang SiCheng discovered the Foguang Temple as one of the two Tang temples left in China</li>
                    <li>The visitor follows the lead of the guide, goes to the Manjisri hall and takes a look at the funerary pillar. Then the visitor goes up stairs to visit the Great East Hall.</li>
                    <li>The visitor sees the Great East Hall in front of her. She takes a look at the app and saw the picture is matching what she sees.</li>
                    <li>She clicks on one of the hotspots on the picture, and listen to the story associates to the hotspot</li>
                    <li>She walk around the outside of the East Hall, looks at the ceilling structure and sees the detailed blue print of the parts in the app</li>
                    <li>She enters the Great East Hall, walks around with the tablet and sees the 3d model of the statues that are behind the bars</li>
                    <li>She finds a hotspot that shows there's something on the wooden structure of the ceilling. She clicks on that and realizes there is an ancient wall painting. She feels surprized and excited.</li>
                    <li>She checks all the hotspots inside the Great East Hall, and finds that there are more statues than she thought before coming to the site.</li>
                    <li>She goes back the front gate, returns the tablet and ready to leave. She takes the last look at the temple, feels excited and satisfied. </li>
                  </ul>





            <h3 className='section-title'>VR or Not VR</h3>
            <p className='first-section-par'>Because we had a huge section that contains 360 photos, our client was considering it to be VR enabled.</p>
            <p className='list-title'>We take the exhibition display condition into considerations, here's list we presented to the client why
              we shouldn't do VR at the time:
            </p>
            <ul>
              <li>The exhibition is public, while VR is more of a personal experience</li>
              <li>Hygiene concerns</li>
              <li>Length and purpose of the experience: the experience was suppose to be educational, and audiences can
                take as long as they want to learn the story at their own pace.
              </li>
            </ul>
            <p>We did not make the app an VR experience onsite, but we did want to enable VR experience for online
             visitors since some of them would be looking at the site at their home and they would have their own VR
            goggles and would have enough time to go through everything.</p>

          <h3 className='section-title'>Wireframe</h3>
            <p className='first-section-par'>We created 2 seperate wireframes. One is the linear storytelling chapters, the other is the 360 experience part. </p>
            <h3 className='section-title'>Wireframe for the linear storyline</h3>
              <div className='project-image'>
                <video src={fgui} autoPlay muted loop width='100%'/>
              </div>
            <p className='first-section-par'>For the linear storytelling part, we decided to go with a timeline since it suits the story the best. It was risky to create a horizontal scroll experience since there weren't many
              apps/webpages that used horizontal scroll. However we have the timeline extended to the right beyond the edge to indicate that there are more contents on the right.</p>
            <h3 className='section-title'>Wireframe for 360 experience</h3>
            <div className='project-image'>
              <iframe className='fg-wireframe' width="1000" height="500" src="https://xd.adobe.com/embed/3eb3a69a-81db-4720-69f7-8dab3341858f-4882/" frameBorder="0" allowFullScreen></iframe>
            </div>
            <p className='first-section-par'>The 360 part was designed to be a full screen experience. We made cards to popup if the content includes multimedia and lots of text. Some cards are just quotes from Liang SiCheng or
              other famous people, so we had them as cards in the scene as 3d objects.</p>
          </div>



          <div className='project-section'>
            <h2>Product</h2>
            <hr/>
          <h3 className='section-title'>Detailed Design</h3>
          <div className='project-image'>
            <img src={fgdd} />
          </div>
          <p>For the detailed designs, we studied the styles of Tang dynasty to highlight the cultural aspect. The color was based on
            patterns found on cellings and wall paintings from the similar era. The elements for the timeline was based on buddhism stories and symbols.
             The icons for indoor interactions were based on types of the content: subject description or background story.</p>
           <p>In this way, we connect the app visually with the background concept to give the audiences a more immersived experiences.</p>

            <h3 className='section-title'>Result</h3>
            <div className='brio-fin-video'>
              <video className='brio-fin-video' src={fgvid} autoPlay loop muted/>

            </div>
            <p>The app can be found on the Google Chrome Store:</p>
            <p><a href='https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1'
              target='_blank'>FoGuang App</a></p>
            <p className='list-title'>We went to the site with our client after creating the app and did some onsite tests. We got some great feedback from visitors:</p>
            <ul>
              <li>"The app showed some great background stories that I wouldn't need to go back to books all the time..."</li>
              <li>"It shows the detail that we wouldn't be able to see because they are inside the cage which is amazing..."</li>
              <li>"This will be available online? That would be great!"</li>
            </ul>

              <h3 className='section-title'>Future Development</h3>
              <p className='first-section-par'>At the end of the project, we made another purposal for future development since at the time, the technology
              that suited the senerio best wasn't available.</p>
            <p className='list-title'>In the future development purposal we included the following points:</p>
              <ul>
              <li>Create an immersive onsite experience by adding image recognition</li>
              <li>Separating the onsite and offsite experiences by offering more tailored experiences</li>
              <li>Adding detailed scans from our client to showcase the statues inside the Great East Hall</li>
              </ul>
            </div>

            <div className='project-section'>
            <h2>Takeaways</h2>
            <hr/>
            <Takeaways entries={takeaways} />

          </div>


          </div>
    </div>
    );
  }
}
