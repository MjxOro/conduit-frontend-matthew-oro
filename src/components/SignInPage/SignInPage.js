import Greeting from "../Greeting";
import Header from "../Header";
import AuthenticationForm from "../AuthenticationForm";

function SignInPage(){
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Greeting title={"Sign In"} linkMessage={"Need an account?"} link={"#"} />
        <AuthenticationForm placeholders={["Email","Password"]} buttonMessage={"Sign in"} />
      </div>
    </div>
  )
}
export default SignInPage;

