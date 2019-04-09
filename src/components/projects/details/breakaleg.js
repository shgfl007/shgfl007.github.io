import React, { Component } from 'react';
import {gameBKG, gamePrep, gamerule, gameRA1, gameRA2, gameRA3, gameRA4, gameRA5,
gameRB1, gameRB2, gameRB3, gameRB4, gameRB5, gameRB6, gameRB7} from '../../../Constants/Image'
import Slider from 'react-slick'
import {settings} from '../../../Constants/SliderSettings.js'
import Takeaways from './components/Takeaways'

const takeaways = [
  {title:'Failing is OK! But Find It Out As Early As Possible!', content:'When designing and creating rules, we make assumptions. Assumptions can be wrong. It\'s okay to be wrong, but if we spending time on wrong assumptions, it could slow down the process and divert the project to a wrong path.'},
  {title:'Be Prepared For Play Tests!', content:'Play test is fun. We love playing, and playing with others. When decide to do a play test, we always need a detailed plan on what to test, what would be the variable, how many sessions, how long each session would be. Plan everything and try to follow the plan as much as possible.'},
  {title:'Paper Prototype Still Works!', content:'We are pretty used to digital prototypes. It\'s easy and fast to create for apps. But for games, digital prototype might require development work that needs time. Paper prototype comes in at this time. It\'s easier and faster to quickly test out some assumptions. '}
]

export default class BreakALeg extends Component {

  render() {
    return (
      <div>
        <div className='header-home animated project-header-section' >
            <h1 className='title'>Paper Prototype for Quick Play Test</h1>
            <hr/>
            <h3>Break A Leg!</h3>
              <div className='hero-img' style={{
                  backgroundImage: `url(${gameBKG})`
                }}></div>

          </div>
          <div className='project-content animated'>
            <div className='project-section'>
              <h2>The Project</h2>
              <hr/>
              <p className='first-section-par'>
                Break A Leg! is a game that we started to work on during the Global Game Jam 2018. It's a party game for
                friends and families to gather together and have fun. When discussing about the game play, we had different
                ideas about how the items would work to add more fun to the game play. We decided to do a quick paper protytping
                to test out the 2 assumptions.
              </p>
              <p>I proposed the paper prototyping to the team, organized and moderated the process.</p>
              <h3>Goal</h3>
              <p className='first-section-par list-title'>The goal of the practise was to:</p>
              <ul>
                <li>Test and compare item rules A and B</li>
                <li>Make a decision to use either A or B (or none of them)</li>
                <li>Make changes to the rules that we decided to pick if there's improvements</li>
              </ul>
              <p className='list-title'>The rules to be tested are</p>
              <ul>
                <li>Rule A: 3 items, each item has its own power, combine the items using different recipe to create more advanced items</li>
                <li>Rule B: 3 items, each item has its own power, through them to the ground to activate their powers, when 2 or more powers combined on the ground, it will create new effects</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Preparation</h2>
              <hr/>
              <div className='split-section'>
                <div className='split-left'><img src={gamerule} /></div>
                <div className='split-right'>
                  <h3 className='section-title'>Prepare the Doc</h3>
                  <p>We cleaned up the rules, and made them easy for us to remember (and refer to in the later stage). </p>
                </div>
              </div>
              <p className='first-section-par list-title'>Other than the documentation, we prepared materials for the paper prototype:</p>
              <ul>
                <li>Figures as players</li>
                <li>Map</li>
                <li>Plasticine for making items</li>
                <li>Stickies (they are always needed)</li>
                <li>Markers</li>
                <li>Ruler</li>
                <li>Large pieces of paper</li>
                <li>Tape</li>
              </ul>
            </div>

            <div className='project-section'>
              <h2>Day of Paper Prototyping</h2>
              <hr/>
              <h3 className='section-title'>Build the Stage</h3>
              <div className='project-image'><img src={gamePrep}/></div>
              <p className='first-section-par'>We printed out some of the map concept on the day of. But we found that using the printed version was too small for
              us to test out. So we made a new grid on the large paper we prepared.</p>
              <p>Then we used the plasticine to create the items. We used different colours to represent different items.</p>
              <p>We used different Lego figurines to represent each player. We used stickies with plasticines to create HP status. So that we can test out effects
              of items and their combinations.</p>

            <h3 className='section-title'>Test Them Out!</h3>
              <p>We spent around 20 minutes on each round to play under both rules. We run 2 rounds on each rule so we could have a better understanding of how each
                rule works and how it felt to play under that rule.</p>

              <h3 className='section-title'>Rule A Test</h3>
              <div className='project-image'>
                <Slider {...settings}>
                  <div><img src={gameRA1}/></div>
                  <div><img src={gameRA2}/></div>
                  <div><img src={gameRA3}/></div>
                  <div><img src={gameRA4}/></div>
                  <div><img src={gameRA5}/></div>
                </Slider>
              </div>
              <p>Rule A includes pickable items that can be combined with other item to create new items. The new item will be generated at the point where the two
              items were and other player can pick it up and use it against the creator of the new item.</p>

              <h3 className='section-title'>Rule B Test</h3>
              <div className='project-image'>
                <Slider {...settings}>
                  <div><img src={gameRB1}/></div>
                  <div><img src={gameRB2}/></div>
                  <div><img src={gameRB3}/></div>
                  <div><img src={gameRB4}/></div>
                  <div><img src={gameRB5}/></div>
                  <div><img src={gameRB6}/></div>
                  <div><img src={gameRB7}/></div>
                </Slider>
              </div>
              <p>Rule B also includes pickable items that can be picked up by players. After picking up an item, the player can throw it on the
              ground to activate the power of the item. Each item has different powers and will create different kind of effects on the ground. With all 3 items
              combined, it will create a whole screen meteors effect.</p>

            <h3 className='section-title'>Reflection & Analyzing </h3>
            <p className='first-section-par'>When playing under rule A, we found that it brought more unpredictable possibilities to the game. Rule A allows player to
            create items using a certain receipe on the ground, then pick up the new item and use it against other players. In this precess, many things could happen.
            The other player can pickup your new item. The other player could mess up your receipe by adding another item. These situations happened during our 20 minutes
            session and we believe this would happen to the players if we choose rule A. Also rule A added a layer of complexity since the items wouldn't work unless they
            were combined with at less a different item. This could slow done the game and change the rythm. Thus this might lead the players to focus more on creating items
            instead of the the goal of the map. This could break the game.</p>
            <p>Rule B seemed a little better than rule A in terms of complexity. Rule B doesn't require players to pickup items - throw it to another item - pickup new item - use it.
            The process of using item is much easier: pickup, then throw on the ground. Rule B added ground events to the game and made it more fun but not more complected to play.
            However, we did find that it still steal players attention away from achiving the goal of the map a bit. </p>
          <p>In conclusion, none of the rules were good enough to go to development. Rule A seemed too complicated and created a mess. Rule B seemed more suitable, but it still steal player's
          attention away. We would focus a bit more on rule B but try not to take away players attention off the goal too much.</p>
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
