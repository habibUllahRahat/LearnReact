import { Component } from 'react';
import { convertToFunc, toCelsius, toFarenheit } from '../lib/CovertTo';
import TemparatureInput from './TemparattureInput';
import BoilVerdict from './BoilVerdict';

class CalcTemp extends Component {
    state = {
        temparature: '',
    }
    handleInput = (e, scale) => {
        this.setState({

            temparature: e.target.value,
            scale,
        })
    }
    render() {
        const { scale, temparature } = this.state
        const FarToCel = scale === 'f' ? convertToFunc(temparature, toCelsius) : temparature

        const CelToFar = scale === 'c' ? convertToFunc(temparature, toFarenheit) : temparature

        return (
            <div>
                <h1>Temparature Input</h1>
                <TemparatureInput
                    scale={'c'}
                    temparature={FarToCel}
                    foreignFunctionForSatate={this.handleInput}
                />
                <TemparatureInput
                    scale={'f'}
                    temparature={CelToFar}
                    foreignFunctionForSatate={this.handleInput}
                />
<BoilVerdict temparature={FarToCel}/>
            </div>
        );
    }
}

export default CalcTemp;
