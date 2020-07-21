import React, { Component } from 'react';
import Right from './Right';
import Left from './Left';
/**
 * 高阶组件:
 *      HOC是React中用于复用组件逻辑的一种高级技巧，HOC自身不是React API的一部分，它是一种基于React组合特性而形成的设计模式，具体而言高阶组件是参数未组件，返回值为新组件的函数;更加通俗的来解释，
 * 高阶组件通过包裹被传入的React组件，经过一系列处理，最终返回一个相对增加的React组件，供其他组件调用;
 * 遵循原则:
 *      1.不要修改原始组件:不要去尝试通过prototype来重写原始组件的生命周期方法,一旦修改了原始组件,就失去了组件复用的意义;
 *      2.props保持一致:高阶组件再为子组件添加特性的同时,要保持子组件的原油props不受影响。传入的组件和返回的组件props上尽量保持一致;
 *      3.保持可组合型;
 *      4.displayName:为了方便调式最常见的高阶组件命名方式是将子组件名字包裹起来;
 *      5.不要在render部分使用高阶组件:render中的高阶组件会再每次render的时候重新mount,之前组件内部的state会丢失;
 */
class HOExample07 extends Component {
    render() {
        return (
            <div>
                <Left />
                <Right />
            </div>
        );
    }
}

export default HOExample07;
