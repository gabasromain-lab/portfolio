import { Link } from 'react-router-dom'
import IphoneMockup from './IphoneMockup'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ image, alt, tags, title, description, slug, mockup }) {
  return (
    <Link to={`/project/${slug}`} className={styles.card}>
      {mockup ? (
        <div className={styles.mockupWrap}>
          <IphoneMockup src={image} alt={alt} />
        </div>
      ) : (
        <div className={styles.imgWrap}>
          <img src={image} alt={alt} />
        </div>
      )}
      <div className={styles.meta}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </Link>
  )
}
