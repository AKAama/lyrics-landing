import { LockIcon } from './Icons'

export default function Privacy() {
  return (
    <section className="novu-section privacy-section">
      <div className="privacy-card">
        <LockIcon />
        <h2>Built for privacy.</h2>
        <p>All lyrics data is processed locally on your device. No server uploads. No tracking. No analytics. Just a simple tool that does one thing well.</p>
      </div>
    </section>
  )
}
