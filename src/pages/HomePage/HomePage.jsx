import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TodoList from './TodoList';
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
                destinationAddress: '',
                originAddress: '',
                apiKeyGoogle: ''
            },
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
        console.log(e)
        e.preventDefault()
        const newItem = this.state.direction
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            currentItem: { text: '', key: '' },
          })
        }
    }
    render() {
        const { user, submitted, originAddress, destinationAddress } = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                <h1>User: {user.firstName}!</h1>
                <h1>{process.env.API_KEY_GOOGLE}....</h1>              

                <TodoList 
                    addItem={this.addItem} 
                    direction={this.state.direction}
                    handleChange={this.handleChange}
                />
                <div> <TodoItems entries={this.state.items} /></div>
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