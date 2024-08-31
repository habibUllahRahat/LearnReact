import { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            local: 'bn-BD'
        }
    }
    tick() {//a funtion for set the state every time
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }
    handleClick(prams) {
        this.setState(
            { local: prams }
        )
    }

    render() {
        return (
            <>
                <h1>Hello Clock Class</h1>
                <h3 className="clock">
                    Time is {this.state.date.toLocaleString(this.state.local)}
                    <button className='btn' onClick={() => this.handleClick(this.state.local == 'bn-BD' ? 'en-US' : 'bn-BD')}>Click</button>
                </h3>
            </>
        )
    }
}
export default Clock;