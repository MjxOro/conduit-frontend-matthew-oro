import Article from "./Article";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeed, setTabChoice } from "../../feature/article/articleSlice";
import { BsHash } from "react-icons/bs";

function Feed() {
  const { articles, filteredArticles, tabName, tabChoice } = useSelector((state) => state.articles);
  const chosenTabStyle = `rounded-t-lg p-4 border-b-2 border-main-green text-main-green hover:text-main-green hover:border-main-green`;
  const idleTabStyle = `rounded-t-lg p-4 border-b-2 border-main-grey text-grey-link hover:text-main-green hover:border-main-green`;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeed());
  }, []);
  function handleMap(article,index){
    return(
      <Article key={index} username={article.author.username} image={article.author.image} timeStamp={article.createdAt} likes={0} title={article.title} description={article.description} tags={article.tagList} />
    )
  }
  function handleTabSwitch(choice){
    switch(choice){
      case 0:
        return articles ? articles.map(handleMap) : "Nothing here yet..."
      case 1:
        return articles ? articles.map(handleMap) : "Nothing here yet..."
      case 2:
        return filteredArticles ? filteredArticles.map(handleMap) : "Nothing here yet..."
      default:
        return "Nothing here yet"
        
    }


  }
  return (
    <div className="w-[75%]">
      <div className="mb-4 border-b border-main-green dark:border-main-grey flex-grow">
        <div className="flex flex-wrap items-center -mb-px text-sm font-medium text-center">
            <button onClick={() => dispatch(setTabChoice(0))} className={tabChoice === 0 ? chosenTabStyle : idleTabStyle}>
              Your Feed
            </button>
            <button onClick={() => dispatch(setTabChoice(1))} className={tabChoice === 1 ? chosenTabStyle : idleTabStyle}>
              Global Feed
            </button>
            {
              tabName &&
              <button onClick={() => dispatch(setTabChoice(2))} className={tabChoice === 2 ? chosenTabStyle : idleTabStyle}>
                <div className="flex items-center">
                  <BsHash fontSize="1.25rem" />
                  {tabName}
                </div>
              </button>
            }
        </div>
      </div>
      <div>
        {
          handleTabSwitch(tabChoice)
        }
      </div>
    </div>
  );
}
export default Feed;
