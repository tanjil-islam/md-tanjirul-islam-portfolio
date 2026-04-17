const GITHUB_USER = "tanjil-islam";
const GITHUB_PROFILE_API = `https://api.github.com/users/${GITHUB_USER}`;
const GITHUB_REPOS_API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#primary-nav");
const navLinks = document.querySelectorAll(".primary-nav a");
const sections = document.querySelectorAll("main section[id]");
const yearNode = document.querySelector("#year");

const profileNameNode = document.querySelector("#profile-name");
const metricReposNode = document.querySelector("#metric-repos");
const metricFollowersNode = document.querySelector("#metric-followers");
const metricFollowingNode = document.querySelector("#metric-following");
const metricLanguageNode = document.querySelector("#metric-language");
const projectsGrid = document.querySelector("#projects-grid");

const FALLBACK_PROJECTS = [
  {
    name: "Online Store Management",
    language: "TypeScript",
    description: "Backend-driven e-commerce management system using NestJS and PostgreSQL.",
    html_url: "https://github.com/tanjil-islam/Online-Store-Management-typescript-nestjs-postgresql",
    updated_at: "2024-12-22T15:25:53Z",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "Parcel Delivery System",
    language: "C#",
    description: "Desktop application for parcel tracking and delivery workflow management.",
    html_url: "https://github.com/tanjil-islam/Parcel-Delivery-System-CSharp",
    updated_at: "2025-01-03T12:01:10Z",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "Charity Foundation System",
    language: "Java",
    description: "Core foundation-management features with clean Java application structure.",
    html_url: "https://github.com/tanjil-islam/Charity-Foundation-System-Java",
    updated_at: "2025-01-03T10:40:17Z",
    stargazers_count: 0,
    forks_count: 0
  }
];

function initMenu() {
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initActiveSectionTracking() {
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.01
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
}

function setYear() {
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
}

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short"
  });
}

function getTopLanguage(repos) {
  const counts = repos.reduce((acc, repo) => {
    if (!repo.language) return acc;
    acc[repo.language] = (acc[repo.language] || 0) + 1;
    return acc;
  }, {});

  const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return ranked.length ? ranked[0][0] : "N/A";
}

function normalizeDescription(repo) {
  if (repo.description && repo.description.trim()) return repo.description.trim();
  return "Project source code and implementation details are available in the repository.";
}

function scoreRepo(repo) {
  const updatedAt = new Date(repo.updated_at).getTime();
  return repo.stargazers_count * 6 + repo.forks_count * 4 + updatedAt / 1e10;
}

function selectFeaturedRepos(repos) {
  const excludedNames = new Set(["tanjil-islam", "Portfolio", "md-tanjirul-islam-portfolio"]);

  return repos
    .filter((repo) => !repo.fork)
    .filter((repo) => !excludedNames.has(repo.name))
    .sort((a, b) => scoreRepo(b) - scoreRepo(a))
    .slice(0, 6);
}

function renderProjects(repos) {
  if (!projectsGrid) return;

  if (!repos.length) {
    projectsGrid.innerHTML = "<p class=\"loading-text\">No public repositories found.</p>";
    return;
  }

  const cards = repos
    .map((repo) => {
      const language = repo.language || "Mixed";
      const description = normalizeDescription(repo);
      const stars = repo.stargazers_count || 0;
      const forks = repo.forks_count || 0;

      return `
        <article class="project-card reveal">
          <div class="project-head">
            <h3>${repo.name}</h3>
            <span class="project-lang">${language}</span>
          </div>
          <p class="project-description">${description}</p>
          <div class="project-meta">
            <span><i class="fa-regular fa-star" aria-hidden="true"></i> ${stars}</span>
            <span><i class="fa-solid fa-code-branch" aria-hidden="true"></i> ${forks}</span>
            <span>Updated ${formatDate(repo.updated_at)}</span>
          </div>
          <a class="project-link" href="${repo.html_url}" target="_blank" rel="noopener">View Repository</a>
        </article>
      `;
    })
    .join("");

  projectsGrid.innerHTML = cards;

  document.querySelectorAll("#projects-grid .reveal").forEach((node) => {
    node.classList.add("visible");
  });
}

function updateProfilePanel(user, repos) {
  if (profileNameNode) {
    const identity = user.name ? `${user.name} (@${user.login})` : `@${user.login}`;
    profileNameNode.textContent = identity;
  }

  if (metricReposNode) metricReposNode.textContent = String(user.public_repos ?? "--");
  if (metricFollowersNode) metricFollowersNode.textContent = String(user.followers ?? "--");
  if (metricFollowingNode) metricFollowingNode.textContent = String(user.following ?? "--");
  if (metricLanguageNode) metricLanguageNode.textContent = getTopLanguage(repos);
}

async function loadGitHubData() {
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(GITHUB_PROFILE_API),
      fetch(GITHUB_REPOS_API)
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await profileRes.json();
    const repos = await reposRes.json();

    updateProfilePanel(user, repos);
    renderProjects(selectFeaturedRepos(repos));
  } catch (error) {
    if (profileNameNode) profileNameNode.textContent = "Md Tanjirul Islam (@tanjil-islam)";
    if (metricReposNode) metricReposNode.textContent = "17";
    if (metricFollowersNode) metricFollowersNode.textContent = "1";
    if (metricFollowingNode) metricFollowingNode.textContent = "1";
    if (metricLanguageNode) metricLanguageNode.textContent = "C++";

    renderProjects(FALLBACK_PROJECTS);
  }
}

initMenu();
initActiveSectionTracking();
initRevealAnimations();
setYear();
loadGitHubData();
