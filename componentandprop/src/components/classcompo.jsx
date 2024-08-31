import { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1>Hello Clock Class</h1>
                <span className="clock">
                    Time is {new Date().toLocaleString(this.props.locale)}
                </span>
            </>
        )
    }
}
export default Clock;