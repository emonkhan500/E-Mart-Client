import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const DashboardHeader = ({ setSidebarOpen }) => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const userNavigation = [
    { name: "Your profile", href: "/dashboard/adminprofile" },
    { name: "Sign out", onClick: handleLogout },
  ];

  return (
    <div className="lg:pl-72 bg-cream py-3 md:py-4 shadow-2xs">
      <div className="sticky top-0 z-40 flex h-14 md:h-16 shrink-0 items-center gap-x-0 small:gap-x-2 border-b border-white/10 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
        
        {/* Mobile Sidebar Button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-primary-green lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>

        <div aria-hidden="true" className="h-6 w-px bg-white/10 lg:hidden" />

        <div className="flex flex-1 justify-between self-stretch lg:gap-x-6">
          
          {/* Search */}
          <form className="grid flex-1 min-w-0 my-2 mx-2 max-w-xl relative">
            <input
              name="search"
              placeholder="Search"
              aria-label="Search"
              className="col-start-1 row-start-1 block w-full border border-primary-green text-base text-primary-text focus:outline-none placeholder:text-primary-gray sm:text-sm rounded-xl bg-white pl-4 pr-10 py-2"
            />
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none size-5 text-primary-green absolute right-4 top-1/2 -translate-y-1/2"
            />
          </form>

          {/* Right Section */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            
            {/* Profile Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="relative flex items-center cursor-pointer">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>

                <img
                  alt="User Avatar"
                  src={
                    user?.photoURL ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  }
                  className="size-8 rounded-full object-cover"
                />

                <span className="hidden lg:flex lg:items-center">
                  <span className="ml-4 text-sm font-semibold text-primary-text">
                    {user?.displayName || "User"}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 size-5 text-primary-text"
                  />
                </span>
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-cream py-2 shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm text-primary-text hover:bg-white/10 hover:text-custom-green transition"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={item.onClick}
                        className="block w-full text-left px-4 py-2 text-sm text-primary-text hover:bg-white/10 hover:text-red-500 transition"
                      >
                        {item.name}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
