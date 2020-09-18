import React, { Component } from 'react';

class HOExample11 extends Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                {/* 组件接收一个函数，该函数返回一个React元素并调用它而不是实现自己的渲染逻辑 */}
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

export default HOExample11;

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(event) {
        this.setState({ x: event.clientX, y: event.clientY });
    }
    render() {
        return (
            <div onMouseMove={this.handleMouseMove} style={{ height: '50vh', backgroundColor: "pink", position: "relative" }}>

                {this.props.render(this.state)}
            </div>
        )
    }
}
class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: "100px", height: "100px", backgroundColor: "skyblue" }} />
        );
    }
}