import React, { Component, Fragment } from 'react';
/**
 * JSX:仅仅只是React.createElement(component,props,...children)语法糖
 *     1.用户定义的组件必须以大写字母开头,以小写字母开头的元素代表的是一个HTML内置组件;
 *     2.不能将通用表达式作为React元素类型;
 *     3.可以把包裹在{}的JavaScript表达式作为一个prop传递给JSX元素;
 *     4.如果你没给prop赋值,默认是true;
 */

class HOExample08 extends Component {
    constructor() {
        super();
        this.state = { selectValue: "JSX" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ selectValue: event.target.value });
    }
    render() {
        const { selectValue } = this.state;

        return (
            <Fragment>
                <label>
                    JSX:
                     <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
                        <option value="JSX">JSX</option>
                        <option value="CreateElement">CreateElement</option>
                    </select>
                </label>
                <br />
                {
                    selectValue === "JSX" ? (<Fragment><span>{`我是JSX语法`}</span></Fragment>) : (<Fragment>{React.createElement('span', null, `我是createElement`)}</Fragment>)
                }
            </Fragment>
        );
    }
}

export default HOExample08;
