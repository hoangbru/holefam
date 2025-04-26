import { NavigationMenuDemo } from "./nav";

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="mx-6">
          <NavigationMenuDemo />
        </div>
        {/* <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
