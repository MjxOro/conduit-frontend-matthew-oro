import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { FiEdit } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import IconText from "./IconText";

function Header() {

  const { user } = useSelector(state => state.auth);
  return (
    <header className="flex justify-between px-[25%] py-3">
      <Link to="/" className="text-main-green font-bold text-xl">conduit</Link>
      {
        user ?
          (<nav className="text-grey-link flex items-center">
            <Link to="/" className="text-sm hover:text-grey-link-hover ml-4">
              Home
            </Link>
            <IconText iconComponent={<FiEdit />} text="New Post" link="/newpost" />
            <IconText iconComponent={<RiSettings5Fill />} text="Settings" link="/settings" />
            <Link to="/" className="text-sm hover:text-grey-link-hover ml-4 flex items-center">
              <img src={`${user.image}`} className="w-8 h-8 rounded-full" alt="Rounded Avatar" />
              <p className="ml-2">{user.username}</p>
            </Link>
          </nav>)
          :
          (<nav className="text-grey-link flex">
            <Link to="/" className="text-sm hover:text-grey-link-hover ml-4">
              Home
            </Link>
            <Link to="/signin" className="text-sm hover:text-grey-link-hover ml-4">
              Sign in
            </Link>
            <Link to="/signup" className="text-sm hover:text-grey-link-hover ml-4">
              Sign up
            </Link>
          </nav>)

      }
    </header>
  );
}
export default Header;
