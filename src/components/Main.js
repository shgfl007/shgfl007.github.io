import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom';
import Project from './projects/ProjectLists'
import Home from './header/header'
import About from './about/About'
//import Project from './Projects'
import BRIOVR from './projects/details/Briovr'
import FairTrade from './projects/details/fairtrade'
import bkaleg from './projects/details/breakaleg'
import foguang from './projects/details/foguang'
import Geogram from './projects/details/geogram'
import Animation from './projects/details/animation'

export default class Main extends Component {
  render() {
    return (
      <main>
      <div className='main'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Project}/>
        <Route path='/about' component={About}/>
        <Route exact path='/projects' component={Project} />
        <Route path='/projects/briovr' component={BRIOVR} />
        <Route path='/projects/fairtrade' component={FairTrade} />
        <Route path='/projects/break-a-leg' component={bkaleg} />
        <Route path='/projects/foguang-temple' component={foguang} />
        <Route path='/projects/animation' component={Animation} />
      </Switch>
    </div>
  </main>)
  }

}
