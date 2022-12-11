import React, { Component } from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        // event handling
        this.registerCustomer=this.registerCustomer.bind(this);
    }

    registerCustomer(){
        this.props.history.push('/register-customer'); // this "/register-customer" is added in app.js routing
    }

    render() {
        return (
            <div className="row">
                <button className="btn btn-primary" onClick={this.registerCustomer}> Register </button>
                
            </div>
        );
    }
}

export default HomePage;