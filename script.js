
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

function toggleMenu() {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')
}

if (menuIcon) {
  menuIcon.addEventListener('click', toggleMenu)
  menuIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleMenu()
  })
}


const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav a')

function onScroll() {
  const top = window.scrollY
  sections.forEach((sec) => {
    
    const offset = sec.offsetTop - 160
    const height = sec.offsetHeight
    const id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove('active'))
      const activeLink = document.querySelector(
        'header nav a[href="#' + id + '"]'
      )
      if (activeLink) activeLink.classList.add('active')
    }
  })

  const header = document.querySelector('header')
  if (header) header.classList.toggle('sticky', window.scrollY > 100)
  // Close mobile menu on scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
  }
}

window.addEventListener('scroll', onScroll)


window.addEventListener('load', onScroll)
window.addEventListener('hashchange', onScroll)


const a11yToggle = document.querySelector('#a11y-toggle')
function applyA11yMode(enabled) {
  if (enabled) document.documentElement.classList.add('high-contrast')
  else document.documentElement.classList.remove('high-contrast')
  if (a11yToggle) a11yToggle.setAttribute('aria-pressed', enabled ? 'true' : 'false')
}


if (window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
}

if (a11yToggle) {
 
  const saved = localStorage.getItem('a11y-high-contrast') === 'true'
  applyA11yMode(saved)
  a11yToggle.addEventListener('click', () => {
    const enabled = !document.documentElement.classList.contains('high-contrast')
    applyA11yMode(enabled)
    localStorage.setItem('a11y-high-contrast', enabled)
  })
}


if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({ distance: '80px', duration: 2000, delay: 200 })
  sr.reveal('.home-content, .heading', { origin: 'top' })
  sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom',
  })
  sr.reveal('.home-content h1, .about-img', { origin: 'left' })
  sr.reveal('.home-content p, .about-content', { origin: 'right' })
}
