import { Link } from "react-router-dom";

function Greeting({ title, linkMessage, link }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-4 md:text-6xl lg:text-12xl">{title}</h1>
      <Link to={link} className="text-main-green">
        {linkMessage}
      </Link>
    </div>
  );
}
export default Greeting;
