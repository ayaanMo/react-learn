import React, { Fragment } from 'react';
import { data } from './api';
import _ from 'lodash';
import { Spin } from 'antd';
class LazyTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { rowData: [], isSpin: false };
        this.tbody = React.createRef();
        this.scrollTop = 0;
        this.totalRowData = data;
        this.handleScroll = this.handleScroll.bind(this);
        this.updateVisibleData = this.updateVisibleData.bind(this);
    }
    componentDidMount() {
        // 这里面的5是一个缓冲值
        this.visibleCount = this.tbody.current.scrollHeight / 20 + 5;
        const endIndex = 0 + this.visibleCount;
        this.updateVisibleData({ endIndex: endIndex });
    }
    handleScroll(event) {
        const { isSpin, rowData } = this.state;
        if (rowData.length === this.totalRowData.length) {
            return
        }
        if (isSpin) {
            return
        }
        // 表格懒加载的 实现记得这个公式：event.target.scrollTop + event.target.clientHeight = event.target.scrollHeight(溢出高度+可视高度)
        if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
            this.setState({ isSpin: true })
            const { rowData } = this.state;
            const endIndex = rowData.length + 20;
            this.tbody.current.scrollTop = rowData.length * 15;
            this.updateVisibleData({ endIndex: endIndex });
        }
    }
    updateVisibleData(param) {
        let rowData = this.totalRowData.slice(0, param.endIndex);
        this.setState({ rowData: rowData }, () => {
            setTimeout(() => { this.setState({ isSpin: false }) }, 3000)
        });
    }
    render() {
        const { rowData, isSpin } = this.state;
        const children = rowData.map((row, index) => {
            return (
                <tr key={row.gid} style={{
                    display: "table",
                    width: "calc( 100% - 1em )",
                    tableLayout: "fixed"
                }}>
                    <td>{index + 1}</td>
                    <td>{row.code}</td>
                    <td>{_.get(row, "busiUnit.busiUnitName")}</td>
                    <td>{_.get(row, "execWorkCenterGidRef.name")}</td>
                    <td>{_.get(row, "bmMaterialGidRef.name")}</td>
                </tr>
            )
        })

        return (
            <div  >
                {isSpin && <Fragment>
                    <Spin spinning={isSpin} style={{
                        position: "fixed", left: "55%",
                        top: "47%"
                    }} />
                    <div style={{ position: "fixed", top: "8%", left: "15%", bottom: "20%", right: 0, width: "90%", height: "90%", background: "rgb(0 0 0 / 0.25)" }}> </div>
                </Fragment>}
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
                        {children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LazyTable;
