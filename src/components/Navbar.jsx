import { useState } from "react";
import { motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiDownload, FiExternalLink, FiMoon, FiSun } from "react-icons/fi";
import { navLinks, siteData } from "../data/content";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-lg dark:border-slate-800 dark:bg-base-950/85">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-8">
        <a
          href="#home"
          className="max-w-[70vw] truncate text-lg font-bold tracking-tight text-indigo-500 dark:text-cyan-300 sm:max-w-none sm:text-2xl"
        >
          {siteData.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300/85 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>

          <a
            href={siteData.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-base-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <FiDownload className="h-4 w-4" />
            Resume
            <FiExternalLink className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-slate-200 bg-white px-5 py-3 dark:border-slate-800 dark:bg-base-950 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 dark:text-slate-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteData.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              <FiDownload className="h-4 w-4" />
              Resume
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              className="mt-1 w-fit rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </button>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
