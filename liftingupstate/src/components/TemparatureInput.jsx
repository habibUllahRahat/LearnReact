import React, { Component } from 'react';
const scales = {
    c: "Celsius",
    f: "Fatrenheit",
}
class TemparatureInput extends Component {

    // state = {
    //     temparature: 0
    // }
    // handleTemparature = (e) => {
    //     this.setState({
    //         temparature: e.target.value,
    //     })
    // }
    render() {
        const { scale, temparature, temparatureHandeler } = this.props
        return (

            <fieldset>
                <legend>Enter {scales[scale]}</legend>
                <input
                    value={temparature}
                    type='number' onChange={(e) => temparatureHandeler(e, scale)} />
            </fieldset>

        );
    }
}

export default TemparatureInput;
