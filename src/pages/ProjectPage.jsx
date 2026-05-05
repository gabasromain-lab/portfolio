import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import UserFlowCards from '../components/UserFlowCards'
import SystemDiagram from '../components/SystemDiagram'
import TypographySlide from '../components/TypographySlide'
import ColorsSlide from '../components/ColorsSlide'
import IconographySlide from '../components/IconographySlide'
import UIScreensSlide from '../components/UIScreensSlide'
import WireframeScroll from '../components/WireframeScroll'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef(null)
  const wireframeTrackRef = useRef(null)
  const uiscreensTrackRef = useRef(null)
  const wireframeSectionIdx = project
    ? 1 + project.slides.findIndex(s => s.type === 'wireframes')
    : -1
  const uiscreensSectionIdx = project
    ? 1 + project.slides.findIndex(s => s.type === 'uiscreens')
    : -1

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      let track = null
      if (activeSection === wireframeSectionIdx) track = wireframeTrackRef.current
      else if (activeSection === uiscreensSectionIdx) track = uiscreensTrackRef.current
      if (!track) return

      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 5
      const atStart = track.scrollLeft <= 5

      if (e.deltaY > 0 && !atEnd) {
        e.preventDefault()
        e.stopPropagation()
        track.scrollLeft += e.deltaY * 1.5
      } else if (e.deltaY < 0 && !atStart) {
        e.preventDefault()
        e.stopPropagation()
        track.scrollLeft += e.deltaY * 1.5
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [activeSection, wireframeSectionIdx, uiscreensSectionIdx])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const sections = container.querySelectorAll('section')
      let current = 0
      sections.forEach((section, index) => {
        if (container.scrollTop >= section.offsetTop - section.clientHeight / 3) {
          current = index
        }
      })
      setActiveSection(current)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [project])

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <button onClick={() => navigate('/')}>← Back to portfolio</button>
      </div>
    )
  }

  const navSections = [
    { label: 'Intro' },
    ...project.slides.map(s => ({ label: s.title })),
    { label: 'End' },
  ]

  const scrollTo = (i) => {
    const container = containerRef.current
    const sections = container?.querySelectorAll('section')
    if (sections?.[i]) {
      container.scrollTo({ top: sections[i].offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.page} ref={containerRef}>
      <div className={styles.ambientBg}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      <div className={styles.overlay}>
        <button className={styles.exitBtn} onClick={() => navigate('/')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>
      </div>

      <nav className={styles.sideNav}>
        {navSections.map((item, i) => (
          <div
            key={i}
            className={`${styles.navItem} ${activeSection === i ? styles.navItemActive : ''}`}
            onClick={() => scrollTo(i)}
          >
            <div className={styles.navContent}>
              <span className={styles.navTitle}>{item.label}</span>
            </div>
            <div className={styles.navIndicator} />
          </div>
        ))}
      </nav>

      <main>
        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.sysBadge}>PRESENTATION MODE ACTIVE</div>
          <h1 className={styles.megaTitle}>{project.title}</h1>
          <p className={styles.heroSub}>{project.tags.join(' · ')}</p>
          {project.intro && (
            <p className={styles.heroIntro}>
              {project.intro.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
          )}
        </section>

        {project.slides.map((slide, i) => (
          <section key={i} className={`${styles.section} ${(slide.type === 'wireframes' || slide.type === 'uiscreens') ? styles.wireframeSection : ''}`}>
            {slide.type === 'wireframes' ? (
              <div className={styles.wireframeLayout}>
                <WireframeScroll trackRef={wireframeTrackRef} />
                <div className={styles.wireframeCaptionFloat}>
                  <h4>{slide.number} / {slide.title}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            ) : slide.type === 'uiscreens' ? (
              <div className={styles.wireframeLayout}>
                <UIScreensSlide trackRef={uiscreensTrackRef} />
                <div className={styles.wireframeCaptionFloat}>
                  <h4>{slide.number} / {slide.title}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            ) : (slide.type === 'userflow' || slide.type === 'system' || slide.type === 'typography' || slide.type === 'colors' || slide.type === 'iconography') ? (
              <div className={styles.userflowLayout}>
                <div className={styles.userflowContent}>
                  {slide.type === 'userflow' && <UserFlowCards cards={slide.cards} features={slide.features} />}
                  {slide.type === 'system' && <SystemDiagram />}
                  {slide.type === 'typography' && <TypographySlide />}
                  {slide.type === 'colors' && <ColorsSlide />}
                  {slide.type === 'iconography' && <IconographySlide />}
                  {slide.type === 'uiscreens' && <UIScreensSlide screens={slide.screens} />}
                </div>
                <div className={styles.captionCardSide}>
                  <h4>{slide.number} / {slide.title}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            ) : (
              <div className={styles.cinematicWrapper}>
                <img src={slide.image} alt={slide.title} className={`${styles.cinematicImage} ${slide.fit === 'contain' ? styles.cinematicImageContain : ''}`} />
                <div className={styles.captionCard}>
                  <h4>{slide.number} / {slide.title}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            )}
          </section>
        ))}

        <section className={`${styles.section} ${styles.endSection}`}>
          <div className={styles.thankYouCard}>
            <h2 className={styles.thankYouTitle}>Thank You.</h2>
            <p className={styles.projectSummary}>{project.summary}</p>
            <div className={styles.actionGroup}>
              <button className={styles.actionBtn} onClick={() => navigate('/')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </button>
              <button
                className={`${styles.actionBtn} ${styles.primary}`}
                onClick={() => navigate(`/project/${nextProject.slug}`)}
              >
                Next Project
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
