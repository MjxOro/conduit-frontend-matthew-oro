import Greeting from "../Greeting";
import Form from "./Form";
import Header from "../Header";

function SignUpPage(){
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Greeting title={"Sign In"} link={"Need an account?"} />
        <Form />
      </div>
    </div>
  )
}
export default SignUpPage;

