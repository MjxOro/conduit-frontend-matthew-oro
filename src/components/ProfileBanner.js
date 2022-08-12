import { RiSettings3Fill, RiAddFill } from "react-icons/ri";
import { HiMinus } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import BannerButton from "./BannerButton";
import axios from "axios";
import { getProfile } from "../feature/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProfileBanner() {
  let navitagion = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  const { user:currentUser } = useSelector( state => state.auth );
  const { profile } = useSelector(state => state.profile );
  const { userId } = useParams();
  useEffect( () =>{
    if(currentUser?.username !== userId){
      dispatch(getProfile(userId))
    }
  },[location, profile?.following])
  function handleClick() {
    navitagion("/settings");
  }
  async function handleFollow() {
    const jwt = sessionStorage.getItem("token");
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/profiles/${profile?.username}/follow`,
      headers: { Authorization: `Bearer ${jwt}` },
    });
    dispatch(getProfile(profile?.username));
  }
  async function handleUnfollow() {
    const jwt = sessionStorage.getItem("token");
    await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/profiles/${profile?.username}/follow`,
      headers: { Authorization: `Bearer ${jwt}` },
    });
    dispatch(getProfile(userId));
  }
  return (
    <>
    { currentUser?.username === userId ?
    <div className="flex flex-col items-center min-h-[30%] justify-center px-[20%] w-full py-4 bg-tag-color">
      <img
        src={`${currentUser?.image}`}
        className="min-w-20 min-h-20 w-[15%] h-[15%] max-w-2xl max-h-2xl rounded-full"
        alt="Profile Banner Rounded Avatar"
      />
      <p className="my-4 font-bold text-xl">{currentUser?.username}</p>
        <BannerButton
          message={"Edit Profile"}
          icon={<RiSettings3Fill />}
          onClick={handleClick}
          general
        />
    </div>
      :
    <div className="flex flex-col items-center min-h-[30%] justify-center px-[20%] w-full py-4 bg-tag-color">
      <img
        src={`${profile?.image}`}
        className="min-w-20 min-h-20 w-[15%] h-[15%] max-w-2xl max-h-2xl rounded-full"
        alt="Profile Banner Rounded Avatar"
      />
      <p className="my-4 font-bold text-xl">{profile?.username}</p>
        { profile?.following ?
          <BannerButton
            message={`Unfollow ${profile?.username || ""}`}
            icon={<HiMinus />}
            onClick={handleUnfollow}
            isFollowing={profile?.following}
          />
          :
          <BannerButton
            message={`Follow ${profile?.username || ""}`}
            icon={<RiAddFill />}
            onClick={handleFollow}
            isFollowing={profile?.following}
          />
        }
      </div>
    }
    </>
  );
}
export default ProfileBanner;
