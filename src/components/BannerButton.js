function BannerButton({ message, onClick, icon, general = false, isFollowing = false }) {
  if(general){
    return (
      <button
        type="button"
        className="flex items-center self-end text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={onClick}
      >
        {icon}
        <p>{message}</p>
      </button>
    );
  }
  else if(isFollowing){
    return (
      <button
        type="button"
        className="flex items-center self-end text-gray-400 hover:text-white border border-gray-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={onClick}
      >
        {icon}
        <p>{message}</p>
      </button>
    );
  }
  else{
    return (
      <button
        type="button"
        className="flex items-center self-end text-gray-400 hover:text-white border border-gray-400 hover:bg-main-green focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={onClick}
      >
        {icon}
        <p>{message}</p>
      </button>
    );

  }
}
export default BannerButton;
