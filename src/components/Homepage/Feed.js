function Topics() {
  return (
    <article className="py-4 px-[25%]">
      <nav className="flex flex-col-reverse md:flex-row md:items-center md:justify-center ">
        <div className="mb-4 border-b border-main-green dark:border-main-grey flex-grow">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-2">
              <button className="inline-block p-4 rounded-t-lg border-b-2 border-main-green text-main-green hover:text-main-green hover:border-main-green">
                Global Feed
              </button>
            </li>
          </ul>
        </div>
        <div className="md:ml-6">
          <input
            type="text"
            placeholder="Popular Tags"
            className="bg-tag-color border border-main-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </nav>

    </article>
  );
}
export default Topics;
