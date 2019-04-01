import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProjectList} from '../../Constants/Projects'


export default class Projects extends Component {
  getProjects(){
    return ProjectList.map((project)=>
    <div className='project-card' key={project.title} style={{backgroundImage:`url(${project.img})`}}>
      <Link to={'/projects'+project.link}>
        <div className='title-bkg'>
          <h3>{project.app}</h3>
          <hr/>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
      </Link>
    </div>
  )
  }

  render() {
    const profile = '../assets/img/profile_new.png';
    return (
      <div className='header-home animated spacing1'>

          <h1 className='title'>Projects</h1>
          <h2 className='description'>Projects include UX design, game design, rapid prototyping and developing.</h2>
          <div className='project-cards'>
            {this.getProjects()}
          </div>

      </div>
    );
  }
}
