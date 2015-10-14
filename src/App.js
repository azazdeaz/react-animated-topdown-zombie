import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import GSAP from 'react-gsap-enhancer'
require('gsap')

const anim = ({target}) => {
  return TweenMax.to(target, 1, {x: '+=123', yoyo: true, repeat: -1})
}

@GSAP()
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentDidMount() {
    this.addAnimation(anim)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color, transform: `translate(${this.props.increment}px)` }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={10} color={NICE} />
        <Counter increment={50} color={SUPER_NICE} />
      </div>
    );
  }
}
