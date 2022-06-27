
import {
        signInWithGooglePopup, 
        signInWithGoogleRedirect, 
        createUserDocumentFromAuth
        } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
const SignIn = ()=>{
    const logGoogleUser =async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocref= await createUserDocumentFromAuth(user);
    }
    return(
        <div>
                <h1>SignIn</h1>
                <button onClick={logGoogleUser}> Signin with google popup</button>
                <SignUpForm />
        </div>
    );
}
export default SignIn;