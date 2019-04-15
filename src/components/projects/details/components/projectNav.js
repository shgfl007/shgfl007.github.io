import React, { Component } from 'react';
import classnames from 'classnames'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      verticalPosition: 'top'
    }
    this.onScroll = this.onScroll.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)

  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)

    Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
        scroll.scrollToTop();
        window.scrollTo(0, 0)
  }

  componentWillUnmount () {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.onScroll)
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
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
    return classnames('project-nav', { 'project-nav-small': isGrey })
  }

  getSections(section){
    return section.map((s, idx)=><li className='item' key={idx}><Link activeClass='active' to={s.anchor} spy={true} smooth={true} duration={500}>{s.title}</Link></li>)
  }


  render() {
    const className = this.getNavClass()
    return (
      <div className={'nav-small '+className}>
          <ul className='list'>
          {this.getSections(this.props.section)}
          </ul>
      </div>

    );
  }
}
