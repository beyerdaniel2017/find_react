import React, { Component } from 'react';
import { Loader } from './components/layout/loader';
import { Home } from './components/layout/home';
import { Landing } from './components/layout/landing';
import { Result } from './components/layout/result';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory(
);
console.log(history);



class App extends Component {
    render() {
        return (
            <div>
                <Loader />
                {/* <Home />   */}

                <Router history={history}>

                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/landing' component={Landing} />
                        <Route path='/result' component={Result} />
                    </div>
                </Router>
            </div>
        );
    }


}

export default App;
