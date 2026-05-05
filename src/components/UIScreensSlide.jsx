import { useRef, useEffect } from 'react'
import styles from './UIScreensSlide.module.css'

const screens = [
  { src: '/UI%20screen/Onboarding%201.png',                    label: 'Onboarding 1' },
  { src: '/UI%20screen/Onboarding%202.png',                    label: 'Onboarding 2' },
  { src: '/UI%20screen/Onboarding%203.png',                    label: 'Onboarding 3' },
  { src: '/UI%20screen/Login%20Complete.png',                  label: 'Login Complete' },
  { src: '/UI%20screen/Installation%20en%20cours.png',         label: 'Installation' },
  { src: '/UI%20screen/SurveillanceOFF.png',                   label: 'Surveillance OFF' },
  { src: '/UI%20screen/SurveillanceON-alerteOFF.png',          label: 'Alert OFF' },
  { src: '/UI%20screen/Surveillance%20-%20Day.png',            label: 'Day Schedule' },
  { src: '/UI%20screen/Surveillance%20-%20Hours%20D1.png.png', label: 'Hours D+1' },
  { src: '/UI%20screen/SurveillanceON-alerteON.png',           label: 'Alert Active' },
  { src: '/UI%20screen/Surveillance%20-%20Scroll%20list.png',  label: 'Alert List' },
  { src: '/UI%20screen/Historic%20list.png',                   label: 'Historic' },
  { src: '/UI%20screen/Empty%20State.png',                     label: 'Empty State' },
]

export default function UIScreensSlide({ trackRef: externalRef }) {
  const internalRef = useRef(null)
  const trackRef = externalRef || internalRef

  useEffect(() => {
    const track = trackRef.current
    const wrapper = track?.parentElement
    if (!track || !wrapper) return

    const updateMask = () => {
      const scrolled = track.scrollLeft > 10
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 5

      if (atEnd) {
        wrapper.style.maskImage = scrolled
          ? 'linear-gradient(to right, transparent 0%, black 20%, black 100%)'
          : 'none'
      } else {
        wrapper.style.maskImage = scrolled
          ? 'linear-gradient(to right, transparent 0%, black 20%, black 52%, transparent 100%)'
          : 'linear-gradient(to right, black 0%, black 52%, transparent 100%)'
      }
      wrapper.style.webkitMaskImage = wrapper.style.maskImage
    }

    track.addEventListener('scroll', updateMask, { passive: true })
    updateMask()
    return () => track.removeEventListener('scroll', updateMask)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.track} ref={trackRef}>
        {screens.map(({ src, label }) => (
          <div key={src} className={styles.phoneWrap}>
            <img src={src} alt={label} className={styles.screen} />
            <span className={styles.screenLabel}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
