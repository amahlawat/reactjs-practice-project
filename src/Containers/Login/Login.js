import React, { useState } from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.state = {
            username: ""
        }
    }
    saveData = e => {
        e.preventDefault();
        this.setState({ username: this.usernameRef.value });
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={e => this.saveData(e)}>
                    <input ref={input => this.usernameRef = input} placeholder="username" />
                    <input ref={input => this.passwordRef = input} type="password" />
                    <input type="submit" placeholder="submit" />
                </form>
                <p>Your details are: {this.state.username}</p>
            </div>
        )       
    }
}

export default Login;