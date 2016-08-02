import React, {Component} from 'react'
import {Text, View, Dimensions} from 'react-native'
import Svg, {Rect, Line, Path, Polyline, G, Circle} from 'react-native-svg'

import map from './Icons'

const {width, height} = Dimensions.get('window');
const columns = 6;
const rows = 4;
const bh = 36;
const keypadHeight = bh * rows;
const keypadOffset = height - keypadHeight;

// TODO: buttons should be SVG Paths within an SVG container
class Button extends Component {
  render() {
    const {bounds, margin, children, active} = this.props;

    const inactiveColor = isFinite(children)
      ? '#EEE' : '#DDD';

    const buttonStyle = {
      position: 'absolute',
      width: bounds.right - bounds.left - 2 * margin,
      left: bounds.left + margin,
      height: bounds.bottom - bounds.top - 2 * margin,
      top: bounds.top + margin,
      borderRadius: 3,
      backgroundColor: active ? '#71C307' : inactiveColor,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: '#CCC',
    }

    if (this.props.children in map) {
      const Icon = map[children];

      return <View style={buttonStyle}>
        <Icon color={active ? 'white' : '#3B3E40'}/>
      </View>
    } else {
      const textStyle = {
          color: this.props.active ? 'white' : '#3B3E40',
          fontSize:20,
      };
      return <View style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
      </View>
    }
  }
}

const calcLayout = (keypad, inset = 0) => {
  const layout = [];

  let x = inset;
  let y = -inset;
  let rowIndex = 0;
  let columnIndex = 0;

  const bw = (width - 2 * inset) / columns;

  // TODO(kevinb) determine number of rows from props.keypad
  for (const row of keypad.split('\n')) {
    if (row.trim() == '') continue;

    columnIndex = 0
    x = inset;

    for (let key of row.split('|')) {
      key = key.trim()
      if (key == '') continue

      const bounds = {
        left: x,
        right: x + bw,
        top: y,
        bottom: y + bh,
      };

      const inset2 = 2 * inset;

      let popupPath = null;
      let shadow = null;
      if (columnIndex === 0) {
        popupPath = `M${x+inset},${y+inset-inset} l0,${bh-2*inset} a${inset},${inset},0,0,0,${inset},${inset} l${bw-2*inset-2*inset},0 a${inset},${inset},0,0,0,${inset},${-inset} l0,${-(bh-2*inset)} l16,-8 l0,${-40+inset2} a${inset2},${inset2},0,0,0,${-inset2},${-inset2} l${-(bw-2*inset+16-2*inset2)},0 a${inset2},${inset2},0,0,0,${-inset2},${inset2} z`;
        shadow = {
          left: x + inset + 1,
          top: y - 40 - 8,
          width: bw + 16 - 2 * inset - 2,
          height: 40,
          borderRadius: inset2,
        }
      } else if (columnIndex < columns - 1) {
        popupPath = `M${x+inset},${y+inset-inset} l0,${bh-2*inset} a${inset},${inset},0,0,0,${inset},${inset} l${bw-2*inset-2*inset},0 a${inset},${inset},0,0,0,${inset},${-inset} l0,${-(bh-2*inset)} l8,-8 l0,${-40+inset2} a${inset2},${inset2},0,0,0,${-inset2},${-inset2} l${-(bw-2*inset+16-2*inset2)},0 a${inset2},${inset2},0,0,0,${-inset2},${inset2} l0,${40-inset2} z`;
        shadow = {
          left: x + inset + 1 - 8,
          top: y - 40 - 8,
          width: bw + 16 - 2 * inset - 2,
          height: 40,
          borderRadius: inset2,
        }
      } else {
        popupPath = `M${x+inset},${y+inset-inset} l0,${bh-2*inset} a${inset},${inset},0,0,0,${inset},${inset} l${bw-2*inset-2*inset},0 a${inset},${inset},0,0,0,${inset},${-inset} l0,${-(bh-2*inset)} l0,${-(48-inset2)} a${inset2},${inset2},0,0,0,${-inset2},${-inset2} l${-(bw-2*inset+16-2*inset2)},0 a${inset2},${inset2},0,0,0,${-inset2},${inset} l0,40 z`;
        shadow = {
          left: x + inset + 1 - 16,
          top: y - 40 - 8,
          width: bw + 16 - 2 * inset - 2,
          height: 40,
          borderRadius: inset2,
        }
      }

      layout.push({
        bounds,
        key,
        row: rowIndex,
        column: columnIndex,
        popupPath: popupPath,
        shadow: shadow,
      });

      x += bw;
      columnIndex++;
    }
    y += bh;
    rowIndex++;
  }

  return layout;
}

export default class Keypad extends Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: calcLayout(props.keypad, props.margin),
    }
  }

  static defaultProps = {
    margin: 3,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keypad !== this.props.keypad || nextProps.margin !== this.props.margin) {
      this.setState({
        layout: calcLayout(nextProps.keypad, nextProps.margin),
      })
    }
  }

  handleStartShouldSetResponder = (e) => {
    return true;
  }

  handleResponderGrant = (e) => {
    const touch = e.nativeEvent.changedTouches[0];

    const x = touch.pageX;
    const y = touch.pageY - keypadOffset;

    e.preventDefault();

    for (const {bounds, key} of this.state.layout) {
      if (x >= bounds.left && x < bounds.right && y >= bounds.top && y < bounds.bottom) {
        this.setState({activeKey:key})
        return;
      }
    }

    this.setState({activeKey:null})
  }

  handleResponderMove = (e) => {
    const touch = e.nativeEvent.changedTouches[0];

    const x = touch.pageX;
    const y = touch.pageY - keypadOffset;

    for (const {bounds, key} of this.state.layout) {
      if (x >= bounds.left && x < bounds.right && y >= bounds.top && y < bounds.bottom) {
        this.setState({activeKey:key})
        return;
      }
    }

    this.setState({activeKey:null})
  }

  handleResponderRelease = (e) => {
    const touch = e.nativeEvent.changedTouches[0];

    if (this.state.activeKey !== null) {
      console.log(`press: ${this.state.activeKey}`);
    }

    this.setState({activeKey:null})
  }

  render() {
    const {margin} = this.props;
    const {layout, activeKey} = this.state;

    // TODO: generate a layout from the keypad specification along with bounding boxes for each key
    // b/c we have the bounding boxes for each key beforehand

    const borderColor = '#CCC';

    // const lines = <Svg width={screen.width} height={48 * rows} style={{position:'absolute', top: 0, left: 0, pointerEvents: 'none'}}>
    //   {[1, 2, 3, 4, 5].map((i) =>
    //     <Line key={`col-${i}`} x1={i * bw + 0.5} y1={0} x2={i * bw + 0.5} y2={4 * 48} stroke={borderColor}/>)}
    //   {[0, 1, 2, 3].map((i) =>
    //     <Line key={`row-${i}`} x1={0} y1={i * bh + 0.5} x2={width} y2={i * bh + 0.5} stroke={borderColor}/>)}
    // </Svg

    const popupStyle = {
      position: 'absolute',
    }

    let popup = null;

    if (activeKey) {
      const bounds = layout.find((button) => button.key === activeKey).bounds;
      const popupStyle = {
        position: 'absolute',
        left: bounds.left - 3,
        width: bounds.right - bounds.left + 6,
        top: bounds.top - bh - 8,
        height: bh + 4,
        backgroundColor: '#71C307',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      }

      const connectorStyle = {
        position: 'absolute',
        left: bounds.left + 3,
        width: bounds.right - bounds.left - 6,
        top: bounds.top - 6,
        height: bh + 1,
        backgroundColor: '#71C307',
      }

      const textStyle = {
        color: 'white',
        fontSize: 32,
      }

      let content = null;
      if (activeKey in map) {
        const Icon = map[activeKey];
        content = <Icon color={'white'} size={48}/>
      } else {
        content = activeKey;
      }

      // TODO(kevinb) update react-native-web to warn on Views containing text outside of Text nodes
      popup = [
        <View style={popupStyle}>
          <Text style={textStyle}>{content}</Text>
        </View>,
        <View style={connectorStyle}></View>
      ]
    }

    const popupContainerStyle = {
      pointerEvents: 'none',
      zIndex: 1,
      bottom: 0,
      position: 'absolute',
    };

    const path = activeKey ? layout.find((button) => button.key === activeKey).popupPath : null;
    const extraSpace = 60;
    const inactiveColor = isFinite(activeKey) ? '#EEE' : '#DDD';
    const popupContainer = <Svg style={popupContainerStyle} width={width} height={keypadHeight+extraSpace} viewBox={`0 -${extraSpace} ${width} ${keypadHeight+extraSpace}`}>
      {path && <Path d={path} fill={inactiveColor}/>}
    </Svg>

    const shadow = activeKey ? layout.find((button) => button.key === activeKey).shadow : null;
    const shadowStyle = {
      position: 'absolute',
      boxShadow: '0px 0px 16px 4px rgba(0,0,0,0.4)',
      ...shadow
    }

    return <View style={{flex:1}}>
      <View
        onStartShouldSetResponder={this.handleStartShouldSetResponder}
        onResponderGrant={this.handleResponderGrant}
        onResponderMove={this.handleResponderMove}
        onResponderRelease={this.handleResponderRelease}
        style={{position:'absolute', bottom:0, left:0, right: 0, height: keypadHeight}}
      >
        {layout.map(({bounds,key}) => {
            return <Button
              key={key}
              active={activeKey == key}
              bounds={bounds}
              margin={this.props.margin}
            >{key}</Button>;
        })}
        {shadow && <View style={shadowStyle}/>}
      </View>
      {popupContainer}
    </View>
  }
}
