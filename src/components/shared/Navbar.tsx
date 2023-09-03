import Link from "next/link";
import React from "react";
const Navbar: React.FC = () => {
  const navItemClass = `mr-5 hover:text-gray-900`;

  return (
    <div
      className={`fixed top-0 z-40 max-w-full border-solid bg-primary bg-opacity-80 drop-shadow-2xl backdrop-blur-lg backdrop-filter text-white mx-md navbar items-center transition-all duration-500 ease-in-out`}
    >
      <div className="m-0 flex-1 px-1 pt-1">
        <div style={{ fontFamily: "Futura" }}>
          <Link href="/" className="ml-3 text-3xl font-medium">
            Eveki
          </Link>
        </div>
      </div>

      {/*
      <div className="flex-none">
        <nav className="menu menu-horizontal px-1 font-medium">
          <div className="hidden lg:flex">
            <Link href="/about" className={navItemClass}>
              About
            </Link>
            <Link href="/product" className={navItemClass}>
              Product
            </Link>
            <Link href="/blog" className={navItemClass}>
              Blog
            </Link>
            <Link href="/contact" className={navItemClass}>
              Contact
            </Link>
          </div>

          <div className="dropdown-end dropdown mx-2">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box glass menu-compact mt-3 w-52 p-2 text-black shadow"
            >
              <li>
                <Link href="/about" className="mr-5 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="mr-5 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="product" className="mr-5 hover:text-gray-900">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/contact" className="mr-5 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      */}
    </div>
  );
};

export default Navbar;
