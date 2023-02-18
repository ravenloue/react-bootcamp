import React, { Component } from "react";

class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            allCustomers: []
        }

    }

    render(){
        return(
            <main>
                <h2>Customers List</h2>
            </main>
        )
    }

    componentDidMount(){
        fetch("http://localhost:3030/customers")
        .then( data => data.json() )
        .then( resolved => {
            this.setState({ allCustomers: resolved })
        })
    }
}

export default Main;