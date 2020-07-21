import React, { Component } from 'react';
import { withSubscription } from './WrappedComponent';
class Left extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div style={{ border: "1px solid red", float: "left", width: this.props.width }}>
                我是左侧
            </div>
        );
    }
}
export default withSubscription(Left);
