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
        {
          isSignin ?
          <div className="flex flex-col justify-center items-center">
            <Greeting title={ signin.title } linkMessage={ signin.linkMessage } link={ signin.link } />
            <AuthenticationForm submitCallbackFn={ handleSubmitSignIn } inputType={ signin.inputType }  placeholders={ signin.placeholders } name={ signin.name } buttonMessage={ signin.buttonMessage } />
          </div>
          :
          <div className="flex flex-col justify-center items-center">
            <Greeting title={ signup.title } linkMessage={ signup.linkMessage } link={ signup.link } />
            <AuthenticationForm submitCallbackFn={ handleSubmitSignUp } inputType={ signup.inputType }  placeholders={ signup.placeholders } name={ signup.name } buttonMessage={ signup.buttonMessage } />
          </div>
        }
    </div>
  )
}

function handleSubmitSignIn(){
}

async function handleSubmitSignUp(event){
  event.preventDefault();
  const input = event.target;

  const jwt = `await POST('/api/users', {
    'user': {
      'username': ${input['username'].value},
      'email': ${input['email'].value},
      'password': ${input['password'].value}
    }
  })`;

  sessionStorage.setItem("token", jwt);

  input['username'].value = "";
  input['email'].value = "";
  input['password'].value = "";
}
export default AuthenticationPage;
