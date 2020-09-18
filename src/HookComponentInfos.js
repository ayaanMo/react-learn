import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { HookExample01, HookExample02, HookExample03, HookExample04, HookExample05, HookExample06 } from './hookExamples';
class HookComponentInfos extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="nav nav-stacked">
                        <li style={{ cursor: "pointer" }}><Link to="/react-hook/hookExample01">useState</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-hook/hookExample02">useEffect</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-hook/hookExample03">useContext</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-hook/hookExample04">useReducer</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-hook/hookExample05">useMemo</Link></li>
                        <li style={{ cursor: "pointer" }}><Link to="/react-hook/hookExample06">自定义hooks</Link></li>
                    </div>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route path='/react-hook/hookExample01' component={HookExample01} />
                        <Route path='/react-hook/hookExample02' component={HookExample02} />
                        <Route path='/react-hook/hookExample03' component={HookExample03} />
                        <Route path='/react-hook/hookExample04' component={HookExample04} />
                        <Route path='/react-hook/hookExample05' component={HookExample05} />
                        <Route path='/react-hook/hookExample06' component={HookExample06} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default HookComponentInfos;
