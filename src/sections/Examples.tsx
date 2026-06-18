import { useState, useEffect, useRef } from 'react'
import { Sparkles, ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { ExampleOutput } from '../components/ExampleOutput'
import { EXAMPLES_EN } from '../data/examples'
import type { Lang, Translations } from '../types'

const C = { textPrimary: '#EFEFEF', textSecondary: '#70708A' }

interface Props { t: Translations; lang: Lang }

export function Examples({ t, lang }: Props) {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [ind, setInd] = useState({ left: 0, width: 80 })

  useEffect(() => {
    const el = btnRefs.current[active]
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth })
  }, [active, lang])

  function goTo(i: number) {
    if (i === active) return
    setFading(true)
    setTimeout(() => { setActive(i); setFading(false) }, 160)
  }

  const examples = EXAMPLES_EN.map((ex, i) => ({
    ...ex,
    userMsg: t.exampleMsgs[i] ?? '',
    output: { ...ex.output, title: [t.exHooksTitle, t.exScriptTitle, t.exCampaignTitle, t.exPromptsTitle, t.exPlanTitle][i] ?? ex.output.title },
  }))

  return (
    <section id="examples" style={{ padding: '96px 0 120px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>{t.exEyebrow}</div>
          <h2 className="section-h2" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.03em', color: C.textPrimary, margin: '0 0 12px' }}>
            {t.exH2a}<br />
            <span style={{ color: C.textSecondary }}>{t.exH2b}</span>
          </h2>
          <p style={{ color: C.textSecondary, fontSize: 17, marginBottom: 48, maxWidth: 430, lineHeight: 1.65 }}>{t.exSub}</p>
        </Reveal>

        {/* Tab bar */}
        <div style={{ position: 'relative', marginBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.07)', overflowX: 'auto', scrollbarWidth: 'none' }}>
          <div style={{ display: 'flex', minWidth: 'max-content' }}>
            {t.tabs.map((label, i) => (
              <button
                key={i}
                ref={el => { btnRefs.current[i] = el }}
                onClick={() => goTo(i)}
                className={`tab-btn${active === i ? ' active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: -1, height: 2, background: 'linear-gradient(90deg,#7C3AED,#3B82F6)', borderRadius: 2, transition: 'left 0.26s cubic-bezier(.22,1,.36,1), width 0.26s cubic-bezier(.22,1,.36,1)', left: ind.left, width: ind.width }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 22, alignItems: 'start' }} className="two-col">
          <Reveal>
            <div style={{ position: 'sticky', top: 80 }}>
              <div className="card" style={{ overflow: 'hidden', marginBottom: 14 }}>
                <div style={{ background: '#13131A', padding: '12px 17px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 23, height: 23, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#5B21B6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={10} color="#fff" />
                  </div>
                  <span style={{ color: '#EFEFEF', fontSize: 13, fontWeight: 600 }}>AdPilot AI</span>
                  <span style={{ marginLeft: 'auto', fontSize: 10, color: '#4ADE80' }}>● online</span>
                </div>
                <div style={{ padding: '16px 17px' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 14 }}>
                    <div style={{ background: 'rgba(124,58,237,0.16)', border: '1px solid rgba(124,58,237,0.22)', borderRadius: '11px 11px 4px 11px', padding: '10px 13px', maxWidth: '92%' }}>
                      <p style={{ color: '#DDD8F0', fontSize: 13.5, lineHeight: 1.62, margin: 0 }}>{examples[active].userMsg}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A78BFA', animation: 'pulse 1.7s ease-in-out infinite', display: 'inline-block' }} />
                    <span style={{ color: C.textSecondary, fontSize: 13 }}>{t.exGen}</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: '13px 16px', background: 'rgba(124,58,237,0.055)', border: '1px solid rgba(124,58,237,0.13)', borderRadius: 11 }}>
                <p style={{ color: '#A78BFA', fontSize: 13, lineHeight: 1.6, margin: 0 }}>↗ {t.exNote}</p>
              </div>
            </div>
          </Reveal>

          <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.16s ease' }}>
            <div className="card" style={{ padding: '22px 24px' }}>
              {examples.map((ex, i) => (
                <div key={ex.id} style={{ display: i === active ? 'block' : 'none' }}>
                  <ExampleOutput ex={ex} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 13, textAlign: 'right' }}>
              <a href="https://t.me/adpilot_ai_bot"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: C.textSecondary, fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={e => (e.currentTarget.style.color = C.textSecondary)}
              >
                {t.exLink} <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
