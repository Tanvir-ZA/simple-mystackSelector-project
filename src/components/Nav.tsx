import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0"
        >
          <img src={logo} alt="Dev Stack" className="h-9 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex md:flex-1 md:justify-center">
          <a href="#home" className="text-sm text-gray-600 hover:text-gray-900">
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex items-center gap-2">
          <button className="rounded-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-4 py-2 text-sm text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="flex flex-col px-4 py-3">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
