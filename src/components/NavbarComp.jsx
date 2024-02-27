import React, { Fragment } from "react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
const navigation = [
  { name: "Inicio", to: "/", current: false },
  { name: "Productos", to: "/products", current: false },
  { name: "Contacto", to: "/contact", current: false },
];
const NavbarComp = () => {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const handleClick = () => setMobileMenuOpen(!mobileMenuOpen);
  return (
    <>
      <header className=" color-nav-footer">
        <nav
          className="flex items-center justify-between p-1 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5 w-36">
              {/* <span className="sr-only">Your Company</span> */}
              <img className="img-fluid " src="/logo.png" alt="Logo JDB Devs" />
            </Link>
          </div>
          <div className="flex lg:hidden ">
            <button
              type="button"
              className=" inline-flex items-center justify-center rounded-md p-2.5 text-neutral-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-sm font-semibold leading-6 px-2 py-1 text-md no-underline rounded-md ${
                  pathname === item.to
                    ? "text-white bg-boton-nav"
                    : "text-neutral-100 transition hover:bg-red-600  "
                }`}
              >
                {item.name}
              </Link>
            ))}
            {!token && (
              <Link
                className={`text-sm font-semibold leading-6 px-2 py-1 text-md no-underline rounded-md text-neutral-100 transition hover:bg-red-600 
              }`} to={"/login"}
              >
                Administradores
              </Link>
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Transition.Root as={Fragment} show={mobileMenuOpen}>
          <Dialog
            as="div"
            className="lg:hidden "
            // open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-500 "
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-50 " />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-500 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-1000 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto color-nav-footer px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5 w-36">
                    <span className="sr-only">Your Company</span>

                    <img
                      className="img-fluid "
                      src="logo.png"
                      alt="Logo JDB Devs"
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only ">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={handleClick}
                          className={`block text-base font-semibold leading-7 text-neutral-100 hover:bg-neutral-700 hover:text-white rounded-md px-2 py-1 text-md  no-underline ${
                            pathname === item.to
                              ? "text-white bg-red-700"
                              : "text-neutral-100 hover:bg-neutral-700 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>
    </>
  );
};

export default NavbarComp;
