import styles from './AboutSection.module.css'

const expertise = ['Product Strategy', 'Design Systems', 'Motion UI', 'Rapid Prototyping']
const toolkit = ['Figma & Framer', 'WebGL / Three.js', 'React / Tailwind', 'Linear / Git']

function SkillGroup({ title, items }) {
  return (
    <div className={styles.skillGroup}>
      <h5>{title}</h5>
      {items.map(item => (
        <div key={item} className={styles.skillItem}>
          <div className={styles.skillDot} />
          {item}
        </div>
      ))}
    </div>
  )
}

export default function AboutSection() {
  return (
    <div className={styles.aboutGrid} id="about" data-section>
      <div className={styles.aboutText}>
        <span className={styles.sectionLabel}>Bio</span>
        I believe great design is invisible until it&apos;s needed. My practice
        centers on reducing cognitive load while maximizing emotional resonance.
        Currently leading design at a stealth-stage venture studio. Based in Paris.
      </div>
      <div className={styles.skillsList}>
        <SkillGroup title="Expertise" items={expertise} />
        <SkillGroup title="Toolkit" items={toolkit} />
      </div>
    </div>
  )
}
