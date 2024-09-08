import { Component } from 'react';

class Emoji extends Component {
    addemoji = (text, emoji) => `${emoji}${text}${emoji}`

    render() {
        return this.props.children({ addemoji: this.addemoji });
    }
}

export default Emoji;
