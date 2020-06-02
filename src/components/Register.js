import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1>This is the registration page !</h1>
                 <button onClick={()=>this.navigate()}>Navigate</button>
            </div>
        )
    }

    navigate=()=>{
        this.props.history.push("/login"); 
    }
}

export default Register
