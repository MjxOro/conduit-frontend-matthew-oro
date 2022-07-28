import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between px-[25%] py-3">
      <Link to="/" className="text-main-green font-bold text-xl">conduit</Link>
      <nav className="text-grey-link">
        <Link to="/" className="text-sm hover:text-grey-link-hover ml-4">
          Home
        </Link>
        <Link to="/signin" className="text-sm hover:text-grey-link-hover ml-4">
          Sign in
        </Link>
        <Link to="/signup" className="text-sm hover:text-grey-link-hover ml-4">
          Sign up
        </Link>
      </nav>
    </header>
  );
}
export default Header;
