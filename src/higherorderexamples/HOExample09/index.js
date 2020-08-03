import React, { Component } from 'react';
import { data } from './api';
import _ from 'lodash'
// import { FixedSizeList as List } from 'react-window';
/**
 * 性能优化:
 *  1.学会使用Chrome Performance 标签分析组件;
 *  2.学会使用开发者工具分析器对组件进行分析；
 *  3.知道怎么使用虚拟化和理解什么是虚拟化;
 *     1.滚动容器元素;
 *     2.可滚动区域;
 *     3.可视区域;
 */
class HOExample09 extends Component {
    constructor(props) {
        super(props);
        this.state = { startIndex: 0, endIndex: 0 };
        this.offsetHight = 0;
        this.tbody = React.createRef();
        this.scrollTop = 0;
        this.totalRowData = data;
        this.handleScroll = this.handleScroll.bind(this);
        this.updateVisibleData = this.updateVisibleData.bind(this);
    }
    handleScroll(event) {
        console.log(event.target.scrollTop)
        const startIndex = Math.ceil(event.target.scrollTop / 20);
        const endIndex = startIndex + this.visibleCount;
        this.updateVisibleData({ startIndex: startIndex, endIndex: endIndex });
    }
    updateVisibleData(param) {
        this.setState({ startIndex: param.startIndex, endIndex: param.endIndex });
    }
    componentDidMount() {
        // 这里面的5是一个缓冲值
        const { startIndex } = this.state
        this.visibleCount = this.tbody.current.clientHeight / 20 + 5;
        const endIndex = startIndex + this.visibleCount;
        this.offsetHight = this.totalRowData.length * 20
        this.updateVisibleData({ startIndex: startIndex, endIndex: endIndex });
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        console.log(this.state);
        if (nextState.startIndex !== this.state.startIndex || nextState.endIndex !== this.state.endIndex) {
            return true
        }
        return false

    }
    render() {
        console.log(123123123)
        const { startIndex, endIndex } = this.state;
        let rowData = this.totalRowData.slice(startIndex, endIndex);
        const children = rowData.map((row, index) => {
            return (
                <tr key={row.gid} style={{
                    display: "table",
                    width: "calc( 100% - 1em )",
                    tableLayout: "fixed"
                }}>
                    <td>{startIndex + index + 1}</td>
                    <td>{row.code}</td>
                    <td>{_.get(row, "busiUnit.busiUnitName")}</td>
                    <td>{_.get(row, "execWorkCenterGidRef.name")}</td>
                    <td>{_.get(row, "bmMaterialGidRef.name")}</td>
                </tr>
            )
        })

        return (
            <div  >
                <table>
                    <thead style={{
                        display: "table",
                        width: "calc( 100% - 1em )",
                        tableLayout: "fixed"
                    }}>
                        <tr>
                            <th>number</th>
                            <th>workorder</th>
                            <th>busiUnit</th>
                            <th>workcenter</th>
                            <th>material</th>
                        </tr>
                    </thead>
                    <tbody style={{ height: "500px", maxHeight: "500px", display: "block", width: "100%", overflowY: "scroll" }} ref={this.tbody} onScroll={this.handleScroll}>
                        <div style={{ height: `${this.offsetHight}px` }} >
                            {children}
                        </div>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default HOExample09;
