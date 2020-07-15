import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from './Home';
import ComponentInfos from './ComponentInfos';

class App extends Component {
    constructor(props) {
        super(props)
    }
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
                                <li style={{ cursor: 'pointer' }}><Link to='/react'>React核心概念</Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/react" component={ComponentInfos} />
                        <Redirect to="/" />
                    </switch>

                </div>
            </Router>
        );
    }
}

export default App;
