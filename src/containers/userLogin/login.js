import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from "react-redux";
import { loginSuccess, getUsers, loggedInUser, addNewUser, resetPassword } from "../../redux/actions/login_actions";
import AddUser from "./addUser";
import './_styles.scss';
import ResetPassword from "./resetPassword";

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

    createUser() {
        this.setState({
            passwordMissMatch: false
        });
        this.props.addNewUser(true);
    }

    resetUser() {
        this.setState({
            passwordMissMatch: false
        });
        this.props.reset(true);
    }

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
                    {this.props.resetEnabled &&
                        <ResetPassword />
                    }
                    {this.props.addUser && !this.props.resetEnabled &&
                        <AddUser />
                    }
                    {!this.props.addUser && !this.props.resetEnabled &&
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
                            {this.state.passwordMissMatch === true &&
                            <div className="link" onClick={()=>this.resetUser()}>
                               reset password
                            </div>}
                            <Button
                                block
                                bssize="large"
                                className="button"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                            </Button>
                            <Button
                                block
                                bssize="large"
                                className="button"
                                onClick={() => this.createUser()}
                            >
                                Create
                            </Button>
                        </Form>
                    </div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        addUser: state.loginReducer.addUser,
        resetEnabled: state.loginReducer.resetPassword
});

const mapDispatchToProps = dispatch => ({
    loginSuccess: (data) => dispatch(loginSuccess(data)),
    getUsers: (data) => dispatch(getUsers(data)),
    loggedInUser: (data) => dispatch(loggedInUser(data)),
    addNewUser: (data) => dispatch(addNewUser(data)),
    reset: (data) => dispatch(resetPassword(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);




