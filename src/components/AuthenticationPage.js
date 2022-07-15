import Greeting from "./Greeting";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";

function AuthenticationPage({isSignin}){
  const signup = {
    title: "Sign Up",
    linkMessage: "Have an account?",
    link: "#",
    placeholders: ["Username", "Email", "Password"],
    buttonMessage: "Submit"
  }
  const signin = {
    title: "Sign In",
    linkMessage: "Need an account?",
    link: "#",
    placeholders: ["Email", "Password"],
    buttonMessage: "Sign in"
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Greeting title={ isSignin ? signin.title : signup.title } linkMessage={ isSignin ? signin.linkMessage : signup.linkMessage } link={ isSignin ? signin.link : signup.link } />
        <AuthenticationForm placeholders={ isSignin ? signin.placeholders : signup.placeholders } buttonMessage={ isSignin ? signin.buttonMessage : signup.buttonMessage } />
      </div>
    </div>
  )
}
export default AuthenticationPage;
