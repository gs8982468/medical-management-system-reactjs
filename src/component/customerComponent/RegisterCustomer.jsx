import React, { Component } from 'react';
import FetchUserDetailsService from '../../service/customerService/FetchUserDetailsService';

class RegisterCustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            emailAddress: '',
            phoneCode: '',
            mobileNumber: '',
            password: '',
            confirmPassword: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changePhoneCodeHandler = this.changePhoneCodeHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);

        this.saveOrUpdateCustomer= this.saveOrUpdateCustomer.bind(this);


    }

    saveOrUpdateCustomer=(e)=>{
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, emailAddress: this.state.emailAddress, phoneCode: this.state.phoneCode, mobileNumber:this.state.mobileNumber,password: this.state.password, confirmPassword: this.state.confirmPassword};
        console.log('employee => ' + JSON.stringify(customer));
        FetchUserDetailsService.registerCustomer(customer).then(response=>{
            this.props.history.push('/');
        });




    }

    cancel(){
        this.props.history.push('/');
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changeEmailAddressHandler = (event) => {
        this.setState({ emailAddress: event.target.value });
    }
    changePhoneCodeHandler = (event) => {
        this.setState({ phoneCode: event.target.value });
    }
    changeMobileNumberHandler = (event) => {
        this.setState({ mobileNumber: event.target.value });
    }
    changepasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }


    render() {
        return (
            <div>
                {/* <h1>Register Customer</h1> */}
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Register Customer</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="First Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> User Name: </label>
                                        <input placeholder="User Name" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Address: </label>
                                        <input placeholder="Email Address" name="emailAddress" className="form-control"
                                            value={this.state.emailAddress} onChange={this.changeEmailAddressHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Phone Code: </label>
                                        <input placeholder="Phone code" name="phoneCode" className="form-control"
                                            value={this.state.phoneCode} onChange={this.changePhoneCodeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Mobile Number: </label>
                                        <input placeholder="Mobile Number" name="mobileNumber" className="form-control"
                                            value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changepasswordHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Confirm Password: </label>
                                        <input placeholder="Confirm password" name="confirmPassword" className="form-control"
                                            value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Register</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default RegisterCustomer;