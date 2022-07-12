import InputBox from '../InputBox';

function Form(){
  return(
    <form className="w-[30%] flex flex-col justify-center items-center my-4" >
      <InputBox placeholder={"Username"} />
      <InputBox placeholder={"Email"} />
      <InputBox placeholder={"Password"} />
      <button type="button" className="self-end focus:outline-none text-white bg-main-green hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5">Submit</button>
    </form>
  );
}
export default Form;
