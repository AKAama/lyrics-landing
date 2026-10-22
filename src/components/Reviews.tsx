import { useState } from 'react'
import { reviews } from '../content'
import { ChevronLeft, ChevronRight } from './Icons'

export default function Reviews() {
  const [idx, setIdx] = useState(0)
  const n = reviews.length
  return (
    <section id="reviews" className="novu-section reviews-section">
      <p className="section-label">From the first users.</p>
      <div className="review-card">
        <blockquote>"{reviews[idx].text}"</blockquote>
        <cite>— {reviews[idx].author}</cite>
      </div>
      <div className="review-nav">
        <button onClick={() => setIdx((i) => (i - 1 + n) % n)} disabled={n <= 1}><ChevronLeft /></button>
        <div className="review-dots">
          {reviews.map((_, i) => (
            <span key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} />
          ))}
        </div>
        <button onClick={() => setIdx((i) => (i + 1) % n)} disabled={n <= 1}><ChevronRight /></button>
      </div>
    </section>
  )
}
