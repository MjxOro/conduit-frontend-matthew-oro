import TagIcon from "./TagIcon";

function TagContainer({ tag, onClick = undefined, feed = false, unremovable = false }) {
  return (
    <div>
    {
      !feed ?
      <span className="flex m-2 text-white justify-between items-center text-xs sm:text-sm bg-gray-400 rounded-full px-3 py-1 font-bold leading-loose">
        { !unremovable && 
          <TagIcon tag={tag} onClick={onClick} />
        }
        <p className="px-2">{tag}</p>
      </span>
      :
      <span className="flex border border-grey-link m-2 text-grey-link justify-between items-center text-xs sm:text-sm rounded-full px-3 py-1 leading-loose">
        { !unremovable && 
          <TagIcon tag={tag} onClick={onClick} />
        }
        <p className="px-2">{tag}</p>
      </span>
    }
    </div>
  ); 
}
export default TagContainer;
