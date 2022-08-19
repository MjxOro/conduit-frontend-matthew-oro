import Article from "./Article";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeed } from "../../feature/article/articleSlice";

function Feed() {
  const { articles } = useSelector((state) => state.articles);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeed());
  }, []);
  return (
    <div className="w-[75%]">
      <div className="mb-4 border-b border-main-green dark:border-main-grey flex-grow">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          <li className="mr-2">
            <button className={`inline-block p-4 rounded-t-lg border-b-2 border-main-grey text-main-green hover:text-main-green hover:border-main-green`}>
              Your Feed
            </button>
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-main-green text-main-green hover:text-main-green hover:border-main-green">
              Global Feed
            </button>
          </li>
        </ul>
      </div>
      <div>
        {
          articles && articles?.map((article,index) => <Article key={index} username={article.author.username} image={article.author.image} timeStamp={article.createdAt} likes={0} title={article.title} description={article.description} tags={article.tagList} />)
        }
      </div>
    </div>
  );
}
export default Feed;
