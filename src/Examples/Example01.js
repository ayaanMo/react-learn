import React, { Component } from 'react';
/** 
 *  1. React 开发人员工具是Chrome下的React DevTools(需要安全上网才能下载)
 *  2. JSX 并不是完全的HTML，其实是JavaScript XML
 *    e.g const heading = <h1 className = "site-heading">Hello World</h1> => const heading = React.createElement('h1',{className:"site-heading"},'Hello World')
 */
class Example01 extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export default Example01;
