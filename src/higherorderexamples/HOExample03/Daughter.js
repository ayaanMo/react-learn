import React, { Component } from 'react';
import { FamilyContext } from './context';
class Daughter extends Component {
    static contextType = FamilyContext;
    render() {
        return (
            <div style={{ border: '1px solid pink', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                <p>女组件定义的值:{this.context}小花</p>

            </div>
        );
    }
}

export default Daughter;
