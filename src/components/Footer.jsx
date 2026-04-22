import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Footer.module.css'

const EMAILJS_SERVICE_ID  = 'service_57qpovk'
const EMAILJS_TEMPLATE_ID = 'template_tgw5hfm'
const EMAILJS_PUBLIC_KEY  = '8IXwebKGkBXSCngEt'

export default function Footer() {
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus]   = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim() || !email.trim() || status === 'sending') return
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { message: `De : ${email}\n\n${message}`, from_email: email, to_email: 'gabasromain@gmail.com' },
        EMAILJS_PUBLIC_KEY
      )
    } catch {}
    setStatus('sent')
    setEmail('')
    setMessage('')
    setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <footer className={styles.footer} id="contact" data-section>

      {/* Floating glass card */}
      <div className={styles.card}>
        <div className={styles.ambientGlow} />
        <div className={styles.ambientGlow2} />

        <div className={styles.headerGroup}>
          <div className={styles.statusBadge}>
            <div className={styles.statusDot} />
            Accepting new projects
          </div>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.subtitle}>
            Drop me a message below. I usually reply within a few hours.
          </p>
        </div>

        <form className={styles.formGroup} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <div className={`${styles.inputWrap} ${status === 'sent' ? styles.sent : ''}`}>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Write me a message</label>
            <div className={`${styles.textareaWrap} ${status === 'sent' ? styles.sent : ''}`}>
              <textarea
                id="message"
                className={styles.textarea}
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
                placeholder="Your message..."
              />
              <button
                type="submit"
                className={`${styles.submitBtn} ${status === 'sent' ? styles.sentBtn : ''}`}
                disabled={status === 'sending'}
                aria-label="Send message"
              >
                {status === 'sent' ? (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" stroke="white" fill="none" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className={styles.systemMeta}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            {status === 'sent' ? 'Message envoyé !' : 'Secure & strictly confidential'}
          </div>
        </form>
      </div>

      {/* Bottom bar — outside the card */}
      <div className={styles.footerBottom}>
        <div>© 2025 Romain Gabas. All rights reserved.</div>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>Twitter</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>GitHub</a>
        </div>
      </div>

    </footer>
  )
}
