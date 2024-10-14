/* eslint-disable react/prop-types */
import { Component } from 'react';

class Brackets extends Component {
    addBrackets = (text) => `[${text}]`

    render() {
        return this.props.children({ addBrackets: this.addBrackets });
    }
}

export default Brackets;
