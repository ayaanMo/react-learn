import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import ComponentInfos from './ComponentInfos';
import HOComponentInfos from './HOComponentInfo';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className='navbar-heading'>
                                <div className='navbar-brand'>React</div>
                            </div>
                            <div className='nav navbar-nav'>
                                <li style={{ cursor: 'pointer' }}><Link to='/'>首页</Link></li>
                                <li style={{ cursor: 'pointer' }}><Link to='/react-core-concepts'>React核心概念</Link></li>
                                <li style={{ cursor: 'pointer' }}><Link to='/react-high-order'>React高级指引</Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/react-core-concepts" component={ComponentInfos} />
                        <Route path="/react-high-order" component={HOComponentInfos} />
                        <Redirect to="/" />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
