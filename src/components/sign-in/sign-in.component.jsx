import {Component} from 'react';
import FormInput from '../form-input/form-input.compnent';
import CustomButton from '../../components/custom-button/custom-button.component'
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';
class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);

    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {

        const {googleSignInStart} = this.props;

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form  onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email"
                     type="email" 
                     value={this.state.email} 
                     label="Email"
                     required
                     handleChange={this.handleChange}/>

                    <FormInput
                    name="password" 
                    type="password" value={this.state.password} 
                    required
                    label="Password"
                    handleChange={this.handleChange}
                    />
                   <div className="buttons">
                   <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton type ="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign in with Google</CustomButton>
                   </div>

                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn)