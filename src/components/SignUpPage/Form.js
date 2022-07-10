function Form(){
  return(
    <div className="w-[50%] flex flex-col justify-center items-center my-4" >
      <input type="text" placeholder="Username"  className="bg-white border border-gray-300 text-grey-900 text-sm placeholder:text-placeholder-grey rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-5 mb-4 "/>
      <input type="text" placeholder="Email"  className="bg-white border border-gray-300 text-grey-900 text-sm placeholder:text-placeholder-grey rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-5 mb-4 "/>
      <input type="text" placeholder="Password"  className="bg-white border border-gray-300 text-grey-900 text-sm placeholder:text-placeholder-grey rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-5 mb-4 "/>
      <button type="button" className="self-end focus:outline-none text-white bg-main-green hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5">Submit</button>
    </div>
  );
}
export default Form;
