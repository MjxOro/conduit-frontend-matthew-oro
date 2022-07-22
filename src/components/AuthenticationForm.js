import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

function AuthenticationForm({ inputBox, buttonMessage, submitCallbackFn }){
  return(
    <form onSubmit={submitCallbackFn} className="w-[30%] flex flex-col justify-center items-center my-4" >
      {inputBox.map((input, i) => <InputBox key={i}  placeholder={input.placeholder} name={input.name} type={input.type}/>)}
      <SubmitButton message={buttonMessage} />
    </form>
  )
}

export default AuthenticationForm;




