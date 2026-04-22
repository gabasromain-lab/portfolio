import { useRef, useEffect } from 'react'
import styles from './WireframeScroll.module.css'

const StatusBar = ({ time = '9:41', dark = false }) => (
  <div className={`${styles.statusBar} ${dark ? styles.statusBarDark : ''}`}>
    <span className={styles.time}>{time}</span>
    <div className={styles.statusIcons}>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
        <rect x="0" y="4" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.4"/>
        <rect x="4" y="2.5" width="3" height="7.5" rx="0.5" fill="currentColor" opacity="0.6"/>
        <rect x="8" y="1" width="3" height="9" rx="0.5" fill="currentColor" opacity="0.8"/>
        <rect x="12" y="0" width="3" height="10" rx="0.5" fill="currentColor"/>
      </svg>
      <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
        <path d="M7.5 2C9.8 2 11.9 2.9 13.4 4.4L14.5 3.3C12.7 1.5 10.2 0.4 7.5 0.4C4.8 0.4 2.3 1.5 0.5 3.3L1.6 4.4C3.1 2.9 5.2 2 7.5 2Z" fill="currentColor" opacity="0.5"/>
        <path d="M7.5 4.8C9 4.8 10.4 5.4 11.4 6.4L12.5 5.3C11.2 4 9.4 3.2 7.5 3.2C5.6 3.2 3.8 4 2.5 5.3L3.6 6.4C4.6 5.4 6 4.8 7.5 4.8Z" fill="currentColor" opacity="0.75"/>
        <circle cx="7.5" cy="8.5" r="1.5" fill="currentColor"/>
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35"/>
        <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor"/>
        <path d="M23 4.5V7.5C23.8 7.2 24.5 6.5 24.5 6C24.5 5.5 23.8 4.8 23 4.5Z" fill="currentColor" fillOpacity="0.4"/>
      </svg>
    </div>
  </div>
)

const BottomNav = () => (
  <div className={styles.bottomNav}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  </div>
)

const screens = [
  {
    label: 'ONBOARDING',
    render: () => (
      <div className={styles.screen}>
        <StatusBar />
        <div className={styles.onboarding}>
          <div className={styles.onboardingIcon}>
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/></svg>
          </div>
          <p className={styles.onboardingText}>Get notified of your vehicle's movements</p>
          <div className={styles.dots}><span className={styles.dotActive}/><span className={styles.dot}/><span className={styles.dot}/></div>
          <div className={styles.btnStack}>
            <button className={styles.btnBlack}>I have a Tracker</button>
            <button className={styles.btnOutline}>Not a customer yet?</button>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'SIGN IN',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="9:41" />
        <div className={styles.signIn}>
          <h2 className={styles.screenTitle}>Sign in</h2>
          <div className={styles.field}><span className={styles.fieldText}>mpont@coyote-group.com</span></div>
          <div className={styles.field}>
            <span className={styles.fieldText}>••••••</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <button className={styles.btnBlack} style={{marginTop: 8}}>Sign in</button>
          <div className={styles.linkStack}>
            <span className={styles.link}>Forgot password?</span>
            <span className={styles.link}>First login</span>
          </div>
          <button className={styles.btnOutline}>Contact support</button>
        </div>
      </div>
    ),
  },
  {
    label: 'HOME',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="23:30" />
        <div className={styles.appHeader}>
          <span className={styles.brandKtm}>KTM</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div className={styles.vehicleBlock}>
          <h3 className={styles.vehicleName}>Duke 890 R</h3>
          <span className={styles.vehicleId}>DE-510-GN</span>
          <span className={styles.nextSurv}>Next surveillance at 11 PM</span>
        </div>
        <div className={styles.cardList}>
          <div className={styles.infoCard}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div>
              <p className={styles.cardText}>No movement detected on this vehicle recently.</p>
              <span className={styles.cardLink}>View history</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/></svg>
            <div>
              <p className={styles.cardText}>Surveillance active</p>
              <span className={styles.cardLink}>Manage schedule</span>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    ),
  },
  {
    label: 'ALERT',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="23:30" />
        <div className={styles.appHeader}>
          <span className={styles.brandYamaha}>YAMAHA</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div className={styles.vehicleBlock}>
          <h3 className={styles.vehicleName}>Vulcan 650 S</h3>
          <span className={styles.vehicleId}>AF-256-PO</span>
        </div>
        <div className={styles.cardList}>
          <div className={`${styles.infoCard} ${styles.alertCard}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div>
              <p className={styles.cardText}>Check your vehicle, a movement has been detected.</p>
              <span className={styles.cardLink}>View history</span>
            </div>
          </div>
          <div className={styles.infoCard}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/></svg>
            <div>
              <p className={styles.cardText}>Surveillance active</p>
              <span className={styles.cardLink}>Manage schedule</span>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    ),
  },
  {
    label: 'SURVEILLANCE',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="23:30" />
        <div className={styles.sectionContent}>
          <h3 className={styles.pageTitle}>Surveillance</h3>
          <p className={styles.pageSubtitle}>Manage and schedule time slots to be notified at your convenience.</p>
          <div className={styles.scheduleRow}>
            <div>
              <p className={styles.scheduleLabel}>Every day</p>
              <p className={styles.scheduleTime}>From 11:00 PM to 6:00 AM</p>
            </div>
            <div className={styles.toggle}><div className={styles.toggleThumb}/></div>
          </div>
          <button className={styles.addSlot}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add a time slot
          </button>
        </div>
        <BottomNav />
      </div>
    ),
  },
  {
    label: 'NOTIFICATIONS',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="23:30" />
        <div className={styles.notifCenter}>
          <div className={styles.bellIcon}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <h3 className={styles.notifTitle}>Enable notifications</h3>
          <p className={styles.notifText}>Get the full Secure experience and be alerted of your vehicle's movements</p>
          <button className={styles.btnBlack}>Enable notifications</button>
          <button className={styles.btnOutline} style={{marginTop: 8}}>Later</button>
        </div>
      </div>
    ),
  },
  {
    label: 'CREATE SCHEDULE',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="9:41" />
        <div className={styles.sectionContent}>
          <div className={styles.scheduleHeader}>
            <h3 className={styles.pageTitle} style={{marginBottom: 2}}>Create a surveillance</h3>
            <span className={styles.lastUpdated}>Last updated at 9:40</span>
          </div>
          <label className={styles.fieldLabel}>Days</label>
          <div className={styles.dayPicker}>
            {['M','T','W','T','F','S','S'].map((d, i) => (
              <span key={i} className={`${styles.dayBtn} ${i >= 5 ? styles.dayBtnActive : ''}`}>{d}</span>
            ))}
          </div>
          <label className={styles.fieldLabel}>Time slot</label>
          <div className={styles.fieldSmall}><span className={styles.fieldHint}>Minimum slot duration: 1 hour</span></div>
          <div className={styles.timeRow}>
            <div className={styles.timeField}><label className={styles.fieldLabel}>Start time</label><span className={styles.timeVal}>11:00 PM</span></div>
            <div className={styles.timeField}><label className={styles.fieldLabel}>End time</label><span className={styles.timeVal}>12:00 AM</span></div>
          </div>
          <button className={styles.btnBlack} style={{marginTop: 'auto'}}>Confirm</button>
          <span className={styles.cancelLink}>Cancel</span>
        </div>
      </div>
    ),
  },
  {
    label: 'ALERT HISTORY',
    render: () => (
      <div className={styles.screen}>
        <StatusBar time="9:41" />
        <div className={styles.sectionContent} style={{overflowY: 'hidden'}}>
          <div className={styles.scheduleHeader}>
            <h3 className={styles.pageTitle} style={{marginBottom: 2}}>History</h3>
            <span className={styles.lastUpdated}>Last updated at 9:40</span>
          </div>
          <p className={styles.historyDay}>Today</p>
          {[{time:'04/13/2024  10:15 PM'},{time:'04/13/2024  6:10 PM – 8:25 PM'}].map((e,i) => (
            <div key={i} className={styles.historyEntry}>
              <span className={styles.historyLabel}>Movement detected</span>
              <span className={styles.historyTime}>{e.time}</span>
            </div>
          ))}
          <p className={styles.historyDay}>Yesterday</p>
          {[{time:'04/12/2024  9:00 AM – 9:15 AM'},{time:'04/12/2024'}].map((e,i) => (
            <div key={i} className={styles.historyEntry}>
              <span className={styles.historyLabel}>Movement detected</span>
              <span className={styles.historyTime}>{e.time}</span>
            </div>
          ))}
          <button className={styles.btnBlack} style={{marginTop: 12}}>Contact support</button>
        </div>
      </div>
    ),
  },
]

export default function WireframeScroll({ trackRef: externalRef }) {
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
          : 'linear-gradient(to right, black 0%, black 100%)'
      } else {
        wrapper.style.maskImage = scrolled
          ? 'linear-gradient(to right, transparent 0%, black 20%, black 52%, transparent 100%)'
          : 'linear-gradient(to right, black 0%, black 52%, transparent 100%)'
      }
      wrapper.style.webkitMaskImage = wrapper.style.maskImage
    }

    track.addEventListener('scroll', updateMask, { passive: true })
    updateMask()

    return () => {
      track.removeEventListener('scroll', updateMask)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.track} ref={trackRef}>
        {screens.map((s, i) => (
          <div key={i} className={styles.phoneWrap}>
            <div className={styles.phone}>
              <div className={styles.notch} />
              {s.render()}
            </div>
            <span className={styles.screenLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
