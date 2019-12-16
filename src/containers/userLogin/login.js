import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from "react-redux";
import { loginSuccess, getUsers, loggedInUser, addNewUser } from "../../redux/actions/login_actions";
import AddUser from "./addUser";
import './_styles.scss';

function fetchUsers() {
    fetch("https://apiserverdata.com/users/buildYourPlanUserDetails/all")
        .then(res => res.json())
        .then(users => {
            this.props.getUsers(users);
        });
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            password: "",
            passwordMissMatch: "",
            userExists: "",
            user: {},
            userName:'',
            loginFailure:''
        };

    }
    componentDidMount() {
        fetchUsers.call(this);
    }

    validateForm() {
        return this.state.userName.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
            passwordMissMatch: "",
            userExists: ""
        });
    };

    handleSubmit = async event => {
        fetch(`https://apiserverdata.com/users/buildYourPlanUserDetails?id=${this.state.userName}&password=${this.state.password}`)
            .then(res => res.json())
            .then(user => {
                if(user.login) {
                    this.props.loginSuccess(user.login)
                    this.props.loggedInUser(user);
                }
                this.setState({
                    passwordMissMatch: user.passwordMissMatch,
                    userExists: user.userExists
                });
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <section className="centered">
                    {this.state.userExists === false &&
                    <div className="error">
                        user does not exists
                    </div>}
                    {this.state.passwordMissMatch === true &&
                    <div className="error">
                        user and password miss match
                    </div>}
                    {this.props.addUser &&
                        <AddUser />
                    }
                    {!this.props.addUser &&
                    <div className="Login">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="userName" bssize="large">
                                <Form.Control
                                    placeholder="userId"
                                    className="input"
                                    autoFocus
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="password" bssize="large">
                                <Form.Control
                                    placeholder="password"
                                    className="input"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </Form.Group>
                            <Button
                                block
                                bssize="large"
                                className="button"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                            </Button>
                    <button
                        className="button"
                        onClick={() => this.props.addNewUser(true)}>
                        Create
                    </button>
                        </Form>
                    </div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        addUser: state.loginReducer.addUser
});

const mapDispatchToProps = dispatch => ({
    loginSuccess: (data) => dispatch(loginSuccess(data)),
    getUsers: (data) => dispatch(getUsers(data)),
    loggedInUser: (data) => dispatch(loggedInUser(data)),
    addNewUser: (data) => dispatch(addNewUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);




