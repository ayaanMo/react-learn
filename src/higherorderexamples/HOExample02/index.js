import React, { Component, Suspense, lazy } from 'react';
/**
 *  代码分割:就是我们再进行webpack或者rollup等工具进行打包编译的时候，会将多个js文件打包成一个bundle文件。但是随着项目周期增长，代码量也会越来越多这个时候bundle文件会越来越大，这个时候我们
 * 就会想到对bundle进行拆分，按需加载这个就是所谓的code spliting (webpack和rollup给了很好的解决方案);
 *  React中的Lazy和Suspense:不适合服务端渲染(SSR:简单理解就是将组建或者页面通过服务器生成的HTML字符串，发送到浏览器)，React.lay()相比较之前,会是组建在渲染的时候，再去加载包含引入路径的组件;
 * 再使用Suspense的时候fallback一定是存在且有内容并且fallback可以接收任何在组件加载过程中你想展示的React元素，现在React.lazy()只支持默认导出(default exports)
 */
const Foo = lazy(() => slowImport(import('./Foo'), 1000));
const Bar = lazy(() => slowImport(import('./Bar'), 500));
function slowImport(value, ms = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    })
}
class HOExample02 extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Foo />
                    <Bar />
                </Suspense>
            </div>
        );
    }
}

export default HOExample02;
