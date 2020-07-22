import React, { Component } from 'react';
import { withRefs } from './WrappedComponent';
import MainChild from './MainChild';
class Main extends Component {
    constructor(props) {
        super(props);
        this.input = null;
    }
    render() {
        return (
            <div style={{
                textAlign: "center",
                fontSize: "20px"
            }}>
                <label>
                    姓名:
                    <input type="text" ref={e => this.input = e} />
                </label>
                <br />
                <MainChild />
            </div>
        );
    }
}

export default withRefs(Main);
