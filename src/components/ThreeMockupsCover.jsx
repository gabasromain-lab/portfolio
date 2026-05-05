import styles from './ThreeMockupsCover.module.css'

export default function ThreeMockupsCover({ screens = [] }) {
  const [left, center, right] = screens
  return (
    <div className={styles.wrap}>
      {left   && <div className={styles.phoneLeft}><img src={left}   alt="" className={styles.screen} /></div>}
      {center && <div className={styles.phoneCenter}><img src={center} alt="" className={styles.screenCenter} /></div>}
      {right  && <div className={styles.phoneRight}><img src={right}  alt="" className={styles.screen} /></div>}
    </div>
  )
}
