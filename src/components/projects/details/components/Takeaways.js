import React, { Component } from 'react';

export default class Takeaways extends Component {
  getTakeAway() {
    return this.props.entries.map((entry)=>
    <div key={entry.title}>
    <h3 key={entry.title} className='section-title'>{entry.title}</h3>
    <p className='first-section-par'>{entry.content}</p>
    </div>
  )
  }

  render(){
    return (
      <div>
      {this.getTakeAway()}
      </div>
    )

  }

}
