/* eslint-disable react/prop-types */
import { Component } from 'react';

class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji}${text}${emoji}`

    render() {

        return this.props.children({ addemoji: this.addEmoji });
    }
}

export default Emoji;
