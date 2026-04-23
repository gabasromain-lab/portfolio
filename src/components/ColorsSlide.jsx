import styles from './ColorsSlide.module.css'

const palette = [
  {
    name: 'Gray',
    colors: [
      { token: 'gray-900', hex: '#191919' },
      { token: 'gray-800', hex: '#333333' },
      { token: 'gray-700', hex: '#3D3D3D' },
      { token: 'gray-600', hex: '#666666' },
      { token: 'gray-500', hex: '#808080' },
      { token: 'gray-400', hex: '#999999' },
      { token: 'gray-300', hex: '#B3B3B3' },
      { token: 'gray-200', hex: '#CCCCCC' },
      { token: 'gray-100', hex: '#E0E0E0' },
      { token: 'white',    hex: '#FFFFFF' },
    ],
  },
  {
    name: 'Blue',
    colors: [
      { token: 'blue-975', hex: '#1A1A21' },
      { token: 'blue-950', hex: '#20202A' },
      { token: 'blue-900', hex: '#2C2C39' },
      { token: 'blue-800', hex: '#2F3042' },
      { token: 'blue-700', hex: '#3B3A4F' },
      { token: 'blue-600', hex: '#444257' },
      { token: 'blue-500', hex: '#4B485F' },
      { token: 'blue-400', hex: '#585772' },
      { token: 'blue-300', hex: '#505061' },
      { token: 'blue-200', hex: '#717084' },
      { token: 'blue-100', hex: '#A8A7BC' },
      { token: 'blue-75',  hex: '#D4DFFF' },
      { token: 'blue-50',  hex: '#EBF4FF' },
    ],
  },
  {
    name: 'Green',
    colors: [
      { token: 'green-800', hex: '#3D574B' },
      { token: 'green-700', hex: '#33573D' },
      { token: 'green-600', hex: '#36810E' },
      { token: 'green-500', hex: '#23D63E' },
      { token: 'green-400', hex: '#5DBA5E' },
      { token: 'green-300', hex: '#A0F075' },
      { token: 'green-200', hex: '#D1F8BD' },
      { token: 'green-100', hex: '#A5C0AD' },
    ],
  },
  {
    name: 'Red',
    colors: [
      { token: 'red-950', hex: '#29161C' },
      { token: 'red-900', hex: '#2A151B' },
      { token: 'red-800', hex: '#3B171F' },
      { token: 'red-700', hex: '#5E2531' },
      { token: 'red-600', hex: '#8F1919' },
      { token: 'red-500', hex: '#A81E1E' },
      { token: 'red-400', hex: '#C60000' },
      { token: 'red-300', hex: '#AD3126' },
      { token: 'red-200', hex: '#C84B4B' },
      { token: 'red-100', hex: '#FE4E4E' },
    ],
  },
]

export default function ColorsSlide() {
  return (
    <div className={styles.grid}>
      {palette.map(group => (
        <div key={group.name} className={styles.card}>
          <span className={styles.groupLabel}>{group.name}</span>
          <div className={styles.swatches}>
            {group.colors.map(({ token, hex }) => (
              <div key={token} className={styles.swatch}>
                <span className={styles.dot} style={{ background: hex }} />
                <span className={styles.token}>{token}</span>
                <span className={styles.hex}>{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
