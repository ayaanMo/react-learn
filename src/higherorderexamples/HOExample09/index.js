import React, { Component, Fragment } from 'react';
import LazyTable from './LazyTable';
import VirtualList from './VirtualList';
import _ from 'lodash';
// import { FixedSizeList as List } from 'react-window';
/**
 * 性能优化:
 *  1.学会使用Chrome Performance 标签分析组件;
 *  2.学会使用开发者工具分析器对组件进行分析；
 *  3.知道怎么使用虚拟化和理解什么是虚拟化;
 *     1.滚动容器元素;
 *     2.可滚动区域;
 *     3.可视区域;
 *  4.数据懒加载的实现原理
 */
class HOExample09 extends Component {

    render() {
        let id = _.get(this.props, "match.params.id")
        return (
            <Fragment>
                {id === "lazy" ? <LazyTable /> : <VirtualList />}
            </Fragment>
        );
    }
}

export default HOExample09;
