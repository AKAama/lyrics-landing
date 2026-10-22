import { useEffect, useState } from 'react'
import { REPO_URL } from '../content'
import { MusicIcon } from './Icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`novu-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo"><MusicIcon /><span>lyrics-display</span></a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href={REPO_URL} className="nav-cta">Download</a>
      </div>
    </nav>
  )
}
