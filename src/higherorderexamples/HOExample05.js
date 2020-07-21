import React, { Component } from 'react';
/**
 *  Refs转发:是将ref自动的通过组件传递到其一子组件的技巧;
 *  说白了就是为了拿子组件的真实的DOM结构,通过React.forwardRef来进行ref转发；
 *  注意:
 *      1.ref这个参数只有React.forwardRef定义组件时存在。常规函数组件和class组件不接收ref参数，并且props中也不存在ref(ref不是props属性，就像key一样);
 *      2.但是再我的实验中发现一个问题，不用React.forwardRef直接用props传递（props的属性名只要不是叫ref）也是可以的,这应该是个不安全的用法;
 */
function InputError(props) {
    console.log(props)
    // 这个时候 会发现props里面没有ref类型
    return (
        <label htmlFor="userName">
            {props.children}
            {/**这里会出现警告 会告诉我们是ref 不是一个prop 属性 所以ref使用的时候一定要小心 */}
            <input type="text" id="userName" ref={props.ref} />
        </label>
    )
}
const Input = React.forwardRef((props, ref) => (
    <label htmlFor="userName">
        {props.children}
        <input type="text" id="userName" ref={ref} />
    </label>
))
class HOExample05 extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
        this.inputerror = React.createRef();
        this.input = React.createRef();
        this.handleSubmitError = this.handleSubmitError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmitError() {
        try {
            console.log(this.inputerror)
            this.setState({ text: this.inputerror.current.value });
        } catch (error) {
            this.setState({ text: `没有获取到真实的input----${error}` });
        }

    }
    handleSubmit() {
        console.log(this.input)
        this.setState({ text: this.input.current.value });
    }
    render() {
        return (
            <div>
                <p>-----------------错误的这个时候会发现获取不到真实的真实的DOM结构----------------------</p>
                {/**会看到警告 Function components cannot be given refs*/}
                <p>< InputError ref={this.inputerror}>姓名:</ InputError></p>
                <button onClick={this.handleSubmitError}>提交Error</button>
                <p>-----------------正确使用Refs,进行Refs转发----------------------</p>
                <p><Input ref={this.input}>姓名:</Input></p>
                <button onClick={this.handleSubmit}>提交</button>
                <p>
                    <label>
                        接受内容:
                        <textarea value={this.state.text} readOnly={true} />
                    </label>
                </p>

            </div>
        );
    }
}
export default HOExample05;
