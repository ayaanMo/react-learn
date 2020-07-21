import React, { Component } from 'react';
import ErrorBoundaries from './ErrorBoundaries';
import Longin from './Login';
/**
 *   错误边界(Error Boundaries):错误边界是一种React组件，这种组件可以捕获并打印发生在其子组件树任何位置的JavaScript错误，并且渲染出备用UI;
 * 如果一个class组件中定义了static getDerivedStateFromError()或componentDidCatch()这两个生命周期方法中的任意一个(或两个)时,那么它就变成一个错误边界。当抛出错误后，请使用static getDerivedStateFromError()
 * 渲染备用UI，使用componentDidCatch()打印错误信息.并且请注意错误边界仅可以捕获其组件的错误。
 *   错误边界无法捕获以下场景中产生的错误:
 *     1.事件处理；如果需要在事件内部捕获错误可以用try/catch语句,再包装错误进行处理
 *     2.异步代码；(例如setTimeout 或 requestAnimationFrame回调函数)
 *     3.服务端渲染；
 *     4.它自身抛出的错误（并非它的子组件）
 */
class HOExample04 extends Component {
    render() {
        return (
            <ErrorBoundaries>
                <Longin />
            </ErrorBoundaries>
        );
    }
}

export default HOExample04;
