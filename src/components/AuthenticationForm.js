import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

function AuthenticationForm({ placeholders, name, inputType, buttonMessage, submitCallbackFn }){
  return(
    <form onSubmit={submitCallbackFn} className="w-[30%] flex flex-col justify-center items-center my-4" >
      {placeholders.map((placeholder, i) => <InputBox key={i} type={inputType[i]} placeholder={placeholder} name={name[i]} />)}
      <SubmitButton message={buttonMessage} />
    </form>
  )
}

export default AuthenticationForm;




