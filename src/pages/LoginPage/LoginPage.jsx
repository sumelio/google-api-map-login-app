import React from 'react'; 
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { Link } from 'react-router-dom';
 

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
 
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() { 
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div>
                <h2 className="h3 mb-3 font-weight-normal" >Login</h2> 
                <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} 
                        placeholder="username" required="" autofocus=""
                        />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password"  className="form-control" name="password" value={password} onChange={this.handleChange} 
                        placeholder="password" required="" autofocus=""
                        />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" >Login</button>
                        {loggingIn &&
                            <div> Loanding... </div>
                        }
                    </div>
                </form>
                <Link to="/register">Register</Link>
            </div>
        );
    }
}

 
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 