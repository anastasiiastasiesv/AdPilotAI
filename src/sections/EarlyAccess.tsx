import { Sparkles, Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { TgIcon } from '../components/TgIcon'
import type { Translations } from '../types'

const C = { textPrimary: '#EFEFEF', textSecondary: '#70708A', textMuted: 'rgba(255,255,255,0.28)' }

interface Props { t: Translations }

export function EarlyAccess({ t }: Props) {
  return (
    <section id="access" style={{ padding: '80px 0 112px', background: '#0A0A0E' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="two-col">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 16 }}>{t.accEyebrow}</div>
            <h2 className="section-h2" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.03em', color: C.textPrimary, margin: '0 0 20px' }}>
              {t.accH2}
            </h2>
            <p style={{ color: C.textSecondary, fontSize: 17, lineHeight: 1.72, marginBottom: 34, maxWidth: 480 }}>
              {t.accBody}
            </p>
            <a href="https://t.me/adpilot_ai_bot" className="btn btn-primary btn-lg">
              <TgIcon /> {t.accCta}
            </a>
            <p style={{ color: C.textMuted, fontSize: 13, marginTop: 16, lineHeight: 1.5 }}>{t.accNote}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div style={{ background: 'linear-gradient(145deg,#0F0C20,#0D0D16)', border: '1px solid rgba(124,58,237,0.22)', borderRadius: 20, padding: '30px', boxShadow: '0 0 60px rgba(124,58,237,0.06)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 26, paddingBottom: 22, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={17} color="#fff" />
                </div>
                <div>
                  <div style={{ color: '#EFEFEF', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>AdPilot AI</div>
                  <div style={{ color: '#4ADE80', fontSize: 12, marginTop: 2 }}>● Early Access</div>
                </div>
                <div style={{ marginLeft: 'auto', background: 'rgba(124,58,237,0.14)', border: '1px solid rgba(124,58,237,0.26)', borderRadius: 999, padding: '4px 12px', fontSize: 12, color: '#A78BFA', fontWeight: 500 }}>Free</div>
              </div>
              {t.accFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: i < t.accFeatures.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <span style={{ color: '#A78BFA', fontSize: 12, flexShrink: 0 }}>✦</span>
                  <span style={{ color: '#C4C4DC', fontSize: 14 }}>{f}</span>
                  <Check size={13} color="#7C3AED" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
