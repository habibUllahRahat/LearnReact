import { Component } from 'react';

class Emoji extends Component {
    addemoji = (text, emoji) => `${emoji}${text}${emoji}`
    render(override) {
        const text = override ? override : "Hello This is me"

        return (
            <div>
                {text}
            </div>
        );
    }
}

export default Emoji;
