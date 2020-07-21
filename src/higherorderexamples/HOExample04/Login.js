import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.userName = React.createRef();
        this.password = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        let userName = this.userName.current.value;
        let password = this.password.current.value;
        if (userName && password) {
            if (userName !== "admin" && password !== "123456") {
                alert("账号和密码错误!")
                this.setState({ count: this.state.count + 1 });
            }
        } else {
            alert("账号和密码不能为空!")
        }
    }
    render() {
        const { count } = this.state;
        if (count > 3) {
            throw new Error('密码错误超过三次，请稍等!');
        }
        return (
            <div >
                <input type="text" ref={this.userName} />
                <input type="password" ref={this.password} />
                <button onClick={this.handleSubmit}>登录</button>
            </div>
        );
    }
}

export default Login;
