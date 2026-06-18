import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { useInView } from '../hooks/useInView'
import type { CapItem, Translations } from '../types'

const C = { textPrimary: '#EFEFEF', textSecondary: '#70708A' }

function CapRow({ cap, i }: { cap: CapItem; i: number }) {
  const [open, setOpen] = useState(i === 0)
  const [ref, inView] = useInView(0.08)

  return (
    <div ref={ref} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(12px)', transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s` }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: 20, padding: '24px 0', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ color: 'rgba(167,139,250,0.38)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', minWidth: 24 }}>{cap.n}</span>
        <div style={{ flex: 1 }}>
          <span style={{ color: C.textSecondary, fontSize: 11, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{cap.tag}</span>
          <span style={{ color: C.textPrimary, fontSize: 'clamp(16px,2vw,22px)', fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.22 }}>{cap.headline}</span>
        </div>
        <div style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, border: `1px solid ${open ? 'rgba(124,58,237,0.42)' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s, transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>
          <span style={{ color: open ? '#A78BFA' : 'rgba(255,255,255,0.38)', fontSize: 18, lineHeight: 1, fontWeight: 200 }}>+</span>
        </div>
      </button>
      <div style={{ maxHeight: open ? 480 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(.22,1,.36,1)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, paddingBottom: 28, paddingLeft: 44 }} className="cap-inner">
          <p style={{ color: C.textSecondary, fontSize: 15.5, lineHeight: 1.78, margin: 0 }}>{cap.body}</p>
          <div style={{ background: '#0D0D12', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '17px 19px' }}>
            <div className="eyebrow" style={{ marginBottom: 11 }}>{cap.pl}</div>
            <p style={{ color: '#C0C0D8', fontSize: 13, lineHeight: 1.72, margin: 0, fontStyle: 'italic' }}>"{cap.pt}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props { t: Translations }

export function Features({ t }: Props) {
  return (
    <section id="features" style={{ padding: '80px 0 112px', background: '#0A0A0E' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>{t.capEyebrow}</div>
          <h2 className="section-h2" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.03em', color: C.textPrimary, margin: '0 0 68px', maxWidth: 480 }}>
            {t.capH2a}<br />{t.capH2b}
          </h2>
        </Reveal>
        <div>
          {t.caps.map((cap, i) => <CapRow key={i} cap={cap} i={i} />)}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>
      </div>
    </section>
  )
}
