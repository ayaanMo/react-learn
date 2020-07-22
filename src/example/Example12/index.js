import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { data } from './api';
/**
 * React 哲学
 *  第一步:将设计好的UI划分为组件层级:
 *      一个组件原则上只能负责一个功能，如果它需要负责很多功能，我们则要考虑是否要拆分成更多的小组件
 *  第二步:用React创建一个静态版本:
 *      静态版本就是把一些重要部分先通过UI进行展现出来，然后所有暂时都通过props进行传递，而且构造静态版本组件的时候是自上而下去构建，这样思路会更加清晰
 *  第三步:确定UI state的最小(且完整)标识:
 *      1.如果该数据是否是由父组件通过props传递而来？如果是,那它应该不是state;
 *      2.该数据是否随时间的推移而保持不变?如果是,那它应该也不是state;
 *      3.能否根据其他state或props计算出来数据的值?如果是,那也不是state;
 *  第四步:确定state放置的位置:React是单向数据流,顺着组件层级从上往下传递
 *      1.找到根据这个state进行渲染的组件;
 *      2.找到他们的共同拥有者组件(在组件层级上高于所有需要该state的组件);
 *      3.该共同所有者组件或者比它层级更高的组件应用拥有该state;
 *      4.如果你找不到一个存放state的地方,就建一个高于共同拥有者组件层级的位置,存放该state;
 *  第五步:添加方向数据流:
 *         所谓的方向数据流就是,较低层级的表单组件去更新较高层级的组件中的state，一般都是通过回调函数来改变较高层级的state，从而通过改变state来更新应用
 */
class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { filterText: "", isStockOnly: false };
        this.serchChange = this.serchChange.bind(this);

    }
    // 搜索框改变父级组件state的状态的回调函数
    serchChange(param) {
        this.setState({ [param.name]: param.value });
    }
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} serchChange={this.serchChange} />
                <ProductTable products={data} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
            </div>
        );
    }
}

export default FilterableProductTable;
