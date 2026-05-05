import styles from './TripleMockup.module.css'

export default function TripleMockup({ screens }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phoneWrap}>
        <img src={screens[0]} alt="" className={styles.screen} />
      </div>
      <div className={styles.phoneWrap}>
        <img src={screens[1]} alt="" className={styles.screenCenter} />
      </div>
      <div className={styles.phoneWrap}>
        <img src={screens[2]} alt="" className={styles.screen} />
      </div>
    </div>
  )
}
