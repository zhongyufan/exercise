import React from 'react';
import TemperatureInput from './temperatureInput';

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value,

        });
    }

    toC(f) {  // 华氏度转摄氏度
        return (f - 32) * 5 / 9;
    }

    toF(c) { // 摄氏度转华氏度
        return (c * 9 / 5) + 32
    }

    convert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) return '';
        const output = convert(input)
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    onCChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    onFChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const c = scale === 'f' ? this.convert(temperature, this.toC) : temperature;
        const f = scale === 'c' ? this.convert(temperature, this.toF) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={c} onChange={(c) => this.onCChange(c)}></TemperatureInput>
                <TemperatureInput scale="f" temperature={f} onChange={(f) => this.onFChange(f)}></TemperatureInput>
            </div>
        );
    }
}

export default Calculator