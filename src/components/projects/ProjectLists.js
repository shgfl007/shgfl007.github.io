import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';
import Project from './Projects'
import BRIOVR from './details/Briovr'
import FairTrade from './details/fairtrade'
import bkaleg from './details/breakaleg'
import foguang from './details/foguang'
import Geogram from './details/geogram'
import Animation from './details/animation'


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
    </Switch>
    </main>)
  }



}
