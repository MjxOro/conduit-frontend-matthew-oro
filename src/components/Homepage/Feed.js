import Article from "./Article";

function Feed() {
  return (
    <div className="w-[75%]">
        <div className="mb-4 border-b border-main-green dark:border-main-grey flex-grow">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-2">
              <button className="inline-block p-4 rounded-t-lg border-b-2 border-main-green text-main-green hover:text-main-green hover:border-main-green">
                Global Feed
              </button>
            </li>
          </ul>
        </div>
      <Article />
    </div>
  );
}
export default Feed;
