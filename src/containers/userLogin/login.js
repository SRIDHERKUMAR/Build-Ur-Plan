import React from 'react';
import {connect} from "react-redux";
import { loginSuccess } from "../../redux/actions/login_actions";
import './_styles.scss';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
           userName:'',
            password:'',
            loginFailure:''
        };

    }
    homePage = () => {
        const {userName,password } =this.state;
        if(userName === 'sridher' && password.length === 7){
            return this.props.loginSuccess(true);
        } else {
           return this.setState({loginFailure: "Please Enter Valid Credentials"})
        }

    };

    render() {
        return (
            <div className="login_page">
                <div>USER LOGIN</div>
                <div className="login_page--username">
                    Username:
                    <input type = "text"  value={this.state.userName} onChange={(e) => this.setState({userName: e.target.value})} />
                </div>
                <div className="login_page--password">
                Password:
                    <input type = "password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                </div>
                <button onClick={this.homePage}>Submit</button>
                <button>SignUp</button>
                {this.state.loginFailure}
            </div>
        );
    }
}

const mapStateToProps = state => ({
        login: state.loginReducer.login
});

const mapDispatchToProps = dispatch => ({
        loginSuccess: (data) => dispatch(loginSuccess(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);




