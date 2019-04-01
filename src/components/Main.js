import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom';
import Project from './projects/ProjectLists'
import Home from './header/header'
import About from './about/About'

export default class Main extends Component {
  render() {
    return (
      <main>
      <div className='main'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Project}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  </main>)
  }

}
