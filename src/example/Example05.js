import React, { Component } from 'react';
/**
 * State相关使用说明
 *  组件第一次被渲染到DDM的时候被称为挂载(mount)；
 *  组件被销毁的时候被称为卸载(unmount);
 *  正确的时候State:
 *      1.不能直接修改state(this.state.date = new Date() 这样是不会重新渲染组件的)，而是使用setState;
 *      2.构造函数是唯一可以给this.state赋值的地方;
 *      3.由于state更新会是异步的，这个时候我们可以使用setState(function(state,props){})进行state的更新;
 *      4.state的更新会被合并(浅合并)，setState方法进行state改变的时候可以分别改变不同的独立变量，所以可以分别调用setState进行改变而不要担心其他的变量会被影响到；
 *      5.数据都是向下流动的,这通常会被称之为单向数据流，任何的state都属于特定的组件的，而且从该state派生的任何数据或UI只能影响树中低于它们的组件;
 */
class Example05 extends Component {
    constructor(props) {
        super(props);
        this.state = { data: new Date(), count: 1 };
    }
    tick() {
        this.setState({ data: new Date() });
    }
    clickAsyn() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
        this.setState({ count: count + 1 });
        this.setState({ count: count + 1 });
    }
    clickSync() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
        this.setState((state, props) => ({ count: state.count + 1 }));
    }
    clickCallback() {
        const { count } = this.state;
        this.setState({ count: count + 1 }, () => {
            this.setState({ count: this.state.count + 1 })
        });

    }
    componentDidMount() {
        this.timeId = setInterval(() => this.tick(), 1000)
    }
    componentWillMount() {
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>This is {this.state.data.toLocaleTimeString()}</h2>
                <span>-----------------测试state异步---------------------</span>
                <h1>数字:{this.state.count}</h1>
                <button onClick={() => this.setState({ count: 1 })}>state重置</button><br />
                <button onClick={() => this.clickAsyn()}>state异步</button><br />
                <button onClick={() => this.clickSync()}>setState(函数接收)</button><br />
                <button onClick={() => this.clickCallback()}>setState(回调)</button>
            </div>
        );
    }
}

export default Example05;
