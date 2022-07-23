import Greeting from "./Greeting";
import Header from "./Header";
import AuthenticationForm from "./AuthenticationForm";
import axios from "axios";

const signup = {
  title: "Sign Up",
  linkMessage: "Have an account?",
  link: "#",
  inputBox: [
    { placeholder: "Username", name: "username", type: "text" },
    { placeholder: "Email", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
  ],
  buttonMessage: "Submit",
};
const signin = {
  title: "Sign In",
  linkMessage: "Need an account?",
  link: "#",
  inputBox: [
    { placeholder: "Email", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
  ],
  buttonMessage: "Sign in",
};

function AuthenticationPage({ isSignin }) {
  return (
    <div>
      <Header />
      {isSignin ? (
        <div className="flex flex-col justify-center items-center">
          <Greeting
            title={signin.title}
            linkMessage={signin.linkMessage}
            link={signin.link}
          />
          <AuthenticationForm
            submitCallbackFn={handleSubmitSignIn}
            inputBox={signin.inputBox}
            buttonMessage={signin.buttonMessage}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Greeting
            title={signup.title}
            linkMessage={signup.linkMessage}
            link={signup.link}
          />
          <AuthenticationForm
            submitCallbackFn={handleSubmitSignUp}
            inputBox={signup.inputBox}
            buttonMessage={signup.buttonMessage}
          />
        </div>
      )}
    </div>
  );
}

async function handleSubmitSignIn(event) {
  try {
    event.preventDefault();

    const input = event.target;

    const jwt = sessionStorage.getItem("token");

    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/users/login`,
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        user: {
          email: input["email"].value,
          password: input["password"].value,
        },
      },
    });

    sessionStorage.setItem("token", data.user.token);

    input["email"].value = "";
    input["password"].value = "";
  } catch (e) {
    if (e.response.status == 422) {
      throw new Error({
        errors: {
          body: ["can't be empty"],
        },
      });
    }
  }
}

async function handleSubmitSignUp(event) {
  try {
    event.preventDefault();
    const input = event.target;

    const { data } = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/users`,
      data: {
        user: {
          username: input["username"].value,
          email: input["email"].value,
          password: input["password"].value,
        },
      },
    });

    sessionStorage.setItem("token", data.user.token);

    input["username"].value = "";
    input["email"].value = "";
    input["password"].value = "";
  } catch (e) {
    if (e.response.status == 422) {
      throw new Error({
        errors: {
          body: ["can't be empty"],
        },
      });
    }
  }
}
export default AuthenticationPage;
