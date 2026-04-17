import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCode,
  FiExternalLink,
  FiFilter,
  FiGithub,
  FiSearch,
} from 'react-icons/fi'
import SectionTitle from './SectionTitle'
import { projects, siteData } from '../data/content'

function extractGithubUsername(url) {
  const match = url?.match(/github\.com\/([^/?#]+)/i)
  return match ? match[1] : ''
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [githubProjects, setGithubProjects] = useState([])
  const [isLoadingGithub, setIsLoadingGithub] = useState(false)
  const [githubError, setGithubError] = useState('')

  const githubUsername = useMemo(
    () => extractGithubUsername(siteData.socials.github),
    [],
  )

  useEffect(() => {
    if (!githubUsername) return

    const controller = new AbortController()

    async function loadGithubProjects() {
      setIsLoadingGithub(true)
      setGithubError('')

      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=30&type=owner`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json',
            },
          },
        )

        if (!response.ok) {
          throw new Error(
            `GitHub API request failed with status ${response.status}`,
          )
        }

        const repos = await response.json()

        const mapped = repos
          .filter((repo) => !repo.fork)
          .slice(0, 12)
          .map((repo) => {
            const updatedDate = new Date(repo.updated_at)
            const prettyUpdated = updatedDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })

            return {
              title: repo.name.replace(/[-_]/g, ' '),
              summary:
                repo.description ||
                'Public GitHub repository showcasing implementation details and ongoing updates.',
              category: repo.language || 'Repository',
              year: updatedDate.getFullYear(),
              stack: repo.language ? [repo.language] : ['GitHub'],
              features: [
                `Last updated ${prettyUpdated}`,
                `${repo.stargazers_count} stars`,
                `${repo.open_issues_count} open issues`,
              ],
              repoUrl: repo.html_url,
              liveUrl:
                repo.homepage && repo.homepage.trim() ? repo.homepage : null,
            }
          })

        setGithubProjects(mapped)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setGithubError('GitHub repositories could not be loaded right now.')
        }
      } finally {
        setIsLoadingGithub(false)
      }
    }

    loadGithubProjects()

    return () => controller.abort()
  }, [githubUsername])

  const allProjects = useMemo(() => {
    const existingRepoUrls = new Set(
      projects.map((project) => (project.repoUrl || '').toLowerCase()),
    )

    const uniqueGithubProjects = githubProjects.filter(
      (project) =>
        project.repoUrl && !existingRepoUrls.has(project.repoUrl.toLowerCase()),
    )

    return [...projects, ...uniqueGithubProjects]
  }, [githubProjects])

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allProjects.map((item) => item.category)))
    return ['All', ...unique]
  }, [allProjects])

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' || project.category === activeFilter
      const searchText =
        `${project.title} ${project.summary} ${project.stack.join(' ')}`.toLowerCase()
      const matchesQuery =
        query.trim() === '' || searchText.includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [activeFilter, allProjects, query])

  return (
    <section id='projects' className='section-shell'>
      <div className='section-container'>
        <SectionTitle
          eyebrow='Projects'
          title='Featured Projects'
          description='A professional showcase of selected projects from my GitHub profile, including automatically synced repositories.'
        />

        <div className='mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400'>
          {isLoadingGithub ? (
            <p>Syncing latest GitHub repositories...</p>
          ) : null}
          {githubError ? <p>{githubError}</p> : null}
          {!isLoadingGithub && !githubError && githubUsername ? (
            <p>Auto-sync source: @{githubUsername}</p>
          ) : null}
        </div>

        <div className='mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-base-900 dark:text-slate-300'>
              <FiFilter className='h-4 w-4' />
            </span>
            {categories.map((category) => {
              const active = category === activeFilter
              return (
                <button
                  key={category}
                  type='button'
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    active
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-glow'
                      : 'border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-base-900 dark:text-slate-300 dark:hover:bg-base-800'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <label className='relative block w-full lg:w-64'>
            <FiSearch className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
            <input
              type='text'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search projects...'
              className='h-10 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-sm text-slate-700 outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-base-900 dark:text-slate-200 dark:focus:border-cyan-400'
            />
          </label>
        </div>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.14)] transition hover:-translate-y-1 dark:border-slate-800 dark:bg-base-900'
            >
              <div className='flex h-32 items-center justify-center bg-[radial-gradient(circle_at_25%_30%,rgba(147,197,253,0.45),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(196,181,253,0.42),transparent_60%)]'>
                <span className='text-2xl font-bold text-slate-400 dark:text-slate-500'>
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className='p-5'>
                <h3 className='text-xl font-bold text-slate-900 dark:text-slate-50'>
                  {project.title}
                </h3>
                <div className='mt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400'>
                  <span className='rounded-md bg-indigo-100 px-2 py-0.5 font-medium text-indigo-600 dark:bg-cyan-500/15 dark:text-cyan-300'>
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <p className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                  {project.summary}
                </p>

                <p className='mt-4 text-sm font-semibold text-slate-800 dark:text-slate-200'>
                  Key Features:
                </p>
                <ul className='mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300'>
                  {project.features.map((feature) => (
                    <li key={feature} className='flex gap-2'>
                      <span className='mt-[5px] h-1 w-1 rounded-full bg-indigo-500 dark:bg-cyan-300' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className='rounded bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='mt-5 flex gap-2'>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-base-800'
                    >
                      <FiExternalLink className='h-4 w-4' />
                      Live Demo
                    </a>
                  ) : (
                    <span className='inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-400 dark:border-slate-700 dark:text-slate-500'>
                      <FiExternalLink className='h-4 w-4' />
                      No Demo
                    </span>
                  )}

                  <a
                    href={project.repoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-base-800'
                  >
                    <FiGithub className='h-4 w-4' />
                    View Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!filteredProjects.length ? (
          <div className='mt-8 rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-700 dark:text-slate-300'>
            <p className='inline-flex items-center gap-2 text-sm'>
              <FiCode className='h-4 w-4' />
              No projects match your search. Try another keyword.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
