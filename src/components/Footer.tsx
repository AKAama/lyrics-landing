import { REPO_URL } from '../content'
import { MusicIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="novu-footer">
      <div className="footer-inner">
        <div className="footer-brand"><MusicIcon size={20} /><span>lyrics-display</span></div>
        <div className="footer-links">
          <div><h4>Product</h4><a href={REPO_URL}>GitHub</a><a href="#features">Features</a><a href="#faq">FAQ</a></div>
          <div><h4>Install</h4><a href="#install">Homebrew</a><a href={`${REPO_URL}#安装`}>Source</a></div>
          <div><h4>Docs</h4><a href={`${REPO_URL}/blob/main/README.md`}>README</a><a href={`${REPO_URL}/blob/main/CHANGELOG.md`}>Changelog</a></div>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2026 AKAama · MIT License</p></div>
    </footer>
  )
}
