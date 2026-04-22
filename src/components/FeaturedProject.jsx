import { Link } from 'react-router-dom'
import IphoneMockup from './IphoneMockup'
import TripleMockup from './TripleMockup'
import styles from './FeaturedProject.module.css'

export default function FeaturedProject({ title, description, tags, image, alt, slug, mockup, screens }) {
  const renderVisual = () => {
    if (screens?.length === 3) {
      return (
        <div className={`${styles.imageContainer} ${styles.mockupContainer}`}>
          <TripleMockup screens={screens} />
        </div>
      )
    }
    if (mockup) {
      return (
        <div className={`${styles.imageContainer} ${styles.mockupContainer}`}>
          <IphoneMockup src={image} alt={alt} />
        </div>
      )
    }
    return (
      <div className={styles.imageContainer}>
        <img src={image} alt={alt} />
      </div>
    )
  }

  return (
    <div className={styles.featuredProject}>
      {renderVisual()}
      <div className={styles.content}>
        {tags?.length > 0 && (
          <div className={styles.tags}>
            {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/project/${slug}`} className={styles.pillBtn}>
          View Project
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
