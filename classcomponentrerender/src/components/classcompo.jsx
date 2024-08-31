import { Component } from 'react';
import Button from './button';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: 'bn-BD'
        }
    }
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }
    handleClick = (locale) => {// if we dont use arrow function here it wont work it will change this key value
        this.setState({
            locale,
        })
    }

    tick() {//a funtion for set the state every time
        this.setState({
            date: new Date()
        })
    }
    render() {
        const { locale } = this.state
        return (
            <>
                <h1>Hello Clock Class</h1>
                Time is {this.state.date.toLocaleString(locale)}
                {locale === 'bn-BD' ?// conditional rendering
                    (
                        <Button
                            changefn={this.handleClick}
                            locale="en-US"
                        />
                    ) : (
                        <Button
                            changefn={this.handleClick}
                            locale="bn-BD"
                        />

                    )
                }

            </>
        )
    }
}
export default Clock;