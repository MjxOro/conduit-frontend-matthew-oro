import TagContainer from "../TagContainer";
import { getTags } from "../../feature/tag/tagSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTagFilterFeed, setTabName, setTabChoice } from "../../feature/article/articleSlice";

function PopularTags() {
  let dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  function handleFilter(event) {
    const tag = event.currentTarget.id;
    dispatch(setTabName(tag));
    dispatch(setTabChoice(2));
    dispatch(getTagFilterFeed(tag));
  }
  useEffect(() => {
    dispatch(getTags());
  }, []);
  return (
    <section className="md:ml-6 text-grey-900 w-[25%] pt-4">
      <div className="flex flex-col bg-tag-color border border-main-grey text-sm rounded-md block w-full p-2">
        <p>Popular Tags</p>
        <ul className="flex flex-wrap">
          {tags.map((tag, i) => (
            <TagContainer
              key={i}
              tag={tag}
              unremovable
              filter={handleFilter}
              id={tag}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
export default PopularTags;
