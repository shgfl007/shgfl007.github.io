import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames'

export default class Nav extends Component {
  constructor () {
    super()
    this.state = {
      menuOpen: false,
      solutionsOpen: false,
      verticalPosition: 'top'
    }
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll () {
    const fadeCutoff = 320
    const scrolly = window.scrollY
    const { verticalPosition } = this.state

    const position = scrolly < fadeCutoff ? 'top' : 'bottom'
    if (position === verticalPosition) return
    this.setState({ verticalPosition: position })
  }

  getNavClass () {
    const { verticalPosition } = this.state
    const isGrey = verticalPosition === 'bottom'
    return classnames('nav-home', { 'nav-small': isGrey })
  }


  render() {
    const className = this.getNavClass()
    return (
      <nav className={className}>
          <ul className='list'>
                  <li className='item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='item'>
                    <Link to='/projects'>Projects</Link>
                  </li>
                  <li className='item'>
                    <Link to='/about'>About</Link>
                  </li>
                  <li className='item'>
                    <a className='link' href='https://www.dropbox.com/s/qpqwk9j8s274tod/DanningLu2019.pdf?dl=0' target='_blank'>Résumé</a>
                  </li>
          </ul>
      </nav>

    );
  }
}
