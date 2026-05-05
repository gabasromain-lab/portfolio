import styles from './AboutSection.module.css'

const toolLogos = [
  { name: 'Figma',        src: '/figma.svg' },
  { name: 'Sketch',       src: '/Vector.svg' },
  { name: 'After Effects',src: '/Ae.svg' },
  { name: 'Blender',      src: '/blender.svg' },
  { name: 'Principle',    src: '/principle.svg' },
]

const timeline = [
  {
    period: '2022 — Present',
    company: 'Coyote',
    role: 'Product Designer',
    description: 'Growth within a Design Studio environment. Complete redesign of the mobile app and design of the new COYOTE Max device. Full creation of a design system (atomic design) with Zeroheight, design tokens, and end-to-end design of a vehicle anti-theft security app.',
    tags: ['Figma', 'Design System', 'Design Tokens', 'Zeroheight', 'Jira', 'Confluence'],
    current: true,
  },
  {
    period: '2021 — 2022',
    company: 'BigOne',
    role: 'Product Designer',
    description: 'Redesign of existing mockups for a V0 desktop version. Ideation workshops with stakeholders, UI design and prototyping of animated interfaces, and collaboration with development teams through design reviews.',
    tags: ['Figma', 'Prototyping', 'UI Design', 'Animated Interfaces'],
  },
  {
    period: '2020 — 2021',
    company: 'Ermeo',
    role: 'Product Designer',
    description: 'UI and UX optimization of web platform and mobile app. User research and testing, co-design workshops, quick-win sessions with developers, and iterative prototyping.',
    tags: ['User Research', 'Prototyping', 'UX', 'Co-design'],
  },
  {
    period: '2019 — 2020',
    company: 'Odopass',
    role: 'UI UX Designer',
    description: 'Mobile app design and development of new product features. Sketching, wireframing, and prototyping in Figma. User research and testing throughout the product lifecycle.',
    tags: ['Figma', 'Wireframing', 'Mobile UI', 'User Research'],
  },
]

export default function AboutSection() {
  return (
    <div className={styles.about} id="about" data-section>

      <div className={styles.left}>
        <span className={styles.sectionLabel}>About me</span>
        <h2 className={styles.sectionTitle}>Experiences</h2>

        <div className={styles.photoWrapper}>
          <div className={styles.photoShape} />
          <div className={styles.photoFrame}>
            <img src="/profile.jpg.png" alt="Romain Gabas" className={styles.photo} />
          </div>
        </div>

        <p className={styles.bio}>
          Product Designer based in Paris with 6+ years of experience across mobile, web,
          and design systems. I turn complex product challenges into clear, human-centered
          experiences — from early wireframes to production-ready interfaces.
        </p>
        <div className={styles.tags}>
          {['Design System', 'Design Thinking', 'Prototyping', 'Wireframing', 'User Research', 'UI Design', 'User Flow', 'Motion', '3D'].map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <div className={styles.toolRow}>
          {toolLogos.map(({ name, src }) => (
            <span key={name} className={styles.toolBadge} title={name}>
              <img src={src} alt={name} className={styles.toolIcon} />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.timeline}>
          <div className={styles.thread} />
          {timeline.map((entry, i) => (
            <div key={i} className={styles.node}>
              <div className={styles.dateWrapper}>
                <span className={styles.period}>{entry.period}</span>
                {entry.current && <span className={styles.badge}>Now</span>}
              </div>
              <div className={`${styles.dot} ${entry.current ? styles.dotActive : ''}`}>
                {entry.current && <span className={styles.dotPing} />}
              </div>
              <div className={`${styles.card} ${entry.current ? styles.cardActive : ''}`}>
                <p className={styles.company}>{entry.company}</p>
                <p className={styles.role}>{entry.role}</p>
                <p className={styles.desc}>{entry.description}</p>
                {entry.tags && (
                  <div className={styles.cardTags}>
                    {entry.tags.map(t => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
