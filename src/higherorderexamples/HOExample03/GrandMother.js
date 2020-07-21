import React, { Component } from 'react';
import { FamilyContext } from './context';
class GrandMother extends Component {
    render() {
        return (
            <div>
                <FamilyContext.Consumer>
                    {
                        (context) => <div style={{ border: '1px solid yellow', width: '30%', margin: '80px auto', textAlign: 'center' }}>
                            <p>祖母组件定义的值:{context}花</p>
                        </div>
                    }
                </FamilyContext.Consumer>
            </div>
        );
    }
}

export default GrandMother;
