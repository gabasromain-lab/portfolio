import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#work', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')
  const [lineStyle, setLineStyle] = useState({ left: 0, width: 0, top: 0, opacity: 0 })
  const linkRefs = useRef([])
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id], [data-section][id]')
      let current = 'hero'
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.45) {
          current = section.getAttribute('id') || current
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const activeIndex = links.findIndex(l => l.href.slice(1) === active)
    const el = linkRefs.current[activeIndex]
    if (!el) return
    const inset = 14
    setLineStyle({
      left: el.offsetLeft + inset,
      width: el.offsetWidth - inset * 2,
      opacity: 1,
    })
  }, [active])

  return (
    <>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.glowLine} style={lineStyle} />
        {links.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            ref={el => (linkRefs.current[i] = el)}
            className={active === href.slice(1) ? styles.active : ''}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
