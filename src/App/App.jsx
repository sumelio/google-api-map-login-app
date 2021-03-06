import React from 'react';
import { Router, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { history } from '../backend/helpers';
import { PrivateRoute } from '../components';
import { alertActions } from '../_actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

    render() { 
      const { alert } = this.props;
        return (
            <div > 
                <div className="container">
                    <div className="col-sm-12">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div> 
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} /> 
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 