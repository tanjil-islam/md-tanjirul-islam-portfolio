import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { navLinks, siteData } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white/70 px-5 py-10 backdrop-blur-sm dark:border-slate-800 dark:bg-base-950/70 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr,0.8fr,0.9fr]">
        <div>
          <p className="text-xl font-bold text-indigo-500 dark:text-cyan-300">{siteData.name}</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{siteData.title}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">{siteData.shortIntro}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">Quick Links</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-indigo-600 dark:hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <a href={`mailto:${siteData.contact.email}`} className="inline-flex items-center gap-2 transition hover:text-indigo-600 dark:hover:text-cyan-300">
              <FiMail className="h-4 w-4" />
              {siteData.contact.email}
            </a>
            <a href="tel:+8801612757513" className="inline-flex items-center gap-2 transition hover:text-indigo-600 dark:hover:text-cyan-300">
              <FiPhone className="h-4 w-4" />
              {siteData.contact.phone}
            </a>
            <div className="mt-2 flex items-center gap-3">
              <a
                href={siteData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href={siteData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <p className="font-mono">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
