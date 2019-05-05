import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';
import Project from './Projects'
import BRIOVR from './details/Briovr'
import FairTrade from './details/fairtrade'
import bkaleg from './details/breakaleg'
import foguang from './details/foguang'
import Geogram from './details/geogram'
import Animation from './details/animation'
import Pinch from './details/pinchvr'
import Briolanding from './details/BrioLanding'
import UI from './details/2DProjects'


export default class ProjectList extends Component {
  render(){
    return(
      <main>
    <Switch>
    <Route exact path='/projects' component={Project} />
    <Route path='/projects/briovr' component={BRIOVR} />
    <Route path='/projects/fairtrade' component={FairTrade} />
    <Route path='/projects/break-a-leg' component={bkaleg} />
    <Route path='/projects/foguang-temple' component={foguang} />
    <Route path='/projects/animation' component={Animation} />
    <Route path='/projects/geogram' component={Geogram} />
    <Route path='/projects/pinchvr' component={Pinch} />
    <Route path='/projects/briopricing' component={Briolanding} />
    <Route path='/projects/2d' component={UI} />

    </Switch>
    </main>)
  }



}
