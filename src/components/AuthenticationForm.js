import InputBox from "./InputBox";
import GreenButton from "./GreenButton";

function AuthenticationForm({ placeholders, name, buttonMessage, submitCallbackFn, }){
  return(
    <form onSubmit={submitCallbackFn} className="w-[30%] flex flex-col justify-center items-center my-4" >
      {placeholders.map((placeholder) => <InputBox placeholder={placeholder} name={name} />)}
      <GreenButton message={buttonMessage} />
    </form>
  )
}

export default AuthenticationForm;




