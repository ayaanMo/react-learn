import React, { Component, Fragment } from 'react';
/**
 * Fragments:React 分组组件，当一个组件要返回多个元素，又不想增加额外不必要的标签元素的时候就可以使用它，这个时候DOM结构不会增加额外的DOM元素;
 * Fragment还有一个短语句的用法<></>这种用法是不支持key或属性的,并且现在Fragment唯一能接受的属性是key比如遍历的时候可以赋值key值
 */
class HOExample06 extends Component {
    constructor() {
        super();
        this.state = { data: [{ id: "1", name: "A" }, { id: "2", name: "B" }, { id: "3", name: "C" }, { id: "4", name: "D" }, { id: "5", name: "E" }] };
    }
    render() {
        const { data } = this.state;
        return (
            <Fragment>
                <ul>
                    <li>无障碍</li>
                    <li>代码分割</li>
                    <li>Context</li>
                    <li>错误边界</li>
                    <li>Refs转发</li>
                    <li>Fragments</li>
                </ul>
                <>
                    <ul>
                        <li>ONE</li>
                        <li>TWO</li>
                        <li>THREE</li>
                        <li>FOUR</li>
                        <li>FIVE</li>
                        <li>SIX</li>
                    </ul>
                </>
                <ol>
                    {
                        data.map((item) => (
                            <Fragment key={item.id}>
                                <li>{item.name}</li>
                            </Fragment>
                        ))
                    }
                </ol>
            </Fragment>
        );
    }
}

export default HOExample06;
