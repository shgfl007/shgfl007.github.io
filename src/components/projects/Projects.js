import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProjectList} from '../../Constants/Projects'


export default class Projects extends Component {
  getProjects(p){
    return p.map((project)=>
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
      <div className='header-home animated spacing1'>

          <h1 className='title'>Projects</h1>
          <p>Here are some of the projects I've done or are in progress.</p>
          <hr/>
          <h2>Case Studies</h2>
          <div className='project-cards'>
            {this.getProjects(this.getCS())}
          </div>

          <h2 className='title'>Design Projects</h2>
            <div className='project-cards'>
              {this.getProjects(this.getOther())}
            </div>
      </div>
    );
  }
}
