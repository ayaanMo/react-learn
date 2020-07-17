import React, { Component } from 'react';
import FamilyContext from './context';
import Son from './Son';
import Uncle from './Uncle';
class Father extends Component {
    render() {
        return (
            <div>
                <FamilyContext.Consumer>
                    {
                        (context) => <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                            <p>父组件定义的值:{context}大雷</p>
                            <Son />
                        </div>
                    }
                </FamilyContext.Consumer>
                <Uncle />
            </div>
        );
    }
}

export default Father;
