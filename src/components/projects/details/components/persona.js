import React, { Component } from 'react';

export default class Persona extends Component {
  getPersonas() {
    return this.props.personas.map((persona)=>
    <div key={persona.name} className='persona-card'>
      <div className='card-header'>
        <div className='header-img'>
          <img src={persona.img} />
        </div>
        <div className='header-text'>
          <h4>{persona.name}</h4><h4>{persona.job}</h4>
          <h4>{persona.age} Years Old</h4>
        </div>
      </div>
      <p>{persona.description}</p>
      <h4 className='section-title'>Statues:</h4>
      {persona.statues && <ul>{this.getStatue(persona.statues)}</ul>}
      <h4 className='section-title'>Problems:</h4>
      {persona.needs && <ul>{this.getNeeds(persona.needs)}</ul>}
      <h4 className='section-title'>Current Solutions:</h4>
      {persona.sol && <ul>{this.getSolutions(persona.sol)}</ul>}

    </div>
  )
  }

  getSolutions(sol){
    return sol.map((solution)=><li>{solution}</li>)
  }

  getNeeds(needs){
    return needs.map((need)=><li>{need}</li>)
  }

  getStatue(statues){
    return statues.map((s)=><li>{s}</li>)
  }

  render(){
    return (
      this.getPersonas()
    )

  }
}
