import { Routes, Route } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import ProjectCard from './components/ProjectCard'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'
import styles from './App.module.css'
import { projects } from './data/projects'

function HomePage() {
  const featured = projects.find(p => p.featured)
  const grid = projects.filter(p => !p.featured)

  return (
    <>
      <div className={styles.ambientBg}>
        <div className={styles.glassCircle2} />
        <div className={styles.glassCircle3} />
        <div className={styles.glassSquare1} />
        <div className={styles.glassSquare2} />
      </div>
      <div className={styles.grainOverlay} />

      <Nav />
      <Hero />

      <div className={styles.contentSheet}>
        <div className={styles.sectionHeader} id="work" data-section>
          <div>
            <span className={styles.sectionLabel}>Selected Work</span>
            <h2 className={styles.sectionTitle}>Case Studies</h2>
          </div>
        </div>

        {featured && (
          <FeaturedProject
            slug={featured.slug}
            title={featured.title}
            description={featured.description}
            tags={featured.tags}
            image={featured.image}
            alt={featured.alt}
            mockup={featured.mockup}
            screens={featured.screens}
          />
        )}

        <div className={styles.projectGrid}>
          {grid.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <AboutSection />
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  )
}
