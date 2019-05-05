import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ProjectList} from '../../Constants/Projects'
export default class Projects extends Component {
  getProjects(cs){
    return cs.map((project)=>
    <div className='project-card spacing1' key={project.title} style={{backgroundImage:`url(${project.img})`}}>
      <Link to={'/projects'+project.link}>
        <div className='title-bkg'>
          <div className='brief'>
            <h3>{project.app}</h3>
            <hr/>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        </div>
      </Link>
    </div>
  )
  }

  getCS(){
    return ProjectList.reduce((cs,project)=>{
      if(project.category.includes('Case Study')){
        cs.push(project)
      }

      return cs
  },[]
  )
  }

  getOther(){
    return ProjectList.reduce((cs,project)=>{
      if(project.category.includes('Other')){
        cs.push(project)
      }

      return cs
  },[]
  )
  }

  render() {
    const profile = '../assets/img/profile_new.png';
    return (
      <div className='header-home animated'>
        <h2 className='title'>Case Studies</h2>
          <div className='project-cards'>
            {this.getProjects(this.getCS())}
          </div>

          <h2 className='title'>Other Projects</h2>
            <div className='project-cards'>
              {this.getProjects(this.getOther())}
            </div>

      </div>
    );
  }
}
