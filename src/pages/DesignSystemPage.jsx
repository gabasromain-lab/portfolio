import { useNavigate } from 'react-router-dom'
import styles from './DesignSystemPage.module.css'

export default function DesignSystemPage({ src }) {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate('/')}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </button>
      <iframe
        src={src}
        className={styles.frame}
        title="Design System"
      />
    </div>
  )
}
