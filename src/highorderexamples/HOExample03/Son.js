import React, { Component } from 'react';
import FamilyContext from './context';
import Daughter from './Daughter';
class Son extends Component {
    render() {
        return (
            <div>
                <FamilyContext.Consumer>
                    {
                        (context) => <div style={{ border: '1px solid green', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                            <p>儿组件定义的值:{context}小雷</p>

                        </div>
                    }
                </FamilyContext.Consumer>
                <Daughter />
            </div>
        );
    }
}

export default Son;
