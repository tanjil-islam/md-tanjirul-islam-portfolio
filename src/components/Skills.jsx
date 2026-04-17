import { motion } from "framer-motion";
import { FiCloud, FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { skillGroups, skillStats } from "../data/content";

const groupIcons = {
  Languages: FiCode,
  Frontend: FiLayout,
  Backend: FiServer,
  "Cloud & DevOps": FiCloud,
  Databases: FiDatabase
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <SectionTitle
          eyebrow="Skills"
          title="Technical Skills"
          description="A comprehensive overview of my practical technical skills across full-stack development and software engineering domains."
        />

        <div className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-base-900"
            >
              <p className="text-3xl font-extrabold text-indigo-500 dark:text-cyan-300">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-5">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.title] || FiCode;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-base-900"
              >
                <div className="mb-5 flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white dark:from-cyan-500 dark:to-indigo-500">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{group.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{group.subtitle}</p>
                  </div>
                </div>

                <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={`${group.title}-${item.name}`}>
                      <div className="mb-1 flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.name}</p>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {item.proficiency}
                        </span>
                      </div>

                      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-cyan-400 dark:to-indigo-400"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>

                      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{item.years} experience</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
