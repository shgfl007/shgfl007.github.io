import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
      <div className='footer'>
        <div className='contact'>
          <p>Find me on:
            <a href='https://www.linkedin.com/in/danninglu/' target='_blank'><i className='social fab fa-linkedin-in'/></a>
            <a href='https://twitter.com/cyrusHisa' target='_blank'><i className='social fab fa-twitter'/></a>
            <a href='https://www.behance.net/danninglu' target='_blank'><i className='social fab fa-behance'></i></a>
            </p>

        </div>
        <p>Designed and Created by Danning Lu</p>
      </div>
      )
    }
}
