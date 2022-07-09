import PopularTags from "./PopularTags";
import Article from "./Article";

function Topics() {
  return (
    <div className="py-4 px-[25%]">
      <nav className="flex flex-col-reverse md:flex-row md:items-center md:justify-center ">
        <div className="mb-4 border-b border-main-green dark:border-main-grey flex-grow">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <PopularTags/>
          </ul>
        </div>
        <ul className="md:ml-6 text-grey-900">
          <li
            className="bg-tag-color border border-main-grey text-sm rounded-md block w-full p-2"
          >
            <a href="#">Popular Tags</a>
          </li>
        </ul>
      </nav>
      <Article/>

    </div>
  );
}
export default Topics;
