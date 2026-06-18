import { Sparkles } from 'lucide-react'
import { TgIcon } from '../components/TgIcon'
import type { Translations } from '../types'

const C = { textSecondary: '#70708A' }

interface Props { t: Translations }

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer({ t }: Props) {
  const socials = [
    { href: 'https://t.me/adpilot_ai_bot', icon: <TgIcon /> },
    { href: '#', icon: <XIcon /> },
    { href: '#', icon: <IgIcon /> },
  ]

  return (
    <footer style={{ background: '#07070A', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '56px 24px 34px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 44, marginBottom: 48 }} className="footer-cols">
          <div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginBottom: 15 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={12} color="#fff" />
              </div>
              <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.02em' }}>
                AdPilot<span style={{ background: 'linear-gradient(90deg,#A78BFA,#60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> AI</span>
              </span>
            </a>
            <p style={{ color: C.textSecondary, fontSize: 14, lineHeight: 1.68, maxWidth: 250, margin: '0 0 20px' }}>{t.ftTagline}</p>
            <div style={{ display: 'flex', gap: 14 }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                  style={{ color: 'rgba(255,255,255,0.26)', transition: 'color 0.18s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.26)')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {t.ftCols.map(({ h, l }) => (
            <div key={h}>
              <div style={{ color: 'rgba(255,255,255,0.26)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{h}</div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {l.map(lk => (
                  <li key={lk}>
                    <a href="#"
                      style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, transition: 'color 0.18s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                    >{lk}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: 13 }}>{t.ftCopy}</span>
          <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: 13 }}>{t.ftSub}</span>
        </div>
      </div>
    </footer>
  )
}
