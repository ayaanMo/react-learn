import React, { Component } from 'react';
import { HOExample01, HOExample02, HOExample03 } from './highorderexamples';
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
                    </div>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route path='/react-high-order/hoexample01' component={HOExample01} />
                        <Route path='/react-high-order/hoexample02' component={HOExample02} />
                        <Route path='/react-high-order/hoexample03' component={HOExample03} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default HOComponentInfo;
