import { useState } from 'react'
import { Sparkles, Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import { LangSwitcher } from '../components/LangSwitcher'
import { TgIcon } from '../components/TgIcon'
import type { Lang, Translations } from '../types'

interface Props { lang: Lang; setLang: (l: Lang) => void; t: Translations }

export function Navbar({ lang, setLang, t }: Props) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: 60,
        background: scrolled ? 'rgba(7,7,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.35s, border-color 0.35s',
      }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={12} color="#fff" />
            </div>
            <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.02em' }}>
              AdPilot<span style={{ background: 'linear-gradient(90deg,#A78BFA,#60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> AI</span>
            </span>
          </a>
          <div className="desktop-only" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {t.navLinks.map(([label, href]) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </div>
          <div className="desktop-only" style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
            <LangSwitcher lang={lang} setLang={setLang} />
            <a href="https://t.me/adpilot_aibot " className="btn btn-primary btn-sm">
              <TgIcon /> {t.navCta}
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-trigger"
            style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: 'fixed', inset: 0, top: 60, background: 'rgba(7,7,10,0.98)', zIndex: 199, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 4, overflowY: 'auto' }}>
          {t.navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              style={{ color: '#EFEFEF', fontSize: 22, fontWeight: 300, letterSpacing: '-0.02em', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'block' }}>
              {label}
            </a>
          ))}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <LangSwitcher lang={lang} setLang={setLang} />
            <a href="https://t.me/adpilot_aibot " className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
              <TgIcon /> {t.heroCta}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
