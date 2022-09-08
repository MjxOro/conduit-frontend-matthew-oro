import { AiFillHeart } from "react-icons/ai";

function LikeButton({ handleLike, isLiked = false, likes = 0 }) {
  const unlikedButtonStyle = `flex border justify-center items-center min-w-12 min-h-8 w-12 h-8 border-main-green text-main-green hover:bg-main-green hover:text-white`;
  const likedButtonStyle = `flex border justify-center bg-main-green items-center min-w-12 min-h-8 w-12 h-8 border-main-green text-white hover:bg-white hover:text-main-green`;
  return (
    <button
      onClick={handleLike}
      className={isLiked ? likedButtonStyle : unlikedButtonStyle}
    >
      <AiFillHeart />
      <p className="text-sm">{likes}</p>
    </button>
  );
}
export default LikeButton;
