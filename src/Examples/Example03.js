import React, { Component } from 'react';
/** 
 * 像TableHeader被称之为简单组件(Simple Component)
 * 像Example03 则被称作为类组件(Class Component)
 * 如果return包含在一行中，则不需要括号
 */
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const children = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => { props.removeItem(index) }}>删除</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            {children}
        </tbody>
    )
}
class Example03 extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody data={this.props.data} removeItem={this.props.removeItem} />
            </table>
        );
    }
}

export default Example03;
