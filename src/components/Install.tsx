import { BREW_COMMAND, DMG_URL, REPO_URL } from '../content'
import { CopyIcon, DownloadIcon, GitHubIcon } from './Icons'

export default function Install() {
  return (
    <section id="install" className="novu-section cta-section">
      <div className="cta-content">
        <h2>Start listening differently.</h2>
        <p>One command. No setup. Just lyrics. Or download the macOS .app directly.</p>
        <div className="install-snippet">
          <code>{BREW_COMMAND}</code>
          <button className="copy-btn" onClick={() => navigator.clipboard.writeText(BREW_COMMAND)}><CopyIcon /></button>
        </div>
        <div className="hero-actions">
          <a href={DMG_URL} className="btn-primary" download><DownloadIcon />Download .app</a>
          <a href={REPO_URL} className="btn-secondary"><GitHubIcon />View on GitHub</a>
        </div>
      </div>
    </section>
  )
}
