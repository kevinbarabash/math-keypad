
import React, {Component} from 'react'

export default class SVG extends Component {
  render() {
    return <svg {...this.props}>{this.props.children}</svg>;
  }
}

export class LinearGradient extends Component {
  render() {
    return <linearGradient {...this.props}>{this.props.children}</linearGradient>;
  }
}

export class Polygon extends Component {
  render() {
    return <polygon {...this.props}>{this.props.children}</polygon>;
  }
}

export class Defs extends Component {
  render() {
    return <defs {...this.props}>{this.props.children}</defs>
  }
}

export class Stop extends Component {
  render() {
    return <stop {...this.props}>{this.props.children}</stop>;
  }
}

export class Ellipse extends Component {
  render() {
    return <ellipse {...this.props}>{this.props.children}</ellipse>;
  }
}

export class Polyline extends Component {
  render() {
    return <polyline {...this.props}>{this.props.children}</polyline>;
  }
}

export class Circle extends Component {
  render() {
    const {onPress, ...otherProps} = this.props
    return <circle {...otherProps} onClick={onPress} onTouchStart={onPress}>
      {this.props.children}
    </circle>;
  }
}

export class Text extends Component {
  render() {
    return <text {...this.props}>{this.props.children}</text>
  }
}

export class Rect extends Component {
  render() {
     return <rect {...this.props}>{this.props.children}</rect>
  }
}

export class Line extends Component {
  render() {
    return <line {...this.props}>{this.props.children}</line>
  }
}

export class G extends Component {
  render() {
    return <g {...this.props}>{this.props.children}</g>;
  }
}

export class Path extends Component {
  render() {
    // React doesn't know how to handle event handlers on path elements
    const {onPress, ...otherProps} = this.props
    return <path
      {...otherProps}
      onClick={onPress}
      onTouchStart={onPress}
    >
      {this.props.children}
    </path>;
  }
}
