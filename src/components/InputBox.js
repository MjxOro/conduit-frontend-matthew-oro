
function InputBox({placeholder}){
  return(
      <input type="text" placeholder={placeholder}  className="bg-white border border-gray-300 text-grey-900 text-sm placeholder:text-placeholder-grey rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-5 mb-4 "/>
  )
}
export default InputBox;
