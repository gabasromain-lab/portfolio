import styles from './TripleMockup.module.css'

function Phone({ src, alt }) {
  return (
    <div className={styles.phone}>
      <div className={styles.btnSilent} />
      <div className={styles.btnVolUp} />
      <div className={styles.btnVolDown} />
      <div className={styles.btnPower} />
      <div className={styles.screen}>
        <div className={styles.island} />
        <img src={src} alt={alt} className={styles.screenImg} />
        <div className={styles.homeBar} />
      </div>
    </div>
  )
}

export default function TripleMockup({ screens }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.phoneWrap} ${styles.left}`}>
        <Phone src={screens[0]} alt="Screen 1" />
      </div>
      <div className={`${styles.phoneWrap} ${styles.center}`}>
        <Phone src={screens[1]} alt="Screen 2" />
      </div>
      <div className={`${styles.phoneWrap} ${styles.right}`}>
        <Phone src={screens[2]} alt="Screen 3" />
      </div>
    </div>
  )
}
