import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">

      {/* Left: text */}
      <div className={styles.left}>
        <div className={styles.heroMeta}>
          <span className={styles.line} />
          Product designer based in Paris
        </div>
        <h1>Romain<br/>Gabas</h1>
        <p className={styles.heroDescription}>
          Designing interfaces that feel like second nature. Focused on the
          intersection of human behavior and high-fidelity systems.
        </p>
      </div>

      {/* Right: bento grid */}
      <div className={styles.right}>
        <div className={styles.bento}>

          {/* Open to work */}
          <div className={`${styles.card} ${styles.cardStatus}`}>
            <div className={styles.statusRow}>
              <span className={styles.statusDot} />
              <span className={styles.statusLabel}>Open to work</span>
            </div>
            <p className={styles.statusSub}>CDI · Freelance · Paris & remote</p>
          </div>

          {/* Experience */}
          <div className={`${styles.card} ${styles.cardXp}`}>
            <span className={styles.xpNum}>6+</span>
            <span className={styles.xpLabel}>Years of<br/>experience</span>
          </div>

          {/* Tools */}
          <div className={`${styles.card} ${styles.cardTools}`}>
            <span className={styles.cardEyebrow}>Tools</span>
            <div className={styles.toolsList}>
              {['Figma', 'Sketch', 'Zeroheight', 'Jira', 'Notion', 'Principle'].map(t => (
                <span key={t} className={styles.toolTag}>{t}</span>
              ))}
            </div>
          </div>

          {/* Project preview */}
          <div className={`${styles.card} ${styles.cardProject}`}>
            <img src="/mockups/cover_secure.png" alt="Secure Rider" className={styles.projectThumb} />
            <div className={styles.projectInfo}>
              <span className={styles.projectName}>Secure Rider</span>
              <span className={styles.projectType}>UI Design · Coyote</span>
            </div>
          </div>

          {/* Location */}
          <div className={`${styles.card} ${styles.cardLocation}`}>
            <span className={styles.locationIcon}>📍</span>
            <span className={styles.locationText}>Paris,<br/>France</span>
          </div>

        </div>
      </div>

    </section>
  )
}
