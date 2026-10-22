import { REPO_URL } from '../content'
import { DownloadIcon, GitHubIcon } from './Icons'

export default function Hero() {
  return (
    <section className="novu-hero">
      <div className="hero-content">
        <p className="hero-label">macOS Menu Bar Lyrics</p>
        <h1 className="hero-title">Your lyrics.<br />In the menu bar.<br /><em>Always.</em></h1>
        <p className="hero-subtitle">
          A lightweight Go tool that displays Apple Music lyrics in your macOS menu bar. No window switching. No distractions. Just the words, right where you need them.
        </p>
        <div className="hero-actions">
          <a href="#install" className="btn-primary"><DownloadIcon />Install with Homebrew</a>
          <a href={REPO_URL} className="btn-secondary"><GitHubIcon />GitHub</a>
        </div>
        <p className="hero-meta">v0.1.3 · Go · macOS · MIT</p>
      </div>
    </section>
  )
}
