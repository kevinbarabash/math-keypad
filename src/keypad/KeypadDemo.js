import React, {Component} from 'react'

import Keypad from './Keypad'

export default class KeypadDemo extends Component {
  render() {
    console.log('keypadDemo render');
    const keypad = `
    | (    | )    | 7  | 8 | 9 | / |
    | frac | sqrt | 4  | 5 | 6 | * |
    | ^2   | x    | 1  | 2 | 3 | - |
    | ...  | %    | pm | 0 | . | + |
    `

    const keypad2 = `
    | 7    | 8 | 9 | *, \\cdot | /                            | <-  |
    | 4    | 5 | 6 | +         | -                            | ->  |
    | 1    | 2 | 3 | ^, ^2, ^3 | \\sqrt, \\root[3], \\root[n] | del |
    | \\pm | 0 | . | =         |                              |     |
    `

    return <Keypad keypad={keypad} margin={2} />
  }
}
