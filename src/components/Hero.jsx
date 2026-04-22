import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <h1>Romain Gabas</h1>
      <div className={styles.heroMeta}>
        <span className={styles.line} />
        Product designer based in Paris
      </div>
      <p className={styles.heroDescription}>
        Designing interfaces that feel like second nature. Focused on the
        intersection of human behavior and high-fidelity systems.
      </p>
    </section>
  )
}
