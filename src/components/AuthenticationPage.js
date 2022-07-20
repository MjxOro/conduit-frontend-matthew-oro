import Greeting from "./Greeting";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";

const signup = {
  title: "Sign Up",
  linkMessage: "Have an account?",
  link: "#",
  placeholders: ["Username", "Email", "Password"],
  name: ["username","email","password"],
  inputType: ["text", "text", "password"],
  buttonMessage: "Submit"
}
const signin = {
  title: "Sign In",
  linkMessage: "Need an account?",
  link: "#",
  placeholders: ["Email", "Password"],
  name: ["email","password"],
  inputType: ["text", "text"],
  buttonMessage: "Sign in"
}
const userData = {}

function AuthenticationPage({isSignin}){
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Greeting title={ isSignin ? signin.title : signup.title } linkMessage={ isSignin ? signin.linkMessage : signup.linkMessage } link={ isSignin ? signin.link : signup.link } />
        <AuthenticationForm submitCallbackFn={ isSignin ? handleSubmitSignIn : handleSubmitSignUp } inputType={isSignin ? signin.inputType : signup.inputType }  placeholders={ isSignin ? signin.placeholders : signup.placeholders } name={ isSignin ? signin.name : signup.name } buttonMessage={ isSignin ? signin.buttonMessage : signup.buttonMessage } />
      </div>
    </div>
  )
}

function handleSubmitSignIn(){
}

function handleSubmitSignUp(event){
  event.preventDefault();
  signup.name.forEach((inputName) => {
    const input = event.target[inputName];
    userData[inputName] = input.value;

    input.value = "";
  })
  sessionStorage.setItem("user", JSON.stringify(userData));

}
export default AuthenticationPage;
