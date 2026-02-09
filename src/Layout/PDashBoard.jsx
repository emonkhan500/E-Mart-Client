import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import DashboardMobSidebar from "./DashboardMobSidebar";
import DashboardPcSidebar from "./DashboardPcSidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className=" h-screen">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-cream transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-primary-green"
                    />
                  </button>
                </div>
              </TransitionChild>

              <DashboardMobSidebar />
            </DialogPanel>
          </div>
        </Dialog>

        <DashboardPcSidebar />

        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        <div className="">
          <main className="px-4 lg:pl-80 "> <Outlet /></main>
        </div>
      </div>
    </>
  );
}
