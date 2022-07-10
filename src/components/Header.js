function Header(){
  return(
    <header className="flex justify-between px-[25%] py-3">
      <h1 className="text-main-green font-bold text-xl">conduit</h1>
      <nav className="text-grey-link">
        <a href="#" className="text-sm hover:text-grey-link-hover ml-4">Home</a>
        <a href="#" className="text-sm hover:text-grey-link-hover ml-4">Sign in</a>
        <a href="#" className="text-sm hover:text-grey-link-hover ml-4">Sign up</a>
      </nav>
    </header>
  )
}
export default Header;
