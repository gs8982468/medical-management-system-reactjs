import React, { Component } from 'react';
import CustomerService from '../../service/customerService/FetchUserDetailsService';

class FetchUserDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userEntity: {},
            personalDetails: {},
            contactDetails: {}
        }
    }


    componentDidMount() {
        CustomerService.fetchUser().then((userEntity) => {
            const userDetails = userEntity.data;
            this.setState({ userEntity: userDetails })
            this.setState({ personalDetails: getPersonalDetails(userDetails) })
            this.setState({ contactDetails: getAddress(userDetails) })
        })

        function getPersonalDetails(userEntity) {
            if (userEntity != null && userEntity.personalDetails != null) {
                return userEntity.personalDetails;

            }

        };


        function getAddress(userEntity) {
            if (userEntity != null && userEntity.personalDetails != null && userEntity.personalDetails.contactDetails != null) {
                return userEntity.personalDetails.contactDetails;
            }
        };

    }






    render() {
        return (
            <div className="row">
                <label> Employee First name: </label>

                <div> {this.state.personalDetails.firstName}</div>
            </div>


        );
    }
}

export default FetchUserDetails;