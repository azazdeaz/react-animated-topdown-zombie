import React, {Component, PropTypes} from 'react'
import animachine from 'react-animachine-enhancer'
require.context('./assets', true, /\.png$/)

const SET_TYPES = PropTypes.oneOf(['girl', 'man', 'scientist'])

export default class Zombie extends Component {
  static propTypes = {
    set: SET_TYPES,
    head: SET_TYPES,
    leftHand: SET_TYPES,
    rightHand: SET_TYPES,
    leftFoot: SET_TYPES,
    rightFoot: SET_TYPES,
    leftShoulder: SET_TYPES,
    rightShoulder: SET_TYPES,
    style: PropTypes.object,
  }

  static defaultProps = {
    set: 'scientist'
  }

  renderBodyPart(part) {
    const set = this.props[part] || this.props.set
    const src = `./assets/${set}/${part}.png`
    return <image key={part} src={src}/>
  }

  render() {
    return <div style={{position: 'relative', ...this.props.style}}>
      <image key
    </div>
  }
}
