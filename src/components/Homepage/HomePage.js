import Banner from "./Banner";
import Feed from "./Feed";
import PopularTags from "./PopularTags";
import Header from "../Header";

function HomePage() {
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
