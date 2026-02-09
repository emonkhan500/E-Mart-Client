import { Link, useLocation } from "react-router-dom";
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
  { name: "Dashboard Home", href: "/dashboard/adminprofile", icon: HomeIcon },
  { name: "Add Product", href: "/dashboard/addproducts", icon: CalendarIcon },
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

const DashboardPcSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden bg-cream lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col shadow-md">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-white/10 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center mt-4">
          <img src={logo} alt="Logo" className="h-10 xl:h-12 w-auto" />
        </div>

        <nav className="flex flex-1 flex-col mt-10">
          <ul className="flex flex-1 flex-col gap-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

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

            <li className="mt-auto">
              <button className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-sidebar-text hover:text-custom-green">
                <Cog6ToothIcon className="size-6 shrink-0" />
                Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardPcSidebar;
