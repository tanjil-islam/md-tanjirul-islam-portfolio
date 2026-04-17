import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend
} from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { siteData } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Get in Touch"
          description="Ready to discuss your next project? I am always interested in new opportunities, collaborations, and meaningful challenges."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr,1.08fr]">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-base-900"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Let&apos;s Connect</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                I am currently open to graduate roles, internships, and collaboration opportunities in full-stack
                development and backend engineering.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-base-900 dark:text-slate-200 dark:hover:bg-base-800"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                    <FiMail className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold">Email</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{siteData.contact.email}</span>
                  </span>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-base-900 dark:text-slate-200">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                    <FiPhone className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold">Phone</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{siteData.contact.phone}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-base-900 dark:text-slate-200">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold">Location</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{siteData.contact.location}</span>
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold text-slate-700 dark:text-slate-200">Follow Me</p>
              <div className="mt-2 flex items-center gap-3 text-slate-500 dark:text-slate-300">
                <a
                  href={siteData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 transition hover:text-indigo-600 dark:border-slate-700 dark:hover:text-cyan-300"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-4 w-4" />
                </a>
                <a
                  href={siteData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 transition hover:text-indigo-600 dark:border-slate-700 dark:hover:text-cyan-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 transition hover:text-indigo-600 dark:border-slate-700 dark:hover:text-cyan-300"
                  aria-label="Email"
                >
                  <FiMail className="h-4 w-4" />
                </a>
                <a
                  href={siteData.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 transition hover:text-indigo-600 dark:border-slate-700 dark:hover:text-cyan-300"
                  aria-label="Codeforces"
                >
                  <FiCode className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.48, delay: 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-base-900"
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">Resume</h4>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Download my latest resume to review skills, projects, and academic background.
              </p>
              <a
                href={siteData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white"
              >
                <FiMail className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            action="https://formspree.io/f/mvgwjajg"
            method="POST"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-base-900"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Send a Message</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-2 h-10 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:text-base-50"
                />
              </label>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Email *
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="mt-2 h-10 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:text-base-50"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Subject *
              <input
                type="text"
                name="subject"
                placeholder="Project discussion, collaboration, internship..."
                required
                className="mt-2 h-10 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:text-base-50"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Message *
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project, requirements, or opportunity."
                required
                className="mt-2 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:text-base-50"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
            >
              <FiSend className="h-4 w-4" />
              Send Message
            </button>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              All fields are required. Your message will be sent securely.
            </p>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_12px_28px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-base-900"
        >
          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Ready to Start Your Project?</h4>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Whether you need a technical contributor for your team or a dedicated developer for your product,
            I&apos;m here to help bring your ideas to life.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <FiMail className="h-4 w-4" />
              Email Me Directly
            </a>
            <a
              href="tel:+8801612757513"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-base-800"
            >
              <FiCalendar className="h-4 w-4" />
              Call: {siteData.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
