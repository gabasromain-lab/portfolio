import styles from './SystemDiagram.module.css'

const nodes = [
  {
    icon: 'two_wheeler',
    label: 'Motorbike',
    sub: 'Vehicle',
  },
  {
    icon: 'sensors',
    label: 'Nano Device',
    sub: 'GPS tracker',
    accent: true,
  },
  {
    icon: 'smartphone',
    label: 'Smartphone',
    sub: 'Mobile app',
  },
]

function ArrowConnector() {
  return (
    <div className={styles.arrowConnector}>
      <div className={styles.arrowLine} />
      <div className={styles.arrowHead} />
    </div>
  )
}

function WifiConnector() {
  return (
    <div className={styles.wifiConnector}>
      <svg className={styles.wifiSvg} viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,8  A 8,8   0 0 1 0,24" stroke="rgba(139,92,246,0.9)" strokeWidth="2.5" strokeLinecap="round" className={`${styles.arc} ${styles.arc1}`}/>
        <path d="M 0,2  A 14,14 0 0 1 0,30" stroke="rgba(139,92,246,0.9)" strokeWidth="2.5" strokeLinecap="round" className={`${styles.arc} ${styles.arc2}`}/>
        <path d="M 0,-4 A 20,20 0 0 1 0,36" stroke="rgba(139,92,246,0.9)" strokeWidth="2.5" strokeLinecap="round" className={`${styles.arc} ${styles.arc3}`}/>
      </svg>
    </div>
  )
}

export default function SystemDiagram() {
  return (
    <div className={styles.wrapper}>
      {nodes.map((node, i) => (
        <div key={node.label} className={styles.row}>
          <div className={`${styles.card} ${node.accent ? styles.cardAccent : ''}`} style={{ '--i': i }}>
            <span className={`material-icons-round ${styles.icon}`}>{node.icon}</span>
            <span className={styles.label}>{node.label}</span>
            <span className={styles.sub}>{node.sub}</span>
          </div>
          {i === 0 && <ArrowConnector />}
          {i === 1 && <WifiConnector />}
        </div>
      ))}
    </div>
  )
}
