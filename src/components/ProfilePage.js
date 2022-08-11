import Header from "./Header/Header";
import Feed from "./Homepage/Feed";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProfileBanner from "./ProfileBanner";
import { getProfile } from "../feature/profile/profileSlice";
import { useDispatch } from "react-redux";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const { userId } = useParams();
  let dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    if (user?.username !== userId) {
      dispatch(getProfile(userId));
    }
  }, [location]);
  return (
    <div>
      <Header />
        {(user?.username) === userId ? (
          <ProfileBanner image={user.image} username={user.username} isMe />
        ) : (
          <ProfileBanner image={profile?.image} username={profile?.username} />
        )}
      <div className="flex flex-col items-center px-[20%]">
        <Feed />
      </div>
    </div>
  );
}
export default ProfilePage;
