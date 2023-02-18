import React, { Component } from "react";

class Main extends Component {
    
    constructor(props){
        super(props);

        this.state={
            username:"",
            password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        fetch("http://localhost:3030/customers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
            body: JSON.stringify({ 
                username: this.state.username,
                password: this.state.password
            })
        });
    }

    render(){
        return(
            <main>
                <h2>
                    Register for the competition
                </h2>
                <form onsubmit={ this.handleSubmit }>
                    <div>
                        <label>
                            Name: 
                            <input type="text" name="username" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="text" name="password" />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </main>
    )}

}

export default Main;