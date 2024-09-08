import { Component } from 'react';
import BoilingDecider from './BoilingDecider';
import TemparatureInput from './TemparatureInput';
import { convertTo, toCelsius, toFarenheit } from '../lib/covert'

class CalculateBoilTemp extends Component {
    state = {
        temparature: '',
        scale: '',
    };

    handleTemparature = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale: scale,
        })
    }
    render() {
        const { temparature, scale } = this.state
        const celsius = scale === 'f' ? convertTo(temparature, toCelsius) : temparature
        const farenheit = scale === 'c' ? convertTo(temparature, toFarenheit) : temparature
        return (
            <div>
                <TemparatureInput
                    scale='c'
                    temparature={celsius}
                    temparatureHandeler={this.handleTemparature} />

                <TemparatureInput
                    scale='f'
                    temparature={farenheit}
                    temparatureHandeler={this.handleTemparature} />

                <BoilingDecider temparature={celsius} />
            </div>
        );
    }
}

export default CalculateBoilTemp;
