import { BREW_COMMAND, RELEASES_URL, REPO_URL } from '../content'
import { CopyIcon, GitHubIcon } from './Icons'

export default function Install() {
  return (
    <section id="install" className="novu-section cta-section">
      <div className="cta-content">
        <h2>Start listening differently.</h2>
        <p>One command. No setup. Just lyrics. Or grab the macOS .app from Releases.</p>
        <div className="install-snippet">
          <code>{BREW_COMMAND}</code>
          <button className="copy-btn" onClick={() => navigator.clipboard.writeText(BREW_COMMAND)}><CopyIcon /></button>
        </div>
        <div className="hero-actions">
          <a href={REPO_URL} className="btn-primary"><GitHubIcon />View on GitHub</a>
          <a href={RELEASES_URL} className="btn-secondary">Download .app</a>
        </div>
      </div>
    </section>
  )
}
