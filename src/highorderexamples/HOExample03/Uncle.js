import React, { Component } from 'react';
import { FamilyContext, BaseContext } from './context';
class Uncle extends Component {
    render() {
        console.log(this.context);
        return (
            <div style={{ border: '1px solid purple', width: '30%', margin: '80px auto', textAlign: 'center' }}>
                <p>叔组件定义的值:{this.context}二雷</p>
            </div>
        );
    }
}
Uncle.contextType = FamilyContext;
export default Uncle;
