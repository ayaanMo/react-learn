import React, { Component } from 'react';
import { FamilyContext, BaseContext } from './context';
import Son from './Son';
import Uncle from './Uncle';
class Father extends Component {
    render() {
        return (
            <div>
                <FamilyContext.Consumer>
                    {(name) => (
                        <BaseContext.Consumer>
                            {({ base, changeBase }) => (
                                <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
                                    <p>父组件定义的值:{name}大雷,家住在{base}</p>
                                    <button onClick={() => changeBase("黄石")}>搬家</button>
                                    <Son />
                                </div>
                            )}
                        </BaseContext.Consumer>
                    )}
                </FamilyContext.Consumer>
                <Uncle />
            </div>
        );
    }
}

export default Father;
