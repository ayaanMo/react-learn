import React, { Component } from 'react';
/**
 * React 事件处理:
 *  1.React事件的命名采用小驼峰(camelCase),而不是纯小写;
 *  2.使用JSX语法的时候需要传入一个函数作为事件而不是一个字符串;
 *  3.React中不能通过return false 的方式来阻止默认行为，必须显示的使用e.preventDefault;
 *  4.在JavaScript中方法默认是不会绑定this的,有以下集中方式进行绑定this:
 *    1)在构造函数中进行bind绑定this(官方推荐方式)
 *    2)在调用的时候使用bind绑定this 通过Function.prototype.bind
 *    3)在调用的时候使用箭头函数绑定this
 *    4)属性初始化器语法绑定this(无状态组件推荐的方法绑定方式)
 *    优缺点比对:
 *              方法2和方法3都是在使用的时候进行this绑定，优点是写法简单，当组件没有state的时候不需要添加类构造函数来绑定this;
 *              但是每一次调用都会生成一个新的方法实例，对性能是有影响的，并且当这个函数传入低阶组件的时候这些组件可能会进行额外的重新渲染，因此每一次都是新的方法实例作为的新的属性传递;
 *              方法1只会生成一个方法实例，并且绑定一次之后如果多次用到这个方法不需要再绑定，但是就算组件没有state都需要再类构造函数来绑定this，代码量会大一些；
 *              方法4结合了方法1，2，3的优点，不需要再类构造函数中绑定，调用的时候不需要再做绑定，但是目前还是实验性语法，需要babel转译
 */

export class ChildComponent extends React.PureComponent {
    /**
     * 这里继承的是PureCompoment,因为PureCompoment会帮我们实现 shouldComponentUpdate,会进行state和props的浅比较
     * 其他是跟Component是一致的
     */
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <span>{Math.random()}</span>
                <button onClick={this.props.tick}>{this.props.children}</button>
            </div>

        );
    }
}


class Example06 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.handleClickFirst = this.handleClickFirst.bind(this);

    }
    handleClickFirst() {
        this.setState({ count: this.state.count + 1 })
        console.log("this is First", this);
    }
    handleClickSecond() {
        console.log("this is Second", this);
    }
    handleClickThird() {
        console.log("this is Third", this);
    }
    handleClickFourth = () => {
        console.log("this is Fourth", this);
    }
    render() {
        return (
            <div>
                <div><h1>{this.state.count}</h1></div>
                <button onClick={this.handleClickFirst}>First Func</button><br />
                <button onClick={this.handleClickSecond.bind(this)}>Third Func</button><br />
                <button onClick={() => this.handleClickThird()}>Second Func</button><br />
                <button onClick={this.handleClickFourth}>Fourth Func</button><br />
                <ChildComponent tick={this.handleClickFirst}>测试方法1</ChildComponent><br />
                <ChildComponent tick={this.handleClickSecond.bind(this)}>测试方法2</ChildComponent><br />
                <ChildComponent tick={() => this.handleClickThird()}>测试方法3</ChildComponent>
                <ChildComponent tick={this.handleClickFourth}>测试方法4</ChildComponent>
            </div>
        );
    }
}

export default Example06;
