import InputBox from "./InputBox";
import GreenButton from "./GreenButton";

function AuthenticationForm({ placeholders, name, type, buttonMessage, submitCallbackFn, }){
  return(
    <form onSubmit={submitCallbackFn} className="w-[30%] flex flex-col justify-center items-center my-4" >
      {placeholders.map((placeholder, i) => <InputBox key={i} type={type[i]} placeholder={placeholder} name={name[i]} />)}
      <GreenButton message={buttonMessage} />
    </form>
  )
}

export default AuthenticationForm;




