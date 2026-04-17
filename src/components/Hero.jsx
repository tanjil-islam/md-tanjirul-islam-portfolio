import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";
import { siteData } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pt-20">
      <div className="section-container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/80 bg-indigo-100/70 px-5 py-2 text-sm font-medium text-indigo-600 dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-300">
            <span>🚀</span>
            {siteData.heroBadge}
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <span className="mt-1 block bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              {siteData.name}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-[2rem]">
            {siteData.heroRoleLine}
            <span className="ml-1 inline-block h-8 w-[2px] translate-y-1 bg-slate-500/70 dark:bg-slate-300/70" />
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {siteData.heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-300/75 bg-white/70 px-4 py-2 text-base font-medium text-slate-600 dark:border-slate-700 dark:bg-base-900/70 dark:text-slate-200"
              >
                {chip}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-slate-500 dark:text-slate-300 sm:text-xl sm:leading-9">
            {siteData.shortIntro}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_35px_rgba(99,102,241,0.35)] transition hover:-translate-y-0.5"
            >
              <FiArrowRight className="h-5 w-5" />
              View My Work
            </a>
            <a
              href={siteData.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-indigo-300 bg-indigo-50 px-8 py-4 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-indigo-100 dark:border-slate-700 dark:bg-base-900 dark:text-slate-100 dark:hover:bg-base-800"
            >
              <FiDownload className="h-5 w-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-5 text-slate-500 dark:text-slate-300">
            <a
              href={siteData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-indigo-600 dark:hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href={siteData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-indigo-600 dark:hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:tanjil.islam040820@gmail.com"
              className="transition hover:text-indigo-600 dark:hover:text-cyan-300"
              aria-label="Email"
            >
              <FiMail className="h-6 w-6" />
            </a>
            <a
              href={siteData.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-indigo-600 dark:hover:text-cyan-300"
              aria-label="Codeforces"
            >
              <SiCodeforces className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
