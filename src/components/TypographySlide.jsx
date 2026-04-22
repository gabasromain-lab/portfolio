import styles from './TypographySlide.module.css'

const typeScale = [
  { example: 'Heading (H1)', token: 'h1',         size: '26px', lh: '30px', weight: 'Medium', w: 500 },
  { example: 'Heading (H2)', token: 'h2',         size: '26px', lh: '30px', weight: 'Light',  w: 300 },
  { example: 'Heading (H3)', token: 'h3',         size: '24px', lh: '32px', weight: 'Book',   w: 400 },
  { example: 'Heading (H4)', token: 'h4',         size: '20px', lh: '25px', weight: 'Medium', w: 500 },
  { example: 'Heading (H5)', token: 'h5',         size: '20px', lh: '25px', weight: 'Book',   w: 400 },
  { example: 'Body XXL',     token: 'body-xxl',   size: '18px', lh: '22px', weight: 'Medium', w: 500 },
  { example: 'Body XL',      token: 'body-xl',    size: '18px', lh: '22px', weight: 'Book',   w: 400 },
  { example: 'Body L',       token: 'body-l',     size: '16px', lh: '20px', weight: 'Medium', w: 500 },
  { example: 'Body M',       token: 'body-m',     size: '16px', lh: '20px', weight: 'Book',   w: 400 },
  { example: 'Body S',       token: 'body-s',     size: '15px', lh: '18px', weight: 'Medium', w: 500 },
  { example: 'Body XS',      token: 'body-xs',    size: '15px', lh: '18px', weight: 'Book',   w: 400 },
  { example: 'Subtitle M',   token: 'subtitle-m', size: '14px', lh: '17px', weight: 'Book',   w: 400 },
  { example: 'Subtitle S',   token: 'subtitle-s', size: '12px', lh: '16px', weight: 'Book',   w: 400 },
]

export default function TypographySlide() {
  return (
    <div className={styles.wrapper}>

      {/* Font header */}
      <div className={styles.header}>
        <span className={styles.fontName}>Gotham</span>
        <div className={styles.alphabetGroup}>
          <span className={styles.alphabet}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          <span className={styles.alphabet}>abcdefghijklmnopqrstuvwxyz</span>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <div className={styles.tableHead}>
          <span>Examples</span>
          <span>Token</span>
          <span>Size</span>
          <span>Line-height</span>
          <span>Weight</span>
        </div>
        <div className={styles.divider} />
        {typeScale.map((row, i) => (
          <div key={row.token} className={styles.row} style={{ '--index': i }}>
            <span className={styles.exampleText} style={{ fontWeight: row.w }}>
              {row.example}
            </span>
            <span className={styles.token}>{row.token}</span>
            <span className={styles.meta}>{row.size}</span>
            <span className={styles.meta}>{row.lh}</span>
            <span className={styles.meta}>{row.weight}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
