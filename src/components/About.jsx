import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiCheckCircle,
  FiDownload,
  FiMapPin,
} from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import { services, siteData, skillStats } from '../data/content'

const aboutHighlights = [
  'Focused on clean architecture and maintainable code',
  'Comfortable across frontend, backend, and deployment workflows',
  'Committed to collaborative communication and continuous learning',
]

const profileStats = [
  { label: skillStats[1].label, value: skillStats[1].value },
  { label: skillStats[0].label, value: skillStats[0].value },
]

export default function About() {
  return (
    <section id='about' className='section-shell'>
      <div className='section-container'>
        <SectionTitle
          eyebrow='About'
          title='Professional Profile'
          description='A concise snapshot of who I am, what I build, and how I contribute to software teams and products.'
        />

        <div className='grid gap-7 lg:grid-cols-[minmax(280px,0.92fr),minmax(0,1.08fr)] lg:items-start'>
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className='space-y-4'
          >
            <div className='overflow-hidden rounded-2xl border border-indigo-300/70 bg-gradient-to-br from-indigo-100 via-sky-100 to-indigo-100 p-1.5 shadow-[0_14px_36px_rgba(37,99,235,0.2)] dark:border-cyan-500/40 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/70 dark:shadow-[0_16px_38px_rgba(8,145,178,0.18)]'>
              <div className='overflow-hidden rounded-xl bg-slate-900/95'>
                <img
                  src='/pic/about.jpg'
                  alt='Md Tanjirul Islam portrait'
                  className='h-full w-full object-cover'
                  loading='lazy'
                />
              </div>
            </div>

            <div className='flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.1)] dark:border-slate-800 dark:bg-base-900 dark:text-slate-300'>
              <FiMapPin className='h-4 w-4 text-indigo-500 dark:text-cyan-300' />
              <span>{siteData.contact.location}</span>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.52, delay: 0.04 }}
            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-base-900 sm:p-7'
          >
            <h3 className='text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl'>
              About {siteData.name}
            </h3>

            <p className='mt-4 text-base leading-8 text-slate-600 dark:text-slate-300'>
              {siteData.about}
            </p>

            <p className='mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400'>
              I am actively seeking opportunities where I can contribute to
              meaningful products, grow within strong engineering teams, and
              create reliable user-focused solutions.
            </p>

            <div className='mt-5 space-y-2.5'>
              {aboutHighlights.map((item) => (
                <p
                  key={item}
                  className='flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300'
                >
                  <FiCheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-indigo-500 dark:text-cyan-300' />
                  <span>{item}</span>
                </p>
              ))}
            </div>

            <div className='mt-6 grid gap-3 sm:grid-cols-2'>
              {profileStats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-base-950'
                >
                  <p className='text-2xl font-extrabold text-indigo-600 dark:text-cyan-300'>
                    {stat.value}
                  </p>
                  <p className='mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={siteData.cvLink}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-105'
            >
              <FiDownload className='h-4 w-4' />
              Download Resume
            </a>
          </motion.div>
        </div>

        <div className='mt-10'>
          <div className='mb-6 text-center'>
            <p className='section-eyebrow'>Strengths</p>
            <h3 className='mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl'>
              What I Bring
            </h3>
            <p className='mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300'>
              Core capabilities that help me deliver clean implementations and
              practical solutions for modern web products.
            </p>
          </div>

          <div className='grid gap-4 md:grid-cols-3'>
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className='rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_26px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-base-900'
              >
                <span className='mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white dark:from-cyan-500 dark:to-indigo-500'>
                  <FiBriefcase className='h-5 w-5' />
                </span>
                <h4 className='mt-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400'>
                  {service.title}
                </h4>
                <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300'>
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
