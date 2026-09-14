import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Technologies",
      href: "#technologies",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        {/* =========================
            DESKTOP LOGO
        ========================== */}
        <a href="#home" className="hidden items-center gap-2 md:flex">
          <div className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white">
            DS
          </div>

          <span className="text-xl font-bold text-slate-900">
            Dev <span className="brand-gradient-text">Stack</span>
          </span>
        </a>

        {/* =========================
            MOBILE HAMBURGER
        ========================== */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* =========================
            MOBILE CENTER LOGO
        ========================== */}
        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center md:hidden"
        >
          <div className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-white">
            DS
          </div>
        </a>

        {/* =========================
            DESKTOP NAV LINKS
        ========================== */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* =========================
            AUTH BUTTONS
        ========================== */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-pink-500 sm:block"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient-bg rounded-full px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        {menuOpen && (
          <div className="absolute left-0 top-[72px] w-full border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gray-100 pb-3 text-sm font-medium text-slate-700 transition hover:text-pink-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
