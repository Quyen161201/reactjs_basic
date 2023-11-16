import React from 'react';
import './childcomponent'
import ChildrenComponent from './childcomponent';

class Mycomponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            {
                id: "ajs123", title: 'Dev', salary: '200$',

            },
            {
                id: 'ajs12345', title: 'Tester', salary: '100$'
            },
            {
                id: 'ajs1234578', title: 'Devops', salary: '150$'
            }

        ]


    }
    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state)
    }
    render() {

        return (
            <>
                <form action="">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(e) => this.handleFirstName(e)} />
                    <br /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(e) => this.handleLastName(e)} />
                    <br /><br />
                    <input type="button" value="Submit" onClick={() => this.handleSubmit()} />
                </form>
                <ChildrenComponent
                    lname={this.state.lastName}
                    fname={this.state.firstName}
                    age={22}
                    arrJob={this.state.arrJobs}
                />

            </>

        )
    }
}

export default Mycomponent;