import { useState, useEffect } from 'react'
import { Sparkles, Check } from 'lucide-react'
import { TgIcon } from '../components/TgIcon'
import type { Lang, Translations } from '../types'

const C = { textPrimary: '#EFEFEF', textSecondary: '#70708A', textMuted: 'rgba(255,255,255,0.28)' }

interface Props { t: Translations; lang: Lang }

export function Hero({ t, lang }: Props) {
  const [typedLen, setTypedLen] = useState(0)
  const [showReply, setShowReply] = useState(false)
  const [visibleHooks, setVisibleHooks] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTypedLen(0); setShowReply(false); setVisibleHooks(0); setMounted(false)
    const tm = setTimeout(() => setMounted(true), 300)
    return () => clearTimeout(tm)
  }, [lang])

  useEffect(() => {
    if (!mounted) return
    const msg = t.heroMsg
    if (typedLen < msg.length) {
      const tm = setTimeout(() => setTypedLen(l => l + 1), 20)
      return () => clearTimeout(tm)
    } else {
      const tm = setTimeout(() => setShowReply(true), 460)
      return () => clearTimeout(tm)
    }
  }, [mounted, typedLen, t.heroMsg])

  useEffect(() => {
    if (!showReply) return
    let i = 0
    const id = setInterval(() => {
      i++; setVisibleHooks(i)
      if (i >= t.heroHooks.length) clearInterval(id)
    }, 150)
    return () => clearInterval(id)
  }, [showReply, t.heroHooks.length])

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '96px 24px 72px' }}>
      {/* Background */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-8%', left: '50%', transform: 'translateX(-50%)', width: 1000, height: 700, background: 'radial-gradient(ellipse, rgba(124,58,237,0.13) 0%, rgba(79,70,229,0.05) 42%, transparent 68%)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-8%', width: 560, height: 460, background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 65%)' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.024 }}>
          <defs><pattern id="hg" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="0.6" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 980, width: '100%', textAlign: 'center' }}>
        {/* Badge */}
        <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.5s ease 0.1s', marginBottom: 28 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 16px 5px 10px', borderRadius: 999, border: '1px solid rgba(124,58,237,0.28)', background: 'rgba(124,58,237,0.07)', color: '#A78BFA', fontSize: 12, fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A78BFA', display: 'inline-block', animation: 'pulse 2.4s ease-in-out infinite' }} />
            {t.heroBadge}
          </span>
        </div>

        {/* H1 */}
        <h1 className="hero-h1" style={{
          fontSize: 'clamp(44px,7vw,90px)', fontWeight: 300, lineHeight: 1.04, letterSpacing: '-0.04em',
          color: C.textPrimary, margin: '0 0 24px',
          opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.28s, transform 0.7s cubic-bezier(.22,1,.36,1) 0.28s',
        }}>
          {t.heroH1a}<br />
          <span style={{ background: 'linear-gradient(135deg,#C4B5FD 0%,#818CF8 48%,#93C5FD 90%)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradientShift 7s ease infinite' }}>
            {t.heroH1b}
          </span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(16px,1.7vw,19px)', color: C.textSecondary, lineHeight: 1.68, maxWidth: 450, margin: '0 auto 36px',
          opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(14px)',
          transition: 'opacity 0.65s ease 0.46s, transform 0.65s cubic-bezier(.22,1,.36,1) 0.46s',
        }}>{t.heroSub}</p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(12px)', transition: 'opacity 0.6s ease 0.62s, transform 0.6s ease 0.62s' }}>
          <a href="https://t.me/adpilot_aibot " className="btn btn-primary btn-lg"><TgIcon /> {t.heroCta}</a>
          <a href="#examples" className="btn btn-ghost btn-lg">{t.heroAlt}</a>
        </div>

        {/* Trust */}
        <div className="hero-trust" style={{ display: 'flex', gap: 22, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20, opacity: mounted ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }}>
          {[t.heroT1, t.heroT2, t.heroT3].map(tx => (
            <span key={tx} style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.textMuted, fontSize: 13 }}>
              <Check size={12} color="#7C3AED" strokeWidth={2.5} /> {tx}
            </span>
          ))}
        </div>

        {/* Language notice */}
        <div style={{ marginTop: 24, opacity: mounted ? 1 : 0, transition: 'opacity 0.5s ease 0.95s', display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 9, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '10px 16px', maxWidth: 500, textAlign: 'left' }}>
            <span style={{ color: '#A78BFA', fontSize: 13, flexShrink: 0, marginTop: 1 }}>ⓘ</span>
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13, lineHeight: 1.55, margin: 0 }}>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{t.noticeLabel}: </span>
              {t.notice}
            </p>
          </div>
        </div>

        {/* Chat window */}
        <div style={{ marginTop: 60, maxWidth: 660, margin: '60px auto 0', opacity: mounted ? 1 : 0, transition: 'opacity 0.75s ease 1.05s', animation: mounted ? 'float 6s ease-in-out 2.5s infinite' : 'none' }}>
          <div style={{ background: '#0D0D12', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 44px 110px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.09), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
            {/* Title bar */}
            <div style={{ background: '#13131A', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: 5, marginRight: 8 }}>
                {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.65 }} />)}
              </div>
              <div style={{ width: 27, height: 27, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={11} color="#fff" />
              </div>
              <div>
                <div style={{ color: '#EFEFEF', fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>AdPilot AI</div>
                <div style={{ fontSize: 10, color: '#4ADE80' }}>● online</div>
              </div>
            </div>
            {/* Messages */}
            <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left', minHeight: 200 }}>
              {mounted && (
                <div style={{ alignSelf: 'flex-end', maxWidth: '82%', background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.24)', borderRadius: '13px 13px 4px 13px', padding: '10px 14px' }}>
                  <span style={{ color: '#DDD8F0', fontSize: 13.5, lineHeight: 1.62 }}>
                    {t.heroMsg.slice(0, typedLen)}
                    {typedLen < t.heroMsg.length && <span style={{ display: 'inline-block', width: 2, height: 13, background: '#A78BFA', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 0.9s step-end infinite' }} />}
                  </span>
                </div>
              )}
              {showReply && (
                <div style={{ alignSelf: 'flex-start', maxWidth: '94%', background: '#13131A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px 13px 13px 13px', padding: '15px 17px', animation: 'slideIn 0.38s cubic-bezier(.22,1,.36,1)' }}>
                  <div style={{ color: '#A78BFA', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 13 }}>
                    ✦ {t.heroReplyLabel}
                  </div>
                  {t.heroHooks.map((h, i) => (
                    <div key={i} style={{ display: 'flex', gap: 11, marginBottom: i < t.heroHooks.length - 1 ? 10 : 0, opacity: i < visibleHooks ? 1 : 0, transform: i < visibleHooks ? 'none' : 'translateY(5px)', transition: 'opacity 0.28s ease, transform 0.28s ease' }}>
                      <span style={{ color: 'rgba(167,139,250,0.42)', fontSize: 11, fontWeight: 600, minWidth: 20, paddingTop: 2 }}>{h.n}</span>
                      <span style={{ color: '#C4C4DC', fontSize: 13.5, lineHeight: 1.62 }}>{h.text}</span>
                    </div>
                  ))}
                  {visibleHooks >= t.heroHooks.length && (
                    <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>
                      {t.heroFooter}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
