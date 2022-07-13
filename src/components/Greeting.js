function Greeting({title,link}){
  return(
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-4 md:text-6xl lg:text-12xl">{title}</h1>
      <a href="#" className="text-main-green">{link}</a>
    </div>
  )
}
export default Greeting;
