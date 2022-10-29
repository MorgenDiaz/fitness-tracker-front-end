import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./resources/logo.png";

function Header({ links = [] }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex grow basis-full items-center justify-between px-4 py-8 border-b border-gray-400">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="object-scale-down w-16 lg:w-28 rounded-md"
        />
      </a>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <button
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </button>

          <div className={isNavOpen ? `showMenuNav` : `hideMenuNav`}>
            <button
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {links.map((link) => {
                const { name, path } = link;
                return (
                  <li
                    key={path}
                    className="my-8 uppercase border-b border-gray-400"
                  >
                    <Link onClick={() => setIsNavOpen(false)} to={path}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          {links.map((link) => {
            const { name, path } = link;
            return (
              <li key={path}>
                <Link onClick={() => setIsNavOpen(false)} to={path}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Header;
