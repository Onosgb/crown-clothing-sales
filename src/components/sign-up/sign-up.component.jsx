import React from 'react';
import FormInput from '../../components/form-input/form-input.compnent';
import CustomButton from '../../components/custom-button/custom-button.component'
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions'
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
const {signUpStart} = this.props;

const {displayName, email, password, confirmPassword} = this.state;

if(password !== confirmPassword) {
    alert("passwords don't match");
    return;
}

if(!displayName && !email) {
    alert("Please enter valid email and Name")
    return;
}

signUpStart({displayName, email, password})

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

export const mapDispatchToProps = (dispatch) => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);