import React, { Component } from 'react';
import FamilyContext from './context';
import Father from './Father';
import GrandMother from './GrandMother';
/**
 *  Context(上下文):提供了一个无需为每层组件手动添加props,就能在祖建树间进行数据传递的方法;
 *  Context主要是存放全局需要使用的数据,而不需要通过props自上而下去传递;
 *  Context姑且是好但是需要开发判断哪些东西应该是通过props进行传递哪些是通过Context进行传递的;
 *  Consumer 也可以单独使用但这个时候 读取的context是默认context;
 *  组件除了利用Consumer以外还可以利用contextType进行获取Context(会去消费最近Context上面的一个值)
 */
class HOExample03 extends Component {
    constructor(props) {
        super(props);
        this.state({ name: "陈" })
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <FamilyContext.Provider value={name}>
                    <div style={{ border: '1px solid red', width: '30%', margin: '50px auto', textAlign: 'center' }}>
                        <p>祖父组件定义的值:{name}老雷</p>
                        <Father />
                    </div>
                </FamilyContext.Provider>
                <GrandMother />
            </div>
        );
    }
}

export default HOExample03;
