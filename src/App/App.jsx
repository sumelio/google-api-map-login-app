import React from 'react';
import { Router, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage';
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
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div> 
                                <PrivateRoute exact path="/" component={LoginPage} />
                                <Route exact path="/" component={LoginPage} /> 
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