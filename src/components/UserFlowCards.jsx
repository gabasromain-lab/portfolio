import styles from './UserFlowCards.module.css'

export default function UserFlowCards({ cards, features }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {cards.map((label, i) => (
          <div key={label} className={styles.card}>
            <span className={styles.step}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>

      {features?.length > 0 && (
        <div className={styles.features}>
          <span className={styles.featuresLabel}>Key Features</span>
          <div className={styles.featureList}>
            {features.map(f => (
              <div key={f} className={styles.featureItem}>
                <div className={styles.featureDot} />
                {f}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
