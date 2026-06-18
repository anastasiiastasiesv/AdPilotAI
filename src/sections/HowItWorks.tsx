import { Reveal } from '../components/Reveal'
import type { Translations } from '../types'

const C = { bg: '#07070A', textPrimary: '#EFEFEF', textSecondary: '#70708A' }

interface Props { t: Translations }

export function HowItWorks({ t }: Props) {
  return (
    <section style={{ padding: '80px 0 112px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>{t.howEyebrow}</div>
          <h2 className="section-h2" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.03em', color: C.textPrimary, margin: '0 0 60px', maxWidth: 420 }}>
            {t.howH2a}<br />{t.howH2b}
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 16, overflow: 'hidden' }} className="four-col">
          {t.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div style={{ padding: '30px 24px', background: C.bg, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(167,139,250,0.42)', marginBottom: 18 }}>{s.n}</div>
                <h3 style={{ color: C.textPrimary, fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 11, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: C.textSecondary, fontSize: 14, lineHeight: 1.72, margin: 0 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
