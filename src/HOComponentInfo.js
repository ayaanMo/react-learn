import React, { Component } from 'react';
import { HOExample01, HOExample02, HOExample03, HOExample04, HOExample05, HOExample06, HOExample07, HOExample08, HOExample09 } from './higherorderexamples';
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
                        <li style={{ cursor: "pointer" }}><Link to="/react-high-order/hoexample09">性能优化</Link></li>
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
                        <Route path='/react-high-order/hoexample09' component={HOExample09} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default HOComponentInfo;
