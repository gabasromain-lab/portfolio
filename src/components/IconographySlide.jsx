import styles from './IconographySlide.module.css'

const I = ({ src, color = false }) => (
  <img src={src} alt="" className={color ? styles.iconImgColor : styles.iconImg} />
)

const S = ({ size = 16, stroke = 'currentColor', sw = 1.5, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const iconRows = [
  [
    <I src="/Icons/Helmet/Thin.svg" />,
    <I src="/Icons/Shield/Thin.svg" />,
    <I src="/Icons/Arrow/Rotate.svg" />,
    <S><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17l7-6 2-4h2"/><line x1="8" y1="11" x2="14" y2="11"/></S>,
    <I src="/Icons/Trash/Small.svg" />,
  ],
  [
    <I src="/Icons/Eyes-hide/Small.svg" />,
    <I src="/Icons/Eyes-open.svg" />,
    <I src="/Icons/Check/Circle/Small.svg" />,
    <I src="/Icons/Cross/Circle.svg" />,
    <I src="/Icons/Gear.svg" />,
  ],
  [
    <I src="/Icons/Shield/Thin.svg" />,
    <S><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></S>,
    <S><line x1="4" y1="21" x2="4" y2="16"/><line x1="4" y1="12" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="10"/><line x1="12" y1="6" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="18"/><line x1="20" y1="14" x2="20" y2="3"/><line x1="1" y1="16" x2="7" y2="16"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="17" y1="18" x2="23" y2="18"/></S>,
    <I src="/Icons/Dot-off.svg" color />,
    <I src="/Icons/Dot-on.svg" color />,
  ],
  [
    <I src="/Icons/Arrow/Left.svg" />,
    <I src="/Icons/Arrow/Right.svg" />,
    <I src="/Icons/Arrow/Up.svg" />,
    <I src="/Icons/Arrow/Down.svg" />,
    <I src="/Icons/Cross/Thin.svg" />,
  ],
  [
    <I src="/Icons/Arrow/Right-exit.svg" />,
    <I src="/Icons/Trash/Big.svg" />,
    <I src="/Icons/Exclamation/Thick.svg" />,
    <I src="/Icons/Slash.svg" />,
    <I src="/Icons/User.svg" />,
  ],
  [
    <I src="/Icons/Email.svg" />,
    <I src="/Icons/Smartphone.svg" />,
    <I src="/Icons/Phone.svg" />,
    <I src="/Icons/Document.svg" />,
    <I src="/Icons/Lock.svg" />,
  ],
  [
    <I src="/Icons/Dialog.svg" />,
    <I src="/Icons/Bell.svg" />,
  ],
]

const activeIcons = [
  <I src="/Icons/Shield/Thick.svg" />,
  <I src="/Icons/Helmet/Thick.svg" />,
]

const navIcons = [
  { icon: <I src="/Icons/Shield/Thin.svg" />, active: true },
  { icon: <I src="/Icons/Helmet/Thin.svg" />, active: true },
  { icon: <I src="/Icons/Shield/Thin.svg" />, active: false },
  { icon: <I src="/Icons/Helmet/Thin.svg" />, active: false },
]

const IL = ({ src, color = false, png = false }) => (
  <img src={src} alt="" className={color ? styles.illuImgColor : png ? styles.illuImgPng : styles.illuImg} />
)

const illustrations = [
  <IL src="/Illustration/Shield/Check.svg" />,
  <IL src="/Illustration/Shield/Alert.svg" />,
  <IL src="/Icons/Calendar.png" png />,
  <IL src="/Illustration/Shield/Warning.svg" />,
  <IL src="/Icons/Clock.png" png />,
  <IL src="/Illustration/Incompatible.svg" />,
  <IL src="/Illustration/Shield/None.svg" />,
  <IL src="/Icons/Motorcycle-movement.png" png />,
  <IL src="/Icons/Bell-dot.svg" color />,
  <IL src="/Illustration/Exclamation-mark-circle.svg" />,
  <IL src="/Illustration/Detective.svg" />,
  <IL src="/Illustration/Cloud.svg" />,
]

export default function IconographySlide() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconsPanel}>
        <span className={styles.panelTitle}>Icons</span>
        <span className={styles.subLabel}>Default</span>
        <div className={styles.iconGrid}>
          {iconRows.map((row, ri) =>
            row.map((icon, ci) => (
              <span key={`${ri}-${ci}`} className={styles.cell}>{icon}</span>
            ))
          )}
        </div>
        <span className={styles.subLabel}>Active</span>
        <div className={styles.iconRow}>
          {activeIcons.map((icon, i) => (
            <span key={i} className={`${styles.cell} ${styles.cellActive}`}>{icon}</span>
          ))}
        </div>
        <span className={styles.subLabel}>Navigation</span>
        <div className={styles.iconRow}>
          {navIcons.map(({ icon, active }, i) => (
            <span key={i} className={`${styles.cell} ${styles.cellNav} ${active ? styles.cellNavActive : ''}`}>
              {icon}
              {active && <span className={styles.navDot} />}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.illuPanel}>
        <span className={styles.panelTitle}>Illustrations</span>
        <div className={styles.illuGrid}>
          {illustrations.map((ill, i) => (
            <div key={i} className={styles.illuCell}>{ill}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
