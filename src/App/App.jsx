import React from 'react';
import { Router, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage';
import { history } from '../backend/helpers';

class connectedApp extends React.Component {
    constructor(props) {
        super(props);
 
    }

    render() { 
        return (
            <div > 
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div> 
                                <Route path="/" component={LoginPage} /> 
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
 
export { connectedApp as App }; 