import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { TgIcon } from '../components/TgIcon'
import type { Translations } from '../types'

const C = { textPrimary: '#EFEFEF', textSecondary: '#70708A' }

interface Props { t: Translations }

export function FAQ({ t }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '80px 0 112px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.9fr', gap: 80, alignItems: 'start' }} className="two-col">
          <Reveal>
            <div style={{ position: 'sticky', top: 80 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>{t.faqEyebrow}</div>
              <h2 className="section-h2" style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 300, lineHeight: 1.12, letterSpacing: '-0.025em', color: C.textPrimary, margin: '0 0 14px' }}>
                {t.faqH2a}<br />{t.faqH2b}
              </h2>
              <p style={{ color: C.textSecondary, fontSize: 15, lineHeight: 1.72, marginBottom: 26 }}>{t.faqSub}</p>
              <a href="https://t.me/adpilot_ai_bot" className="btn btn-primary btn-sm" style={{ display: 'inline-flex' }}>
                <TgIcon /> {t.faqCta}
              </a>
            </div>
          </Reveal>
          <div>
            {t.faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.035}>
                <div className="faq-item">
                  <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                    <span>{faq.q}</span>
                    <div style={{ width: 27, height: 27, borderRadius: '50%', flexShrink: 0, border: `1px solid ${open === i ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.18s' }}>
                      {open === i ? <ChevronUp size={13} color="#A78BFA" /> : <ChevronDown size={13} color={C.textSecondary} />}
                    </div>
                  </button>
                  <div style={{ maxHeight: open === i ? 320 : 0, overflow: 'hidden', transition: 'max-height 0.36s cubic-bezier(.22,1,.36,1)' }}>
                    <p className="faq-a">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
