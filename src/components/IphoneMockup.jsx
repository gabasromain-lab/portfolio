import styles from './IphoneMockup.module.css'

export default function IphoneMockup({ src, alt }) {
  return (
    <div className={styles.phone}>
      {/* Side buttons */}
      <div className={styles.btnSilent} />
      <div className={styles.btnVolUp} />
      <div className={styles.btnVolDown} />
      <div className={styles.btnPower} />

      {/* Screen */}
      <div className={styles.screen}>
        <div className={styles.island} />
        <img src={src} alt={alt} className={styles.screenImg} />
        <div className={styles.homeBar} />
      </div>
    </div>
  )
}
