import { Link } from 'react-router-dom'
import IphoneMockup from './IphoneMockup'
import ThreeMockupsCover from './ThreeMockupsCover'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ image, alt, tags, title, description, slug, mockup, screens }) {
  return (
    <Link to={`/project/${slug}`} className={styles.card}>
      {screens ? (
        <div className={styles.mockupWrap}>
          <ThreeMockupsCover screens={screens} />
        </div>
      ) : mockup ? (
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
