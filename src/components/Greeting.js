function Greeting({ title, linkMessage, link }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-4 md:text-6xl lg:text-12xl">{title}</h1>
      <a href={link} className="text-main-green">
        {linkMessage}
      </a>
    </div>
  );
}
export default Greeting;
