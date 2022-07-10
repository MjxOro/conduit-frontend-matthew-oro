function Header(){
  return(
    <header className="flex justify-between px-[25%]">
      <h1 className="text-main-green">conduit</h1>
      <nav className="text-main-grey">
        <a href="#" className="ml-4">Home</a>
        <a href="#" className="ml-4">Sign in</a>
        <a href="#" className="ml-4">Sign up</a>
      </nav>
    </header>
  )
}
export default Header;
