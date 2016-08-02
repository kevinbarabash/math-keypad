import React, {Component} from 'react'
import Svg, {Rect, Line, Path, Polyline, G, Circle} from 'react-native-svg'

class Plus extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <Path d="M19,24 L29,24 M24,29 L24,19" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></Path>
    </Svg>
  }
}

class Sqrt extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 11 32 32">
      <Path d="M14,29 L18,35 L27,21 L34,21" stroke={this.props.color} fill='none' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></Path>
    </Svg>
  }
}

class Exp extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <G fill={this.props.color} fillRule="evenodd">
        <Path d="M28,16.9970301 C28,16.4463856 28.4530363,16 28.9970301,16 L35.0029699,16 C35.5536144,16 36,16.4530363 36,16.9970301 L36,23.0029699 C36,23.5536144 35.5469637,24 35.0029699,24 L28.9970301,24 C28.4463856,24 28,23.5469637 28,23.0029699 L28,16.9970301 Z M30,18 L34,18 L34,22 L30,22 L30,18 Z"></Path>
        <Path d="M14,21.0008717 C14,20.4481055 14.455761,20 15.0024733,20 L24.9975267,20 C25.5511774,20 26,20.4446309 26,21.0008717 L26,34.9991283 C26,35.5518945 25.544239,36 24.9975267,36 L15.0024733,36 C14.4488226,36 14,35.5553691 14,34.9991283 L14,21.0008717 Z M16,22 L24,22 L24,34 L16,34 L16,22 Z"></Path>
      </G>
    </Svg>
  }
}

class Exp2 extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    const y = this.props.size >= 48 ? 8 : 10;
    // TODO(kevinb) figure out the bounding boxes of the paths and use that to center the path
    return <Svg width={this.props.size} height={this.props.size} viewBox={`8 ${y} 32 32`}>
      <G fill={this.props.color} fillRule="evenodd">
        <Path d="M14,21.0008717 C14,20.4481055 14.455761,20 15.0024733,20 L24.9975267,20 C25.5511774,20 26,20.4446309 26,21.0008717 L26,34.9991283 C26,35.5518945 25.544239,36 24.9975267,36 L15.0024733,36 C14.4488226,36 14,35.5553691 14,34.9991283 L14,21.0008717 Z M16,22 L24,22 L24,34 L16,34 L16,22 Z"></Path>
        <Path d="M33.67,23 L33.67,21.5 L31.23,21.5 C32.89,20.34 33.62,19.47 33.62,18.45 C33.62,17.11 32.49,16.23 30.92,16.23 C29.99,16.23 28.93,16.56 28.22,17.34 L29.17,18.48 C29.65,18.03 30.21,17.75 30.95,17.75 C31.44,17.75 31.87,17.99 31.87,18.45 C31.87,19.11 31.33,19.57 28.44,21.66 L28.44,23 L33.67,23 Z"></Path>
      </G>
    </Svg>
  }
}

class Divide extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <G fillRule="evenodd">
        <Path d="M19,24 L29,24" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></Path>
        <Circle fill={this.props.color} cx="24" cy="19.5" r="1.5"></Circle>
        <Circle fill={this.props.color} cx="24" cy="28.5" r="1.5"></Circle>
      </G>
    </Svg>
  }
}

class Minus extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <Path d="M19,24 L29,24" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></Path>
    </Svg>
  }
}

class Times extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <G stroke={this.props.color} strokeWidth='2' strokeLinecap='round' transform="translate(12.000000, 12.000000)">
        <Path d="M8,8 L16,16"></Path>
        <Path d="M8,8 L16,16" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "></Path>
      </G>
    </Svg>
  }
}

class Fraction extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    const y = this.props.size >= 48 ? 6 : 8;
    return <Svg width={this.props.size} height={this.props.size} viewBox={`8 ${y} 32 32`}>
      <G strokeWidth="1" fillRule="evenodd" transform="translate(12.000000, 12.000000)">
          <Path d="M8,16.9970301 C8,16.4463856 8.45303631,16 8.99703014,16 L15.0029699,16 C15.5536144,16 16,16.4530363 16,16.9970301 L16,23.0029699 C16,23.5536144 15.5469637,24 15.0029699,24 L8.99703014,24 C8.4463856,24 8,23.5469637 8,23.0029699 L8,16.9970301 Z M10,18 L14,18 L14,22 L10,22 L10,18 Z" fill={this.props.color}></Path>
          <Rect fill={this.props.color} x="2" y="11" width="20" height="2" rx="1"></Rect>
          <Path d="M8,0.997030139 C8,0.446385598 8.45303631,0 8.99703014,0 L15.0029699,0 C15.5536144,0 16,0.453036308 16,0.997030139 L16,7.00296986 C16,7.5536144 15.5469637,8 15.0029699,8 L8.99703014,8 C8.4463856,8 8,7.54696369 8,7.00296986 L8,0.997030139 Z M10,2 L14,2 L14,6 L10,6 L10,2 Z" fill={this.props.color}></Path>
      </G>
    </Svg>
  }
}

class SignToggle extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    const y = this.props.size >= 48 ? 6 : 8;
    return <Svg width={this.props.size} height={this.props.size} viewBox={`8 ${y} 32 32`}>
      <G strokeWidth="2" transform="translate(12.000000, 12.000000)" stroke={this.props.color}  strokeLinecap="round" strokeLinejoin="round">
        <G transform="translate(15.000000, 15.000000)">
          <Path d="M0,1 L8,1"></Path>
        </G>
        <Path d="M16,4 L8,20"></Path>
        <G transform="translate(1.000000, 4.000000)">
          <Path d="M0,4 L8,4"></Path>
          <Path d="M4,0 L4,8"></Path>
        </G>
      </G>
    </Svg>
  }
}

class Decimal extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <Circle stroke='none' fill={this.props.color} cx="24" cy="30" r="2"></Circle>
    </Svg>
  }
}

class Percent extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    const y = this.props.size >= 48 ? 6 : 8;

    return <Svg width={this.props.size} height={this.props.size} viewBox={`8 ${y} 32 32`}>
      <G strokeWidth="2" stroke={this.props.color} fill='none' transform="translate(12.000000, 12.000000)">
        <Path d="M16,4 L8,20" strokeLinecap="round" strokeLinejoin="round"></Path>
        <Circle cx="7" cy="7" r="3"></Circle>
        <Circle cx="17" cy="17" r="3"></Circle>
      </G>
    </Svg>
  }
}

class Equal extends Component {
  defaultProps = {
    color: 'black',
    size: 32,
  }

  render() {
    return <Svg width={this.props.size} height={this.props.size} viewBox="8 8 32 32">
      <G transform="translate(12.000000, 12.000000)" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M4,9 L21,9"></Path>
        <Path d="M4,15 L21,15"></Path>
      </G>
    </Svg>
  }
}

const map = {
  '+': Plus,
  '-': Minus,
  'sqrt': Sqrt,
  '^2': Exp2,
  '*': Times,
  '/': Divide,
  'pm': SignToggle,
  'frac': Fraction,
  '.': Decimal,
  '%': Percent,
  '=': Equal,
};

export {map as default};
