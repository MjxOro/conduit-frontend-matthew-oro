function Topics() {
  return (
    <article className="py-4 px-[25%]">
      <nav className="flex flex-col-reverse md:flex-row md:items-center md:justify-center ">
        <div className="mb-4 border-b border-[#5cb85c] dark:border-[#f2f2f2] flex-grow">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-2">
              <button className="inline-block p-4 rounded-t-lg border-b-2 border-[#5cb85c] text-[#5cb85c] hover:text-[#f2f2f2] hover:border-[#5cb85c]">
                Global Feed
              </button>
            </li>
          </ul>
        </div>
        <div className="md:ml-6">
          <input
            type="text"
            placeholder="Popular Tags"
            className="bg-[#f3f3f3] border border-[#f2f2f2] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </nav>

      <p>No articles here yet</p>
    </article>
  );
}
export default Topics;
