import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import cn from "../utils/cn";
import {
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "/", icon: HomeIcon},
  {
    name: "Add Product",
    href: "/dashboard/addproducts",
    icon: CalendarIcon,
  },
  {
    name: "Manage Products",
    href: "/dashboard/manageproducts",
    icon: DocumentDuplicateIcon,
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
            const isActive = pathname.startsWith(item.href);

            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    isActive
                      ? "bg-primary-bg text-custom-green"
                      : "text-sidebar-text hover:bg-primary-bg hover:text-custom-green",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold"
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive
                        ? "text-custom-green"
                        : "text-sidebar-text group-hover:text-custom-green",
                      "size-6 shrink-0"
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}

          {/* Bottom */}
          <li className="mt-auto">
            <button className="group flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold text-sidebar-text hover:text-custom-green">
              <Cog6ToothIcon className="size-6 shrink-0" />
              Settings
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardMobSidebar;
