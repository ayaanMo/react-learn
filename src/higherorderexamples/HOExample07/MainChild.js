import React, { Component, Fragment } from 'react';
import { withContolledInput } from './WrappedComponent';

// 这里使用得了JavaScript decorator的语法
@withContolledInput
class MainChild extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <label>
                    住址:
                    <input name="address" {...this.props.address} />
                </label>
            </Fragment>
        );
    }
}

export default MainChild;
