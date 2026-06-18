import { Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { TgIcon } from '../components/TgIcon'
import type { Translations } from '../types'

const C = { textPrimary: '#EFEFEF', textSecondary: '#70708A', textMuted: 'rgba(255,255,255,0.28)' }

interface Props { t: Translations }

export function FinalCTA({ t }: Props) {
  const [ref, inView] = useInView(0.22)

  return (
    <section ref={ref} style={{ padding: '140px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: '#0A0A0E' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 580, background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.06) 40%, transparent 65%)', opacity: inView ? 1 : 0, transition: 'opacity 1.2s ease 0.3s' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.022 }}>
          <defs><pattern id="cg" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="0.6" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#cg)" />
        </svg>
      </div>
      <div style={{ position: 'relative', zIndex: 1, opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.7s cubic-bezier(.22,1,.36,1) 0.2s' }}>
        <h2 style={{ fontSize: 'clamp(36px,6.5vw,86px)', fontWeight: 300, lineHeight: 1.04, letterSpacing: '-0.04em', color: C.textPrimary, margin: '0 auto 24px', maxWidth: 740 }}>
          {t.ctaH2a}<br />
          <span style={{ background: 'linear-gradient(135deg,#C4B5FD,#818CF8,#93C5FD)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradientShift 6s ease infinite' }}>
            {t.ctaH2b}
          </span>
        </h2>
        <p style={{ color: C.textSecondary, fontSize: 'clamp(15px,1.6vw,19px)', maxWidth: 360, margin: '0 auto 44px', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{t.ctaSub}</p>
        <a href="https://t.me/adpilot_ai_bot" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 34px', borderRadius: 11 }}>
          <TgIcon /> {t.ctaBtn}
        </a>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginTop: 22 }}>
          {[t.ctaT1, t.ctaT2, t.ctaT3].map(tx => (
            <span key={tx} style={{ color: C.textMuted, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Check size={12} color="rgba(124,58,237,0.6)" strokeWidth={2.5} /> {tx}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
