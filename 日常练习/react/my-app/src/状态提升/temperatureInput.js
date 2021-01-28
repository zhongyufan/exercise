import React from 'react';
import Boil from './boil';

const scaleName = {
    c: '摄氏度',
    f: '华氏度'
}

export class TemperatureInput extends React.Component {
    handleChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>是不是开水（{scaleName[scale]}）</legend>
                <input value={temperature} onChange={(e) => this.handleChange(e)}></input>
                <Boil scale={scale} celsius={parseFloat(temperature)}></Boil>
            </fieldset>
        );
    }
}

export default TemperatureInput