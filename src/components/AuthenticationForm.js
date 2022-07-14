import InputBox from "./InputBox";
import GreenButton from "./GreenButton";

function AuthenticationForm({placeholders,buttonMessage}){
  return(
    <form className="w-[30%] flex flex-col justify-center items-center my-4" >
      {placeholders.map(handleMap)}
      <GreenButton message={buttonMessage} />
    </form>
  )
}

function handleMap(placeholder){
  return(
    <InputBox placeholder={placeholder} />
  )
}

export default AuthenticationForm;




