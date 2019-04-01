import React, { Component } from 'react';
import Projects from '../projects/ProjectsHome'
import {profile} from '../../Constants/Image'

export default class Header extends Component {

  render() {
    return (
      <div className='header-home animated spacing1'>

          <div className='header-split'>
          {/*
            <div className='header-split-left'>

              <img className='selfie' alt="profile_pic" src={profile} />


            </div>*/}
            <div className='header-split-right'>
            <h2 className="title-main-header">Hi, I'm Danning Lu. <br/>An interaction designer based in Toronto, Canada.</h2>
              <p className='summary'>With a background in programming and entrepreneurship, my strength lies in research & rapid prototyping for web & mobile apps. During my career I had the privilege to work with companies that are challenging the new territory of AR and VR. </p>
            </div>
          </div>

          <div>
            <h2>Case Studies</h2>
            <Projects />
          </div>
      </div>
    );
  }
}
