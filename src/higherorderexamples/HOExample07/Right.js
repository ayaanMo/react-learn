import React, { Component } from 'react';
import { withSubscription } from './WrappedComponent';
class Right extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div style={{ float: "right", ...this.props.publicStyle }}>
                我是右侧
            </div>
        );
    }
}

export default withSubscription(Right);
