import React, { Component } from 'react';
/**
 * 状态提升
 *      多个组件反应相同的变化数据，这个时候我们应该把共享状态提升到父组件上面；
 *      总结:所谓状态提升就是将各个子组件中的公共state提升到他们的父组件，父组件进行统一管理，处理，再将父组件处理后的函数和数据通过props传到各个子组件中；这样的好处便于管理一些公共处理数据渲染结果，便于后期
 *      排查问题，而不是尝试再不同的组件间处理相同的state，并且可以再父组件统一拦截尝试改变公共state的逻辑；坏处就是要编写更多的样板代码；
 */

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <h1>The water would boil.</h1>
    }
    return <h1>The water would not boil.</h1>
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {this.scaleNames[this.props.scale]}:</legend>
                    <input value={this.props.temperature} onChange={this.handleChange} />
                </fieldset>
            </div>
        );
    }
}
class Example10 extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
        this.celsiusHandleChange = this.celsiusHandleChange.bind(this);
        this.fahrenheitHandleChange = this.fahrenheitHandleChange.bind(this);
    }
    /**
     * 摄氏温度change时处理的方法
     * @param {*} value 
     */
    celsiusHandleChange(value) {
        this.setState({ temperature: value, scale: 'c' });
    }
    /**
     * 华氏温度change时的处理方法
     * @param {*} value 
     */
    fahrenheitHandleChange(value) {
        this.setState({ temperature: value, scale: 'f' });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        // 根据用户输入的内容转换成对应的华氏温度和摄氏温度，并且BoilingVerdict根据最后计算的结果统一判断水温是否烧开
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" onTemperatureChange={this.celsiusHandleChange} temperature={celsius} />
                <TemperatureInput scale="f" onTemperatureChange={this.fahrenheitHandleChange} temperature={fahrenheit} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Example10;
