import { useState } from 'react'
import { faqs } from '../content'
import { PlusIcon } from './Icons'

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <section id="faq" className="novu-section faq-section">
      <p className="section-label">Got questions?</p>
      <div className="faq-list">
        {faqs.map((f) => (
          <div key={f.key} className={`faq-item ${open === f.key ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === f.key ? null : f.key)}>
              <span>{f.q}</span><PlusIcon />
            </button>
            <div className="faq-a"><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}
