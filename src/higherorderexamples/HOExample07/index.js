import React, { Component, Fragment } from 'react';
import Right from './Right';
import Left from './Left';
import Main from './Main';
/**
 * 高阶组件:
 *      HOC是React中用于复用组件逻辑的一种高级技巧，HOC自身不是React API的一部分，它是一种基于React组合特性而形成的设计模式，具体而言高阶组件是参数未组件，返回值为新组件的函数;更加通俗的来解释，
 * 高阶组件通过包裹被传入的React组件，经过一系列处理，最终返回一个相对增加的React组件，供其他组件调用;
 */
class HOExample07 extends Component {
    constructor(props) {
        super();
        this.input = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        try {
            console.log(this.input)
            this.input.current.input.focus();
        } catch (error) {
            alert(error)
        }

    }
    render() {
        return (
            <Fragment>
                <div style={{ margin: "20px", height: "50px", textAlign: "center", fontSize: "20px", border: "1px solid red" }}>
                    <button onClick={this.handleClick}>获取焦点</button>
                </div>
                <div style={{
                    position: "relative",
                    margin: "20px",
                    height: "400px"
                }}>
                    <Left />
                    <Right />
                    <Main ref={this.input} />
                </div>
            </Fragment>
        );
    }
}

export default HOExample07;
