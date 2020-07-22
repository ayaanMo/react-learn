import React, { Component } from 'react';
/**
 * 条件渲染
 *  if/else 判断渲染
 *  && 判断渲染
 *  三目运算 判断渲染
 *  阻止组件渲染 return null 可以阻止组件渲染并且不会影响对应的生命周期
 */
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}
function LogoutButton(props) {
    return (<button onClick={props.onClick}>Logout</button>)
}
function Register(props) {
    return <h2>{props.children}</h2>
}
function UserInfo(props) {
    if (!props.isLogin) {
        return null
    }
    return <h2>{props.children}</h2>
}
class Example07 extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogin() {
        this.setState({ isLogin: true });
    }
    handleLogout() {
        this.setState({ isLogin: false });
    }
    render() {
        const { isLogin } = this.state;
        let button;
        if (isLogin) {
            button = <LogoutButton onClick={this.handleLogout} />
        } else {
            button = <LoginButton onClick={this.handleLogin} />
        }
        return (
            <div>
                <span>{isLogin ? <h1>登出</h1> : <h1>登录</h1>}</span>
                <span>{!isLogin && <Register>请注册</Register>}</span>
                <span><UserInfo isLogin={isLogin}>个人中心</UserInfo></span>
                {button}
            </div>
        );
    }
}

export default Example07;
