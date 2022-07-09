import Feed from "./Feed"
function Banner() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center bg-main-green text-white h-32">
        <h1 className="text-5xl m-2">conduit</h1>
        <p className="m-2">A place to share your knowledge.</p>
      </section>
      <Feed/>
    </div>
  );
}
export default Banner;
