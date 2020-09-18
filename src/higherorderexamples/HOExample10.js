import React, { Component, Profiler } from 'react';
class HOExample10 extends Component {
    constructor(props) {
        super();
        this.state = { formValue: {} }
        this.onSubmit = this.onSubmit.bind(this);
        this.hanleChange = this.hanleChange.bind(this);
        this.onRenderCallback = this.onRenderCallback.bind(this);
    }
    hanleChange(event) {
        const { formValue } = this.state;
        let newFormObj = Object.assign(formValue, { [event.target.name]: event.target.value });
        this.setState({ formValue: newFormObj });
    }
    onSubmit(event) {
        console.log(this.state)
        event.preventDefault();
    }
    /** 
        id, // 发生提交的 Profiler 树的 “id”
        phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration, // 本次更新 committed 花费的渲染时间
        baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        startTime, // 本次更新中 React 开始渲染的时间
        commitTime, // 本次更新中 React committed 的时间
        interactions // 属于本次更新的 interactions 的集合
    */
    onRenderCallback(...object) {
        console.log(object);
    }
    render() {
        return (
            <Profiler id="FormValue" onRender={this.onRenderCallback}>
                <Form onSubmit={this.onSubmit} hanleChange={this.hanleChange} />
            </Profiler>
        );
    }
}
function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>用户名:</label>
            <input type="text" name="user" onChange={props.hanleChange} />
            <label>密码:</label>
            <input type="password" name="password" onChange={props.hanleChange} />
            <label>性别:</label>
            <select name="sex" onChange={props.hanleChange}>
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
            <label>个人介绍:</label>
            <textarea rows="3" cols="20" name="infos" onChange={props.hanleChange} />
            <button type="submit">提交</button>
        </form>
    )
}
export default HOExample10;
