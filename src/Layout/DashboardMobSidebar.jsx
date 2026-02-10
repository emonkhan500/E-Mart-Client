import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import cn from "../utils/cn";
import {
  ChartPieIcon,
  Cog6ToothIcon,
  ClipboardDocumentIcon,
  ArrowUturnLeftIcon,
  UsersIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Back To Home", href: "/", icon: ArrowUturnLeftIcon },
  { name: "Add Product", href: "/dashboard/addproducts", icon: PlusCircleIcon },
  {
    name: "Manage Products",
    href: "/dashboard/manageproducts",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "Manage Orders",
    href: "/dashboard/manageorders",
    icon: ChartPieIcon,
  },
  {
    name: "Manage Users",
    href: "/dashboard/manageusers",
    icon: UsersIcon,
  },
];
const DashboardMobSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-cream px-6 pb-4">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    isActive
                      ? "bg-primary-green text-white"
                      : "text-primary-text hover:bg-primary-green hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold",
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive
                        ? "text-white"
                        : "text-primary-text group-hover:text-white",
                      "size-6 shrink-0",
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}

          {/* Bottom */}
          <li className="mt-auto">
            <div className="flex items-center ">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                className="size-8 rounded-full"
              />

              <span className="ml-4 text-sm/6 font-semibold text-primary-text">
                Tom Cook
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardMobSidebar;
