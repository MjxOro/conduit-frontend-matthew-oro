import { Link } from "react-router-dom";
import TagContainer from "../TagContainer";
import { useDispatch } from "react-redux";
import { setLikePost, setUnlikePost, setTempLike, setTempUnlike } from "../../feature/article/articleSlice";
import LikeButton from "../LikeButton";

function Article({username,image,timeStamp,likes,title,description,tags,slug,isLiked,index}) {
  let dispatch = useDispatch();
  function handleLike(){
    if(isLiked){
      dispatch(setUnlikePost(slug));
      dispatch(setTempUnlike(index));
    }else{
      dispatch(setLikePost(slug));
      dispatch(setTempLike(index));
    }
  }
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
        <LikeButton handleLike={handleLike} likes={likes} isLiked={isLiked} />
      </div>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-grey-link">{description}</p>
      <div className="flex">
        <Link className="text-grey-link hover:text-grey-link-hover text-sm" to={"/"}>Read more...</Link>
      </div>
      <div className="flex self-end">
        {
          tags.map((tag,i) => <TagContainer key={i} unremovable feed tag={tag} />)

        }
      </div>
    </article>
  );
}
export default Article;
