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

      {/* Right: mockup + status card */}
      <div className={styles.right}>
        <div className={styles.mockupWrap}>
          <img
            src="/UI%20screen/SurveillanceON-alerteOFF.png"
            alt="Secure Rider app"
            className={styles.mockupPhone}
          />
          <img
            src="/UI%20screen/SurveillanceON-alerteON.png"
            alt="Secure Rider app alert"
            className={styles.mockupPhoneBehind}
          />

          {/* Status card */}
          <div className={styles.statusCard}>
            <div className={styles.statusDot} />
            <div>
              <div className={styles.statusTitle}>Open to work</div>
              <div className={styles.statusSub}>Paris · CDI · Freelance</div>
            </div>
          </div>

          {/* XP badge */}
          <div className={styles.xpBadge}>
            <span className={styles.xpNum}>6+</span>
            <span className={styles.xpLabel}>years of<br/>experience</span>
          </div>
        </div>
      </div>

    </section>
  )
}
