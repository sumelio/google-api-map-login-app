import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ServiceList from './ServiceList';
import TodoItems from './TodoItems';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            items: [],
            currentItem: {text:'', key:''},
            direction: {
                description: '',
                destinationAddress: '',
                originAddress: '',
                apiKeyGoogle: '',
                distance: '',
                duration: ''
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange (event){
        const { name, value } = event.target;
        const { direction } = this.state;
        this.setState({
            direction: {
                ...direction,
                [name]: value,
                key: Date.now()
            }
        });
    }
    addItem (e){
        e.preventDefault()
        this.setState({ submitted: true });
        const newItem = this.state.direction
        if (newItem.apiKeyGoogle !== ''
         && newItem.destinationAddress !== ''
         && newItem.originAddress !== ''
         && newItem.destinationAddress !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items
          })
        }
    }
    render() {
        const { user, submitted, originAddress, destinationAddress } = this.props;

        return (
            <div>
                <p><Link to="/login">Logout</Link></p>
                <h1>User: {user.firstName}!</h1>
                <div class="card">
                  <div class="card-header">
                  <ServiceList 
                    addItem={this.addItem} 
                    direction={this.state.direction}
                    submitted={this.state.submitted}
                    handleChange={this.handleChange} />
                 </div> 
                 </div>
                 <div class="card-body"> 
                  <TodoItems  className="container"   entries={this.state.items} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };