function RemovableTag({ tag, onClick = undefined, feed = false, unremovable = false }) {
  return (
    <div>
    {
      !feed ?
      <span className="flex m-2 text-white justify-between items-center text-xs sm:text-sm bg-gray-400 rounded-full px-3 py-1 font-bold leading-loose">
        { !unremovable && 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer w-3 h-3 sm:h-4 sm:w-4 text-white hover:text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={onClick}
            id={tag}
          >
            <path
              className="pointer-events-none"
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        }
        <p className="px-2">{tag}</p>
      </span>
      :
      <span className="flex border border-grey-link m-2 text-grey-link justify-between items-center text-xs sm:text-sm rounded-full px-3 py-1 leading-loose">
        { !unremovable && 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer w-3 h-3 sm:h-4 sm:w-4 text-white hover:text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={onClick}
            id={tag}
          >
            <path
              className="pointer-events-none"
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        }
        <p className="px-2">{tag}</p>
      </span>
    }
    </div>
  ); 
}
export default RemovableTag;
