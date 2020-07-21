import React, { Component } from 'react';
export function withSubscription(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            console.log(props)
            this.state = { width: 300 };
            this.handleResize = this.handleResize.bind(this);
        }
        handleResize(e) {
            this.setState({ width: e.target.innerWidth / 3 })
        }
        componentDidMount() {
            // ...负责订阅相关的操作...
            window.addEventListener('resize', this.handleResize) //监听窗口大小改变
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize)
        }
        render() {
            return <WrappedComponent width={this.state.width} {...this.props} />
        }
    }
}