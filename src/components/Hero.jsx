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

          {/* Row 1: Status | XP */}
          <div className={`${styles.card} ${styles.cardStatus}`}>
            <div className={styles.statusRow}>
              <span className={styles.statusDot} />
              <span className={styles.statusLabel}>Open to work</span>
            </div>
            <p className={styles.statusSub}>CDI · Freelance · Paris & remote</p>
          </div>

          <div className={`${styles.card} ${styles.cardXp}`}>
            <span className={styles.xpNum}>6+</span>
            <span className={styles.xpLabel}>Years of<br/>experience</span>
          </div>

          {/* Row 2: Specialties */}
          <div className={`${styles.card} ${styles.cardSpecialties}`}>
            <span className={styles.cardEyebrow}>What I design</span>
            <div className={styles.specialtiesList}>
              <div className={styles.specialty}>
                <span className={styles.specialtyIcon}>📱</span>
                <span className={styles.specialtyName}>Mobile UI</span>
              </div>
              <div className={styles.specialtyDivider} />
              <div className={styles.specialty}>
                <span className={styles.specialtyIcon}>🧩</span>
                <span className={styles.specialtyName}>Design System</span>
              </div>
              <div className={styles.specialtyDivider} />
              <div className={styles.specialty}>
                <span className={styles.specialtyIcon}>⚡</span>
                <span className={styles.specialtyName}>Prototyping</span>
              </div>
            </div>
          </div>

          {/* Row 3: Tools (full width) */}
          <div className={`${styles.card} ${styles.cardTools}`}>
            <span className={styles.cardEyebrow}>Tools</span>
            <div className={styles.toolsList}>
              {['Figma', 'Sketch', 'Zeroheight', 'Jira', 'Notion', 'Principle'].map(t => (
                <span key={t} className={styles.toolTag}>{t}</span>
              ))}
            </div>
          </div>


        </div>
      </div>

    </section>
  )
}
