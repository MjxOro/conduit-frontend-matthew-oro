import { RiSettings3Fill, RiAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileBanner({ image = "", username = "", isMe = false }) {
  let navitagion = useNavigate();
  function handleClick() {
    navitagion("/settings");
  }
  async function handleFollow() {
    const jwt = sessionStorage.getItem("token");
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/profiles/${username}/follow`,
      headers: { Authorization: `Bearer ${jwt}` },
    });
  }
  return (
    <div className="flex flex-col items-center min-h-[30%] justify-center px-[20%] w-full py-4 bg-tag-color">
      <img
        src={`${image}`}
        className="min-w-20 min-h-20 w-[15%] h-[15%] max-w-2xl max-h-2xl rounded-full"
        alt="Profile Banner Rounded Avatar"
      />
      <p className="my-4 font-bold text-xl">{username}</p>
      {isMe ? (
        <button
          type="button"
          className="flex items-center self-end text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleClick}
        >
          <RiSettings3Fill />
          <p>Edit Profile Settings</p>
        </button>
      ) : (
        <button
          type="button"
          className="flex items-center self-end text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleFollow}
        >
          <RiAddFill size={20} />
          <p>{`Follow ${username}`}</p>
        </button>
      )}
    </div>
  );
}
export default ProfileBanner;
