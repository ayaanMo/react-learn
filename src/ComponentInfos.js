import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Example01, Example02, Example04, Example05, Example06, Example07, Example08, Example09, Example10, Example11, Example12 } from './examples'
class ComponentInfos extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="nav nav-stacked">
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example01">Hello,World</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example02">TableInfo</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example04">props用法</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example05">state用法</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example06">事件处理</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example07">条件渲染</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example08">列表&&KEY</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example09">表单组件</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example10">状态提升</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example11">组合VS继承</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-core-concepts/example12">React哲学</Link></li>
                    </div>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route path='/react-core-concepts/example01' component={Example01} />
                        <Route path='/react-core-concepts/example02' component={Example02} />
                        <Route path='/react-core-concepts/example04' component={Example04} />
                        <Route path='/react-core-concepts/example05' component={Example05} />
                        <Route path='/react-core-concepts/example06' component={Example06} />
                        <Route path='/react-core-concepts/example07' component={Example07} />
                        <Route path='/react-core-concepts/example08' component={Example08} />
                        <Route path='/react-core-concepts/example09' component={Example09} />
                        <Route path='/react-core-concepts/example10' component={Example10} />
                        <Route path='/react-core-concepts/example11' component={Example11} />
                        <Route path='/react-core-concepts/example12' component={Example12} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default ComponentInfos;
