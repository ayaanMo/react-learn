import React, { Component } from 'react';
import { HOExample01, HOExample02, HOExample03, HOExample04, HOExample05, HOExample06, HOExample07, HOExample08, HOExample09, HOExample10, HOExample11 } from './higherorderexamples';
import { Route, Link, Switch } from 'react-router-dom';
class HOComponentInfo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="nav nav-stacked">
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample01">无障碍</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample02">代码分割</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample03">Context</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample04">错误边界</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample05">Refs转发</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample06">Fragments</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample07">高阶组件</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample08">深入JSX</Link></li>
                        <li>
                            <div style={{ padding: "10px 15px", color: "#337ab7" }}>性能优化</div>
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ margin: "-2px -12px" }}><Link to="/react-high-order/hoexample09/lazy">数据懒加载</Link></li>
                                <li style={{ margin: "-2px -12px", paddingTop: "10px" }}><Link to="/react-high-order/hoexample09/virtual">长列表虚拟化</Link></li>
                            </ul>
                        </li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample10">Portals</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample11">Render Props</Link></li>
                        {/* <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample09">节流和防抖</Link></li> */}
                    </div>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route path='/react-high-order/hoexample01' component={HOExample01} />
                        <Route path='/react-high-order/hoexample02' component={HOExample02} />
                        <Route path='/react-high-order/hoexample03' component={HOExample03} />
                        <Route path='/react-high-order/hoexample04' component={HOExample04} />
                        <Route path='/react-high-order/hoexample05' component={HOExample05} />
                        <Route path='/react-high-order/hoexample06' component={HOExample06} />
                        <Route path='/react-high-order/hoexample07' component={HOExample07} />
                        <Route path='/react-high-order/hoexample08' component={HOExample08} />
                        <Route path='/react-high-order/hoexample09/:id' component={HOExample09} />
                        <Route path='/react-high-order/hoexample10' component={HOExample10} />
                        <Route path='/react-high-order/hoexample11' component={HOExample11} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default HOComponentInfo;
