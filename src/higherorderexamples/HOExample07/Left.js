import React, { Component } from 'react';
import { withSubscription } from './WrappedComponent';
class Left extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div style={{ float: "left", ...this.props.publicStyle }}>
                我是左侧
            </div>
        );
    }
}
export default withSubscription(Left);
