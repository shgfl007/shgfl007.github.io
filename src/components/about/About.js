import React, { Component } from 'react';

export default class About extends Component {

  render() {
    const profile = '../assets/img/profile_new.png';
    return (
      <div className=''>
        <div className='header-home animated'>
          <h1 className="title">About</h1>
          <h2 className="description">Interaction Designer - Creative Coder</h2>
        </div>
        <div className='project-content animated'>
          <p className='first-section-par'>I'm a creative coder turned into interaction designer.</p>
          <p>When I was creating experiences with code, I hardly think about how easy/hard it was for people to
          interact with it. "As long as it works." said me and my peer coders. Then one day, I realized that this
          is not going to work! Functionality is not good enough. Creating a product / interactive experiences that
          doesn't speak to the user/audience is not good at all. Even with interactive digital arts, it needs to make
          sense to the audiences in terms of how the piece works. Then I studied User Cetered Design in my masters and
          it opened a new world for me.
        </p>
        <p>Now I use what I learned before to craft experiences that users / audiences that can easily interact with.
          I like to create prototypes to test out the assumptions. I believe it's better to do and show than say. This
          is from my creative coder era, when my mentor always say "demo or die". I also like to try new things. I learn
          new skill and tools by using them. I love to hear feedbacks from people and make changes to enhance their quality
          of life using the product by making changes according to their feedbacks.
        </p>
        </div>



      </div>
    );
  }
}
