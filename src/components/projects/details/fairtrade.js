import React, { Component } from 'react';
import {ftBKG,briop2,briop1, ftq, ftflow, ftbrand, ftfb} from '../../../Constants/Image'
import Persona from './components/persona'
import Takeaways from './components/Takeaways'

const personas = [
  {name:'Ali', age:'45', img: briop1,
    description:'Ali is a newcomer to Canada and landed with his family. He knows English and is trying to get a job ASAP. He brought some souvenirs with him to remind his family of home. He needs help to settle down his family but he doesn\'t want to beg for it.',
    needs: ['Need help to settle down his family', 'Does\'t have enough money to just buy everything new', 'Does\'t want to go to shelters and beg for help'],
    statues:['Newcomer landed with his family that includes small children', 'Doesn\'t have a job yet but is actively looking for one', 'Try to save money as much as possible'],
    sol:['Go to Kijiji and look for used items', 'Go to garage sells when and wherever there\'s one']
  },
  {name:'May', age: '40', img: briop2,
    description:'May is a stay-at-home mom. She has 2 children and they are all big enough to go to high school. When cleaning the house, she finds that there are many things that she won\'t use anymore. She finds it\'s timing and energy consuming to post on Kijiji, and somethings she just throw them away.',
    needs: ['Hard to find a place to donate different kinds of objects that she won\'t use', 'Would like to help other people but doesn\'t know how'],
    statues:['Stay-at-home mom', 'Takes care of the house hold', 'Has extra stuff that she could and willing to give away'],
    sol:['Sometimes but barely using Kijiji to sell second hand objects', 'Throw the things/cloth away', 'Sometimes host garage sell in the summer']
  }
]

const takeaways = [
  {title:'When Working with Users, Always Have Empathy', content:'Thinking from other people\'s shoes is not easy. Alway keep in mind that they are sensitive and there are certain things that when doing a research we should be careful with.'},
  {title:'Unconventional Tools? No Problem!', content:'This is something that I learned in university that kicked in for this project as well. If you can use some tools that can help you achieve your goal 10x faster, use it!'}
]
export default class FairTrade extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>From Soul Food to Fair Trade</h1>
            <hr/>
            <h3>FairTrade</h3>
            <div className='hero-img' style={{backgroundImage:`url(${ftBKG})`}}></div>
          </div>
          <div className='project-content animated'>
            <div className='project-section'>
              <h2>The Project</h2>
              <hr/>
            <p className='first-section-par'>This project is focusing on bridging the disconnection between
            newcomers/refugees that are in need of help and kind hearted people
            who wants to help by donating clothing and other supplies.
            The project started as a platform to help newcomer’s families to
            earn some extra money by selling their home made food.
            We found that many people are using social media to sell
            their home made food. But when we dig deeper into market research,
            we found that there has already been platforms that are doing
            the same thing. So pivoted from Soul Food to Fair Trade. </p>
          </div>

          <div className='project-section'>

              <h2>Team and Roles</h2>
              <hr/>
              <p className='fist-section-par list-title'>In this project I worked as a UX designer collaboration
              with another UI/UX designer and later on I used Unity to build
              a working prototype in Angel Hack 2018 Toronto. After winning
              the hackathon, I continued working on Fair Trade to shape the
              branding and user experience. My overall work for this project can be summarized as:</p>
              <ul>
                <li>Create the UX flow of Soul Food (later Fair Trade)</li>
                <li>Research on competitors, personas and current solutions</li>
                <li>Create an interactive prototype (in Angel Hack 2018)</li>
                <li>Co-create the wireframe and prototype</li>
                <li>Create the style guide for Fair Trade</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Discovery</h2>
              <hr/>
              <h3 className='section-title'>The Problem & Challenge</h3>
              <p className='first-section-par'>The problem we found is that the locals are willing to give away their
              used objects but they don't know where to donate them and they don't know even if they find where to donate,
              is the one that gets their donation really need the object they donated or it's just another piece that will go
              to garbage or recycle bin. And for people who are in need of some object, they finds that it's hard to say they
              need it. They would like to give something in return instead of just take them. There‘s a gap between the two and
              we decided to take the challenge and bridge the gap.
            </p>


            <div className='split-section'>
              <div className='split-left'><img src={ftq}/></div>
              <div className='split-right'>

            <h3 className='section-title'>The Survey</h3>

              <p className='first-section-par'>To understand our personas better, we created 2 sets of surveys: 1 is for the kind hearted locals, and the other is for
                the shoppers (who will receive the donations).
              </p>
            </div>
          </div>

              <h3 className='section-title'>Personas</h3>
                <div className='persona-section'>
                  <Persona personas={personas} />
                </div>

              <h3 className='section-title'>Goal</h3>
              <p className='first-section-par'>Based on the discover stage, we decided to build an app that bridge the gap between those people
                who would like to help the others but don't know where and how and the ones who need help but don't want to ask for it. Here’s the
                list of goals we were trying to achieve by building this app:
              </p>
              <div className='section-block'>

                <ul>
                  <li>The app needs to be accessible for both sides</li>
                  <li>It needs to save time for both sides</li>
                  <li>Both side should feel comfortable giving and taking</li>
                </ul>
              </div>
            </div>

            <div className='project-section'>
              <h2>User Flows, Wireframe, Prototype and Tests</h2>
              <hr/>
              <p className='first-section-par'>After figuring out the challenge, the user personas, and the goals, we decided that the app we are creating
              will be a cross-platform app that has a web app and native mobile apps for Android and iOS. Thus, we decided to create the native phone app as
              the MVP for the project. The wireframe and prototype are both for the native mobile app.</p>
              <h3 className='section-title'>The Flow</h3>
              <div className='project-image'><img src={ftflow}/></div>
              <p className='first-section-par'>The flow contains 2 parts: part 1 is for donors to post their objects and part 2 is for
              shoppers to trade for the object they would like to get. </p>
              <p>We decided to separate the two when they first land on either the web app or the phone app so that they won't be fed up with
              information that they don't care about. </p>
              <p>After choosing what they are, the users can browse either the wish list items (for donor to see if they have the item available) or the
              items that are available (for the shoppers to see if what they want is already waiting for trade).</p>
            <p>If either side found something they are looking for, they'll be able to post the item / request to trade. The other side will receive a notification on their phone.
              Once both side decide to accept the trade, they will be contacted by the app to confirm where to exchange the item. </p>

            <h3 className='section-title'>The System - Introducing the Karma Point System</h3>

            <p className='first-section-par'>We discussed that what should we do if the shopper doesn't have anything to exchange for, which was one of the main problems that we were focusing on, and we decided to
              provide a Karma point system for the shoppers to use to exchange for things they need.
            </p>
            <p className='list-title'>For shoppers</p>
            <ul>
              <li>They are given some Karma Points to start with</li>
              <li>They can choose to trade items using Karma Points instead of other items they own</li>
              <li>Karma points will be awarded if they use their items to exchange</li>
            </ul>
            <p className='list-title'>For Donors</p>
            <ul>
              <li>They are given some Karma Points as reward for join the program</li>
              <li>They can transfer Karma Points to Scene points, PC points or Air Miles as their choices (concept)</li>
            </ul>
            <p>By introducing the Karma System, we hope to award the donors for their kind hearts and at the same time, easing the process for
              shoppers to accecpt donations.
            </p>

            <h3 className='section-title'>Wireframe (Angel Hack 2018)</h3>
            <div className='project-image'>
              <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FlEfNNZVpljcK2dlCIhKGcK%2Ffairtrade-wireframe%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
            </div>
            <p>This version was created during Angel Hack 2018. It's a mini-MVP that we could focusing on for the final pitch during the hackathon. We mainly focused on the part of the trading between the 2 parties.
            The flow includes browsing the list, making and accepting a trade. </p>

          <h3 className='section-title'>Wireframe (Update)</h3>
          <div className='project-image'>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrBoxqwnTfSRGCla7iozQ6M%2Ffairtrade_wireframe_Update3" allowfullscreen></iframe>
          </div>
          <p>After the hackathon, we updated the wireframe and added all the missing screens for the flow. We added the part where the shopper can choose to use Karma point to trade for items.</p>

          <h3 className='section-title'>Prototype (Angel Hack 2018)</h3>
          <div className='project-image'>
            <iframe width="744" height="315" src="https://www.youtube.com/embed/ZxkCnIi_2M0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
          </div>
          <p>I created the prototype in Unity during the Angel Hack 2018 event. This version of prototype was focusing on the core concept of the app. The reason why I chose Unity instead of other coding / programming
          tools was because that using Unity I can focus on the flow and functionality instead of how the app would look. Also I could use the Canvas system to map out the UI elements in no time. It’s not conventional to
          use Unity to create a prototype, but considering the time frame, it was the best choice.</p>
          <p>The prototype included the process of the shopper making an trade offer using the Karma Points he/she currently owned and the app sent the donor a text message. When the donor accepted the trade, the system send back
          a text message back to the shopper. </p>
          <p>We tested out the flow using the prototype at the hackathon, it seemed that the texting part wasn't too famaliar to some of the users since there isn't too many apps that would send
          text message to users. In the later iterations, we could add the option for people to choose whether they would like to be contacted by email or text. And for users that are using the mobile app, we would also send them
          push notifications to their devices when they got an offer. We thought for shoppers we still want receiving text message as a default method for receiving notifications from the app considering they might not have the access
          to the Internet at hands. For the text messages, we would also like to use services that the users could text us back if they would like to accept or reject the offer.</p>

          <h3 className='section-title'>Prototype (Update)</h3>
          <div className='project-image'>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FV3yFSt6CulJUnVl2Y6JxbB%2Ffairtrade_prototype_update%3Fnode-id%3D0%253A1" allowFullscreen></iframe>
          </div>
          <p>After the hackathon, we created an updated prototype that includes more screens then we had in the Unity version. Instead of creating it again in Unity, we used Figma and Adobe XD so we could create a more detailed and focus
            more on the user experiences. </p>
          <p>In this version, we also included some of the brand identity to get a overall feeling of the app.</p>
        </div>

        <div className='project-section'>
          <h2>Brand Identity</h2>
          <hr/>
          <h3 className='section-title'>What is FairTrade?</h3>
          <p className='first-section-par list-title'>Before getting started with the brand identity, we discussed what FairTrade should feels like to people. We came up with 3 words:</p>
          <ul>
            <li>Warm</li>
            <li>Welcoming</li>
            <li>Supportive</li>
          </ul>
          <p>Then we picked some colour palettes to start with and reflecting the adjectives we came up with.</p>
          <div className='project-image'>
            <img src={ftbrand} />
          </div>
          <p>We showed the different palettes to people and ask them what did the palettes reminded of them in terms of emotions. And the closest result we got was from the red and yellow series.
          We picked the red and yellow series then added a warm green to give it a bit contrast. </p>
        <div className='project-image'>
          <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKgarFTelv7NhdXUmX06ZKr%2FGoogle-Material-Design-Copy%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
        </div>
        <p>Then we chose the font, the logo (not fully settle down) and the graphics we are going to use. For the graphics, since none of us are vector illustrators, for the time being, we downloaded
        free vector files and modified them to fit the brand. We decided not to use photos because we didn't want to use photos to represent people that are in need. So we choose to use generic illustrated
        human figures to represent people for the app.</p>
        </div>

        <div className='project-section'>
          <h2>Achievements & Future Development</h2>
          <hr/>
          <p>FairTrade is not a finished project, we've created the basics for it to take off. The next steps would be</p>
          <ul>
            <li>Doing some more user tests using the prototype</li>
            <li>Creating a working MVP that will allow users to post and trade items</li>
            <li>Figure out a way to earn money </li>
          </ul>
          <p>We felt very lucky that our idea was validated by new comers and the Angel Hack 2018 judge panel. We won the 2018 Code for a Cause Toronto
          at the hackathon. </p>
          <div className='project-image'>
            <img src={ftfb} />
          </div>
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
