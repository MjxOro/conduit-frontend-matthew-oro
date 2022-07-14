import Greeting from "../Greeting";
import Header from "../Header";
import AuthenticationForm from "../AuthenticationForm";

function SignUpPage(){
  const signupPlaceholders = ["Username", "Email", "Password"];

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Greeting title={"Sign Up"} linkMessage={"Have an account?"} link={"#"} />
        <AuthenticationForm placeholders={signupPlaceholders} buttonMessage={"Submit"} />
      </div>
    </div>
  )
}
export default SignUpPage;

