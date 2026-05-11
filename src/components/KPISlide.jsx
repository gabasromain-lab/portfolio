import styles from './KPISlide.module.css'

export default function KPISlide({ kpis }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {kpis.map((kpi, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.value}>{kpi.value}</span>
            <span className={styles.label}>{kpi.label}</span>
            {kpi.sub && <span className={styles.sub}>{kpi.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
