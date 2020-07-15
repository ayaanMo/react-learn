import React, { Component } from 'react';
/**
 *  列表&key
 *      1.循环生成的元素一般都要给一个key,一般都是用数据的id赋值给key，一个元素在循环的dom节点内要唯一，不然会报警告，不然后期性能优化会有问题
 *      因为key帮助React识别哪些元素改变了，当一个元素没有确定id的时候，万不得已的情况我们一边使用元素索引作为key（但是不建议这样使用，因为当一个循环列表元素顺序会发生改变的时候，会导致性能变差）;
 *      2.元素的key只有放在就近的数组上下文才有意义;
 *      3.key只是在兄弟节点之间必须唯一(意思就是在一个循环元素节点下保证不重复)
 */
function ListItem(props) {
    return <li>{props.children}</li>
}
class Example08 extends Component {
    constructor() {
        super();
        this.state = { list: [1, 2, 3, 4, 5, 6, 7] };
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <ul>
                    {
                        list.map((item, index) =>
                            <ListItem key={item}>{`列表${item}`}</ListItem>
                        )
                    }
                </ul>
                <ul>
                    {
                        list.map((item, index) => {
                            return <ListItem key={item}>{`列表${item}`}</ListItem>
                        }

                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Example08;
