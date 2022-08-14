import Header from "./Header/Header";
import Feed from "./Homepage/Feed";
import ProfileBanner from "./ProfileBanner";

function ProfilePage() {
  return (
    <div>
      <Header />
      <ProfileBanner  />
      <div className="flex flex-col items-center px-[20%]">
        <Feed />
      </div>
    </div>
  );
}
export default ProfilePage;
