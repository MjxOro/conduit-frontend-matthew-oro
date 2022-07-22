import Greeting from "./Greeting";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";

const signup = {
  title: "Sign Up",
  linkMessage: "Have an account?",
  link: "#",
  inputBox: [{placeholder: "Username", name: "username", type: "text"}, {placeholder: "Email", name: "email", type: "email"}, {placeholder: "Password", name: "password", type: "password"}],
  buttonMessage: "Submit"
}
const signin = {
  title: "Sign In",
  linkMessage: "Need an account?",
  link: "#",
  inputBox: [{placeholder: "Email", name: "email", type: "email"}, {placeholder: "Password", name: "password", type: "password"}],
  buttonMessage: "Sign in"
}

function AuthenticationPage({isSignin}){
  return (
    <div>
      <Header />
        {
          isSignin ?
          <div className="flex flex-col justify-center items-center">
            <Greeting title={ signin.title } linkMessage={ signin.linkMessage } link={ signin.link } />
            <AuthenticationForm submitCallbackFn={ handleSubmitSignIn } inputBox={ signin.inputBox } buttonMessage={ signin.buttonMessage } />
          </div>
          :
          <div className="flex flex-col justify-center items-center">
            <Greeting title={ signup.title } linkMessage={ signup.linkMessage } link={ signup.link } />
            <AuthenticationForm submitCallbackFn={ handleSubmitSignUp } inputBox={ signup.inputBox } buttonMessage={ signup.buttonMessage } />
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
