import { Link } from "react-router-dom";

function IconText({ iconComponent, text, link }) {
  return (
    <Link to={link} className="text-sm hover:text-grey-link-hover ml-4 flex items-center">
      {iconComponent}
      <p>{text}</p>
    </Link>
  )

}
export default IconText;
