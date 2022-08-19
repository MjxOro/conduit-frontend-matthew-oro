import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import RemovableTag from "../RemovableTag";

function Article({username,image,timeStamp,likes,title,description,tags}) {
  return (
    <article className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-2">
          <img src={image} className="w-8 h-8 rounded-full mr-2" alt="Rounded Avatar" />
          <div className="flex flex-col">
            <Link className="text-main-green" to={`/profile/${username}`}>{username}</Link>
            <p className="text-grey-link text-xs">{new Date(timeStamp).toDateString()}</p>
          </div>
        </div>
        <button className="flex border justify-center items-center min-w-12 min-h-8 w-12 h-8 border-main-green text-main-green hover:bg-main-green hover:text-red-500">
          <AiFillHeart />
          <p className="text-sm">{likes}</p>
        </button>
      </div>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-grey-link">{description}</p>
      <div className="flex">
        <Link className="text-grey-link hover:text-grey-link-hover text-sm" to={"/"}>Read more...</Link>
      </div>
      <div className="flex self-end">
        {
          tags.map((tag) => <RemovableTag unremovable feed tag={tag} />)

        }
      </div>
    </article>
  );
}
export default Article;
