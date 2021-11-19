import React from 'react';
import FormInput from '../../components/form-input/form-input.compnent';
import CustomButton from '../../components/custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import './sign-up.styles.scss';
class SignUp extends React.Component {
constructor() {
    super();

    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
}

handleSubmit = async (event) => {
event.preventDefault();
const {displayName, email, password, confirmPassword} = this.state;

if(password !== confirmPassword) {
    alert("passwords don't match");
    return;
}

if(!displayName && !email) {
    alert("Please enter valid email and Name")
    return;
}
try{
await createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
    const {user} = userCredentials
    createUserProfileDocument(user, {displayName});
    this.setState({
     displayName: '',
     email: '',
     password: '',
     confirmPassword: '',
    })
});
} catch(err) {
    console.log('error: ' + err.message)
}
}

handleChange = (event) => {
    const {name, value} =  event.target;
    this.setState({[name]: value});
}


render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
        <div className="sign-up">
            <h2 className="title">I do not have account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                type="text" 
                name="displayName" 
                label="Name"value={displayName} 
                handleChange={this.handleChange}
                required/>

                <FormInput 
                type="email" 
                name="email" label="Email"
                value={email} 
                handleChange={this.handleChange}
                required/>

                <FormInput 
                type="password" 
                name="password" 
                label="Password"
                value={password} 
                handleChange={this.handleChange}
                required/>

                <FormInput 
                type="password"
                name="confirmPassword" 
                label="Confirm password"
                value={confirmPassword} 
                handleChange={this.handleChange}
                required />

                <CustomButton type="submit">Sign up</CustomButton>
            </form>

        </div>
    )
}
}

export default SignUp;