import Header from "./Header/Header";
import InputBox from "./InputBox";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";
import { useDispatch } from "react-redux";
import axios from "axios";
import { resetInitial, getAuthUser } from "../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  async function handleSubmit(event) {
    try{
      event.preventDefault();
      const input = event.target;
      const jwt = sessionStorage.getItem("token");
      const body = {
        user:{}
      };
      for (let i = 0; i < 5; i++) {
        if (input[i].value) {
          body.user[input[i].name] = input[i].value;
        }
      }
      const { data } = await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/api/user`,
        headers: { Authorization: `Bearer ${jwt}` },
        data: body,
      });

      sessionStorage.setItem("token", data.user.token);

      for (let i = 0; i < 5; i++) {
        input[i].value = "";
      }

      dispatch(getAuthUser());
      navigate("/");

    }catch(e){
      if (e.response.status == 422) {
        throw new Error({
          errors: {
            body: ["can't be empty"],
          },
        });
      }
      else if(e.response.status == 500){
        throw new Error({
          errors:{
            body: ["password required"]
          }
        })
      }
    }
  }

  function handleLogout(event) {
    event.preventDefault();
    sessionStorage.removeItem("token");
    dispatch(resetInitial());
    navigate("/");
  }
  return (
    <div>
      <Header />
      <section className="flex flex-col mx-[30%]">
        <form
          className="flex flex-col items-center border-main-grey border-b py-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-5xl my-4">Your Settings</h1>
          <InputBox placeholder="URL of profile picture" name="image" />
          <InputBox placeholder="New Username" name="username" />
          <TextArea placeholder="Short bio about you" name="bio" rows="4" />
          <InputBox placeholder="New Email" name="email" />
          <InputBox
            placeholder="Confirm Password (required)"
            name="password"
            type="password"
          />
          <SubmitButton message="Update Settings" />
        </form>
        <button
          onClick={handleLogout}
          className="my-4 self-start text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Or click here to logout.
        </button>
      </section>
    </div>
  );
}

export default SettingsPage;
