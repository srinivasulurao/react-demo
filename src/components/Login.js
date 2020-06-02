import React, { Component } from 'react';

export class Login extends Component {

    state={
     email_address:"",
     password:""

    }

    // componentWillReceiveProps=()=>{
    //     console.log("Component will recieve props"); 
    // }

    // componentWillMount=()=>{
    //     console.log("Component Will Mount");
    // }

    changeDesignation=()=>{
        this.setState({designation:"Harman Director"});
    }

    fieldChangeHandler=(event)=>{
        
        let field_name=event.target.name;
        let field_value=event.target.value; 

        this.setState({[field_name]:field_value}); 
    }

    submitForm=(event)=>{
      event.preventDefault();

      //Validation

      //Send it to a webservice.


    }

    render() {

        const value={...this.state,'password':'testing123'}; 
        console.log(value); 

        return (
            <div className='container-fluid'>
            <form method='post'  action='' onSubmit={(event)=>this.submitForm(event)}>
                <label>Email Address</label>
                <input onChange={(event)=>this.fieldChangeHandler(event)} type='email' name='email_address' />
                <label>Password</label>
                <input onChange={(event)=>this.fieldChangeHandler(event)} type='password' name='password' />
                <button className='btn'>Log in</button>
            </form>
            <a href='/register'>Register</a>
            </div>
        )
    }

    // componentDidMount=()=>{
    //     console.log("Component Did Mount"); 
    //     this.setState({'designation':"Lead Developer"}); 
    // }

    // componentWillUpdate=()=>{
        
    // }
}

export default Login
