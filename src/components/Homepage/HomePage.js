import Banner from "./Banner";
import Feed from "./Feed";
import PopularTags from "./PopularTags";
import Header from "../Header";
import { useEffect } from "react";
import { getAuthUser } from '../../feature/auth/authSlice';
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(sessionStorage.getItem("token")){
      dispatch(getAuthUser());
    }
  },[])
  return (
    <div>
      <Header />
      <Banner />
      <div className="flex flex-col-reverse px-[25%] md:flex-row md:items-cstart md:justify-center ">
        <Feed />
        <PopularTags />
      </div>
    </div>
  );
}
export default HomePage;
