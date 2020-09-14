import React from 'react';
import _ from 'lodash';
import "./grid.css";
import { data } from './api';
class VirtualList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showList: [] };
        // 每项高度固定
        this.itemSize = 37;
        // 可视区域高度固定
        this.screenHeight = 500;
        this.listHeigth = data.length * this.itemSize;
        // 缓冲值
        this.reservedNum = 5;
        this.startOffset = 0;
        this.endOffset = 0;
        // 计算 startIndex在整个列表的起始位置 0是初始化 scrollTop
        this.startIndex = Math.floor(0 / this.itemSize);
        // 可视区域的数据,并且这里假定每项的高度固定，加5 预留缓冲
        this.showDataCount = Math.ceil(this.screenHeight / this.itemSize) + this.reservedNum;
        this.endIndex = this.startIndex + this.showDataCount;
        this.updateVisibleData = this.updateVisibleData.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
        this.updateVisibleData();
    }
    updateVisibleData() {
        this.setState({ showList: data.slice(this.startIndex, this.endIndex) });
    }
    onScroll(event) {
        let scrollTop = event.target.scrollTop;
        this.startIndex = Math.floor(scrollTop / this.itemSize);
        this.endIndex = this.startIndex + this.showDataCount;
        this.startOffset = scrollTop - (scrollTop % this.itemSize);
        this.endOffset = (data.length - this.endIndex) * this.itemSize;
        this.updateVisibleData();
    }
    render() {
        const { showList } = this.state;

        const children = showList.map((row, index) => {
            return (
                <div className="table-row" key={row.gid}>
                    <div className="table-body-cell">
                        <p>{this.startIndex + index + 1}</p>
                    </div>
                    <div className="table-body-cell">
                        <p>{_.get(row, "code")}</p>
                    </div>
                    <div className="table-body-cell">
                        <p>{_.get(row, "busiUnit.busiUnitName")}</p>
                    </div>
                    <div className="table-body-cell">
                        <p>{_.get(row, "execWorkCenterGidRef.name")}</p>
                    </div>
                    <div className="table-body-cell">
                        <p>{_.get(row, "bmMaterialGidRef.name")}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="virtualList">
                {/* <div className="table-header">
                        <div className="table-header-cell">
                            <p>Number</p>
                        </div>
                        <div className="table-header-cell">
                            <p>Workorder</p>
                        </div>
                        <div className="table-header-cell">
                            <p>BusiUnit</p>
                        </div>
                        <div className="table-header-cell">
                            <p>Workcenter</p>
                        </div>
                        <div className="table-header-cell">
                            <p>Material</p>
                        </div>
                    </div> */}
                <div className="table-body" onScroll={this.onScroll}>
                    <div style={{
                        height: `${this.listHeigth}px`, paddingTop: `${this.startOffset}px`
                    }}>
                        {children}
                    </div>

                </div>

            </div>
        );
    }
}

export default VirtualList;
