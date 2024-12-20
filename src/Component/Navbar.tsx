import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-800 bg-amber-200 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
